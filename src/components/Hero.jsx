/* HERO: imagen de fondo inicio.jpg + texto flotante + moneda Ω */

import React from 'react';

const Hero = ({ onOpenMenu, onOrder }) => {
  const [rotation, setRotation] = React.useState(0);

  React.useEffect(() => {
    let raf;
    const tick = () => {
      setRotation(r => (r + 0.1) % 360);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .hero-side { display: none !important; }
          .hero-pill {
            font-size: 8px !important;
            letter-spacing: 0.12em !important;
            padding: 5px 14px !important;
          }
          .hero-btns { flex-direction: column !important; gap: 10px !important; }
          .hero-btns button { width: 100% !important; }
          .hero-coin-wrap {
            width: 140px !important;
            height: 140px !important;
          }
        }
      `}</style>

      {/* ── FOTO DE FONDO ── */}
      <img
        src="/inicio.jpg.png"
        alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      {/* ── OVERLAY suave: imagen mantiene protagonismo ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          linear-gradient(180deg,
            rgba(23,24,27,0.42) 0%,
            rgba(23,24,27,0.10) 40%,
            rgba(23,24,27,0.12) 60%,
            rgba(23,24,27,0.55) 100%
          )`,
        pointerEvents: 'none',
      }}/>

      {/* ── ETIQUETA IZQUIERDA: Uruguay ── */}
      <div className="hero-side" style={{
        position: 'absolute',
        top: '30%', left: '4%',
        zIndex: 2,
        maxWidth: 210,
      }}>
        <div style={{
          fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 9,
          letterSpacing: '0.35em', color: 'var(--gold)', opacity: 0.85,
          textTransform: 'uppercase',
        }}>Uruguay · 34°S</div>
        <div className="script" style={{
          fontSize: 26, color: 'var(--cream)', marginTop: 4,
          lineHeight: 1, opacity: 0.82,
        }}>la receta</div>
        <div style={{
          fontFamily: 'Cinzel, serif', fontWeight: 900,
          fontSize: 'clamp(20px, 2.4vw, 36px)',
          lineHeight: 0.92, color: 'var(--cream)',
          textTransform: 'uppercase',
          textShadow: '0 2px 14px rgba(0,0,0,0.65)',
          marginTop: 6, opacity: 0.88,
        }}>Cuatro<br/>hermanos</div>
        <p className="serif" style={{
          fontSize: 12, fontStyle: 'italic', marginTop: 10,
          color: 'rgba(242,234,218,0.68)', lineHeight: 1.55,
        }}>
          1952 · La receta cruzó<br/>el Atlántico en una maleta.
        </p>
      </div>

      {/* ── ETIQUETA DERECHA: Grecia ── */}
      <div className="hero-side" style={{
        position: 'absolute',
        top: '30%', right: '4%',
        zIndex: 2,
        maxWidth: 210,
        textAlign: 'right',
      }}>
        <div style={{
          fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 9,
          letterSpacing: '0.35em', color: 'var(--gold)', opacity: 0.85,
          textTransform: 'uppercase',
        }}>Ελλάς · 37°N</div>
        <div className="script" style={{
          fontSize: 26, color: 'var(--cream)', marginTop: 4,
          lineHeight: 1, opacity: 0.82,
        }}>el origen</div>
        <div style={{
          fontFamily: 'Cinzel, serif', fontWeight: 900,
          fontSize: 'clamp(20px, 2.4vw, 36px)',
          lineHeight: 0.92, color: 'var(--cream)',
          textTransform: 'uppercase',
          textShadow: '0 2px 14px rgba(0,0,0,0.65)',
          marginTop: 6, opacity: 0.88,
        }}>Plakous<br/>776 a.C.</div>
        <p className="serif" style={{
          fontSize: 12, fontStyle: 'italic', marginTop: 10,
          color: 'rgba(242,234,218,0.68)', lineHeight: 1.55,
          marginLeft: 'auto',
        }}>
          Queso, miel, harina.<br/>El primer cheesecake.
        </p>
      </div>

      {/* ── CENTRO: moneda girando + VELHIO + CTAs ── */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 18,
        width: 'min(520px, 90vw)',
      }}>

        {/* Anillo + Moneda Ω */}
        <div className="hero-coin-wrap" style={{
          position: 'relative',
          width: 'min(200px, 34vw)',
          height: 'min(200px, 34vw)',
        }}>
          {/* Aura */}
          <div style={{
            position: 'absolute', inset: -30,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,168,74,0.30) 0%, transparent 70%)',
            filter: 'blur(16px)',
            pointerEvents: 'none',
          }}/>

          {/* Anillo dorado principal */}
          <div style={{
            position: 'absolute', inset: 0,
            borderRadius: '50%',
            border: '1.5px solid var(--gold)',
            transform: `rotate(${rotation}deg)`,
            opacity: 0.65,
            boxShadow: '0 0 30px rgba(212,168,74,0.35)',
          }}>
            {[...Array(12)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                top: '-5px', left: '50%',
                width: 1.5, height: 10,
                background: 'var(--gold)',
                transform: `rotate(${i * 30}deg) translateX(-50%)`,
                transformOrigin: '50% calc(50% + 5px)',
              }}/>
            ))}
          </div>

          {/* Anillo dashed exterior */}
          <div style={{
            position: 'absolute', inset: -18,
            borderRadius: '50%',
            border: '1px dashed rgba(242,234,218,0.28)',
            transform: `rotate(${-rotation * 0.5}deg)`,
          }}/>

          {/* Moneda Ω orbitando */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ overflow: 'visible' }}>
              <g transform={`rotate(${rotation * 2} 200 200)`}>
                <g transform="translate(200 8)">
                  <circle r="20" fill="var(--gold)" stroke="var(--cream)" strokeWidth="2"/>
                  <text y="6" textAnchor="middle"
                    fontFamily="Cinzel, serif" fontWeight="700" fontSize="14" fill="#17181B">Ω</text>
                </g>
              </g>
            </svg>
          </div>

          {/* VELHIO centrado */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none',
          }}>
            <span style={{
              fontFamily: 'Cinzel, serif', fontWeight: 900,
              fontSize: 'clamp(11px, 1.8vw, 17px)',
              letterSpacing: '0.32em',
              color: 'var(--cream)',
              textShadow: '0 2px 10px rgba(0,0,0,0.7)',
            }}>VELHIO</span>
          </div>
        </div>

        {/* Texto puente sutil */}
        <div className="script" style={{
          fontSize: 'clamp(15px, 2vw, 20px)',
          color: 'var(--gold)',
          opacity: 0.85,
          textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          letterSpacing: '0.02em',
        }}>se encuentran en Madrid</div>

        {/* Tagline pill */}
        <div className="hero-pill" style={{
          fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 10,
          letterSpacing: '0.32em', color: 'var(--cream)',
          padding: '7px 22px',
          background: 'rgba(23,24,27,0.52)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: 999,
          border: '1px solid rgba(212,168,74,0.42)',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}>DESDE URUGUAY · HORNEADAS EN MADRID · CON ALMA GRIEGA</div>

        {/* Botones */}
        <div className="hero-btns" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <button onClick={onOrder}    className="btn btn--gold"  style={{ flex: '1 1 180px', maxWidth: 240 }}>Pedir por WhatsApp</button>
          <button onClick={onOpenMenu} className="btn btn--ghost" style={{ flex: '1 1 140px', maxWidth: 200, borderColor: 'var(--cream)', color: 'var(--cream)' }}>Ver la carta</button>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute',
        bottom: 22, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        opacity: 0.48, color: 'var(--cream)', zIndex: 2, pointerEvents: 'none',
      }}>
        <svg width="12" height="18" viewBox="0 0 14 22" fill="none">
          <rect x="1" y="1" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="7" cy="7" r="1.5" fill="currentColor">
            <animate attributeName="cy" values="7;14;7" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { TartVessel } from './TartIllustrations';

/* Favoritas, Carta, Pack, Tarta del mes, Especiales, Contacto */

// ============================================================
// Helper: datos de tartas
// ============================================================
const TARTS = [
  { id: 'clasica',    variant: 'classic',   name: 'Clásica',           price: { g: '30€', m: '25€', s: '10€' }, tag: 'signature', desc: 'La receta original. Queso, huevo, nata. Nada más.' },
  { id: 'nutella',    variant: 'nutella',   name: 'Nutella',           price: { g: '35€', m: '28€', s: '10€' }, tag: 'favorita', desc: 'Corazón de Nutella fundida. Un clásico moderno.' },
  { id: 'lotus',      variant: 'lotus',     name: 'Lotus',             price: { g: '35€', m: '28€', s: '10€' }, tag: 'favorita', desc: 'Galleta caramelizada en trozos grandes.' },
  { id: 'oreo',       variant: 'oreo',      name: 'Oreo',              price: { g: '35€', m: '28€', s: '10€' }, tag: null, desc: 'Galleta Oreo triturada en cuerpo y encima.' },
  { id: 'dulce',      variant: 'dulce',     name: 'Dulce de Leche',    price: { g: '35€', m: '28€', s: '10€' }, tag: 'uruguaya', desc: 'Dulce de leche uruguayo de verdad. Sin atajos.' },
  { id: 'cafe',       variant: 'cafe',      name: 'Café',              price: { g: '35€', m: '28€', s: '10€' }, tag: null, desc: 'Café de especialidad infusionado en la base.' },
  { id: 'pantera',    variant: 'pantera',   name: 'Pantera Rosa',      price: { g: '37€', m: '30€', s: '10€' }, tag: null, desc: 'Fresa + bizcocho rosa. Nostalgia pura.' },
  { id: 'pistacho',   variant: 'pistacho',  name: 'Pistacho',          price: { g: '40€', m: '30€', s: '10€' }, tag: 'favorita', desc: 'Pistacho de Bronte. Premium.' },
  { id: 'chocolate',  variant: 'chocolate', name: 'Chocolate Belga',   price: { g: '40€', m: '30€', s: '10€' }, tag: null, desc: 'Chocolate belga 70% cacao.' },
  { id: 'mango',      variant: 'mango',     name: 'Mango & Choco Blanco', price: { g: '35€', m: '28€', s: '10€' }, tag: null, desc: 'Mango maduro con chocolate blanco.' },
  { id: 'hippo',      variant: 'hippo',     name: 'Happy Hippo',       price: { g: '35€', m: '28€', s: '10€' }, tag: null, desc: 'Avellana + leche. Cremosidad infantil.' },
  { id: 'donut',      variant: 'donut',     name: 'Donut (mes de octubre)', price: { g: '40€', m: '33€', s: '11€' }, tag: 'especial', desc: 'La especial de octubre. Glaseado rosa, sprinkles.' },
];

// ============================================================
// Marquee reusable
// ============================================================
const Marquee = ({ text = "TE ESPERAMOS PRONTO" }) => {
  const items = Array(4).fill(text);
  return (
    <div className="marquee">
      <div className="marquee__track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="marquee__item">
            {t}<span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

// ============================================================
// Favorites
// ============================================================
const Favorites = ({ onOrder }) => {
  const favs = TARTS.filter(t => t.tag === 'favorita' || t.id === 'clasica').slice(0, 4);
  return (
    <section id="favoritas" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>CAPÍTULO II · ΑΓΑΠΗΜΕΝΑ</div>
            <h2 className="display" style={{ fontSize: 'var(--t-4xl)', lineHeight: 0.95 }}>Las más<br/>pedidas</h2>
          </div>
          <p className="serif" style={{ fontSize: 20, fontStyle: 'italic', maxWidth: 360, color: 'var(--ink-dim)' }}>
            Lo que la gente pide un sábado a las 12:30 cuando el obrador está lleno y el horno a tope.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 24,
        }}>
          {favs.map((t, i) => (
            <div key={t.id} style={{
              position: 'relative',
              background: 'var(--bg-elev)',
              borderRadius: 'var(--r-lg)',
              padding: 28,
              border: '1px solid var(--rule)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'all 320ms var(--ease-out)',
              cursor: 'pointer',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--rule)'; }}
              onClick={() => onOrder(t)}
            >
              <div style={{
                position: 'absolute', top: 16, right: 16,
                fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 14,
                color: 'var(--gold)', letterSpacing: '0.1em',
              }}>№{String(i+1).padStart(2, '0')}</div>
              <TartVessel variant={t.variant} size={180}/>
              <h3 className="display" style={{ fontSize: 22, marginTop: 20 }}>{t.name}</h3>
              <p className="serif" style={{ fontSize: 15, fontStyle: 'italic', color: 'var(--ink-dim)', marginTop: 8, minHeight: 44 }}>{t.desc}</p>
              <div style={{
                marginTop: 16, display: 'flex', gap: 10, alignItems: 'center',
                fontFamily: 'Cinzel, serif', fontSize: 14, color: 'var(--gold)',
              }}>
                <span>{t.price.s}</span><span style={{ opacity: 0.4 }}>·</span>
                <span>{t.price.m}</span><span style={{ opacity: 0.4 }}>·</span>
                <span>{t.price.g}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// Rolling Cheesecake Coins (scroll animation)
// ============================================================
const RollingCoins = () => {
  const ref = React.useRef(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress 0 when section bottom enters viewport, 1 when top exits
      const total = rect.height + vh;
      const scrolled = vh - rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const coins = [
    { variant: 'clasica', delay: 0,    size: 130, y: 20 },
    { variant: 'nutella', delay: 0.12, size: 100, y: 80 },
    { variant: 'pistacho', delay: 0.24, size: 140, y: 30 },
    { variant: 'oreo',    delay: 0.38, size: 90,  y: 100 },
    { variant: 'dulce',   delay: 0.50, size: 120, y: 60 },
    { variant: 'pantera', delay: 0.64, size: 105, y: 110 },
    { variant: 'mango',   delay: 0.78, size: 135, y: 20 },
  ];

  return (
    <section id="rolling" ref={ref} style={{
      position: 'relative',
      padding: '180px 0',
      background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-elev) 50%, var(--bg) 100%)',
      overflow: 'hidden',
    }}>
      {/* Suelo con línea griega */}
      <div style={{
        position: 'absolute',
        bottom: '38%',
        left: 0, right: 0,
        height: 2,
        background: 'linear-gradient(90deg, transparent, var(--gold) 20%, var(--gold) 80%, transparent)',
        opacity: 0.4,
      }}/>

      {/* Texto central */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>ΝΟΜΙΣΜΑΤΑ · MONEDAS DE QUESO</div>
        <h2 className="display" style={{
          fontSize: 'clamp(48px, 8vw, 120px)',
          lineHeight: 0.9,
          letterSpacing: '0.03em',
        }}>Doce tartas<br/><span style={{ color: 'var(--gold)' }}>ruedan</span> por aquí</h2>
        <p className="serif" style={{ fontSize: 22, fontStyle: 'italic', marginTop: 20, color: 'var(--ink-dim)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
          Cada tarta es una moneda griega recién acuñada. Desplázate para verlas pasar.
        </p>
      </div>

      {/* Monedas rodando */}
      <div style={{ position: 'relative', marginTop: 80, height: 200 }}>
        {coins.map((c, i) => {
          const localProgress = Math.max(0, Math.min(1, (progress - c.delay) * 1.6));
          const x = -200 + localProgress * (window.innerWidth + 400);
          const rot = localProgress * 720;
          return (
            <div key={i} style={{
              position: 'absolute',
              left: 0,
              top: c.y,
              transform: `translateX(${x}px) rotate(${rot}deg)`,
              transition: 'transform 60ms linear',
              willChange: 'transform',
            }}>
              <TartVessel variant={c.variant === 'clasica' ? 'classic' : c.variant} size={c.size}/>
            </div>
          );
        })}

        {/* Migas dejadas detrás */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {coins.map((c, i) => {
            const localProgress = Math.max(0, Math.min(1, (progress - c.delay) * 1.6));
            const crumbs = [];
            for (let k = 0; k < 15; k++) {
              const kp = localProgress * (window.innerWidth + 400) * (k / 15);
              if (kp > 0 && kp < localProgress * (window.innerWidth + 400)) {
                crumbs.push(
                  <circle key={`${i}-${k}`}
                    cx={-200 + kp + c.size/2}
                    cy={c.y + c.size - 10 + Math.sin(k * 1.3) * 4}
                    r={1.5 + (k % 3) * 0.5}
                    fill="var(--gold)"
                    opacity={0.35 * (1 - k / 15)}
                  />
                );
              }
            }
            return crumbs;
          })}
        </svg>
      </div>
    </section>
  );
};

// ============================================================
// Carta completa
// ============================================================
const Menu = ({ onOrder }) => {
  return (
    <section id="carta" className="section section--paper">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>CAPÍTULO III · Η ΚΑΡΤΑ</div>
          <h2 className="display" style={{ fontSize: 'var(--t-4xl)' }}>La carta completa</h2>
          <div className="serif" style={{ fontSize: 20, fontStyle: 'italic', marginTop: 12, opacity: 0.75 }}>
            Doce tartas · tres tamaños · precios en euros
          </div>
        </div>

        {/* Encabezado tipo pergamino */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 100px 100px 100px',
          gap: 16,
          padding: '12px 28px',
          borderBottom: '2px solid currentColor',
          marginBottom: 8,
          fontFamily: 'Cinzel, serif',
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }} className="menu-header">
          <div>Tarta</div>
          <div style={{ textAlign: 'center' }}>Pequeña</div>
          <div style={{ textAlign: 'center' }}>Mediana</div>
          <div style={{ textAlign: 'center' }}>Grande</div>
        </div>

        {TARTS.map((t, i) => (
          <div key={t.id} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 100px 100px 100px',
            gap: 16,
            padding: '20px 28px',
            alignItems: 'center',
            borderBottom: '1px dashed var(--rule-on-paper)',
            transition: 'background 220ms var(--ease-out)',
            cursor: 'pointer',
          }}
            className="menu-row"
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212,168,74,0.15)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            onClick={() => onOrder(t)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ flexShrink: 0 }}>
                <TartVessel variant={t.variant} size={72}/>
              </div>
              <div>
                <div className="display" style={{ fontSize: 22, letterSpacing: '0.04em' }}>{t.name}</div>
                <div className="serif" style={{ fontSize: 15, fontStyle: 'italic', opacity: 0.65, marginTop: 2 }}>{t.desc}</div>
              </div>
              {t.tag === 'favorita' && (
                <span style={{
                  background: 'var(--gold)', color: 'var(--carbon)',
                  padding: '3px 10px', borderRadius: 999,
                  fontFamily: 'Manrope', fontWeight: 700, fontSize: 10,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                }}>★ Favorita</span>
              )}
              {t.tag === 'uruguaya' && (
                <span style={{
                  background: '#3B7CB8', color: 'var(--cream)',
                  padding: '3px 10px', borderRadius: 999,
                  fontFamily: 'Manrope', fontWeight: 700, fontSize: 10,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                }}>🇺🇾 Uruguaya</span>
              )}
              {t.tag === 'especial' && (
                <span style={{
                  background: 'var(--terracotta, #B84C38)', color: 'var(--cream)',
                  padding: '3px 10px', borderRadius: 999,
                  fontFamily: 'Manrope', fontWeight: 700, fontSize: 10,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                }}>Del mes</span>
              )}
            </div>
            <div style={{ textAlign: 'center', fontFamily: 'Cinzel, serif', fontWeight: 600, fontSize: 18 }}>{t.price.s}</div>
            <div style={{ textAlign: 'center', fontFamily: 'Cinzel, serif', fontWeight: 600, fontSize: 18 }}>{t.price.m}</div>
            <div style={{ textAlign: 'center', fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 20, color: 'var(--gold-deep, #A37F2F)' }}>{t.price.g}</div>
          </div>
        ))}

        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <div className="script" style={{ fontSize: 22, opacity: 0.7 }}>
            *Porciones individuales: 5€ — 6€. Encarga 48h antes las especiales y adaptadas.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .menu-header { display: none !important; }
          .menu-row { grid-template-columns: 1fr !important; gap: 8px !important; }
          .menu-row > div:not(:first-child)::before {
            content: attr(data-label); font-size: 11px; opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

// ============================================================
// Pack Degustación
// ============================================================
const Pack = ({ onOrder }) => {
  const picks = ['classic', 'pistacho', 'dulce'];
  return (
    <section id="pack" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 64,
          alignItems: 'center',
        }} className="pack-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>CAPÍTULO IV · ΔΟΚΙΜΑΣΙΑ</div>
            <h2 className="display" style={{ fontSize: 'var(--t-4xl)', lineHeight: 0.95 }}>Pack<br/>Degustación</h2>
            <div className="serif" style={{ fontSize: 24, fontStyle: 'italic', color: 'var(--gold)', marginTop: 20 }}>
              Tres tartas pequeñas a elegir.<br/>Como en un symposium griego — pero sin vino tinto.
            </div>
            <p className="serif" style={{ fontSize: 18, marginTop: 24, maxWidth: 460 }}>
              Ideal para indecisos, para compartir, para probar antes de comprar la grande. Tú eliges los tres sabores. Nosotros los ponemos bonitos en una caja.
            </p>
            <div style={{
              marginTop: 32,
              display: 'flex', alignItems: 'baseline', gap: 16,
            }}>
              <div style={{
                fontFamily: 'Cinzel, serif', fontWeight: 900,
                fontSize: 72, lineHeight: 1, color: 'var(--gold)',
              }}>28€</div>
              <div className="serif" style={{ fontSize: 16, fontStyle: 'italic', color: 'var(--ink-dim)' }}>
                +1€ si incluye<br/>la especial del mes
              </div>
            </div>
            <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
              <button className="btn btn--gold" onClick={() => onOrder({ name: 'Pack Degustación' })}>Pedir el pack</button>
            </div>
          </div>

          {/* Caja del pack con 3 tartas */}
          <div style={{ position: 'relative', aspectRatio: '1/1', minHeight: 380 }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'var(--bg-elev)',
              border: '2px solid var(--gold)',
              borderRadius: 'var(--r-lg)',
              padding: 24,
              boxShadow: 'var(--shadow-gold)',
            }}>
              {/* Meander top */}
              <div style={{
                height: 24,
                backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 20'><path d='M0 16 L0 4 L16 4 L16 12 L8 12 L8 8 L12 8 L12 16 L20 16 L20 4 L36 4 L36 12 L28 12 L28 8 L32 8 L32 16 L40 16 L40 4 L56 4 L56 12 L48 12 L48 8 L52 8 L52 16 L60 16' stroke='%23D4A84A' stroke-width='1.5' fill='none'/></svg>\")",
                backgroundRepeat: 'repeat-x',
                backgroundSize: 'auto 18px',
                marginBottom: 12,
              }}/>
              <div style={{
                textAlign: 'center',
                fontFamily: 'Cinzel, serif',
                fontWeight: 700, fontSize: 14,
                letterSpacing: '0.2em',
                color: 'var(--gold)',
              }}>PACK · ΔΟΚΙΜΑΣΙΑ · DEGUSTACIÓN</div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 8,
                marginTop: 20,
                alignItems: 'center',
              }}>
                {picks.map((p, i) => (
                  <div key={i} style={{
                    aspectRatio: '1/1',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--bg)',
                    borderRadius: 'var(--r-md)',
                    animation: `bob ${3 + i * 0.3}s ease-in-out ${i * 0.2}s infinite`,
                  }}>
                    <TartVessel variant={p} size={110}/>
                  </div>
                ))}
              </div>

              <div className="script" style={{
                textAlign: 'center', marginTop: 24,
                fontSize: 28, color: 'var(--gold)',
              }}>
                elige tú · elige bien
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @media (max-width: 900px) {
          .pack-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================
// Tarta del mes
// ============================================================
const TartOfMonth = ({ onOrder }) => {
  const special = TARTS.find(t => t.id === 'donut');
  return (
    <section id="mes" className="section section--paper" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: 64,
          alignItems: 'center',
        }} className="month-grid">

          {/* Ilustración con sellos */}
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <div style={{
              position: 'absolute', top: -20, right: 0,
              width: 120, height: 120,
              border: '2px solid var(--terracotta)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: 'rotate(-14deg)',
              color: 'var(--terracotta)',
              fontFamily: 'Cinzel, serif',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.15em',
              textAlign: 'center',
              lineHeight: 1.1,
              background: 'rgba(184, 76, 56, 0.05)',
            }}>OCTUBRE<br/>MMXXVI<br/><span style={{ fontSize: 20, color: 'var(--gold-deep)' }}>✦</span></div>
            <div style={{ display: 'inline-block', position: 'relative' }}>
              <TartVessel variant="donut" size={340}/>
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>CAPÍTULO V · Η ΤΟΥ ΜΗΝΟΣ</div>
            <div className="script" style={{ fontSize: 38, color: 'var(--gold-deep)', lineHeight: 1 }}>la tarta del mes:</div>
            <h2 className="display" style={{ fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 0.9, marginTop: 4 }}>Queso<br/>&amp; Donut</h2>
            <p className="serif" style={{ fontSize: 20, marginTop: 24, maxWidth: 480 }}>
              Cada mes una nueva. Esta vez: base de donut glaseado, cuerpo cremoso y sprinkles encima. Una infancia entera en una cucharada.
            </p>
            <div style={{ display: 'flex', gap: 24, marginTop: 28, alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <div className="eyebrow" style={{ fontSize: 10, marginBottom: 4 }}>Precios</div>
                <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 600, fontSize: 20 }}>
                  11€ <span style={{ opacity: 0.4 }}>·</span> 33€ <span style={{ opacity: 0.4 }}>·</span> 40€
                </div>
              </div>
              <button className="btn btn--ink-on-paper" onClick={() => onOrder(special)}>Pedir esta tarta</button>
            </div>
            <div style={{
              marginTop: 28,
              padding: '14px 20px',
              background: 'rgba(23,24,27,0.08)',
              borderLeft: '3px solid var(--terracotta)',
              borderRadius: 4,
              display: 'inline-block',
            }}>
              <div className="serif" style={{ fontSize: 15, fontStyle: 'italic' }}>
                El mes que viene: Tarta de Queso &amp; Tiramisú. Te avisamos por Instagram.
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .month-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================
// Especiales (diabéticos / sin lactosa)
// ============================================================
const Special = ({ onOrder }) => {
  const cards = [
    {
      id: 'diabeticos',
      glyph: 'Δ',
      title: 'Para diabéticos',
      subtitle: 'Con eritritol',
      desc: 'La clásica, endulzada con eritritol en lugar de azúcar. Sin picos. Igual de cremosa.',
      prices: '11€ · 28€ · 35€',
      advance: '48h de antelación',
    },
    {
      id: 'lactosa',
      glyph: 'Λ',
      title: 'Sin lactosa',
      subtitle: 'Apta lactosa-intolerantes',
      desc: 'Receta adaptada con queso y nata sin lactosa. Sabor intacto, digestión tranquila.',
      prices: '11€ · 28€ · 35€',
      advance: '48h de antelación',
    },
  ];
  return (
    <section id="especiales" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>CAPÍTULO VI · ΕΙΔΙΚΑ</div>
          <h2 className="display" style={{ fontSize: 'var(--t-4xl)' }}>Tartas especiales</h2>
          <div className="serif" style={{ fontSize: 20, fontStyle: 'italic', color: 'var(--ink-dim)', marginTop: 12 }}>
            Porque nadie debería quedarse sin tarta. Ni por azúcar, ni por lactosa.
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32,
        }}>
          {cards.map(c => (
            <div key={c.id} style={{
              position: 'relative',
              padding: 40,
              background: 'var(--bg-elev)',
              border: '1px solid var(--rule)',
              borderRadius: 'var(--r-lg)',
              overflow: 'hidden',
            }}>
              {/* Glifo enorme de fondo */}
              <div style={{
                position: 'absolute',
                top: -40, right: -20,
                fontFamily: 'Cinzel, serif',
                fontWeight: 900,
                fontSize: 280,
                lineHeight: 1,
                color: 'var(--gold)',
                opacity: 0.08,
                pointerEvents: 'none',
              }}>{c.glyph}</div>

              <div style={{
                fontFamily: 'Cinzel, serif',
                fontWeight: 700,
                fontSize: 48,
                color: 'var(--gold)',
                lineHeight: 1,
              }}>{c.glyph}</div>
              <div className="eyebrow" style={{ marginTop: 16 }}>{c.subtitle}</div>
              <h3 className="display" style={{ fontSize: 32, marginTop: 8 }}>{c.title}</h3>
              <p className="serif" style={{ fontSize: 17, marginTop: 16, position: 'relative', zIndex: 1 }}>{c.desc}</p>
              <div style={{
                marginTop: 24,
                display: 'flex', flexDirection: 'column', gap: 4,
                fontFamily: 'Cinzel, serif', fontSize: 16,
                letterSpacing: '0.05em',
              }}>
                <div><span style={{ opacity: 0.6, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Manrope' }}>Precios · </span>{c.prices}</div>
                <div><span style={{ opacity: 0.6, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Manrope' }}>Pedido · </span>{c.advance}</div>
              </div>
              <button
                className="btn btn--ghost"
                style={{ marginTop: 24 }}
                onClick={() => onOrder({ name: c.title })}
              >Pedir por WhatsApp</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// Contacto
// ============================================================
const Contact = ({ onOrder }) => {
  return (
    <section id="contacto" className="section section--paper" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>CAPÍTULO VII · ΕΠΙΚΟΙΝΩΝΙΑ</div>
          <h2 className="display" style={{ fontSize: 'var(--t-4xl)' }}>Contáctanos · Pedidos</h2>
          <div className="serif" style={{ fontSize: 20, fontStyle: 'italic', marginTop: 12, opacity: 0.75 }}>
            Respondemos rápido y con todo el cariño que el estrés del horno nos permita : )
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
          marginBottom: 48,
        }}>
          {/* WhatsApp */}
          <a href="https://api.whatsapp.com/send?phone=+34661764709&text=Hola%2C%20quiero%20una%20tarta" target="_blank" rel="noreferrer" style={{
            padding: 32,
            background: 'rgba(23,24,27,0.07)',
            border: '1px solid var(--rule-on-paper)',
            borderRadius: 'var(--r-lg)',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'all 220ms var(--ease-out)',
            display: 'block',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(212,168,74,0.18)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(23,24,27,0.07)'; }}
          >
            <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 36, color: 'var(--gold-deep)' }}>☎</div>
            <div className="eyebrow" style={{ marginTop: 12 }}>WhatsApp / Teléfono</div>
            <div className="display" style={{ fontSize: 26, marginTop: 6 }}>661 764 709</div>
            <div className="serif" style={{ fontSize: 15, fontStyle: 'italic', marginTop: 8, opacity: 0.7 }}>La forma más rápida. Respondemos entre horneadas.</div>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/velhio.r/" target="_blank" rel="noreferrer" style={{
            padding: 32,
            background: 'rgba(23,24,27,0.07)',
            border: '1px solid var(--rule-on-paper)',
            borderRadius: 'var(--r-lg)',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'all 220ms var(--ease-out)',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(212,168,74,0.18)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(23,24,27,0.07)'; }}
          >
            <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 36, color: 'var(--gold-deep)' }}>@</div>
            <div className="eyebrow" style={{ marginTop: 12 }}>Instagram</div>
            <div className="display" style={{ fontSize: 26, marginTop: 6 }}>@velhio.r</div>
            <div className="serif" style={{ fontSize: 15, fontStyle: 'italic', marginTop: 8, opacity: 0.7 }}>Fotos diarias, tartas del mes, vídeos del horno.</div>
          </a>

          {/* Dirección */}
          <div style={{
            padding: 32,
            background: 'rgba(23,24,27,0.07)',
            border: '1px solid var(--rule-on-paper)',
            borderRadius: 'var(--r-lg)',
          }}>
            <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 36, color: 'var(--gold-deep)' }}>⚯</div>
            <div className="eyebrow" style={{ marginTop: 12 }}>El obrador</div>
            <div className="display" style={{ fontSize: 22, marginTop: 6, letterSpacing: '0.04em' }}>Ciempozuelos</div>
            <div className="serif" style={{ fontSize: 15, fontStyle: 'italic', marginTop: 8, opacity: 0.7, lineHeight: 1.4 }}>
              Av. Reverenda Madre<br/>María Antonia, 5,<br/>bloque 1, local 3 · 28350
            </div>
          </div>
        </div>

        {/* Horario */}
        <div style={{
          padding: '32px 48px',
          background: 'var(--carbon)',
          color: 'var(--cream)',
          borderRadius: 'var(--r-lg)',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: 40,
          alignItems: 'center',
        }} className="hours-grid">
          <div>
            <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: 8 }}>ΩΡΑΡΙΟ · HORARIO</div>
            <div className="display" style={{ fontSize: 28, color: 'var(--cream)' }}>Cuándo venir</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div>
              <div className="eyebrow" style={{ fontSize: 10, color: 'rgba(242,234,218,0.6)' }}>Martes a Sábado</div>
              <div className="serif" style={{ fontSize: 18, marginTop: 4, color: 'var(--cream)' }}>10:00 – 14:00<br/>17:00 – 20:00</div>
            </div>
            <div>
              <div className="eyebrow" style={{ fontSize: 10, color: 'rgba(242,234,218,0.6)' }}>Domingos</div>
              <div className="serif" style={{ fontSize: 18, marginTop: 4, color: 'var(--cream)' }}>11:00 – 14:00</div>
            </div>
            <div>
              <div className="eyebrow" style={{ fontSize: 10, color: 'rgba(242,234,218,0.6)' }}>Lunes</div>
              <div className="serif" style={{ fontSize: 18, marginTop: 4, color: 'rgba(242,234,218,0.5)' }}>Cerrado</div>
            </div>
          </div>
          <button className="btn btn--gold" onClick={() => onOrder()}>Escribir ahora</button>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hours-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hours-grid > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ============================================================
// Footer
// ============================================================
const Footer = () => {
  return (
    <footer style={{
      padding: '48px 32px 24px',
      borderTop: '1px solid var(--rule)',
      textAlign: 'center',
    }}>
      <div className="display" style={{ fontSize: 42, letterSpacing: '0.15em' }}>VELHIO</div>
      <div className="script" style={{ fontSize: 22, color: 'var(--gold)', marginTop: 4 }}>desde Uruguay · horneadas en Madrid</div>
      <div style={{ marginTop: 24, fontSize: 13, opacity: 0.5, fontFamily: 'Manrope' }}>
        © 2026 Velhio · Cuatro uruguayos, un horno, una obsesión.
      </div>
    </footer>
  );
};

export { Favorites, RollingCoins, Menu, Pack, TartOfMonth, Special, Contact, Footer };

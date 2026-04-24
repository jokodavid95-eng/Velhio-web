import React from 'react';
import { TartVessel } from './TartIllustrations';

/* Favoritas, Carta, Pack, Tarta del mes, Especiales, Contacto */

// ============================================================
// Helper: datos de tartas
// ============================================================
const TARTS = [
  { id: 'clasica',    variant: 'classic',   name: 'Tarta de Queso Clásica',                  price: { g: '30€', m: '25€', s: '10€' }, tag: 'signature', desc: 'La receta original. Queso, huevo, nata. Nada más.' },
  { id: 'nutella',    variant: 'nutella',   name: 'Tarta de Queso y Nutella',                price: { g: '35€', m: '28€', s: '10€' }, tag: 'favorita',  desc: 'Corazón de Nutella fundida. Un clásico moderno.' },
  { id: 'lotus',      variant: 'lotus',     name: 'Tarta de Queso y Lotus',                  price: { g: '35€', m: '28€', s: '10€' }, tag: 'favorita',  desc: 'Galleta caramelizada en trozos grandes.' },
  { id: 'oreo',       variant: 'oreo',      name: 'Tarta de Queso y Oreo',                   price: { g: '35€', m: '28€', s: '10€' }, tag: null,        desc: 'Galleta Oreo triturada en cuerpo y encima.' },
  { id: 'dulce',      variant: 'dulce',     name: 'Tarta de Queso y Dulce de Leche',         price: { g: '35€', m: '28€', s: '10€' }, tag: 'uruguaya',  desc: 'Dulce de leche uruguayo de verdad. Sin atajos.' },
  { id: 'cafe',       variant: 'cafe',      name: 'Tarta de Queso y Café',                   price: { g: '35€', m: '28€', s: '10€' }, tag: null,        desc: 'Café de especialidad infusionado en la base.' },
  { id: 'pantera',    variant: 'pantera',   name: 'Tarta de Queso y Pantera Rosa',           price: { g: '37€', m: '30€', s: '10€' }, tag: null,        desc: 'Fresa + bizcocho rosa. Nostalgia pura.' },
  { id: 'pistacho',   variant: 'pistacho',  name: 'Tarta de Queso y Pistacho',               price: { g: '40€', m: '30€', s: '10€' }, tag: 'favorita',  desc: 'Pistacho de Bronte. Premium.' },
  { id: 'chocolate',  variant: 'chocolate', name: 'Tarta de Queso y Choc. Belga',            price: { g: '40€', m: '30€', s: '10€' }, tag: null,        desc: 'Chocolate belga 70% cacao.' },
  { id: 'mango',      variant: 'mango',     name: 'Tarta de Queso de Mango y Choc. Blanco',  price: { g: '35€', m: '28€', s: '10€' }, tag: null,        desc: 'Mango maduro con chocolate blanco.' },
  { id: 'hippo',      variant: 'hippo',     name: 'Tarta de Queso y Happy Hippo',            price: { g: '35€', m: '28€', s: '10€' }, tag: null,        desc: 'Avellana + leche. Cremosidad infantil.' },
  { id: 'donut',      variant: 'donut',     name: 'Especial del Mes · Donut',                price: { g: '40€', m: '33€', s: '11€' }, tag: 'especial',  desc: 'La especial de octubre. Glaseado rosa, sprinkles.' },
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
const FAVE_IMAGES = {
  clasica:  '/clasica.jpg',
  lotus:    '/lotus.jpg',
  pistacho: '/pistacho.jpg',
};

const Favorites = ({ onOrder }) => {
  const favs = ['clasica', 'lotus', 'pistacho'].map(id => TARTS.find(t => t.id === id));
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {favs.map((t, i) => (
            <div key={t.id} style={{
              position: 'relative',
              background: 'var(--bg-elev)',
              borderRadius: 'var(--r-lg)',
              padding: 0,
              border: '1px solid var(--rule)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              transition: 'all 320ms var(--ease-out)',
              cursor: 'pointer',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--rule)';
                e.currentTarget.style.boxShadow = 'none';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}
              onClick={() => onOrder(t)}
            >
              {/* Número */}
              <div style={{
                position: 'absolute', top: 14, right: 14, zIndex: 2,
                fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 13,
                color: 'var(--cream)', letterSpacing: '0.1em',
                background: 'rgba(23,24,27,0.55)',
                backdropFilter: 'blur(6px)',
                padding: '3px 10px', borderRadius: 999,
              }}>№{String(i+1).padStart(2, '0')}</div>

              {/* Foto real */}
              <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={FAVE_IMAGES[t.id]}
                  alt={t.name}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 420ms var(--ease-out)',
                  }}
                />
              </div>

              {/* Contenido */}
              <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 className="display" style={{ fontSize: 24 }}>{t.name}</h3>
                <p className="serif" style={{ fontSize: 15, fontStyle: 'italic', color: 'var(--ink-dim)', marginTop: 8, flexGrow: 1 }}>{t.desc}</p>
                <div style={{
                  marginTop: 18, display: 'flex', gap: 10, alignItems: 'center',
                  fontFamily: 'Cinzel, serif', fontSize: 14, color: 'var(--gold)',
                }}>
                  <span>{t.price.s}</span><span style={{ opacity: 0.4 }}>·</span>
                  <span>{t.price.m}</span><span style={{ opacity: 0.4 }}>·</span>
                  <span>{t.price.g}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// Atletas Griegos (reemplaza Rolling Coins)
// ============================================================

const GreekAthletes = () => (
  <section id="rolling" style={{
    position: 'relative',
    minHeight: 480,
    padding: '90px 0',
    background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-elev) 50%, var(--bg) 100%)',
    overflow: 'hidden',
  }}>
    {/* ── Imagen docetartas difuminándose desde la derecha ── */}
    <div style={{
      position: 'absolute',
      right: 0, top: 0, bottom: 0,
      width: '62%',
      WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.72) 45%, black 100%)',
      maskImage:        'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.35) 18%, rgba(0,0,0,0.72) 45%, black 100%)',
      pointerEvents: 'none',
    }}>
      <img
        src="/docetartas.jpg.png"
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.52 }}
      />
    </div>

    {/* Línea de suelo dorada */}
    <div style={{
      position: 'absolute', bottom: '18%', left: 0, right: 0,
      height: 1,
      background: 'linear-gradient(90deg, transparent, var(--gold) 20%, var(--gold) 80%, transparent)',
      opacity: 0.22,
    }}/>

    {/* ── Texto central ── */}
    <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
      <div className="eyebrow" style={{ marginBottom: 14 }}>ΕΛΛΑΣ · TARTAS DE QUESO</div>
      <h2 className="display" style={{
        fontSize: 'clamp(44px, 7vw, 110px)',
        lineHeight: 0.9, letterSpacing: '0.03em',
      }}>
        Doce tartas<br/>
        <span style={{ color: 'var(--gold)' }}>para llevarte</span>
      </h2>
      <p className="serif" style={{
        fontSize: 20, fontStyle: 'italic', marginTop: 20,
        color: 'var(--ink-dim)', maxWidth: 500,
        marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6,
      }}>
        En la Antigüedad los atletas de Olimpia recibían una tarta de queso tras la victoria.
        Doce sabores. Todos merecen un podio.
      </p>
    </div>
  </section>
);

// ============================================================
// Carta completa — pergamino se despliega al entrar en pantalla
// ============================================================
const Menu = ({ onOrder }) => {
  const scrollRef   = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  /* IntersectionObserver: dispara UNA sola vez cuando el pergamino es visible */
  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setOpen(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="carta" style={{ background: 'var(--bg)', padding: '80px 0 100px' }}>
      <div className="container">

        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 10 }}>CAPÍTULO III · Η ΚΑΡΤΑ</div>
          <h2 className="display" style={{ fontSize: 'var(--t-4xl)' }}>La carta completa</h2>
        </div>

        {/* ── Pergamino ── */}
        <div ref={scrollRef} style={{
          maxWidth: 860, margin: '0 auto',
          position: 'relative',
          filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.55))',
        }}>

          {/* ── VARILLA DE MADERA SUPERIOR ── */}
          <div style={{
            position: 'relative', zIndex: 3,
            height: 34,
            background: 'linear-gradient(180deg, #A03818 0%, #C84A20 14%, #8A2E10 32%, #6A1A06 52%, #8A3210 72%, #5A1A08 100%)',
            borderRadius: 17,
            boxShadow: '0 8px 28px rgba(0,0,0,0.7), inset 0 2px 0 rgba(255,170,90,0.28), inset 0 -1px 0 rgba(0,0,0,0.5)',
          }}>
            {/* Nudos de cuerda */}
            {[6, 28, 50, 72, 94].map((pct, i) => (
              <div key={i} style={{
                position: 'absolute', left: `${pct}%`, top: -6, bottom: -6,
                width: 13, transform: 'translateX(-50%)',
                background: 'repeating-linear-gradient(0deg,#3A2008 0px,#3A2008 2px,#7A4A18 2px,#7A4A18 4px)',
                borderRadius: 5,
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.6)',
              }}/>
            ))}
          </div>

          {/* ── PAPEL DEL PERGAMINO — se despliega con scaleY ── */}
          <div style={{
            transformOrigin: 'top center',
            transform: open ? 'scaleY(1)' : 'scaleY(0)',
            opacity: open ? 1 : 0,
            transition: open
              ? 'transform 0.75s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease'
              : 'none',
            willChange: 'transform',
            position: 'relative',
            zIndex: 2,
          }}>
            {/* Textura de papel — fondo multicapa */}
            <div style={{
              background: `
                radial-gradient(ellipse at 12% 18%, rgba(255,255,255,0.14) 0%, transparent 45%),
                radial-gradient(ellipse at 88% 82%, rgba(120,80,20,0.08) 0%, transparent 45%),
                repeating-linear-gradient(92deg, transparent, transparent 55px, rgba(140,100,30,0.025) 55px, rgba(140,100,30,0.025) 56px),
                repeating-linear-gradient(0deg,  transparent, transparent 22px, rgba(140,100,30,0.055) 22px, rgba(140,100,30,0.055) 23px),
                linear-gradient(155deg, #FAF0D4 0%, #F0E09A 18%, #F6ECC0 38%, #ECDA90 58%, #F2E6B2 78%, #E8D488 100%)
              `,
              boxShadow: 'inset 5px 0 18px rgba(110,65,15,0.16), inset -5px 0 18px rgba(110,65,15,0.16), inset 0 -8px 24px rgba(90,50,10,0.12)',
              padding: '32px 44px 36px',
              color: '#1A0E00',
            }}>

              {/* Cabecera */}
              <div style={{ textAlign: 'center', marginBottom: 22, paddingBottom: 18, borderBottom: '1.5px solid rgba(130,90,20,0.3)' }}>
                <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 9, letterSpacing: '0.45em', color: '#7A5518', textTransform: 'uppercase' }}>
                  VELHIO · TARTAS DE QUESO · MADRID · MMXXVI
                </div>
                <div className="display" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', marginTop: 8, letterSpacing: '0.07em', color: '#1A0800' }}>
                  La Carta
                </div>
                <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 13, marginTop: 5, color: '#6A4A10' }}>
                  Doce tartas · tres tamaños · precios en euros
                </div>
                {/* Separador ornamental */}
                <div style={{ marginTop: 12, color: '#B89040', letterSpacing: '0.3em', fontSize: 14 }}>· ✦ · Ω · ✦ ·</div>
              </div>

              {/* Columnas header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 76px 76px 76px',
                gap: 10, padding: '6px 12px',
                fontFamily: 'Cinzel, serif', fontSize: 9, letterSpacing: '0.22em',
                color: '#7A5518', textTransform: 'uppercase',
                borderBottom: '1px solid rgba(130,90,20,0.22)', marginBottom: 3,
              }}>
                <div>Tarta</div>
                <div style={{ textAlign: 'center' }}>Peq.</div>
                <div style={{ textAlign: 'center' }}>Med.</div>
                <div style={{ textAlign: 'center' }}>Gde.</div>
              </div>

              {TARTS.map((t, i) => (
                <div key={t.id}
                  style={{
                    display: 'grid', gridTemplateColumns: '1fr 76px 76px 76px',
                    gap: 10, padding: '11px 12px',
                    borderBottom: '1px dashed rgba(130,90,20,0.15)',
                    alignItems: 'center', cursor: 'pointer',
                    transition: 'background 180ms', borderRadius: 4,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(190,145,30,0.14)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                  onClick={() => onOrder(t)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                    <span style={{ fontFamily: 'Cinzel, serif', fontSize: 10, color: '#9A7030', opacity: 0.55, flexShrink: 0 }}>{String(i+1).padStart(2,'0')}.</span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 14, letterSpacing: '0.03em', color: '#1A0800', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.name}</div>
                      <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 11.5, color: '#5A3808', opacity: 0.7, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.desc}</div>
                    </div>
                    {t.tag === 'favorita' && <span style={{ background: '#C8A030', color: '#fff', padding: '1px 8px', borderRadius: 999, fontSize: 8.5, fontFamily: 'Cinzel, serif', flexShrink: 0, whiteSpace: 'nowrap' }}>★ Fav</span>}
                    {t.tag === 'uruguaya' && <span style={{ background: '#2A5A8A', color: '#fff', padding: '1px 7px', borderRadius: 999, fontSize: 9, flexShrink: 0 }}>🇺🇾</span>}
                    {t.tag === 'especial' && <span style={{ background: '#B84C38', color: '#fff', padding: '1px 8px', borderRadius: 999, fontSize: 8.5, fontFamily: 'Cinzel, serif', flexShrink: 0 }}>Del mes</span>}
                  </div>
                  <div style={{ textAlign: 'center', fontFamily: 'Cinzel, serif', fontWeight: 600, fontSize: 15, color: '#1A0E00' }}>{t.price.s}</div>
                  <div style={{ textAlign: 'center', fontFamily: 'Cinzel, serif', fontWeight: 600, fontSize: 15, color: '#1A0E00' }}>{t.price.m}</div>
                  <div style={{ textAlign: 'center', fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 16, color: '#7A5518' }}>{t.price.g}</div>
                </div>
              ))}

              {/* Pie */}
              <div style={{ textAlign: 'center', marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(130,90,20,0.2)' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 12, color: '#6A4A10' }}>
                  *Porciones individuales: 5€ — 6€ · Especiales con 48h de antelación
                </div>
                <div style={{ color: '#B89040', letterSpacing: '0.3em', fontSize: 16, marginTop: 12 }}>· Ω ·</div>
              </div>
            </div>
          </div>

          {/* ── VARILLA INFERIOR (borde del rollo) ── */}
          <div style={{
            position: 'relative', zIndex: 3,
            height: 22,
            background: 'linear-gradient(180deg, #A03818 0%, #C84A20 18%, #8A2E10 50%, #5A1A08 100%)',
            borderRadius: 11,
            boxShadow: '0 6px 20px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,170,90,0.2)',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(-20px)',
            transition: open ? 'opacity 0.4s 0.5s ease, transform 0.4s 0.5s ease' : 'none',
          }}>
            {[6, 28, 50, 72, 94].map((pct, i) => (
              <div key={i} style={{
                position: 'absolute', left: `${pct}%`, top: -5, bottom: -5,
                width: 11, transform: 'translateX(-50%)',
                background: 'repeating-linear-gradient(0deg,#3A2008 0px,#3A2008 2px,#7A4A18 2px,#7A4A18 4px)',
                borderRadius: 4,
              }}/>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          #carta .container > div:last-child > div:nth-child(3) > div {
            grid-template-columns: 1fr !important;
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
  const picks = [
    { variant: 'classic',  label: 'Clásica',        img: '/clasica.jpg'           },
    { variant: 'pistacho', label: 'Pistacho',        img: '/pistacho.jpg'          },
    { variant: 'dulce',    label: 'Dulce de Leche',  img: '/dulcedeleche.jpg.png'  },
  ];
  return (
    <section id="pack" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="pack-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'center',
        }}>

          {/* ── Columna izquierda: texto ── */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>CAPÍTULO IV · ΔΟΚΙΜΑΣΙΑ</div>
            <h2 className="display" style={{ fontSize: 'clamp(48px,6vw,72px)', lineHeight: 0.95 }}>
              Pack<br/>Degustación
            </h2>
            <div className="serif" style={{ fontSize: 20, fontStyle: 'italic', color: 'var(--gold)', marginTop: 18, lineHeight: 1.4 }}>
              Tres tartas pequeñas a elegir.
              <br/>Como en un symposium griego —<br/>pero sin vino tinto.
            </div>
            <p className="serif" style={{ fontSize: 16, marginTop: 20, lineHeight: 1.65 }}>
              Ideal para indecisos, para compartir, para probar antes de comprar la grande.
              Tú eliges los tres sabores. Nosotros los ponemos bonitos en una caja.
            </p>

            {/* Precio */}
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
              <div style={{
                fontFamily: 'Cinzel, serif', fontWeight: 900,
                fontSize: 'clamp(52px,7vw,72px)', lineHeight: 1, color: 'var(--gold)',
              }}>28€</div>
              <div className="serif" style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--ink-dim)', lineHeight: 1.5 }}>
                +1€ si incluye<br/>la especial del mes
              </div>
            </div>

            <div style={{ marginTop: 28 }}>
              <button className="btn btn--gold" onClick={() => onOrder({ name: 'Pack Degustación' })}>
                Pedir el pack
              </button>
            </div>
          </div>

          {/* ── Columna derecha: caja ── */}
          <div style={{
            background: 'var(--bg-elev)',
            border: '2px solid var(--gold)',
            borderRadius: 'var(--r-lg)',
            padding: '20px 20px 24px',
            boxShadow: 'var(--shadow-gold)',
          }}>
            {/* Meander top */}
            <div style={{
              height: 20,
              backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 20'><path d='M0 16 L0 4 L16 4 L16 12 L8 12 L8 8 L12 8 L12 16 L20 16 L20 4 L36 4 L36 12 L28 12 L28 8 L32 8 L32 16 L40 16 L40 4 L56 4 L56 12 L48 12 L48 8 L52 8 L52 16 L60 16' stroke='%23D4A84A' stroke-width='1.5' fill='none'/></svg>\")",
              backgroundRepeat: 'repeat-x',
              backgroundSize: 'auto 16px',
              marginBottom: 10,
            }}/>

            {/* Cabecera caja */}
            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <div style={{
                fontFamily: 'Cinzel, serif', fontWeight: 700,
                fontSize: 12, letterSpacing: '0.18em',
                color: 'var(--gold)', lineHeight: 1.5,
              }}>PACK · DEGUSTACIÓN</div>
              <div style={{
                fontFamily: 'Cinzel, serif', fontWeight: 500,
                fontSize: 11, letterSpacing: '0.22em',
                color: 'var(--gold)', opacity: 0.7,
              }}>ΔΟΚΙΜΑΣΙΑ</div>
            </div>

            {/* Tartas en fila — fotos reales */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 10,
            }}>
              {picks.map((p, i) => (
                <div key={i} style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center',
                  background: 'var(--bg)',
                  borderRadius: 'var(--r-md)',
                  overflow: 'hidden',
                  animation: `bob ${3 + i * 0.3}s ease-in-out ${i * 0.2}s infinite`,
                }}>
                  <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
                    <img
                      src={p.img}
                      alt={p.label}
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover', display: 'block',
                      }}
                    />
                  </div>
                  <div style={{
                    fontFamily: 'Cinzel, serif', fontSize: 9,
                    letterSpacing: '0.1em', color: 'var(--gold)',
                    opacity: 0.85, textAlign: 'center',
                    textTransform: 'uppercase', lineHeight: 1.3,
                    padding: '6px 4px',
                  }}>{p.label}</div>
                </div>
              ))}
            </div>

            <div className="script" style={{
              textAlign: 'center', marginTop: 18,
              fontSize: 24, color: 'var(--gold)',
            }}>
              elige tú · elige bien
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @media (max-width: 1000px) {
          .pack-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
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
    <section id="contacto" className="section section--paper" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Vídeo de fondo: cuchara */}
      <video
        autoPlay muted loop playsInline
        src="/video%20cuchara.mp4"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', display: 'block',
          opacity: 0.14,
          pointerEvents: 'none',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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

// ============================================================
// Video Section — scroll fluido, sin trampa de sticky
// ============================================================
const VideoSection = () => (
  <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
    {/* Vídeo a pantalla completa */}
    <video
      autoPlay muted loop playsInline
      src="/video%20tarta.mp4"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover', display: 'block',
      }}
    />
    {/* Overlay oscuro */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, rgba(23,24,27,0.42) 0%, rgba(23,24,27,0.18) 50%, rgba(23,24,27,0.52) 100%)',
    }}/>
    {/* Texto centrado — siempre visible */}
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 2, textAlign: 'center',
      padding: '0 28px',
      pointerEvents: 'none',
    }}>
      <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: 16, letterSpacing: '0.4em' }}>
        EL PROCESO · Η ΔΙΑΔΙΚΑΣΙΑ
      </div>
      <h2 className="display" style={{
        fontSize: 'clamp(40px, 7vw, 96px)',
        color: 'var(--cream)', lineHeight: 0.92,
        textShadow: '0 4px 24px rgba(0,0,0,0.6)',
      }}>
        Así se hace<br/>
        <span style={{ color: 'var(--gold)' }}>una tarta</span>
      </h2>
      <p className="serif" style={{
        fontSize: 'clamp(16px, 1.8vw, 20px)',
        fontStyle: 'italic', color: 'rgba(242,234,218,0.88)',
        maxWidth: 480, marginTop: 20,
        textShadow: '0 2px 12px rgba(0,0,0,0.5)',
      }}>
        Sin conservantes, sin atajos, sin prisa.<br/>
        Con el horno a 160°C y mucha paciencia.
      </p>
      <div style={{ width: 60, height: 1, background: 'var(--gold)', opacity: 0.6, marginTop: 32 }}/>
      <div className="script" style={{ fontSize: 24, color: 'var(--gold)', marginTop: 12 }}>
        horneadas en Madrid
      </div>
    </div>
  </section>
);
};

export { Favorites, GreekAthletes, Menu, Pack, TartOfMonth, Special, Contact, Footer, VideoSection };

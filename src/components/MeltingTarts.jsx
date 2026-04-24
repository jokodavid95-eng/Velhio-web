import React from 'react';

/* Tartas rodando — vista cenital tipo moneda/plato */

const TART_STYLES = {
  classic:   { top: '#F2EADA', band: '#C8A060', label: 'Clásica'   },
  pistacho:  { top: '#8BAA6A', band: '#4E7A38', label: 'Pistacho'  },
  nutella:   { top: '#7B5030', band: '#4A2A0A', label: 'Nutella'   },
  oreo:      { top: '#38322C', band: '#1A1410', label: 'Oreo'      },
  dulce:     { top: '#C4853A', band: '#8A5010', label: 'Dulce'     },
  chocolate: { top: '#4A2A16', band: '#28100A', label: 'Choc.'     },
  mango:     { top: '#E8B850', band: '#B87E18', label: 'Mango'     },
  pantera:   { top: '#E890A8', band: '#B85A78', label: 'Pantera'   },
};

/* Tarta vista desde arriba — forma de moneda rodando */
const TartCoin = ({ variant, size = 88 }) => {
  const c = TART_STYLES[variant] || TART_STYLES.classic;
  const r = size / 2;
  return (
    <svg width={size} height={size} viewBox="0 0 88 88" fill="none">
      {/* Galleta exterior */}
      <circle cx="44" cy="44" r="42" fill={c.band}/>
      {/* Textura galleta: círculo de puntitos */}
      {[0,45,90,135,180,225,270,315].map(a => (
        <circle key={a}
          cx={44 + 37 * Math.cos(a * Math.PI / 180)}
          cy={44 + 37 * Math.sin(a * Math.PI / 180)}
          r="2" fill={c.top} opacity="0.35"
        />
      ))}
      {/* Interior cremoso */}
      <circle cx="44" cy="44" r="35" fill={c.top}/>
      {/* Destello */}
      <ellipse cx="31" cy="30" rx="10" ry="5.5"
        fill="white" opacity="0.28"
        transform="rotate(-35 31 30)"
      />
      {/* Ω centrado */}
      <text x="44" y="52"
        textAnchor="middle"
        fontFamily="Cinzel, serif" fontWeight="700"
        fontSize="22" fill={c.band} opacity="0.75"
      >Ω</text>
    </svg>
  );
};

/* Banner rodante */
const MeltingTarts = ({ variants = ['classic', 'pistacho', 'nutella'], height = 160 }) => {
  /* duplicamos para bucle sin salto */
  const track = [...variants, ...variants, ...variants, ...variants];

  /* velocidad: 12s por vuelta de la pista = ritmo medio */
  const trackDur  = variants.length * 4.2;   /* ~4.2s por tarta en el track  */
  /* rotación: 1 vuelta completa mientras la tarta recorre su propio diámetro
     diámetro ≈ 88px, gap = 52px ⇒ período = (88+52)/V
     simplificado: misma duración que el track da un roll bonito */
  const spinDur   = 3.8;                      /* segundos por vuelta completa */

  return (
    <div style={{
      position: 'relative',
      height,
      overflow: 'hidden',
      background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-elev) 100%)',
      borderTop: '1px solid var(--rule)',
      borderBottom: '1px solid var(--rule)',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Cenefa meander abajo */}
      <div style={{
        position: 'absolute', bottom: 14, left: 0, right: 0, height: 18,
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 20'><path d='M0 16 L0 4 L16 4 L16 12 L8 12 L8 8 L12 8 L12 16 L20 16 L20 4 L36 4 L36 12 L28 12 L28 8 L32 8 L32 16 L40 16 L40 4 L56 4 L56 12 L48 12 L48 8 L52 8 L52 16 L60 16' stroke='%23D4A84A' stroke-width='1.2' fill='none'/></svg>\")",
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 14px',
        opacity: 0.35,
        pointerEvents: 'none',
      }}/>

      {/* Texto central — encima de las tartas */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        pointerEvents: 'none',
        zIndex: 3,
      }}>
        <div className="eyebrow" style={{ fontSize: 9, color: 'var(--gold)', letterSpacing: '0.3em' }}>ΔΩΔΕΚΑ · DOCE SABORES</div>
        <div className="script" style={{ fontSize: 26, color: 'var(--cream)', marginTop: 2 }}>muy muy cremosas</div>
      </div>

      {/* Pista rodante */}
      <div style={{
        display: 'flex',
        gap: 52,
        alignItems: 'center',
        animation: `roll-track ${trackDur}s linear infinite`,
        willChange: 'transform',
        paddingLeft: 52,
      }}>
        {track.map((v, i) => (
          <div key={i} style={{
            flexShrink: 0,
            animation: `spin-coin ${spinDur}s linear infinite`,
            /* cada tarta desfasada para que no giren todas igual */
            animationDelay: `${-(i * spinDur / variants.length) % spinDur}s`,
          }}>
            <TartCoin variant={v}/>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes roll-track {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes spin-coin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default MeltingTarts;

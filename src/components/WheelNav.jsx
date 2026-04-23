import React from 'react';

/* Menú de navegación: PLATO GIRATORIO
   Un plato central con las secciones dispuestas en círculo como porciones.
   Se abre con un click y gira al seleccionar. */

const WheelNav = ({ sections, onNav, activeSection }) => {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(null);
  const [rotation, setRotation] = React.useState(0);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [open]);

  // Al cambiar de sección activa, gira el plato para alinear esa porción arriba
  React.useEffect(() => {
    const i = sections.findIndex(s => s.id === activeSection);
    if (i >= 0) {
      const anglePerSlice = 360 / sections.length;
      setRotation(-i * anglePerSlice);
    }
  }, [activeSection, sections]);

  const handleSelect = (id, i) => {
    const anglePerSlice = 360 / sections.length;
    setRotation(-i * anglePerSlice);
    setTimeout(() => {
      setOpen(false);
      setTimeout(() => onNav(id), 400);
    }, 450);
  };

  const R_OUTER = 280;
  const R_INNER = 100;
  const n = sections.length;
  const anglePerSlice = 360 / n;

  return (
    <>
      {/* TOP BAR */}
      <header style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 80,
        padding: '18px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(28, 53, 99, 0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px) saturate(150%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(150%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(242, 234, 218, 0.1)' : '1px solid transparent',
        transition: 'all 320ms cubic-bezier(.4,0,.2,1)',
      }}>
        {/* Logo */}
        <div
          onClick={() => onNav('inicio')}
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            cursor: 'pointer', userSelect: 'none',
          }}
        >
          <svg width="36" height="36" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1"/>
            <text x="20" y="25" textAnchor="middle" fontFamily="Cinzel, serif" fontWeight="700" fontSize="11" fill="currentColor">V</text>
          </svg>
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 22, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Velhio</div>
            <div style={{ fontFamily: 'Caveat, cursive', fontSize: 12, opacity: 0.8, marginTop: -2 }}>Tartas de queso</div>
          </div>
        </div>

        {/* Indicador + botón del plato */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir plato'}
          style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '8px 8px 8px 22px',
            background: open ? 'var(--gold)' : 'transparent',
            color: open ? 'var(--carbon)' : 'inherit',
            border: '1.5px solid ' + (open ? 'var(--gold)' : 'currentColor'),
            borderRadius: 999,
            cursor: 'pointer',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            transition: 'all 240ms cubic-bezier(.2,.7,.2,1)',
          }}
        >
          <span>{open ? 'Cerrar' : 'Elige porción'}</span>
          {/* Plato giratorio en miniatura */}
          <div style={{
            position: 'relative',
            width: 36, height: 36,
            borderRadius: '50%',
            border: '1.5px solid currentColor',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'transform 420ms cubic-bezier(.34,1.3,.64,1)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}>
            <div style={{ position: 'absolute', inset: 4, borderRadius: '50%', border: '1px dashed currentColor', opacity: 0.5 }}/>
            {[0, 60, 120, 180, 240, 300].map(a => (
              <div key={a} style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: 1, height: 14,
                background: 'currentColor',
                opacity: 0.7,
                transformOrigin: '50% 0',
                transform: `translate(-50%, 0) rotate(${a}deg)`,
              }}/>
            ))}
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }}/>
          </div>
        </button>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 70,
          background: 'radial-gradient(circle at 50% 50%, rgba(28,53,99,0.85), rgba(23,24,27,0.95))',
          backdropFilter: 'blur(8px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 460ms var(--ease-out)',
        }}
      />

      {/* PLATO GIRATORIO */}
      <div style={{
        position: 'fixed',
        top: '50%', left: '50%',
        transform: `translate(-50%, -50%) scale(${open ? 1 : 0.6})`,
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        zIndex: 75,
        transition: 'transform 620ms cubic-bezier(.34,1.2,.64,1), opacity 420ms var(--ease-out)',
        width: R_OUTER * 2,
        height: R_OUTER * 2,
      }}>
        {/* Texto orbitando */}
        <svg viewBox="0 0 600 600" width={R_OUTER * 2} height={R_OUTER * 2} style={{
          position: 'absolute', inset: 0,
          animation: open ? 'spin-slow 30s linear infinite' : 'none',
        }}>
          <defs>
            <path id="orbit-menu" d="M 300,300 m -280,0 a 280,280 0 1,1 560,0 a 280,280 0 1,1 -560,0"/>
          </defs>
          <text fontFamily="Cinzel, serif" fontSize="16" fontWeight="600" letterSpacing="6" fill="var(--gold)" opacity="0.55">
            <textPath href="#orbit-menu" startOffset="0">
              ·  ELIGE  TU  PORCIÓN  ·  VELHIO  ·  CARTA  DE  NAVEGACIÓN  ·  ΔΕΙΠΝΟΝ  ·  ELIGE  TU  PORCIÓN  ·  VELHIO  ·
            </textPath>
          </text>
        </svg>

        {/* Anillo borde */}
        <div style={{
          position: 'absolute',
          inset: 16,
          borderRadius: '50%',
          border: '1px solid var(--gold)',
          opacity: 0.35,
        }}/>

        {/* PLATO — gira con la selección */}
        <div style={{
          position: 'absolute',
          inset: 32,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 35%, #F2EADA 0%, #E8DCC3 60%, #D4C4A3 100%)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.6), inset 0 0 40px rgba(138,90,43,0.15)',
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 620ms cubic-bezier(.34,1.2,.64,1)',
        }}>
          {/* Porciones */}
          <svg viewBox="0 0 600 600" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
            {sections.map((s, i) => {
              const startAngle = (i * anglePerSlice - 90 - anglePerSlice / 2) * Math.PI / 180;
              const endAngle = (i * anglePerSlice - 90 + anglePerSlice / 2) * Math.PI / 180;
              const x1 = 300 + R_OUTER * 0.95 * Math.cos(startAngle);
              const y1 = 300 + R_OUTER * 0.95 * Math.sin(startAngle);
              const x2 = 300 + R_OUTER * 0.95 * Math.cos(endAngle);
              const y2 = 300 + R_OUTER * 0.95 * Math.sin(endAngle);
              const isHover = hover === i;
              const isActive = activeSection === s.id;
              const fill = isActive ? 'rgba(28, 53, 99, 0.95)'
                         : isHover ? 'rgba(212, 168, 74, 0.35)'
                         : 'transparent';
              return (
                <path
                  key={s.id}
                  d={`M 300 300 L ${x1} ${y1} A ${R_OUTER * 0.95} ${R_OUTER * 0.95} 0 0 1 ${x2} ${y2} Z`}
                  fill={fill}
                  stroke="rgba(28, 53, 99, 0.3)"
                  strokeWidth="1.5"
                  style={{
                    cursor: 'pointer',
                    transition: 'fill 240ms var(--ease-out)',
                  }}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => handleSelect(s.id, i)}
                />
              );
            })}

            {/* Líneas separadoras */}
            {sections.map((_, i) => {
              const a = (i * anglePerSlice - 90 - anglePerSlice / 2) * Math.PI / 180;
              return (
                <line
                  key={i}
                  x1="300" y1="300"
                  x2={300 + R_OUTER * 0.95 * Math.cos(a)}
                  y2={300 + R_OUTER * 0.95 * Math.sin(a)}
                  stroke="rgba(28, 53, 99, 0.25)"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                  pointerEvents="none"
                />
              );
            })}

            {/* Texto de cada porción */}
            {sections.map((s, i) => {
              const a = (i * anglePerSlice - 90) * Math.PI / 180;
              const textR = R_OUTER * 0.6;
              const tx = 300 + textR * Math.cos(a);
              const ty = 300 + textR * Math.sin(a);
              const isActive = activeSection === s.id;
              const isHover = hover === i;
              // Rotar el texto para que se lea radialmente
              const textRot = (i * anglePerSlice);
              return (
                <g key={s.id} transform={`translate(${tx}, ${ty}) rotate(${textRot})`} pointerEvents="none">
                  <text
                    textAnchor="middle"
                    fontFamily="Cinzel, serif"
                    fontWeight="700"
                    fontSize="11"
                    letterSpacing="2.5"
                    fill={isActive ? 'var(--gold)' : (isHover ? 'var(--carbon)' : 'rgba(28, 53, 99, 0.55)')}
                    y="-14"
                  >
                    {s.numeral}
                  </text>
                  <text
                    textAnchor="middle"
                    fontFamily="Cinzel, serif"
                    fontWeight="700"
                    fontSize="15"
                    letterSpacing="1.5"
                    fill={isActive ? '#F2EADA' : (isHover ? 'var(--carbon)' : '#1C3563')}
                    y="6"
                    style={{ textTransform: 'uppercase' }}
                  >
                    {s.label}
                  </text>
                  <text
                    textAnchor="middle"
                    fontFamily="Cormorant Garamond, serif"
                    fontStyle="italic"
                    fontSize="11"
                    fill={isActive ? 'rgba(242,234,218,0.8)' : 'rgba(23,24,27,0.55)'}
                    y="22"
                  >
                    {s.hint}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* CENTRO — Tarta con logo (no gira) */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: R_INNER * 2,
          height: R_INNER * 2,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 35%, var(--gold) 0%, var(--gold-deep) 100%)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 -8px 20px rgba(0,0,0,0.25), inset 0 8px 14px rgba(255,255,255,0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          border: '3px solid var(--cream)',
        }}>
          <div style={{
            fontFamily: 'Cinzel, serif',
            fontWeight: 900,
            fontSize: 30,
            letterSpacing: '0.12em',
            color: 'var(--carbon)',
            lineHeight: 1,
          }}>VELHIO</div>
          <div className="script" style={{
            fontSize: 18, color: 'var(--carbon)', marginTop: 2,
            opacity: 0.75,
          }}>cheesecakes</div>
          <div style={{
            width: 40, height: 2,
            background: 'var(--carbon)',
            margin: '8px auto',
            opacity: 0.3,
          }}/>
          <div style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 9,
            letterSpacing: '0.3em',
            color: 'var(--carbon)',
            opacity: 0.6,
          }}>ΔΕΙΠΝΟΝ</div>
        </div>

        {/* Indicador fijo arriba (flecha señalando porción activa) */}
        <div style={{
          position: 'absolute',
          top: 4, left: '50%',
          transform: 'translateX(-50%)',
          width: 0, height: 0,
          borderLeft: '12px solid transparent',
          borderRight: '12px solid transparent',
          borderTop: '16px solid var(--gold)',
          filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))',
        }}/>
      </div>

      {/* Hint flotante cuando está abierto */}
      <div style={{
        position: 'fixed',
        bottom: 40, left: '50%',
        transform: `translateX(-50%) translateY(${open ? 0 : 20}px)`,
        opacity: open ? 0.8 : 0,
        pointerEvents: 'none',
        zIndex: 75,
        transition: 'all 420ms var(--ease-out) 200ms',
        textAlign: 'center',
        color: 'var(--cream)',
      }}>
        <div className="eyebrow" style={{ color: 'var(--gold)', fontSize: 10 }}>Gira y elige</div>
        <div className="script" style={{ fontSize: 22, marginTop: 2 }}>
          cada porción es una sección
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default WheelNav;

/* HERO SPLIT-SCREEN: Uruguay ↔ Grecia, tarta uniendo en el centro */

import React from 'react';

const Hero = ({ onOpenMenu, onOrder }) => {
  const [mouseX, setMouseX] = React.useState(0);
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

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouseX(((e.clientX - r.left) / r.width - 0.5) * 2); // -1..1
  };

  // Paralaje suave
  const parX = mouseX * 8;

  return (
    <section
      id="inicio"
      onMouseMove={handleMove}
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        padding: '120px 0 60px',
      }}
    >
      {/* ============== MITAD IZQUIERDA - URUGUAY ============== */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '50%', height: '100%',
        background: 'linear-gradient(180deg, #3E5F9F 0%, #2E4A7E 40%, #8BAA6A 100%)',
        overflow: 'hidden',
      }}>
        {/* Cielo con estrellas */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 15%, rgba(242,234,218,0.7) 1px, transparent 2px),
            radial-gradient(circle at 70% 20%, rgba(242,234,218,0.5) 1px, transparent 2px),
            radial-gradient(circle at 45% 10%, rgba(242,234,218,0.6) 1px, transparent 2px),
            radial-gradient(circle at 85% 8%, rgba(242,234,218,0.4) 1px, transparent 2px)
          `,
          backgroundSize: '300px 300px, 280px 280px, 350px 350px, 320px 320px',
          opacity: 0.8,
        }}/>

        {/* Sol de la bandera de Uruguay */}
        <svg style={{
          position: 'absolute',
          top: '12%', right: '12%',
          transform: `translateX(${parX}px)`,
          transition: 'transform 300ms var(--ease-out)',
        }} width="160" height="160" viewBox="0 0 160 160">
          <g stroke="var(--gold)" strokeWidth="1.4" fill="none" opacity="0.75">
            <circle cx="80" cy="80" r="22" fill="rgba(212,168,74,0.2)"/>
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5) * Math.PI / 180;
              const x1 = 80 + Math.cos(angle) * 28;
              const y1 = 80 + Math.sin(angle) * 28;
              const x2 = 80 + Math.cos(angle) * (i % 2 === 0 ? 68 : 52);
              const y2 = 80 + Math.sin(angle) * (i % 2 === 0 ? 68 : 52);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>;
            })}
            {/* Cara */}
            <circle cx="72" cy="76" r="1.5" fill="var(--gold)"/>
            <circle cx="88" cy="76" r="1.5" fill="var(--gold)"/>
            <path d="M 72 86 Q 80 92 88 86" strokeWidth="1.2"/>
          </g>
        </svg>

        {/* Pradera / pampa ondulada */}
        <svg style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%' }} viewBox="0 0 800 300" preserveAspectRatio="none" height="300">
          <path d="M 0 180 Q 200 140, 400 170 T 800 155 L 800 300 L 0 300 Z" fill="#6E7A3B" opacity="0.85"/>
          <path d="M 0 210 Q 200 180, 400 200 T 800 195 L 800 300 L 0 300 Z" fill="#5A6530"/>
          <path d="M 0 250 Q 300 230, 500 245 T 800 240 L 800 300 L 0 300 Z" fill="#3B4A1F"/>
        </svg>

        {/* Mate + bombilla (gaucho) */}
        <div style={{
          position: 'absolute',
          bottom: '18%', left: '22%',
          transform: `translateX(${parX * 1.5}px)`,
          transition: 'transform 300ms var(--ease-out)',
        }}>
          <svg width="110" height="140" viewBox="0 0 110 140">
            <g>
              {/* bombilla */}
              <rect x="40" y="8" width="5" height="52" fill="#D4A84A"/>
              <rect x="36" y="6" width="13" height="5" rx="1" fill="#D4A84A"/>
              {/* mate calabaza */}
              <ellipse cx="55" cy="95" rx="42" ry="38" fill="#8A5A2B"/>
              <ellipse cx="55" cy="95" rx="38" ry="34" fill="#6B4423"/>
              {/* yerba */}
              <ellipse cx="55" cy="72" rx="30" ry="6" fill="#6E7A3B"/>
              <ellipse cx="55" cy="68" rx="25" ry="4" fill="#8BAA6A"/>
              {/* Decoración criolla */}
              <path d="M 25 100 Q 55 108 85 100" stroke="#D4A84A" strokeWidth="1.2" fill="none" opacity="0.7"/>
              <path d="M 28 115 Q 55 120 82 115" stroke="#D4A84A" strokeWidth="1" fill="none" opacity="0.5"/>
              {/* vapor */}
              <path d="M 48 -5 Q 46 5 50 12 Q 54 20 50 28" stroke="#F2EADA" strokeWidth="1.5" fill="none" opacity="0.5"/>
              <path d="M 58 -5 Q 60 5 56 12 Q 52 20 56 28" stroke="#F2EADA" strokeWidth="1.2" fill="none" opacity="0.35"/>
            </g>
          </svg>
        </div>

        {/* Gaviota */}
        <svg style={{ position: 'absolute', top: '22%', left: '20%' }} width="60" height="20" viewBox="0 0 60 20">
          <path d="M 0 15 Q 10 5 20 12 Q 30 2 40 12 Q 50 5 60 15" stroke="var(--cream)" strokeWidth="1.5" fill="none" opacity="0.7"/>
        </svg>

        {/* Etiqueta */}
        <div style={{
          position: 'absolute',
          top: '28%', left: '8%',
          maxWidth: '46%',
          transform: `translateX(${parX * 0.5}px)`,
        }}>
          <div style={{
            fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.35em', color: 'var(--gold)', opacity: 0.9,
          }}>URUGUAY · 34°S</div>
          <div className="script" style={{ fontSize: 40, color: 'var(--cream)', marginTop: 6, lineHeight: 1 }}>la receta</div>
          <div style={{
            fontFamily: 'Cinzel, serif', fontWeight: 900,
            fontSize: 'clamp(36px, 4.5vw, 72px)',
            lineHeight: 0.9, letterSpacing: '0.02em',
            color: 'var(--cream)',
            textTransform: 'uppercase',
            textShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}>Cuatro<br/>hermanos</div>
          <p className="serif" style={{
            fontSize: 17, fontStyle: 'italic', marginTop: 14,
            color: 'rgba(242,234,218,0.85)', maxWidth: 340,
          }}>
            La abuela Teresa horneó su primera cheesecake en el Cerro, 1952. La receta cruzó el Atlántico en una maleta.
          </p>
        </div>
      </div>

      {/* ============== MITAD DERECHA - GRECIA ============== */}
      <div style={{
        position: 'absolute',
        top: 0, right: 0,
        width: '50%', height: '100%',
        background: 'linear-gradient(180deg, #1C3563 0%, #2E4A7E 50%, #F2EADA 100%)',
        overflow: 'hidden',
      }}>
        {/* Mar Egeo - ondas */}
        <svg style={{ position: 'absolute', bottom: '0', left: 0, right: 0, width: '100%' }} viewBox="0 0 800 400" preserveAspectRatio="none" height="400">
          <path d="M 0 240 Q 100 220, 200 232 T 400 228 T 600 232 T 800 225 L 800 400 L 0 400 Z" fill="#3E5F9F" opacity="0.6"/>
          <path d="M 0 260 Q 150 250, 300 258 T 600 255 T 800 250 L 800 400 L 0 400 Z" fill="#2E4A7E"/>
          <path d="M 0 290 Q 200 280, 400 288 T 800 280 L 800 400 L 0 400 Z" fill="#1C3563"/>
          {/* Reflejos en el mar */}
          <path d="M 100 250 L 300 248" stroke="var(--gold)" strokeWidth="1" opacity="0.3"/>
          <path d="M 400 260 L 550 258" stroke="var(--gold)" strokeWidth="1" opacity="0.25"/>
          <path d="M 600 245 L 720 244" stroke="var(--cream)" strokeWidth="0.8" opacity="0.35"/>
        </svg>

        {/* Isla con templo */}
        <div style={{
          position: 'absolute',
          bottom: '22%', right: '15%',
          transform: `translateX(${parX * 0.8}px)`,
          transition: 'transform 300ms var(--ease-out)',
        }}>
          <svg width="340" height="280" viewBox="0 0 340 280">
            {/* Roca / isla */}
            <path d="M 20 260 Q 30 200 70 180 L 120 170 L 250 165 L 300 180 Q 320 210 330 260 Z" fill="#C4B594" opacity="0.85"/>
            <path d="M 30 260 Q 40 220 80 200 L 260 195 Q 300 215 320 260" fill="none" stroke="#8A5A2B" strokeWidth="1" opacity="0.4"/>

            {/* Escalinata */}
            <rect x="110" y="160" width="120" height="6" fill="#F2EADA"/>
            <rect x="115" y="154" width="110" height="6" fill="#E8DCC3"/>
            <rect x="120" y="148" width="100" height="6" fill="#F2EADA"/>

            {/* Estilobato */}
            <rect x="115" y="138" width="110" height="10" fill="#F2EADA"/>

            {/* 6 columnas dóricas */}
            {[0, 1, 2, 3, 4, 5].map(i => (
              <g key={i}>
                <rect x={124 + i * 18} y="60" width="12" height="78" fill="#F2EADA"/>
                {/* flautas */}
                <line x1={127 + i * 18} y1="62" x2={127 + i * 18} y2="136" stroke="#C4B594" strokeWidth="0.5" opacity="0.6"/>
                <line x1={130 + i * 18} y1="62" x2={130 + i * 18} y2="136" stroke="#C4B594" strokeWidth="0.5" opacity="0.6"/>
                <line x1={133 + i * 18} y1="62" x2={133 + i * 18} y2="136" stroke="#C4B594" strokeWidth="0.5" opacity="0.6"/>
                {/* Capitel */}
                <rect x={122 + i * 18} y="56" width="16" height="5" fill="#F2EADA"/>
              </g>
            ))}

            {/* Arquitrabe */}
            <rect x="115" y="48" width="110" height="8" fill="#F2EADA"/>
            {/* Friso con triglifos */}
            <rect x="115" y="40" width="110" height="8" fill="#E8DCC3"/>
            {[0,1,2,3,4,5,6].map(i => (
              <rect key={i} x={118 + i * 15} y="40" width="4" height="8" fill="#8A5A2B" opacity="0.5"/>
            ))}
            {/* Cornisa */}
            <rect x="112" y="34" width="116" height="6" fill="#F2EADA"/>
            {/* Frontón triangular */}
            <polygon points="170,8 112,34 228,34" fill="#F2EADA"/>
            <polygon points="170,14 120,34 220,34" fill="none" stroke="#8A5A2B" strokeWidth="1" opacity="0.35"/>
          </svg>
        </div>

        {/* Estatua griega pequeña (silueta) */}
        <div style={{
          position: 'absolute',
          bottom: '28%', left: '12%',
          transform: `translateX(${parX * 1.2}px)`,
          transition: 'transform 300ms var(--ease-out)',
        }}>
          <svg width="70" height="150" viewBox="0 0 70 150">
            <g fill="#F2EADA" opacity="0.88">
              <circle cx="35" cy="20" r="10"/>
              {/* Pelo/diadema */}
              <path d="M 25 18 Q 35 8 45 18 L 44 22 L 26 22 Z" fill="#D4A84A" opacity="0.8"/>
              {/* Cuello + torso con túnica */}
              <path d="M 30 30 L 40 30 L 44 42 Q 48 60 46 90 L 48 120 L 44 140 L 38 140 L 35 100 L 32 140 L 26 140 L 22 120 L 24 90 Q 22 60 26 42 Z"/>
              {/* Pliegues */}
              <path d="M 30 50 Q 32 70 30 100" stroke="#8A5A2B" strokeWidth="0.6" fill="none" opacity="0.4"/>
              <path d="M 40 50 Q 38 70 40 100" stroke="#8A5A2B" strokeWidth="0.6" fill="none" opacity="0.4"/>
              {/* Brazo sosteniendo algo */}
              <path d="M 22 45 L 10 60 L 8 70 L 12 72 L 14 64 L 24 54" />
              {/* Base */}
              <rect x="18" y="140" width="24" height="6" fill="#8A5A2B" opacity="0.7"/>
            </g>
          </svg>
        </div>

        {/* Gaviota egea */}
        <svg style={{ position: 'absolute', top: '30%', right: '18%' }} width="70" height="22" viewBox="0 0 70 22">
          <path d="M 0 18 Q 12 6 24 14 Q 35 3 46 14 Q 58 6 70 18" stroke="var(--cream)" strokeWidth="1.5" fill="none" opacity="0.7"/>
        </svg>

        {/* Meander griego vertical derecha */}
        <div style={{
          position: 'absolute',
          top: '12%', right: '2%',
          width: 24, height: '60%',
          backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 60'><path d='M 16 0 L 4 0 L 4 16 L 12 16 L 12 8 L 8 8 L 8 12 L 16 12 L 16 20 L 4 20 L 4 36 L 12 36 L 12 28 L 8 28 L 8 32 L 16 32 L 16 40 L 4 40 L 4 56 L 12 56 L 12 48 L 8 48 L 8 52 L 16 52 L 16 60' stroke='%23D4A84A' stroke-width='1.5' fill='none'/></svg>\")",
          backgroundRepeat: 'repeat-y',
          backgroundSize: '20px auto',
          opacity: 0.35,
        }}/>

        {/* Etiqueta */}
        <div style={{
          position: 'absolute',
          top: '28%', right: '8%',
          maxWidth: '46%',
          textAlign: 'right',
          transform: `translateX(${parX * 0.5}px)`,
        }}>
          <div style={{
            fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.35em', color: 'var(--gold)', opacity: 0.9,
          }}>ΕΛΛΑΣ · 37°N</div>
          <div className="script" style={{ fontSize: 40, color: 'var(--cream)', marginTop: 6, lineHeight: 1 }}>el origen</div>
          <div style={{
            fontFamily: 'Cinzel, serif', fontWeight: 900,
            fontSize: 'clamp(36px, 4.5vw, 72px)',
            lineHeight: 0.9, letterSpacing: '0.02em',
            color: 'var(--cream)',
            textTransform: 'uppercase',
            textShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}>Plakous<br/>776 a.C.</div>
          <p className="serif" style={{
            fontSize: 17, fontStyle: 'italic', marginTop: 14,
            color: 'rgba(242,234,218,0.85)', maxWidth: 340,
            marginLeft: 'auto',
          }}>
            Queso fresco, miel, harina. Los atletas de Olimpia comían el primer cheesecake de la historia.
          </p>
        </div>
      </div>

      {/* ============== TARTA CENTRAL UNIENDO ============== */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(460px, 52vw)',
        height: 'min(460px, 52vw)',
        zIndex: 5,
        pointerEvents: 'none',
      }}>
        {/* Aura */}
        <div style={{
          position: 'absolute', inset: -40,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,168,74,0.25) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}/>

        {/* Anillo dorado */}
        <div style={{
          position: 'absolute', inset: 0,
          borderRadius: '50%',
          border: '2px solid var(--gold)',
          transform: `rotate(${rotation}deg)`,
          opacity: 0.6,
          boxShadow: '0 0 40px rgba(212,168,74,0.4)',
        }}>
          {/* Marcas en anillo */}
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              top: '-6px', left: '50%',
              width: 2, height: 12,
              background: 'var(--gold)',
              transform: `rotate(${i * 30}deg) translateX(-50%)`,
              transformOrigin: '50% calc(50% + 6px)',
            }}/>
          ))}
        </div>

        {/* Anillo exterior dashed */}
        <div style={{
          position: 'absolute', inset: -24,
          borderRadius: '50%',
          border: '1px dashed rgba(242,234,218,0.4)',
          transform: `rotate(${-rotation * 0.5}deg)`,
        }}/>

        {/* TARTA */}
        <div style={{
          position: 'absolute', inset: 30,
          pointerEvents: 'auto',
        }}>
          <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="tartaTop" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#FBE29A"/>
                <stop offset="60%" stopColor="#F2EADA"/>
                <stop offset="100%" stopColor="#D4A84A"/>
              </radialGradient>
              <radialGradient id="tartaSide" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#A37F2F"/>
                <stop offset="100%" stopColor="#6B4423"/>
              </radialGradient>
            </defs>
            {/* Plato */}
            <ellipse cx="200" cy="310" rx="180" ry="28" fill="#1C3563" opacity="0.5"/>
            <ellipse cx="200" cy="300" rx="170" ry="24" fill="#F2EADA"/>
            <ellipse cx="200" cy="298" rx="156" ry="20" fill="#E8DCC3"/>

            {/* Lateral tarta (galleta) */}
            <path d="M 58 180 Q 58 280, 80 298 Q 200 320, 320 298 Q 342 280, 342 180 Z" fill="url(#tartaSide)"/>
            {/* Puntos galleta */}
            {[[90,220],[130,260],[180,250],[230,270],[280,230],[310,260],[110,280],[240,290]].map(([x,y], i) => (
              <circle key={i} cx={x} cy={y} r="2" fill="#3B2118" opacity="0.6"/>
            ))}

            {/* Topping - relleno dorado */}
            <ellipse cx="200" cy="180" rx="142" ry="30" fill="url(#tartaTop)"/>
            <ellipse cx="200" cy="178" rx="142" ry="30" fill="#17181B" opacity="0.08"/>

            {/* Brillo */}
            <ellipse cx="160" cy="168" rx="50" ry="6" fill="#FFFFFF" opacity="0.4"/>

            {/* Meander dorado en lateral */}
            <path d="M 58 205 L 342 205" stroke="#D4A84A" strokeWidth="1.5" opacity="0.8"/>
            <path d="M 58 215 L 342 215" stroke="#D4A84A" strokeWidth="0.8" opacity="0.5"/>

            {/* Letras VELHIO en el lateral */}
            <text x="200" y="250" textAnchor="middle"
              fontFamily="Cinzel, serif" fontWeight="900"
              fontSize="26" letterSpacing="8"
              fill="#F2EADA" opacity="0.85">VELHIO</text>

            {/* Porción como luna */}
            <g transform={`rotate(${rotation * 2} 200 180)`}>
              <ellipse cx="200" cy="180" rx="142" ry="30" fill="none"/>
              <g transform="translate(342 180)">
                <circle r="18" fill="var(--gold)" stroke="var(--cream)" strokeWidth="2"/>
                <text y="5" textAnchor="middle" fontFamily="Cinzel, serif" fontWeight="700" fontSize="14" fill="#17181B">Ω</text>
              </g>
            </g>
          </svg>
        </div>

        {/* Puente tipográfico izquierda */}
        <div style={{
          position: 'absolute',
          left: '-48%', top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'Caveat, cursive',
          fontSize: 20, color: 'var(--gold)',
          whiteSpace: 'nowrap',
          opacity: 0.9,
        }}>se encuentran →</div>

        {/* Puente derecha */}
        <div style={{
          position: 'absolute',
          right: '-48%', top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'Caveat, cursive',
          fontSize: 20, color: 'var(--gold)',
          whiteSpace: 'nowrap',
          opacity: 0.9,
        }}>← en Madrid</div>
      </div>

      {/* ============== CTA CENTRAL INFERIOR ============== */}
      <div style={{
        position: 'absolute',
        bottom: 60, left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 6,
        textAlign: 'center',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
      }}>
        <div style={{
          fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: 11,
          letterSpacing: '0.4em', color: 'var(--cream)',
          padding: '8px 24px',
          background: 'rgba(23,24,27,0.55)',
          backdropFilter: 'blur(8px)',
          borderRadius: 999,
          border: '1px solid rgba(212,168,74,0.4)',
        }}>DESDE URUGUAY · HORNEADAS EN MADRID · CON ALMA GRIEGA</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={onOrder} className="btn btn--gold">Pedir por WhatsApp</button>
          <button onClick={onOpenMenu} className="btn btn--ghost" style={{ borderColor: 'var(--cream)', color: 'var(--cream)' }}>Ver la carta</button>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute',
        bottom: 16, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        opacity: 0.55,
        color: 'var(--cream)',
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

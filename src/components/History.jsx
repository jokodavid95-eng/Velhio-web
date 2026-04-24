/* Historia: Uruguay + Grecia antigua, dos columnas con línea temporal */

import React from 'react';

const History = () => {
  return (
    <section id="historia" className="section" style={{
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>CAPÍTULO I · ΙΣΤΟΡΙΑ</div>
          <h2 className="display" style={{
            fontSize: 'var(--t-4xl)',
            letterSpacing: '0.05em',
          }}>La historia</h2>
          <div className="serif" style={{ fontSize: 22, fontStyle: 'italic', color: 'var(--ink-dim)', marginTop: 12, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
            Dos mil quinientos años separan a los pastores de la isla de Samos de un obrador familiar en Ciempozuelos. La tarta de queso los une.
          </div>
        </div>

        {/* Dos columnas: Grecia + Uruguay */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: 48,
          alignItems: 'start',
        }} className="history-grid">

          {/* GRECIA */}
          <div style={{ textAlign: 'right' }} className="history-col history-greek">
            <svg width="90" height="90" viewBox="0 0 80 80" style={{ marginLeft: 'auto' }}>
              <g fill="currentColor" opacity="0.85">
                <circle cx="40" cy="20" r="8"/>
                <path d="M 28 28 Q 40 24, 52 28 L 56 60 L 44 62 L 44 72 L 50 74 L 30 74 L 36 72 L 36 62 L 24 60 Z"/>
                <ellipse cx="40" cy="48" rx="18" ry="4" fill="var(--gold)"/>
              </g>
            </svg>
            <div className="script" style={{ fontSize: 32, color: 'var(--gold)', marginTop: 12 }}>año 776 a.C.</div>
            <h3 className="display" style={{ fontSize: 32, marginTop: 6 }}>Olimpia</h3>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.55, marginLeft: 'auto', maxWidth: 380, marginTop: 16 }}>
              En los primeros Juegos Olímpicos, los atletas comían un pastel llamado <em>plakous</em>: queso fresco, miel, harina de trigo. Era el primer cheesecake de la historia — combustible de dioses y olímpicos.
            </p>
            <div style={{
              marginTop: 24,
              padding: 20,
              borderRight: '2px solid var(--gold)',
              background: 'rgba(212,168,74,0.06)',
            }}>
              <div className="serif" style={{ fontSize: 20, fontStyle: 'italic', lineHeight: 1.4 }}>
                "Mezclar queso fresco con harina, añadir miel a gusto..."
              </div>
              <div className="eyebrow" style={{ fontSize: 10, marginTop: 10, letterSpacing: '0.2em' }}>— ATENEO DE NAUCRATIS, S. II</div>
            </div>
          </div>

          {/* LÍNEA TEMPORAL CENTRAL */}
          <div style={{
            width: 2,
            background: 'linear-gradient(180deg, transparent, var(--gold) 15%, var(--gold) 85%, transparent)',
            alignSelf: 'stretch',
            minHeight: 400,
            position: 'relative',
          }} className="history-line history-col-sep">
            {/* marcadores */}
            {[0.15, 0.5, 0.85].map((t, i) => (
              <div key={i} style={{
                position: 'absolute',
                top: `${t * 100}%`,
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 14, height: 14,
                borderRadius: '50%',
                background: 'var(--gold)',
                boxShadow: '0 0 0 4px var(--bg)',
              }}/>
            ))}
          </div>

          {/* URUGUAY */}
          <div style={{ textAlign: 'left' }} className="history-col history-uruguay">
            <svg width="90" height="90" viewBox="0 0 80 80">
              <g fill="currentColor" opacity="0.85">
                {/* bombilla de mate */}
                <ellipse cx="40" cy="50" rx="18" ry="20" fill="#8A5A2B"/>
                <ellipse cx="40" cy="44" rx="14" ry="4" fill="var(--carbon)"/>
                <rect x="38" y="14" width="4" height="30" fill="#C0C0C0"/>
                <ellipse cx="40" cy="14" rx="6" ry="2" fill="#C0C0C0"/>
              </g>
            </svg>
            <div className="script" style={{ fontSize: 32, color: 'var(--gold)', marginTop: 12 }}>año 1952</div>
            <h3 className="display" style={{ fontSize: 32, marginTop: 6 }}>Montevideo</h3>
            <p className="serif" style={{ fontSize: 18, lineHeight: 1.55, maxWidth: 380, marginTop: 16 }}>
              La abuela Teresa hornea su primera tarta de queso en una panadería de barrio del Cerro. Receta propia, manteca caliente, queso uruguayo. Dos generaciones después, cruza el Atlántico en la maleta de los nietos.
            </p>
            <div style={{
              marginTop: 24,
              padding: 20,
              borderLeft: '2px solid var(--gold)',
              background: 'rgba(212,168,74,0.06)',
            }}>
              <div className="serif" style={{ fontSize: 20, fontStyle: 'italic', lineHeight: 1.4 }}>
                "En Uruguay teníamos panaderías, así que crecimos entre masas, hornos y olor a manteca caliente."
              </div>
              <div className="eyebrow" style={{ fontSize: 10, marginTop: 10, letterSpacing: '0.2em' }}>— LA FAMILIA VELHIO</div>
            </div>
          </div>
        </div>

        {/* TERCER HITO — Madrid */}
        <div style={{
          marginTop: 80,
          padding: 48,
          background: 'var(--carbon-soft)',
          borderRadius: 'var(--r-lg)',
          border: '1px solid var(--rule)',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: 40,
          alignItems: 'center',
        }} className="history-madrid">
          <div>
            <div className="script" style={{ fontSize: 34, color: 'var(--gold)' }}>año 2019</div>
            <h3 className="display" style={{ fontSize: 32, marginTop: 4 }}>Ciempozuelos</h3>
          </div>
          <div>
            <p className="serif" style={{ fontSize: 20, lineHeight: 1.5, margin: 0 }}>
              Cuatro uruguayos alquilan un local en el km 30 de la A-4. Traen la receta de la abuela, compran un horno convector y empiezan a hornear. Seis años después, siguen siendo los mismos cuatro — y la receta no ha cambiado.
            </p>
          </div>
          <svg width="80" height="80" viewBox="0 0 80 80" style={{ color: 'var(--gold)' }}>
            <g fill="currentColor">
              <rect x="20" y="30" width="40" height="34" rx="2"/>
              <rect x="22" y="32" width="36" height="28" fill="var(--carbon)"/>
              <circle cx="32" cy="46" r="5" fill="var(--gold)"/>
              <circle cx="48" cy="46" r="5" fill="var(--gold)"/>
              <rect x="18" y="64" width="44" height="4"/>
              <rect x="28" y="20" width="24" height="10" rx="2"/>
            </g>
          </svg>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .history-grid { grid-template-columns: 1fr !important; }
          .history-col { text-align: center !important; }
          .history-line { display: none; }
          .history-greek, .history-uruguay { text-align: center !important; }
          .history-greek p, .history-uruguay p { margin-left: auto; margin-right: auto; }
          .history-madrid { grid-template-columns: 1fr !important; text-align: center; }
        }
      `}</style>
    </section>
  );
};


export default History;

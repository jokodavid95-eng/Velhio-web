import React from 'react';
import WheelNav from './components/WheelNav';
import Hero from './components/Hero';
import History from './components/History';
import MeltingTarts from './components/MeltingTarts';
import { Favorites, GreekAthletes, Menu, Pack, TartOfMonth, Special, Contact, Footer, VideoSection } from './components/Sections';
import { useTweaks, TweaksPanel, TweakSection, TweakRadio } from './components/TweaksPanel';

const TWEAK_DEFAULTS = { mode: 'night' };

const SECTIONS = [
  { id: 'inicio',     numeral: 'I',    label: 'Inicio',           hint: 'la tarta-planeta' },
  { id: 'historia',   numeral: 'II',   label: 'Historia',         hint: 'de Atenas a Ciempozuelos' },
  { id: 'favoritas',  numeral: 'III',  label: 'Más pedidas',      hint: 'las cuatro de siempre' },
  { id: 'carta',      numeral: 'IV',   label: 'La carta',         hint: 'doce tartas, tres tamaños' },
  { id: 'pack',       numeral: 'V',    label: 'Degustación',      hint: 'tres pequeñas a elegir' },
  { id: 'mes',        numeral: 'VI',   label: 'Tarta del mes',    hint: 'octubre: queso & donut' },
  { id: 'especiales', numeral: 'VII',  label: 'Especiales',       hint: 'sin lactosa · diabéticos' },
  { id: 'contacto',   numeral: 'VIII', label: 'Contacto',         hint: 'pedidos y dirección' },
];

function App() {
  const [tweaks, setTweaks] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = React.useState('inicio');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-mode', tweaks.mode);
  }, [tweaks.mode]);

  React.useEffect(() => {
    const ids = SECTIONS.map(s => s.id);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOrder = (tart) => {
    const txt = tart && tart.name
      ? `Hola! Quiero pedir una ${tart.name.includes('Tarta') || tart.name.includes('Pack') ? tart.name : 'Tarta de Queso y ' + tart.name}`
      : 'Hola! Quiero una tarta';
    window.open('https://api.whatsapp.com/send?phone=+34661764709&text=' + encodeURIComponent(txt), '_blank');
  };

  return (
    <>
      <WheelNav sections={SECTIONS} onNav={handleNav} activeSection={active} />

      <main>
        <div>
          <Hero onOpenMenu={() => handleNav('carta')} onOrder={() => handleOrder()} />
        </div>
        <MeltingTarts variants={['classic', 'dulce', 'pistacho']} />

        <div>
          <History />
        </div>

        <div>
          <Favorites onOrder={handleOrder} />
        </div>

        <MeltingTarts variants={['nutella', 'oreo', 'pantera', 'mango']} />

        <div>
          <GreekAthletes />
        </div>

        <div>
          <Menu onOrder={handleOrder} />
        </div>

        <VideoSection />

        <div>
          <Pack onOrder={handleOrder} />
        </div>

        <div>
          <TartOfMonth onOrder={handleOrder} />
        </div>

        <MeltingTarts variants={['chocolate', 'mango', 'classic']} />

        <div>
          <Special onOrder={handleOrder} />
        </div>

        <div>
          <Contact onOrder={handleOrder} />
        </div>

        <Footer />
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Apariencia">
          <TweakRadio
            label="Modo"
            value={tweaks.mode}
            onChange={(v) => setTweaks({ mode: v })}
            options={[
              { value: 'night', label: '🌙  Modo noche' },
              { value: 'day',   label: '☀︎  Modo día' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

export default App;

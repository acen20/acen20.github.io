/* ===== Ahsen Nazir Portfolio — app shell, reveal, tweaks ===== */

const ACCENTS = {
  Teal:   { a:"#13c8a5", a2:"#5eead4", ink:"#031f1a", soft:"rgba(19,200,165,.14)", line:"rgba(19,200,165,.40)" },
  Violet: { a:"#8b7bff", a2:"#c0b6ff", ink:"#0c0820", soft:"rgba(139,123,255,.16)", line:"rgba(139,123,255,.42)" },
  Amber:  { a:"#f3b13e", a2:"#ffd98a", ink:"#241803", soft:"rgba(243,177,62,.15)",  line:"rgba(243,177,62,.42)" },
  Ice:    { a:"#46c2ff", a2:"#a7e3ff", ink:"#021825", soft:"rgba(70,194,255,.15)",  line:"rgba(70,194,255,.42)" },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "Teal",
  "motion": true,
  "grid": true
}/*EDITMODE-END*/;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const ob = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ob.unobserve(e.target); } });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => ob.observe(el));
    return () => ob.disconnect();
  }, []);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  useEffect(() => {
    const p = ACCENTS[t.accent] || ACCENTS.Teal;
    const r = document.documentElement.style;
    r.setProperty('--accent', p.a);
    r.setProperty('--accent-2', p.a2);
    r.setProperty('--accent-ink', p.ink);
    r.setProperty('--accent-soft', p.soft);
    r.setProperty('--accent-line', p.line);
  }, [t.accent]);

  useEffect(() => {
    document.body.classList.toggle('no-motion', !t.motion);
  }, [t.motion]);

  useEffect(() => {
    document.querySelectorAll('.hero-grid').forEach(g => g.style.display = t.grid ? '' : 'none');
  }, [t.grid]);

  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <LexForge />
        <Projects />
        <Skills />
        <Pursuits />
        <Experience />
        <Contact />
      </main>

      <TweaksPanel>
        <TweakSection label="Accent" />
        <TweakColor label="Glow color" value={(ACCENTS[t.accent] || ACCENTS.Teal).a}
          options={Object.values(ACCENTS).map(p => p.a)}
          onChange={(v) => {
            const key = Object.keys(ACCENTS).find(k => ACCENTS[k].a === v) || 'Teal';
            setTweak('accent', key);
          }} />
        <TweakSection label="Motion" />
        <TweakToggle label="Animations" value={t.motion} onChange={(v) => setTweak('motion', v)} />
        <TweakToggle label="Hero grid" value={t.grid} onChange={(v) => setTweak('grid', v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

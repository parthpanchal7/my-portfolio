export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-grid">
          <div>
            <div className="hero-kicker mono">01 — Frontend developer / India / 2026</div>
            <h1 className="hero-title">PARTH<br /><span className="outline">PANCHAL</span></h1>
          </div>
          <aside className="hero-side">
            <p className="lead">I build thoughtful interfaces for the web — from React applications to commerce and content-driven websites.</p>
            <div className="meta mono">
              <div className="meta-row"><span>Focus</span><span>Frontend</span></div>
              <div className="meta-row"><span>Core</span><span>React / JavaScript</span></div>
              <div className="meta-row"><span>Commerce</span><span>Shopify / WooCommerce</span></div>
              <div className="meta-row"><span>CMS</span><span>WordPress</span></div>
            </div>
          </aside>
          <div className="hero-foot">
            <span className="mono">Design → Interface → Browser</span>
            <span className="mono">Scroll to explore <span className="scroll-mark">↓</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}

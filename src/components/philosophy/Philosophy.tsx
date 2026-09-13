export default function Philosophy() {
  return (
    <section className="philosophy">
      <div className="philosophy-inner">
        <div className="mono">/ 05 — How I approach a frontend</div>
        <p className="philosophy-copy">I start with the <strong>interface.</strong><br />Before the framework.<br />Before the component.<br />Before the animation.</p>
        <div className="principles">
          <article className="principle"><span className="mono">01</span><h3>Clarity first</h3><p>Good interfaces should communicate hierarchy before they try to impress.</p></article>
          <article className="principle"><span className="mono">02</span><h3>Responsive by nature</h3><p>A layout isn't finished when it works at one viewport. The behavior between them matters.</p></article>
          <article className="principle"><span className="mono">03</span><h3>Details earn attention</h3><p>States, spacing, motion and feedback are part of the interface — not decoration added at the end.</p></article>
        </div>
      </div>
    </section>
  );
}

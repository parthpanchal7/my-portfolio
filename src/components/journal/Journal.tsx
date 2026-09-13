export default function Journal() {
  return (
    <section className="journal" id="journal">
      <div className="journal-inner">
        <div className="journal-head"><h2>JOURNAL</h2><span className="mono">Ideas / experiments / things learned</span></div>
        <div className="journal-grid">
          <article className="journal-feature">
            <div className="label-row"><span className="mono">001 / Latest</span><span className="mono">Frontend</span></div>
            <div><h3>The small details that make an interface feel finished.</h3><p>Spacing, typography, states and transitions — the things users notice without necessarily knowing why.</p><div className="journal-visual" /></div>
            <div className="note-footer"><a className="read mono" href="#">Read article ↗</a><span className="note-date mono">5 min read</span></div>
          </article>
          <article className="journal-small"><span className="mono">002 / React</span><h3>When does a component actually deserve to exist?</h3><p>Thoughts on reusable UI without turning a simple interface into an architecture exercise.</p><div className="note-footer"><a className="read mono" href="#">Read ↗</a><span className="note-date mono">7 min</span></div></article>
          <article className="journal-small"><span className="mono">003 / Process</span><h3>Design-to-code is a translation problem.</h3><p>What gets lost between a polished design file and a responsive browser — and how to avoid it.</p><div className="note-footer"><a className="read mono" href="#">Read ↗</a><span className="note-date mono">6 min</span></div></article>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { notes } from "../../data/notes";

export default function Journal() {
  const [latest, ...secondary] = notes;

  return (
    <section className="journal" id="journal">
      <div className="journal-inner">
        <div className="journal-head">
          <h2>WORKBENCH</h2>
          <span className="mono">Real frontend work / lessons / fixes</span>
        </div>
        <div className="journal-grid">
          <article className="journal-feature">
            <div className="label-row"><span className="mono">{latest.number} / Latest</span><span className="mono">{latest.category}</span></div>
            <div>
              <h3><Link href={`/notes/${latest.slug}`}>{latest.title}</Link></h3>
              <p>{latest.description}</p>
              <div className="journal-visual" />
            </div>
            <div className="note-footer"><Link className="read mono" href={`/notes/${latest.slug}`}>Read entry ↗</Link><span className="note-date mono">{latest.readTime}</span></div>
          </article>
          {secondary.map((note) => (
            <article className="journal-small" key={note.slug}>
              <span className="mono">{note.number} / {note.category}</span>
              <h3><Link href={`/notes/${note.slug}`}>{note.title}</Link></h3>
              <p>{note.description}</p>
              <div className="note-footer"><Link className="read mono" href={`/notes/${note.slug}`}>Read ↗</Link><span className="note-date mono">{note.readTime}</span></div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 28 }}><Link className="mono" href="/notes">Open the workbench ↗</Link></div>
      </div>
    </section>
  );
}

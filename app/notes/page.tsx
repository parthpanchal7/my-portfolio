import Link from "next/link";
import { notes } from "../../src/data/notes";

export const metadata = {
  title: "Workbench",
  description: "Parth Panchal's frontend workbench: practical notes on WordPress, React, Shopify, responsive UI and debugging.",
  alternates: { canonical: "/notes" },
};

export default function NotesPage() {
  return (
    <main className="notes-page">
      <div className="notes-page-inner">
        <div className="notes-page-top mono"><Link href="/">← P@RTH</Link><span>Workbench / {String(notes.length).padStart(2, "0")} entries</span></div>
        <header className="notes-heading">
          <span className="mono">/ The workbench</span>
          <h1>THINGS I<br /><span>BUILD, BREAK &amp; FIGURE OUT.</span></h1>
          <p>A working collection of frontend lessons from the browser: WordPress, React, Shopify, responsive UI, debugging and the small decisions that show up in real projects.</p>
        </header>

        <div className="notes-list">
          {notes.map((note) => (
            <article className="note-row" key={note.slug}>
              <div className="note-index mono">{note.number}</div>
              <div className="note-main">
                <div className="note-meta mono"><span>{note.category}</span><span>{note.date}</span></div>
                <h2><Link href={`/notes/${note.slug}`}>{note.title}</Link></h2>
                <p>{note.description}</p>
                <div className="note-row-footer"><Link className="mono" href={`/notes/${note.slug}`}>Read entry ↗</Link><span className="mono">{note.readTime}</span></div>
              </div>
            </article>
          ))}
        </div>

        <div className="notes-back"><Link className="mono" href="/">← Back home</Link></div>
      </div>
    </main>
  );
}

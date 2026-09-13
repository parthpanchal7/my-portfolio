import Link from "next/link";
import { notes } from "../../src/data/notes";

export const metadata = {
  title: "Notes — Parth Panchal",
  description: "Frontend notes, experiments and things learned by Parth Panchal.",
};

export default function NotesPage() {
  return (
    <main className="notes-page">
      <div className="notes-page-inner">
        <div className="notes-page-top mono"><Link href="/">← P@RTH</Link><span>Notes / {String(notes.length).padStart(2, "0")} entries</span></div>
        <header className="notes-heading">
          <span className="mono">/ Working notes</span>
          <h1>THINGS I<br /><span>NOTICE, BUILD &amp; LEARN.</span></h1>
          <p>A running notebook about frontend work — interfaces, React, design-to-code and the decisions between the lines.</p>
        </header>

        <div className="notes-list">
          {notes.map((note) => (
            <article className="note-row" key={note.slug}>
              <div className="note-index mono">{note.number}</div>
              <div className="note-main">
                <div className="note-meta mono"><span>{note.category}</span><span>{note.date}</span></div>
                <h2><Link href={`/notes/${note.slug}`}>{note.title}</Link></h2>
                <p>{note.description}</p>
                <div className="note-row-footer"><Link className="mono" href={`/notes/${note.slug}`}>Read note ↗</Link><span className="mono">{note.readTime}</span></div>
              </div>
            </article>
          ))}
        </div>

        <div className="notes-back"><Link className="mono" href="/">← Back home</Link></div>
      </div>
    </main>
  );
}

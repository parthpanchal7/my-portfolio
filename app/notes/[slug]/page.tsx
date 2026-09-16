import Link from "next/link";
import { notFound } from "next/navigation";
import { getNote, notes } from "../../../src/data/notes";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getNote(slug);
  return note
    ? { title: note.title, description: note.description, alternates: { canonical: `/notes/${note.slug}` } }
    : { title: "Workbench entry" };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const Content = note.Content;
  const currentIndex = notes.findIndex((item) => item.slug === note.slug);
  const nextNote = notes[currentIndex + 1];

  return (
    <main className="note-page">
      <div className="note-page-inner">
        <div className="note-page-top mono">
          <Link href="/notes">← Workbench</Link>
          <span>{note.number} / {note.category}</span>
        </div>

        <header className="note-article-heading">
          <div className="note-article-meta mono"><span>{note.category}</span><span>{note.date} / {note.readTime}</span></div>
          <h1>{note.title}</h1>
          <p>{note.description}</p>
        </header>

        <article className="note-content">
          <Content />
        </article>

        <footer className="note-page-footer">
          <Link className="mono" href="/notes">← Workbench</Link>
          {nextNote ? <Link className="mono" href={`/notes/${nextNote.slug}`}>Next entry →</Link> : <Link className="mono" href="/">Back home →</Link>}
        </footer>
      </div>
    </main>
  );
}

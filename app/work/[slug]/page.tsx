import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../src/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? { title: `${project.name} — Parth Panchal`, description: project.description }
    : { title: "Project — Parth Panchal" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="project-page">
      <div className="project-page-inner">
        <div className="project-page-top mono"><Link href="/work">← All work</Link><span>{String(project.id).padStart(2, "0")} / {project.platform}</span></div>
        <header className="project-page-heading">
          <span className="mono">Project / {String(project.id).padStart(2, "0")}</span>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </header>
        <div className="project-page-image"><Image src={project.image} alt={project.name} priority sizes="(max-width: 820px) 100vw, 1320px" /></div>
        <section className="project-page-details">
          <div><span className="mono">Role</span><strong>Frontend development</strong></div>
          <div><span className="mono">Platform</span><strong>{project.platform}</strong></div>
          <div><span className="mono">Stack</span><strong>{project.technologies.join(" / ")}</strong></div>
        </section>
        <div className="project-page-back"><Link className="mono" href="/work">← Back to all projects</Link></div>
      </div>
    </main>
  );
}

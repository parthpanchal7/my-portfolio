import Image from "next/image";
import Link from "next/link";
import { projects } from "../../src/data/projects";

export const metadata = {
  title: "Work",
  description: "Selected frontend projects by Parth Panchal across React, WordPress, Shopify, WooCommerce and JavaScript.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="work-page">
      <div className="work-page-inner">
        <div className="work-page-top mono"><Link href="/">← P@RTH</Link><span>Work / 15 projects</span></div>
        <header className="work-page-heading">
          <span className="mono">/ Selected work</span>
          <h1>PROJECTS<br /><span>BUILT IN THE BROWSER.</span></h1>
          <p>Frontend work across React, WordPress, Shopify and WooCommerce — collected in one place.</p>
        </header>
        <div className="work-list">
          {projects.map((project, index) => (
            <article className="work-card" key={project.id}>
              <div className="work-card-number mono">{String(index + 1).padStart(2, "0")}</div>
              <Link href={`/work/${project.slug}`} className="work-card-image">
                <Image src={project.image} alt={`${project.name} project preview`} sizes="(max-width: 820px) 100vw, 65vw" />
              </Link>
              <div className="work-card-info">
                <span className="mono">{project.platform}</span>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="work-card-tech mono">{project.technologies.join(" / ")}</div>
                <Link className="work-card-link mono" href={`/work/${project.slug}`}>Open project ↗</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

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

function getScope(project: (typeof projects)[number]) {
  switch (project.platform) {
    case "React":
      return [
        "Component-driven interface development",
        "Responsive layout and interaction behavior",
        "Reusable frontend patterns with React",
      ];
    case "Shopify":
      return [
        "Storefront frontend implementation",
        "Custom styling and interaction behavior",
        "Responsive commerce interface work",
      ];
    case "WordPress":
      return [
        "Content-driven frontend implementation",
        "Responsive layout and custom styling",
        project.technologies.includes("WooCommerce")
          ? "WooCommerce storefront interface work"
          : "JavaScript interaction and browser behavior",
      ];
    default:
      return [
        "Responsive frontend implementation",
        "Structured content and visual hierarchy",
        "JavaScript interaction and browser behavior",
      ];
  }
}

function getImplementation(project: (typeof projects)[number]) {
  const implementation = [
    `Built within ${project.platform} using ${project.technologies.join(", ")}.`,
    "Translated the visual direction into responsive browser-ready UI rather than relying on a one-size-fits-all layout.",
    "Kept the implementation focused on the requirements of the interface, with custom frontend work where the platform alone was not enough.",
  ];

  if (project.platform === "React") {
    implementation[2] = "Used React to keep interface pieces structured and reusable while preserving a straightforward page experience.";
  }

  if (project.platform === "Shopify") {
    implementation[2] = "Worked within the storefront platform while using custom frontend code for the parts of the experience that needed more control.";
  }

  if (project.technologies.includes("WooCommerce")) {
    implementation[2] = "Worked within WooCommerce while shaping the surrounding frontend so the commerce experience stayed visually consistent.";
  }

  return implementation;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const previous = projects[index - 1];
  const next = projects[index + 1];
  const scope = getScope(project);
  const implementation = getImplementation(project);

  return (
    <main className="project-page">
      <div className="project-page-inner">
        <div className="project-page-top mono">
          <Link href="/work">← All work</Link>
          <span>{String(project.id).padStart(2, "0")} / {project.platform}</span>
        </div>

        <header className="project-page-heading">
          <div className="project-page-kicker mono">
            <span>Project / {String(project.id).padStart(2, "0")}</span>
            <span>{project.platform}</span>
          </div>
          <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </div>
        </header>

        <div className="project-page-image">
          <Image
            src={project.image}
            alt={`${project.name} project preview`}
            priority
            sizes="(max-width: 820px) 100vw, 1320px"
          />
        </div>

        <section className="project-page-details" aria-label="Project details">
          <div>
            <span className="mono">Role</span>
            <strong>Frontend development</strong>
          </div>
          <div>
            <span className="mono">Platform</span>
            <strong>{project.platform}</strong>
          </div>
          <div>
            <span className="mono">Stack</span>
            <strong>{project.technologies.join(" / ")}</strong>
          </div>
        </section>

        <section className="project-case-study">
          <div className="project-section-label mono">01 / Scope</div>
          <div className="project-section-content">
            <h2>What I worked on</h2>
            <ul>
              {scope.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="project-case-study">
          <div className="project-section-label mono">02 / Implementation</div>
          <div className="project-section-content">
            <h2>From design to browser</h2>
            <div className="project-copy-stack">
              {implementation.map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
        </section>

        <section className="project-case-study project-case-study-last">
          <div className="project-section-label mono">03 / Takeaway</div>
          <div className="project-section-content">
            <h2>The frontend is part of the product.</h2>
            <p>
              The work on {project.name} was not only about making a page match a design. It was about making the interface hold together across content, interaction, platform constraints and different screen sizes.
            </p>
          </div>
        </section>

        <nav className="project-next-nav" aria-label="Project navigation">
          {previous ? (
            <Link href={`/work/${previous.slug}`} className="project-nav-item">
              <span className="mono">← Previous</span>
              <strong>{previous.name}</strong>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/work/${next.slug}`} className="project-nav-item project-nav-next">
              <span className="mono">Next →</span>
              <strong>{next.name}</strong>
            </Link>
          ) : <Link href="/work" className="project-nav-item project-nav-next">
            <span className="mono">Finish / All work →</span>
            <strong>View the complete archive</strong>
          </Link>}
        </nav>
      </div>
    </main>
  );
}

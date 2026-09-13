import Image from "next/image";
import { featuredProjects } from "../../data/projects";

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="work-inner">
        <div className="section-head"><h2 className="section-title">WORK</h2><span className="section-meta mono">Selected projects / 04</span></div>
        {featuredProjects.map((project, index) => (
          <article className="project" key={project.id}>
            <div className="project-number mono">{String(index + 1).padStart(2, "0")}</div>
            <div className="project-grid">
              <div className="project-visual"><Image src={project.image} alt={project.name} sizes="(max-width: 820px) 100vw, calc(100vw - 430px)" /></div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tech mono">{project.technologies.map((item) => <span key={item}>{item}<br /></span>)}</div>
                <a className="project-link mono" href={`/work/${project.slug}`}>View project ↗</a>
              </div>
            </div>
          </article>
        ))}
        <a className="all-work mono" href="/work">View all 15 projects ↗</a>
      </div>
    </section>
  );
}

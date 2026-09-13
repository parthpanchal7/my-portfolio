type Capability = { label: string; title: string; copy: string; tags: string[] };

const items: Capability[] = [
  { label: "01 / Interfaces", title: "Interfaces", copy: "Responsive websites, design-to-code implementation and interaction systems that remain coherent across screen sizes.", tags: ["HTML", "CSS", "JavaScript"] },
  { label: "02 / Frontend", title: "Frontend", copy: "React, JavaScript, CSS and component systems shaped around the actual interface rather than abstraction for its own sake.", tags: ["React", "Tailwind", "MUI"] },
  { label: "03 / Commerce", title: "Commerce", copy: "Shopify and WooCommerce storefronts, custom sections and frontend improvements where experience and conversion meet.", tags: ["Shopify", "WooCommerce"] },
  { label: "04 / CMS", title: "CMS", copy: "WordPress builds, custom themes and content-driven websites where the editing experience matters too.", tags: ["WordPress", "ACF", "Custom Themes"] },
];

export default function Capabilities() {
  return (
    <section className="cap">
      <div className="cap-inner">
        <div className="cap-head"><div className="mono">/ 03 — What I build</div><h2>Useful things,<br />built properly.</h2></div>
        <div className="cap-grid">
          {items.map((item) => <article className="cap-item" key={item.title}><span className="mono">{item.label}</span><h3>{item.title}</h3><p>{item.copy}</p><div className="tech-tags">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></article>)}
        </div>
      </div>
    </section>
  );
}

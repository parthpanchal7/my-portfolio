"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import parth from "../assets/images/parth.png";
import { featuredProjects } from "../data/projects";

function Cursor() {
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    let frame = 0;
    const move = (event: MouseEvent) => { target.current.x = event.clientX; target.current.y = event.clientY; };
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      cursor.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };
    const updateState = (element: Element | null) => {
      const heading = element?.closest("h1, h2, h3, h4, h5, h6");
      const link = element?.closest("a, button");
      cursor.classList.toggle("is-heading", !!heading);
      cursor.classList.toggle("is-link", !!link && !heading);
    };
    const enter = (event: MouseEvent) => updateState(event.target as Element | null);
    const leave = (event: MouseEvent) => updateState(event.relatedTarget as Element | null);
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    document.documentElement.classList.add("cursor-ready");
    frame = requestAnimationFrame(tick);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("cursor-ready");
    };
  }, []);
  return <span ref={cursorRef} className="cursor-dot" aria-hidden="true" />;
}

function Header() {
  return <header className="site-header"><a className="logo-text" href="#">P@RTH</a><nav className="nav"><a href="#work">Work</a><a href="#journal">Notes</a><a href="#about">About</a><a href="#contact">Contact <span>↗</span></a></nav></header>;
}

function Hero() {
  return <section className="hero"><div className="hero-inner"><div className="hero-grid"><div><div className="hero-kicker mono">01 — Frontend developer / India / 2026</div><h1 className="hero-title">PARTH<br /><span className="outline">PANCHAL</span></h1></div><aside className="hero-side"><p className="lead">I build thoughtful interfaces for the web — from React applications to commerce and content-driven websites.</p><div className="meta mono"><div className="meta-row"><span>Focus</span><span>Frontend</span></div><div className="meta-row"><span>Core</span><span>React / JavaScript</span></div><div className="meta-row"><span>Commerce</span><span>Shopify / WooCommerce</span></div><div className="meta-row"><span>CMS</span><span>WordPress</span></div></div></aside><div className="hero-foot"><span className="mono">Design → Interface → Browser</span><span className="mono">Scroll to explore <span className="scroll-mark">↓</span></span></div></div></div></section>;
}

function Intro() {
  return <section className="intro"><div className="intro-inner"><div className="mono">/ 02 — Introduction</div><div><p className="intro-copy">I care about the space between a <em>good design</em> and a <em>great interface</em> — the structure, behavior and details that make a website feel finished.</p><div className="intro-bottom"><p>Not a list of technologies. Not a collection of screenshots. The work here is about how ideas become real, responsive interfaces.</p><span className="mono">React / JavaScript / WordPress / Shopify</span></div></div></div></section>;
}

function Work() {
  return <section className="work" id="work"><div className="work-inner"><div className="section-head"><h2 className="section-title">WORK</h2><span className="section-meta mono">Selected projects / 04</span></div>{featuredProjects.map((project, index) => <article className="project" key={project.id}><div className="project-number mono">{String(index + 1).padStart(2, "0")}</div><div className="project-grid"><div className="project-visual"><Image src={project.image} alt={project.name} sizes="(max-width: 820px) 100vw, calc(100vw - 430px)" /></div><div className="project-info"><h3>{project.name}</h3><p>{project.description}</p><div className="project-tech mono">{project.technologies.map((item) => <React.Fragment key={item}>{item}<br /></React.Fragment>)}</div><a className="project-link mono" href={`/work/${project.slug}`}>View project ↗</a></div></div></article>)}<a className="all-work mono" href="/work">View all 15 projects ↗</a></div></section>;
}

type Capability = { label: string; title: string; copy: string; tags: string[] };

function Capabilities() {
  const items: Capability[] = [
    { label: "01 / Interfaces", title: "Interfaces", copy: "Responsive websites, design-to-code implementation and interaction systems that remain coherent across screen sizes.", tags: ["HTML", "CSS", "JavaScript"] },
    { label: "02 / Frontend", title: "Frontend", copy: "React, JavaScript, CSS and component systems shaped around the actual interface rather than abstraction for its own sake.", tags: ["React", "Tailwind", "MUI"] },
    { label: "03 / Commerce", title: "Commerce", copy: "Shopify and WooCommerce storefronts, custom sections and frontend improvements where experience and conversion meet.", tags: ["Shopify", "WooCommerce"] },
    { label: "04 / CMS", title: "CMS", copy: "WordPress builds, custom themes and content-driven websites where the editing experience matters too.", tags: ["WordPress", "ACF", "Custom Themes"] },
  ];
  return <section className="cap"><div className="cap-inner"><div className="cap-head"><div className="mono">/ 03 — What I build</div><h2>Useful things,<br />built properly.</h2></div><div className="cap-grid">{items.map((item) => <article className="cap-item" key={item.title}><span className="mono">{item.label}</span><h3>{item.title}</h3><p>{item.copy}</p><div className="tech-tags">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></article>)}</div></div></section>;
}

function Journal() {
  return <section className="journal" id="journal"><div className="journal-inner"><div className="journal-head"><h2>JOURNAL</h2><span className="mono">Ideas / experiments / things learned</span></div><div className="journal-grid"><article className="journal-feature"><div className="label-row"><span className="mono">001 / Latest</span><span className="mono">Frontend</span></div><div><h3>The small details that make an interface feel finished.</h3><p>Spacing, typography, states and transitions — the things users notice without necessarily knowing why.</p><div className="journal-visual" /></div><div className="note-footer"><a className="read mono" href="#">Read article ↗</a><span className="note-date mono">5 min read</span></div></article><article className="journal-small"><span className="mono">002 / React</span><h3>When does a component actually deserve to exist?</h3><p>Thoughts on reusable UI without turning a simple interface into an architecture exercise.</p><div className="note-footer"><a className="read mono" href="#">Read ↗</a><span className="note-date mono">7 min</span></div></article><article className="journal-small"><span className="mono">003 / Process</span><h3>Design-to-code is a translation problem.</h3><p>What gets lost between a polished design file and a responsive browser — and how to avoid it.</p><div className="note-footer"><a className="read mono" href="#">Read ↗</a><span className="note-date mono">6 min</span></div></article></div></div></section>;
}

function Philosophy() {
  return <section className="philosophy"><div className="philosophy-inner"><div className="mono">/ 05 — How I approach a frontend</div><p className="philosophy-copy">I start with the <strong>interface.</strong><br />Before the framework.<br />Before the component.<br />Before the animation.</p><div className="principles"><article className="principle"><span className="mono">01</span><h3>Clarity first</h3><p>Good interfaces should communicate hierarchy before they try to impress.</p></article><article className="principle"><span className="mono">02</span><h3>Responsive by nature</h3><p>A layout isn't finished when it works at one viewport. The behavior between them matters.</p></article><article className="principle"><span className="mono">03</span><h3>Details earn attention</h3><p>States, spacing, motion and feedback are part of the interface — not decoration added at the end.</p></article></div></div></section>;
}

function About() {
  return <section className="about" id="about"><div className="about-inner"><div className="about-photo"><Image src={parth} alt="Parth Panchal" sizes="(max-width: 820px) 100vw, 460px" /></div><div className="about-copy"><div className="mono">/ 06 — About Parth</div><h2>FRONTEND<br />DEVELOPER.</h2><p>I'm Parth Panchal. I enjoy the part between a design file and a finished interface — taking a visual idea and figuring out how it should actually behave in the browser.</p><div className="about-details mono"><span>India</span><span>/</span><span>Frontend Development</span><span>/</span><span>React / WordPress / Shopify</span></div><div className="about-links mono"><a href="https://github.com/parthpanchal7/my-portfolio">GitHub ↗</a><a href="https://www.linkedin.com/in/parth-panchal-a3992ba8/">LinkedIn ↗</a></div></div></div></section>;
}

function Contact() {
  return <section className="contact" id="contact"><div className="contact-inner"><div className="mono">/ 07 — Contact</div><h2>HAVE SOMETHING<br />WORTH <span>BUILDING?</span></h2><div className="contact-bottom"><a className="email" href="mailto:parth.webdev18@gmail.com">parth.webdev18@gmail.com</a><span className="contact-note mono">Good briefs welcome.<br />Interesting problems too. ↗</span></div></div></section>;
}

export default function Portfolio() {
  return <><Cursor /><Header /><main><Hero /><Intro /><Work /><Capabilities /><Journal /><Philosophy /><About /><Contact /></main><footer><div className="footer-row"><span className="footer-brand">P@RTH</span><span className="mono">Frontend developer / India</span><span className="mono">© 2026 Parth Panchal</span></div></footer></>;
}

import Image from "next/image";
import parth from "../../assets/images/parth.png";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-photo"><Image src={parth} alt="Parth Panchal" sizes="(max-width: 820px) 100vw, 460px" /></div>
        <div className="about-copy">
          <div className="mono">/ 06 — About Parth</div>
          <h2>FRONTEND<br />DEVELOPER.</h2>
          <p>I'm Parth Panchal. I enjoy the part between a design file and a finished interface — taking a visual idea and figuring out how it should actually behave in the browser.</p>
          <div className="about-details mono"><span>India</span><span>/</span><span>Frontend Development</span><span>/</span><span>React / WordPress / Shopify</span></div>
          <div className="about-links mono">
            <a href="https://github.com/parthpanchal7/my-portfolio" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/parth-panchal-a3992ba8/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import "./Projects.css";
import vestedImage from "../../assets/images/projects/vested-new.png";
import triyockImage from "../../assets/images/projects/triyock.png";
import slowBazaarImage from "../../assets/images/projects/slowbazaar.png";
import classMateImage from "../../assets/images/projects/classmate.png";
import HPBImage from "../../assets/images/projects/haven-pharmacy.png";
import ScoilImage from "../../assets/images/projects/scoil.png";
import BBBImage from "../../assets/images/projects/blues-breaker-box.png";
import barpaImage from "../../assets/images/projects/barpa.png";
import amdellImage from "../../assets/images/projects/amdell.png";
import barbotImage from "../../assets/images/projects/barbot.png";
import lancerImage from "../../assets/images/projects/lancer-new.png";
import leImage from "../../assets/images/projects/luxury-exchange.png";
import npImage from "../../assets/images/projects/national-pharmacy.png";
import tomGavinImage from "../../assets/images/projects/tom-gavin.png";
import GamePlanImage from "../../assets/images/projects/gameplan.png";
import htmlIcon from "../../assets/images/icons/html.svg";
import jsIcon from "../../assets/images/icons/js.svg";
import wordpressIcon from "../../assets/images/icons/wordpress.svg";
import wooIcon from "../../assets/images/icons/woocommerce.svg";
import shopifyIcon from "../../assets/images/icons/shopify.svg";
import cssIcon from "../../assets/images/icons/css.svg";
import reactIcon from "../../assets/images/icons/reactjs.svg";
import tailwindIcon from "../../assets/images/icons/tailwind.svg";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const projects = [
    {
      id: 1,
      name: "Vested Finance",
      image: vestedImage,
      technologies: [
        { name: "Wordpress", icon: wordpressIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: 2,
      name: "Triyock BPO",
      image: triyockImage,
      technologies: [
        { name: "HTML", icon: htmlIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: 3,
      name: "ClassMate",
      image: classMateImage,
      technologies: [
        { name: "ReactJs", icon: reactIcon },
        { name: "Tailwind", icon: tailwindIcon },
      ],
    },
    {
      id: 4,
      name: "SlowBazaar",
      image: slowBazaarImage,
      technologies: [
        { name: "Shopify", icon: shopifyIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: 5,
      name: "Haven Pharmacy Burkes",
      image: HPBImage,
      technologies: [
        { name: "Wordpress", icon: wordpressIcon },
        { name: "Woocommerce", icon: wooIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: 6,
      name: "Blues Breaker Box",
      image: BBBImage,
      technologies: [
        { name: "HTML", icon: htmlIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: 7,
      name: "Barpa",
      image: barpaImage,
      technologies: [
        { name: "Wordpress", icon: wordpressIcon },
        { name: "Woocommerce", icon: wooIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: 8,
      name: "Barbot",
      image: barbotImage,
      technologies: [
        { name: "Wordpress", icon: wordpressIcon },
        { name: "Woocommerce", icon: wooIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: 9,
      name: "Amdell",
      image: amdellImage,
      technologies: [
        { name: "Wordpress", icon: wordpressIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: 10,
      name: "Lancer",
      image: lancerImage,
      technologies: [
        { name: "ReactJs", icon: reactIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "Tailwind", icon: tailwindIcon },
      ],
    },
    {
      id: 11,
      name: "Tom Gavin",
      image: tomGavinImage,
      technologies: [
        { name: "Wordpress", icon: wordpressIcon },
        { name: "Woocommerce", icon: wooIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: 12,
      name: "Luxury Exchange",
      image: leImage,
      technologies: [
        { name: "Shopify", icon: shopifyIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: 13,
      name: "National Pharmacy",
      image: npImage,
      technologies: [
        { name: "Shopify", icon: shopifyIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: 14,
      name: "Scoil na nÓg",
      image: ScoilImage,
      technologies: [
        { name: "Wordpress", icon: wordpressIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "CSS", icon: cssIcon },
      ],
    },
    {
      id: 15,
      name: "GamePlan",
      image: GamePlanImage,
      technologies: [
        { name: "Wordpress", icon: wordpressIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "CSS", icon: cssIcon },
      ],
    }
  ];
  return (
    <section id="projects">
      <div className="container projects-container">
        <h2 className="section-title">
          Here's What <span>I've Done So Far</span>
        </h2>

        <div className="projects-grid">
          {projects.slice(0, visibleCount).map((project) => (
            <div key={project.id} className="single-project">
              <div className="project-img">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-meta">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-stacks">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="single-project-stack">
                      <img src={tech.icon} alt={tech.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < projects.length && (
  <div className="load-more-wrapper text-center">
    <button
      className="btn load-more-btn"
      onClick={() => setVisibleCount((prev) => prev + 3)}
    >
      Load More
    </button>
  </div>
)}

      </div>
    </section>
  );
};

export default Projects;

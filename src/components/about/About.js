import React from "react";
import "./About.css";
import parthImg from "../../assets/images/parth.png";

const About = () => {
    return (
        <section id="about">
            <div className="container about-container">
                <h2 className="section-title">About <span>Myself</span></h2>

                <div className="about-wrap">
                    <div className="about-col">
                        <div className="about-img">
                            <img src={parthImg} alt="Parth" />
                        </div>
                    </div>
                    <div className="about-col">
                        <div className="about-content">
                            <p>Hi, I'm Parth Panchal, a dedicated and passionate Web Developer. I have the skills and experience to build websites that are not only visually appealing but also functional and user-friendly.</p>
                            <p>I enjoy every part of the development process—from brainstorming ideas and collaborating with clients to designing and bringing projects to life. What I love the most is seeing a finished product that works exactly as intended and adds value to your business.</p>
                            <p>With a strong understanding of modern web technologies, I am committed to delivering high-quality solutions tailored to your needs. Let's work together to create something amazing!</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About;
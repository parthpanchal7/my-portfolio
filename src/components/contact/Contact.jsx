import React from "react";
import "./Contact.css";
import linkedinIcon from "../../assets/images/icons/linkedin.svg";

const Contact = () => {
    return (
        <section id="contact">
            <div className="container contact-container">
                <h2 className="section-title w-100 large justify-content-center">Get In Touch </h2>
                <p className="desc-note text-center">Feel free to reach out anytime! Whether you have a question, a project idea, or just want to say hello, I'd love to hear from you. I'll get back to you as soon as possible!</p>
                <div className="contact-btn text-center">
                    <a href="mailto:parth.webdev18@gmail.com" className="btn">Zap Me a Note ⚡</a>
                </div>
                <div className="social-link text-center">
                    <a href="https://www.linkedin.com/in/parth-panchal-a3992ba8/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
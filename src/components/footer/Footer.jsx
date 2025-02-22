import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-footer">
          <div className="top-footer-wrap">
            <div className="footer-logo">
              <a href="#about">P@rth</a>
            </div>
            <div className="footer-menu">
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
      </div>
      <div className="bottom-footer">
        <p className="text-center mt-0 mb-0">Made with ❤️ P@rth</p>
      </div>
    </footer>
  );
};

export default Footer;

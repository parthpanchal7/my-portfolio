import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
        <div className="banner-bg top">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid-pattern)"></rect></svg>
        </div>
        <div className="banner-bg bottom">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid-pattern)"></rect></svg>
        </div>
        <div className="banner-inner">
            <h1>Hi 👋, I'm Parth I. Panchal <strong>Software Developer</strong> </h1>
            <p>I'm a software developer who loves to build things for the web.</p>
            <div className="text-center mt-20">
                <a href="#about" className="btn">Get In Touch</a>
            </div>
        </div>
    </div>
  );
};

export default Banner;

import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
        <div className="header-inner">
            <div className="header-col">
                <div className="site-name">
                    <a href="/">P@rth</a>

                    <button className="toggle-btn">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                    </button>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
      };
  return (
    <header className="header">
        <div className="header-inner">
            <div className="header-col" data-open={menuOpen}>
                <div className="site-name">
                    <a href="/">P@rth</a>

                    <button className="toggle-btn" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                        </svg>
                    </button>
                </div>
                <div className={`nav-links ${menuOpen ? 'menu-collapsed' : ''}`}>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;

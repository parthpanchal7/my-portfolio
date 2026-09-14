"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Notes", href: "/notes" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact", external: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header${open ? " menu-is-open" : ""}`}>
      <Link className="logo-text" href="/" onClick={closeMenu}>P@RTH</Link>

      <nav className="nav" aria-label="Primary navigation">
        {links.map((link) => (
          <Link key={link.label} href={link.href} onClick={closeMenu}>
            {link.label} {link.external && <span>↗</span>}
          </Link>
        ))}
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="menu-toggle-label">{open ? "Close" : "Menu"}</span>
        <span className="menu-icon" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>

      <div id="mobile-navigation" className={`mobile-nav${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-nav-inner">
          <div className="mobile-nav-top mono">
            <span>Navigation</span>
            <span>Parth Panchal / India</span>
          </div>

          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            {links.map((link, index) => (
              <Link key={link.label} href={link.href} onClick={closeMenu} tabIndex={open ? 0 : -1}>
                <span className="mobile-nav-number mono">0{index + 1}</span>
                <span className="mobile-nav-name">{link.label}</span>
                <span className="mobile-nav-arrow">{link.external ? "↗" : "→"}</span>
              </Link>
            ))}
          </nav>

          <div className="mobile-nav-foot mono">
            <span>Frontend / React / Web</span>
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </header>
  );
}

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { navLinks } from "../utils/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          {"</> ABHAY"}
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="/Abhayjeet_Sharma_Resume.pdf"
          download
          className="mt-1 contact-btn group"
        >
          <div className="inner">
            <span>Download Resume</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;

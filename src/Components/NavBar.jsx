import React from 'react'
import logo from '../images/Logo.svg';
import menuIcon from '../images/Menu.svg';
import menuMovil from '../images/menu-movil.svg';
import call from '../images/call.svg';
// import { useState, useEffect } from "react";

export const NavBar = () => {
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //     const isScrolled = window.scrollY > 0;
    //     setScrolled(isScrolled);
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

  return (
    <header >
      <nav
        // className={scrolled ? "nav nav-fixed" : "nav"}
        className="nav"
        role="navigation"
        aria-label="Barra de navegación principal"
      >
        <div className="logo-container">
          <button className="menu-button">
            <img src={menuMovil} alt="menu movil" className="left-image" />
          </button>
          <a href="/">
            <img src={logo} alt="Logo" className="logo nav-link" />
          </a>
          <a href="/" className="call-button">
            <img src={call} alt="call" className="right-image" />
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              TAMAULIPAS 80
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              BAJA CALIFORNIA 262
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              AMORES 127
            </a>
          </li>
          <li>
            <a href="/" className="nav-link-bookings">
              RESERVAS
            </a>
          </li>
          <button className="menu-icon-second">
            <img src={menuIcon} alt="Menú" className="menu-icon" />
          </button>
        </ul>
      </nav>
    </header>
  );
}

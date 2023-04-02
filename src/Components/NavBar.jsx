import React from 'react'
import logo from '../images/Logo.svg';
import menu from '../images/menu-desktop.svg';
import menuMovil from '../images/menu-movil.svg';
import call from '../images/call.svg';
// import { useState, useEffect } from "react";

export const NavBar = () => {

  const handleClick = (event) => {
    event.preventDefault();
  }
    

  return (
    <header >
      <nav className="nav" role="navigation" aria-label="Barra de navegación principal">
          <button className="nav__menu-movil">
            <img src={menuMovil} alt="menu movil" className="nav__movil-img" />
          </button>
          <a href="/" onClick={handleClick}>
            <img src={logo} alt="Logo" className="nav__logo nav__link" />
          </a>
          <a href="/" className="nav__call">
            <img src={call} alt="call" className="nav__call-img" />
          </a>
        
        <ul className="nav__links">
          <li>
            <a href="/" className="nav__link" onClick={handleClick}>
              TAMAULIPAS 80
            </a>
          </li>
          <li>
            <a href="/" className="nav__link" onClick={handleClick}>
              BAJA CALIFORNIA 262
            </a>
          </li>
          <li>
            <a href="/" className="nav__link" onClick={handleClick}>
              AMORES 127
            </a>
          </li>
          <li>
            <button href="/" className="nav__link-bookings" onClick={handleClick}>
              RESERVAS
            </button>
          </li>
          <button className="nav__menu-desktop">
            <img src={menu} alt="Menú" className="nav__desktop-img" />
          </button>
        </ul>
      </nav>
    </header>
  );
}

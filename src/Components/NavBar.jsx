// import React from 'react'
// import logoMenu from 'public/logo-menu.svg';
// import callMenu from 'public/call-menu.svg';
// import menu from 'public/menu-desktop.svg';
// import menuMovil from 'public/menu-movil.svg';
// import call from 'public/call.svg';
// import buho from 'public/buho-menu.svg';
// import instagram from 'public/instagram-menu.svg';
// import closeMenu from 'public/close-menu.svg';
// import imageMenu from 'public/image-menu.png';



import { useState, useEffect } from "react";


export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
  }


  
    

  return (
    <header >
      <nav className="nav" role="navigation" aria-label="Barra de navegación principal">
          <button className="nav__menu-movil" onClick={() => setMenuOpen(true)}>
            <img src='public/menu-movil.svg' alt="menu movil" className="nav__movil-img" />
          </button>
          <a href="/" onClick={handleClick}>
            <img src='public/Logo.svg' alt="Logo" className="nav__logo nav__link" />
          </a>
          <a href="/" className="nav__call">
            <img src='public/call.svg' alt="call" className="nav__call-img" />
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
          <button className="nav__menu-desktop" onClick={() => setMenuOpen(true)}>
            <img src='public/menu-desktop.svg' alt="Menú" className="nav__desktop-img" />
          </button>
        </ul>
      </nav>
          {menuOpen && (
      <div className="nav__menu-open ">

          <button className="nav__menu-movil" onClick={() => setMenuOpen(true)}>
            <img /* src={menuMovil} */ alt="menu movil" className="nav__movil-img" />
          </button>
          <a href="/" onClick={handleClick}>
            {/* <img src={logo} alt="Logo" className="nav__logo-dropdown-menu nav__link" /> */}
          </a>
          <a href="/" className="nav__call">
            <img /* src={call} */ alt="call" className="nav__call-img" />
          </a>


        <div className="nav__menu-header">
         <div className="nav__menu-phone">
           <img src='public/call-menu.svg' alt="call menu" />
           <p className="nav__menu-number">+52 55 4204 7091</p>
         </div>
          <div className="nav__menu-buttons">
            <button className="nav__menu-button-call">
            SOLICITAR LLAMADA
            </button>
            <button className='nav__close-menu' onClick={() => setMenuOpen(false)}>
              <img className='nav__close-image' src='public/close-menu.svg' alt="Cerrar menú" />
            </button>
          </div>
        </div>
        <div className="nav__menu-content">

          <div className="nav__menu-image">
            <img src='public/image-menu.png' alt="image" />
          </div>

          <div className="nav__menu-content-links">
            <img src='public/logo-menu.svg' alt="logo" />
            <p>MENÚ</p>
            <a href="/" onClick={handleClick}>Amenidades</a>
            <a href="/" onClick={handleClick}>Departamentos</a>
            <a href="/" onClick={handleClick}>Nosotros</a>
            <a href="/" onClick={handleClick}>Contacto</a>
          </div>

          <div className="nav__menu-go-home-page">
            <a href="/">ir a página principal</a>
          </div>

        </div>

        <div className="nav__menu-footer">
          <div className="nav__menu-a">
            <p>{new Date().getFullYear()} &copy; MY SUITES BY LA CONDESA</p>
            <a className="nav__menu-enlace"href="/" onClick={handleClick}>AVISO DE PRIVACIDAD</a>
            <a className="nav__menu-enlace"href="/" onClick={handleClick}>info@mysuiteslacondesa.com</a>
            <a className="nav__menu-enlace"href="/" onClick={handleClick}>DEPARTAMENTOS CASA SAN RAFAEL</a>
          </div>
          <div className="nav__menu-img">
            <a href="https://www.instagram.com" target="_blank">
              <img src='public/buho-menu.svg' alt="icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img src='public/instagram-menu.svg' alt="icon" />
            </a>
          </div>
        </div>
      </div>
      )}
    </header>
  );
}

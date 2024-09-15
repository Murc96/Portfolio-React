import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './img/logo_transparent.svg';

function Navbar({ loadContent }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (page) => {
    loadContent(page);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  return (
    <div className="navbar" id="navbar">
      <img className="header-logo" src={logo} alt="Logo" />
      <div className="menu-icon" onClick={toggleMenu}>☰</div>
      <div id="navbar-links" className="navbar-links">
        <button onClick={() => loadContent('home')}>Home</button>
        <button onClick={() => loadContent('projects')}>Projects</button>
        <button onClick={() => loadContent('contact')}>Contact</button>
      </div>
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => handleMenuItemClick('home')}>Home</button>
        <button onClick={() => handleMenuItemClick('projects')}>Projects</button>
        <button onClick={() => handleMenuItemClick('contact')}>Contact</button>
      </div>
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
}

export default Navbar;


import React from 'react';
import './NavBar.css';
import logo from '../logo.svg';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item logo">
          <a href="#home">
            <img src={logo} alt="Brand Logo" />
          </a>
        </li>
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#services">Services</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
        <li className="nav-item"><a href="#login" className="login-button">Login</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;

// src/components/Navbar.js
import React from "react";
import "../styles/Navbar.css"; // Assume you have CSS for Navbar

function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo">
        <a href="#home">
          <img src="../images/logo/OLA TECH LOGO.jpg" alt="Logo" height="50" />
        </a>
      </div>
      <button className="hamburger" id="hamburger">
        &#9776;
      </button>
      <div className="nav-links" id="navLinks">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#hireme">Hire Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

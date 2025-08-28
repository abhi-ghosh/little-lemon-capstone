import React, { useState } from 'react';
import {navLinks} from './link-content';
import Links from './links';
import logo from './assets/logo.png';
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const click = () => {
    isOpen?console.log("Menu Closed"):console.log("Menu Opened");
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav-container">
      <div className="nav">
        <img src={logo} alt="Little Lemon Logo" />

        {/* Hamburger button */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={click}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Add conditional class here */}
        <Links
          className={`nav-links ${isOpen ? "active" : ""}`}
          links={navLinks}
        />
      </div>
    </nav>
  );
}
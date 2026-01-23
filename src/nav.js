import React, { useState, useEffect } from 'react';
import {navLinks} from './link-content';
import Links from './links';
import logo from './assets/logo.png';
import { Link } from 'react-router';
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const click = () => {
    isOpen?console.log("Menu Closed"):console.log("Menu Opened");
    setIsOpen(!isOpen);
  };
   // Lock scroll when menu is open
  useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }

      // Cleanup on unmount
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isOpen]);
  // Close menu when clicking outside
useEffect(() => {
  function handleClickOutside(e) {
    const nav = document.querySelector(".nav"); // your whole nav container

    // If menu is open AND click is outside nav
        if (isOpen && nav && !nav.contains(e.target)) {
          setIsOpen(false);
        }
      }

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [isOpen]);
  return (
    <nav className="nav-container">
      <div className="nav">
        <Link to="/"><img src={logo} alt="Little Lemon Logo" /></Link>

        {/* Hamburger button */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={click}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Conditional class to show/hide nav links */}
        <Links
          className={`nav-links ${isOpen ? "active" : ""}`}
          links={navLinks}
          linkClick = {()=>setIsOpen(false)}
        />
      </div>
    </nav>
  );
}
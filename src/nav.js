import React from 'react';
import {navLinks} from './link-content';
import Links from './links';
import logo from './assets/logo.png';
export default function Nav() {
  return (
    <nav className="nav-container">
      <div className="nav">
        <img src={logo} alt="Little Lemon Logo" />
        <Links className = "nav-links" links={navLinks}/>
      </div>
    </nav>
  );
}
import React from 'react';
import {navLinks} from './link-content';
import Links from './links';
export default function Nav() {
  return (
    <nav>
      <img src="logo.png" alt="Little Lemon Logo" />
      <Links className = "nav-links" links={navLinks}/>
    </nav>
  );
}
import React from 'react';
import {navLinks, footerLinks} from './link-content';
import Links from './links';
import logo from './assets/logo.png';
export default function Footer() {
  return (
    <footer>
      <img src={logo} alt= "Little Lemon Logo" />
      <div className='dormat-navigation'>
        <p>Doormat Navigation</p>
        <Links className="footer-links" links={navLinks} />
      </div>
      <div className='contact'>
        <p>Contact</p>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
      <div className='socials'>
        <p>Doormat Navigation</p>
        <Links className="footer-links" links={footerLinks} />
      </div>
    </footer>
  );
}
import React, {forwardRef } from 'react';
import pin from './assets/pin.png';
import phone from './assets/phone.png';
import mail from './assets/mail.png';
import {footerLinks} from './link-content';
import Links from './links';
import verticalLogo from './assets/lemon-vertical.png';
const Footer = forwardRef((props, ref) => {
  return (
      <footer ref={ref} className = "footer-container">
        <div className='footer-content'>
          <img className='footer-logo' src={verticalLogo} alt= "Little Lemon Logo" />
          <div className='contact'>
            <p>Contact</p>
            <ul>
              <li><img className='contact-icon' src={pin} alt="pin" /> LaSalle Street Chicago, Illinois 60602</li>
              <li><img className='contact-icon' src={phone} alt="phone" /> 123456789</li>
              <li><img className='contact-icon' src={mail} alt="mail" /> littlelemon@lemonhead.com</li>
            </ul>
          </div>
          <div className='socials'>
            <p>Let's Connect!</p>
            <Links className="footer-links" links={footerLinks} imageOnly={true}/>
          </div>
        </div>
      </footer>
  );
});
export default Footer;
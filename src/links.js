import React from 'react';
import {Link} from 'react-router';
export default function Links({ className = "", links = [], imageOnly }) {
  return (
    <ul className={className}>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to = {link.path}
          >
            {imageOnly ? (
              <img className='social-logo' src={link.logo} alt={link.name} />
            ) : (
              link.name
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

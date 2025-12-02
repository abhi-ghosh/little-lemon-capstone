import React from 'react';

export default function Links({ className = "", links = [], imageOnly }) {
  return (
    <ul className={className}>
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {imageOnly ? (
              <img className='social-logo' src={link.logo} alt={link.name} />
            ) : (
              link.name
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

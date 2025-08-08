import React from 'react';
export default function Links({className = "", links = []}) {
  return (
      <ul className = {className}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
  );
}
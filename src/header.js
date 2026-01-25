import React from 'react';
import Nav from './nav';
export default function Header({cartCount}) {
  return (
    <header>
      <Nav cartCount={cartCount}/>
    </header>
  );
}
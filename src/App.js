import './App.css';
import React, { useRef } from 'react';
import Footer from './footer';
import Header from './header';
import { Outlet } from 'react-router';
function App() {
  const footerRef = useRef(null);
  return (
    <div className='App'>
      <Header/>
      <Outlet context={{footerRef}}/>
      <Footer ref={footerRef}/>
    </div>
  );
}

export default App;

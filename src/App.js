import './App.css';
import React from 'react';
import Footer from './footer';
import Header from './header';
import { Outlet } from 'react-router';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;

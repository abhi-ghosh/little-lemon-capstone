import './App.css';
import React, {useState, useRef } from 'react';
import Footer from './footer';
import Header from './header';
import { Outlet } from 'react-router';
function App() {
  const footerRef = useRef(null);
  const [cart, setCart] = useState([]);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, {...product, quantity: 1}]);
  }
  const removeFromCart = (id)=>{
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity < 10
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1}
          : item
      )
    );
  };

  return (
    <div className='App'>
      <Header cartCount= {cartCount}/>
      <div className='page-content'>
       <Outlet context={{footerRef, cart, cartCount,cartTotal, setCart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity}}/>
      </div>
      <Footer ref={footerRef}/>
    </div>
  );
}

export default App;

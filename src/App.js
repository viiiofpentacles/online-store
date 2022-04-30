import './styles/App.css';
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ShopCart from './ShopCart';

function App() {
  const [cart, setCart] = useState({
    items: [],
    totalQty: 0,
    totalCost: 0
});

  function handleAddItemToCartState () {
  }

  function handleCheckout () {
  }

  return (
    <div className="menu">
      <header className="menu-header">
        <div className='logo'>M</div>
        <Link to="/">Home</Link>
        <Link to={{ pathname: "/store", state: { data: cart, handleAddItemToCartState: handleAddItemToCartState } }}>Store</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </header>
      <Outlet />
      {cart.items.length &&
      <ShopCart appState = {cart} handleCheckout = {handleCheckout}/>
      }
    </div>
  );
}

export default App;

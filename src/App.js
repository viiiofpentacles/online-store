import './styles/App.css';
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ShopCart from './ShopCart';
import data from './data';

function App() {
  const [cart, setCart] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  function handleAddItemToCartState () {
      const itemName = document.querySelector('.item-name').textContent;
      const itemQty = document.getElementById('qty-input').value;
      const itemCost = document.querySelector('.item-cost').textContent;
      setCart(cart.concat({name: itemName, qty: itemQty}));
      setTotalQty(totalQty + itemQty);
      setTotalCost(totalCost + (itemCost *itemQty));
  }

  function handleCheckout () {
  }

  return (
    <div className="menu">
      <header className="menu-header">
        <div className='logo'>M</div>
        <Link to="/">Home</Link>
        <Link to={{ pathname: "/store", state: { data: data, handleAddItemToCartState: handleAddItemToCartState } }}>Store</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </header>
      <Outlet />
      {cart.length &&
      <ShopCart totalQty = {totalQty} totalCost = {totalCost} handleCheckout = {handleCheckout}/>
      }
    </div>
  );
}

export default App;

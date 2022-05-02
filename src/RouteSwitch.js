import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import App from './App';
import Home from './Home';
import Store from './Store';
import About from './About';
import Contact from './Contact';

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  function handleAddItemToCartState (itemName, itemCost, itemId) {
      const itemQty = document.getElementById(`qty-input ${itemId}`).value;
      setCart(cart.concat({name: itemName, qty: itemQty}));
      setTotalQty(totalQty + Number(itemQty));
      setTotalCost(totalCost + (itemCost *itemQty));
  }

    return (
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<App cart = {cart} totalQty = {totalQty} totalCost ={totalCost} />}>
          <Route index element={<Home />} />
          <Route path ="store" element={<Store handleAddToCartState = {handleAddItemToCartState} />} />
          <Route path ="about" element={<About />} />
          <Route path ="contact" element={<Contact />} />
          <Route path ="*" element={
            <main>
              <h1>Page Not Found</h1>
              <p>Can't find what you're looking for? <Link to="/contact">Reach out to us.</Link></p>
            </main>
          }
          />
        </Route>
      </Routes>
    </BrowserRouter>
    )
};

export default RouteSwitch;
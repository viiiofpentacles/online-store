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
  const [cart, setCart] = useState(
    {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    }
  );
  const [totalQty, setTotalQty] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  function handleAddItemToCartState (itemCost, itemId) {
      const itemQty = document.querySelector(`[class="${itemId}"]`).value;
      const prevQty = cart[itemId];
      setCart(cartItems => ({
         ...cartItems, 
         [itemId]: prevQty + Number(itemQty)
        })
        );
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
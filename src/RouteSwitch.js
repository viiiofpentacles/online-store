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
import Checkout from './Checkout';

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
      const itemQty = document.querySelector(`#qty-input${itemId}`).value;
      const prevQty = cart[itemId];
      setCart(cartItems => ({
         ...cartItems, 
         [itemId]: prevQty + Number(itemQty)
        })
        );
      setTotalQty(totalQty + Number(itemQty));
      setTotalCost(totalCost + (itemCost *itemQty));
  }

  function handleUpdateCartState (itemCost, itemId) {
    const errorMessage = document.querySelector(`.error-message${itemId}`);
    const itemQty = document.querySelector(`#qty-input${itemId}`).value;
    const prevQty = cart[itemId];
      setCart(cartItems => ({
         ...cartItems, 
         [itemId]: Number(itemQty)
        })
        );
        if (Number(itemQty) > prevQty) {
          setTotalQty(totalQty + Number(itemQty - prevQty));
          setTotalCost(totalCost + (itemCost *(itemQty - prevQty)));
          errorMessage.textContent = '';
        } else if (Number(itemQty) === prevQty) {
          errorMessage.textContent = 'No change to quantity.';
        } else if (Number(itemQty) === 0) {
          setCart(cartItems => ({
            ...cartItems, 
            [itemId]: 0
           })
           );
         setTotalQty(totalQty - Number(prevQty));
         setTotalCost(totalCost - (itemCost *prevQty));
        } else {
          setTotalQty(totalQty - Number(prevQty - itemQty));
          setTotalCost(totalCost - (itemCost *(prevQty - itemQty)));
          errorMessage.textContent = '';
        }
  }

  function handlePayment () {
    setCart({
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    });
    setTotalQty(0);
    setTotalCost(0);
  }

  return (
        <BrowserRouter basename='/online-store'>
      <Routes>
        <Route path="/" element={<App cart = {cart} totalQty = {totalQty} totalCost ={totalCost} />}>
          <Route index element={<Home />} />
          <Route path ="store" element={<Store handleAddToCartState = {handleAddItemToCartState} />} />
          <Route path ="about" element={<About />} />
          <Route path ="contact" element={<Contact />} />
          <Route path ="checkout" element={<Checkout updateCartState = {handleUpdateCartState} cart = {cart} handlePayment = {handlePayment}/>} />
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
import React, { useState, useEffect } from 'react';
// goes into App as a footer, only visible with atleast one item in cart

const ShopCart = () => {
    const [cart, setCart] = useState({
        qty: 0,
        total: 0
    });

    return (
        <div className='cart'>
            <div>{cart.qty} items in cart </div>
            <div>Cart Total: {cart.total}</div>
            <button className='checkout-button'>Checkout</button>
        </div>
    );
};


export default ShopCart;
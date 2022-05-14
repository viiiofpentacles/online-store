import React from 'react';
import CartItem from './CartItem'
import data from './data';

const Checkout = (props) => {
    const listCartItems = props?.cart;
    const itemArray = [];
    for (const item in listCartItems) {
        if (listCartItems[item] > 0) {
            itemArray.push(item);
        }
    }

    const filteredData = [];
    for(const dataItem of data) {
        const index = itemArray.indexOf((dataItem.id).toString());
        if (index !== -1) {
            filteredData.push(dataItem);
        }
    }

    const renderCartItems = filteredData.map((item => {
                return <CartItem data = {item} qty = {listCartItems[item.id]} updateCart = {props.updateCartState} key = {item.id} />;
    }));
    
    function makepayment () {
        props.handlePayment();
        window.alert('Thank you for shopping with us!');
    }

    return (
        <main className='checkout-contents'>
            <h1>Checkout</h1>
            {itemArray.length === 0 &&
                <p className='empty-message'> There are no items in your cart.</p>
            }
            <div className='cart-container'>
                {renderCartItems}
                {itemArray.length > 0 &&
                <button onClick={makepayment} className = 'payment-button'>Make Payment</button>
                }
            </div>
        </main>
    );
}

export default Checkout;
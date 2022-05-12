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

    return (
        <main className='checkout-contents'>
            <h1>Checkout</h1>
            <div className='cart-container'>
                {renderCartItems}
            </div>
        </main>
    );
}

export default Checkout;
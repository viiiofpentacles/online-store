import React, { useState } from 'react';
import './styles/ItemCard.css';

const ItemCard = (props) => {

    let [qty, setQty] = useState(1);

    function reduceButton (e) {
        const button = e.target;
        const inputField = document.querySelector(`[class="${e.target.id}"]`);
        if (inputField.value <= 1) {
            button.disabled = true;
            button.classList.add('disabled');
        } else {
            button.disabled = false;
            button.classList.remove('disabled');
        }
        setQty(Number(qty - 1));
    }

    function increaseButton () {
        const button = document.querySelector('.minus-button'); 
        button.disabled = false;
        button.classList.remove('disabled');
        setQty(Number(qty + 1));
    }

    function handleChange (e) {
        setQty(e.target.value);
        const buttonId = e.target.className[0];
        const minusButton = document.getElementById(buttonId);
        if (e.target.value <=1) {
            minusButton.disabled = true;
            minusButton.classList.add('disabled');
        } else {
            minusButton.disabled = false;
            minusButton.classList.remove('disabled');
        }
    }

    function addToCartButton (e) {
        if(qty <= 0) {
        }
        props.addItemToCart(props.data.cost, props.data.id);
        const addButton = e.target;
            addButton.textContent = 'Added!'
            addButton.disabled = true;
        setTimeout(() => {
            addButton.textContent = 'Add to Cart'
            addButton.disabled = false;
        }, "2000");
    }

    return (
        <div className = 'item-card'>
            <div className="item-image"><img src={props.data.img} alt={props.data.alt} /></div>
            <div className='item-details'>
                <div className="item-name">{props.data.name}</div>
                <div className="item-cost">{props.data.cost}</div>
                <div className="qty-input">
                    <label htmlFor="qty-input">Quantity</label>
                    <div className='input-area'>
                        <button className="minus-button" id={props.data.id} onClick={reduceButton}>-</button>
                        <input type="text" value={qty} id="qty-input" className={props.data.id} onChange={handleChange} />
                        <button className="plus-button" onClick={increaseButton}>+</button>
                        </div>
                </div>
                <button className="add-to-cart-button" onClick={addToCartButton}>Add to Cart</button>
                <div className='error-message'></div>
            </div>
        </div>
    );
};

export default ItemCard;
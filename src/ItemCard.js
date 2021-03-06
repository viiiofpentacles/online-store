import React, { useState } from 'react';
import './styles/ItemCard.css';

const ItemCard = (props) => {

    let [qty, setQty] = useState(1);

    function reduceButton (e) {
        const button = e.target;
        const inputField = document.querySelector(`#qty-input${props.data.id}`);
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
        const button = document.querySelector(`.minus-button${props.data.id}`); 
        button.disabled = false;
        button.classList.remove('disabled');
        setQty(Number(qty + 1));
    }

    function handleChange (e) {
        setQty(e.target.value);
        const minusButton = document.querySelector(`.minus-button${props.data.id}`);
        if (e.target.value <=1) {
            minusButton.disabled = true;
            minusButton.classList.add('disabled');
        } else {
            minusButton.disabled = false;
            minusButton.classList.remove('disabled');
        }
    }

    function addToCartButton (e) {
        const addButton = e.target;
        const errorMessage = document.querySelector(`.error-message${props.data.id}`);
        if(qty <= 0) {
            errorMessage.textContent = 'Item quantity needs to be at least 1.'
        } else {
            errorMessage.textContent = '';
        props.addItemToCart(props.data.cost, props.data.id);
            addButton.textContent = 'Added!'
            addButton.disabled = true;
        setTimeout(() => {
            addButton.textContent = 'Add to Cart'
            addButton.disabled = false;
        }, "2000");
    }
    }

    return (
        <div className = 'item-card'>
            <div className="item-image"><img src={props.data.img} alt={props.data.alt} /></div>
            <div className='item-details'>
                <div className="item-name">{props.data.name}</div>
                <div className="item-cost">{props.data.cost}</div>
                <div className="qty-input">
                    <label htmlFor={`qty-input${props.data.id}`}>Quantity</label>
                    <div className='input-area'>
                        <button className={`minus-button${props.data.id}`} onClick={reduceButton}>-</button>
                        <input type="text" value={qty} id={`qty-input${props.data.id}`} onChange={handleChange} />
                        <button className="plus-button" onClick={increaseButton}>+</button>
                        </div>
                </div>
                <button className="add-to-cart-button" onClick={addToCartButton}>Add to Cart</button>
                <div className={`error-message${props.data.id} error`}></div>
            </div>
        </div>
    );
};

export default ItemCard;
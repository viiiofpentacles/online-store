import React, { useEffect, useState } from 'react';

const ItemCard = (props) => {

    let [qty, setQty] = useState(1);

    useEffect(() => {
        const minusButton = document.querySelector('.minus-button');
        if (qty <= 1) {
            minusButton.disabled = true;
        } else {
            minusButton.disabled = false;
        };
    });

    function reduceButton () {
        setQty(Number(qty - 1));
    }

    function increaseButton () {
        setQty(Number(qty + 1));
    }

    function handleChange (e) {
        setQty(e.target.value);
    }

    function addToCartButton (e) {
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
            <div className="item-image">{props.data.img}</div>
            <div className="item-name">{props.data.name}</div>
            <div className="item-cost">{props.data.cost}</div>
            <div className="qty-input">
                <label htmlFor="qty-input">Quantity</label>
                    <button className="minus-button" onClick={reduceButton}>-</button>
                    <input type="text" value={qty} id={`qty-input ${props.data.id}`} onChange={handleChange} />
                    <button className="plus-button" onClick={increaseButton}>+</button>
            </div>
            <button className="add-to-cart-button" onClick={addToCartButton}>Add to Cart</button>
        </div>
    );
};

export default ItemCard;
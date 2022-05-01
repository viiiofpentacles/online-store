// goes into App as a footer, only visible with atleast one item in cart

const ShopCart = (props) => {
    const cartTotal = (props.totalCost).toFixed(2);
    
    return (
        <div className='cart'>
            <div>{props.totalQty} items in cart </div>
            <div>Cart Total: {cartTotal}</div>
            <button className='checkout-button' onClick={props.handleCheckout}>Checkout</button>
        </div>
    );
};


export default ShopCart;
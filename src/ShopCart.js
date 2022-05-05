// goes into App as a footer, only visible with atleast one item in cart

const ShopCart = (props) => {
    const cartTotal = (props.totalCost).toFixed(2);
    
    return (
        <div className='cart'>
            <div>
                {props.totalQty === 1
                ? <div className="how-many">{props.totalQty} item in cart </div>
                : <div className="how-many">{props.totalQty} items in cart </div>
                }
            <div>Cart Total: {cartTotal}</div>
            </div>
            <button className='checkout-button' onClick={props.handleCheckout}>Checkout</button>
        </div>
    );
};


export default ShopCart;
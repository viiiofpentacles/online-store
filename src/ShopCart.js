import { useNavigate } from "react-router-dom";

const ShopCart = (props) => {
    const cartTotal = (props.totalCost).toFixed(2);
    const navigate = useNavigate();
   
    function handleCheckout () {
        navigate('/checkout');
    } 
    
    return (
        <div className='cart'>
            <div>
                {props.totalQty === 1
                ? <div className="how-many">{props.totalQty} item in cart </div>
                : <div className="how-many">{props.totalQty} items in cart </div>
                }
            <div>Cart Total: {cartTotal}</div>
            </div>
            <button className='checkout-button' onClick={handleCheckout}>Checkout</button>
        </div>
    );
};


export default ShopCart;
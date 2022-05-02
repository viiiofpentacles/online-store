import './styles/App.css';
import { Outlet, Link } from "react-router-dom";
import ShopCart from './ShopCart';

function App(props) {

  function handleCheckout () {
  }

  return (
    <div className="menu">
      <header className="menu-header">
        <div className='logo'>M</div>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </header>
      <Outlet />
      {props.cart.length > 0 &&
      <ShopCart totalQty = {props.totalQty} totalCost = {props.totalCost} handleCheckout = {handleCheckout}/>
      }
    </div>
  );
}

export default App;

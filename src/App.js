import './styles/responsive.css';
import './styles/App.css';
import { Outlet, Link } from "react-router-dom";
import ShopCart from './ShopCart';

function App(props) {

  return (
    <div className="container">
      <header className="menu-header">
        <div className='logo'>M</div>
        <div className='menu-links'>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </nav>
        </div>
      </header>
      <Outlet />
      {props.totalQty > 0 &&
      <ShopCart totalQty = {props.totalQty} totalCost = {props.totalCost} />
      }
    </div>
  );
}

export default App;

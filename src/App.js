import './styles/App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
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
    </div>
  );
}

export default App;

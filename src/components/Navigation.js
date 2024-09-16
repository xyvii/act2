import { Outlet, Link } from "react-router-dom";
import './style.css';

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li><span><Link to="/contact">Contact</Link></span></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navigation;
import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header">
        <Link to="/">
      <div className="Logo">
        <img alt="Logo" />
        <div className="">PaperTrail School Supplies</div>
      </div>
      </Link>
      <div className="links">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="cart">
        <img alt="cart-icon" />
        <div>cart</div>
      </div>
    </div>
  );
};
export default Header;

import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/imgs/logo.png";
import cart from "../../Assets/imgs/cart.png"

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="Logo">
          <img alt="Logo" src={logo} />
          <div className="Logo-text">
            <div>PaperTrail</div>
            <div>School Supplies</div>
          </div>
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
        <img alt="cart-icon" src={cart} />
        <div>Cart</div>
      </div>
    </div>
  );
};
export default Header;

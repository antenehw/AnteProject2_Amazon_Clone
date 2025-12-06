import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      {/* LEFT: Logo */}
      <Link to="/" className="header__logoLink">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      {/* CENTER: Search Bar */}
      <div className="header__search">
        <select className="header__searchSelect">
          <option>All</option>
        </select>

        <input className="header__searchInput" type="text" />

        <FaSearch className="header__searchIcon" />
      </div>

      {/* RIGHT: Navigation */}
      <div className="header__nav">

        {/* Location */}
        <div className="header__option">
          <p className="header__optionLineOne">Deliver to</p>
          <p className="header__optionLineTwo">Ethiopia</p>
        </div>

        {/* Account */}
        <div className="header__option">
          <p className="header__optionLineOne">Hello, sign in</p>
          <p className="header__optionLineTwo">Account & Lists</p>
        </div>

        {/* Orders */}
        <div className="header__option">
          <p className="header__optionLineOne">Returns</p>
          <p className="header__optionLineTwo">& Orders</p>
        </div>

        {/* Cart */}
        <Link to="/checkout" className="header__basket">
          <FaShoppingCart className="header__basketIcon" />
          <span className="header__basketCount">0</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;

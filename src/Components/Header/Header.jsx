import React from "react";
import modularcss from "./Header.module.css";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <header className={modularcss.header}>
     
      {/* LEFT SECTION: Logo + Delivery */}
      <div className={modularcss.header__left}>
        {/* Logo */}
        <Link to="/" className={modularcss.header__logoLink}>
          <img
            className={modularcss.header__logo}
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </Link>

        {/* Delivery Location */}
        <div className={modularcss.header__delivery}>
          <span className={modularcss.header__deliveryIcon}>📍</span>
          <div className={modularcss.header__deliveryText}>
            <p>Deliver to G-3</p>
            <span>Evangadi</span>
          </div>  
        </div>
      </div>

      {/* CENTER SECTION: Search Bar */}
      <div className={modularcss.header__search}>
        <select className={modularcss.header__searchSelect}>
          <option>All</option>
          <option>Books</option>
          <option>Electronics</option>
          <option>Computers</option>
          <option>Smart Home</option>
          <option>Arts & Crafts</option>
          <option>Toys & Games</option>
          <option>Sports & Outdoors</option>
          <option>Health & Personal Care</option>
          <option>Clothing</option>
          <option>Home & Kitchen</option>
        </select>

        <input
          className={modularcss.header__searchInput}
          type="text"
          placeholder="Search Amazon"
        />

        <FaSearch className={modularcss.header__searchIcon} />
      </div>

      {/* RIGHT SECTION: Navigation */}
      <div className={modularcss.header__nav}>
      
      
        <div className={modularcss.header__option}>
          <a href="" className={modularcss.header__flagSelect}>
            <img src="https://www.shutterstock.com/shutterstock/photos/2477519645/display_1500/stock-vector-american-flag-usa-design-united-states-flag-rendered-usa-flag-the-usa-national-flag-2477519645.jpg" alt="US Flag"/>
            <select>
              <option value="EN">EN</option>
            </select>
          </a>
        </div>

        {/* Account */}
        <div className={modularcss.header__option}>
          <p className={modularcss.header__optionLineOne}>Hello, sign in</p>
          <p className={modularcss.header__optionLineTwo}>Account & Lists</p>
        </div>

        {/* Orders */}
        <div className={modularcss.header__option}>
          <p className={modularcss.header__optionLineOne}>Returns</p>
          <p className={modularcss.header__optionLineTwo}>& Orders</p>
        </div>

        {/* Cart */}
        <Link to="/checkout" className={modularcss.header__cart}>
          <FaShoppingCart className={modularcss.header__cartIcon} />
          <span className={modularcss.header__cartCount}>0</span>
        </Link>
      </div>

      
    {/* Lower Header Component */}
          
    <LowerHeader />
      
    </header>
  );
}

export default Header;
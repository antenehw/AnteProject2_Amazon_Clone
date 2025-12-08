import React from "react";
import modularcss from "./Header.module.css"
import { Link } from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className={modularcss.header}>

 {/* LEFT SECTION */}
    <div className={modularcss.header__left}>

      {/* LEFT: Logo */}
      <Link to="/" className={modularcss.header__logoLink}>
        <img
          className={modularcss.header__logo}
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      {/* Deliver To */}
        <div className={modularcss.header__delivery}>
          <span className={modularcss.header__deliveryIcon}>📍</span>
          <div className={modularcss.header__deliveryText}>
            <p>Deliver to Evan June-25 G-3</p>
            <span>Evangadi</span>
          </div>
        </div>
    </div>
                  
        

  {/* CENTER: Search Bar */}
        <div className= {modularcss.header__search}>

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

        <input className={modularcss.header__searchInput} type="text" placeholder="search Amazon"/>
          {/* <BsSearch size={22} className={modularcss.header__searchIcon} /> */}

        <FaSearch className={modularcss.header__searchIcon} />
      </div>


  {/* RIGHT: Navigation */}
      <div className={modularcss.header__nav}>

        {/* Location */}
        <div className={modularcss.header__option}>
          <p className={modularcss.header__optionLineOne}>Deliver to</p>
          <p className={modularcss.header__optionLineTwo}>Ethiopia</p>
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
        <Link to="/checkout" className={modularcss.header__basket}>
          <FaShoppingCart className={modularcss.header__basketIcon} />
          <span className={modularcss.header__basketCount}>0</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;

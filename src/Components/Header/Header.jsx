import React, {useContext} from "react";
import modularcss from "./Header.module.css";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";


const Header = () => {
  const [{basket}] = useContext(DataContext)
  // console.log(basket.length);

  return (
    <>
    <header className={modularcss.header}>
    
      {/* LEFT SECTION: Logo + Delivery */}
      <div className={modularcss.header__left}>
        {/* Logo */}
        <Link to="/" className={modularcss.header__logoLink}>
          <img
            className={modularcss.header__logo}
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="Amazon Logo" />

        </Link>

        {/* Delivery Location */}
        <div className={modularcss.header__delivery}>
          <span className={modularcss.header__deliveryIcon}></span>
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

        <Link to="/Account" className={modularcss.header__Account}>
          <p>SignIn & Account </p>
        </Link>

        {/* Orders */}
        <Link to="/orders" className={modularcss.header__orders}>
          <p>Returns & Orders</p>
        </Link>

        {/* Cart */}
        <Link to="/cart" className={modularcss.header__cart}>
          <FaShoppingCart className={modularcss.header__cartIcon} />
          <span className={modularcss.header__cartCount}>{basket.length}</span>
        </Link>

      </div>

      </header>

    <LowerHeader/>
    </>
  )};   

 

export default Header;
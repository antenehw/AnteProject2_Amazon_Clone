import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import modularcss from "./Product.module.css";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../../Components/DataProvider/DataProvider";

<<<<<<< HEAD
function ProductCard({ product, flex, showCheckbox}) {
=======

function ProductCard({ product, flex }) {
>>>>>>> d07e829201cb0461a986a2950a0ed3ac7384a5ce
  const { id, title, image, price, description, rating = { rate: 0, count: 0 } } = product;
  
  const [state, dispatch] = useContext(DataContext);
  console.log(state)

  const AddToBasket = () => {
<<<<<<< HEAD
      dispatch({
      type: Type.ADD_TO_BASKET,
      item: { id, title, image, price, description, rating },
=======
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id, title, image, price, description, rating 
      },
>>>>>>> d07e829201cb0461a986a2950a0ed3ac7384a5ce
    });
  };

  return (
    <div className={`${modularcss.product_card} ${
      flex ? modularcss.product_flexed : ""}`}>
      
      {/* Checkbox only in cart */}
      {showCheckbox && (
          <input type="checkbox" 
          checked={product.selected} 
          onChange={() =>
              dispatch({ type: Type.TOGGLE_SELECT_ITEM, id: product.id })
            }
            className={modularcss.checkbox}
          />
        )}

      {/* Image */}
        <Link to={`/products/${id}`} className={modularcss.product_image_link}>
        <img src={image} alt={title} className={modularcss.product_img} />
        </Link>

        <div className={modularcss.product_info}>
        
      {/* Title */}
        <Link to={`/products/${id}`} className={modularcss.product_title_link}>
          <h3 className={modularcss.product_title}>{title}</h3>
        </Link>

      {/* Description (only in flex mode) */}
        {flex && <p className={modularcss.product_description}>{description}</p>}

      {/* Rating */}
        <div className={modularcss.product_rating}>
          <Rating value={rating.rate} precision={0.1} readOnly />
          <small>({rating.count})</small>
        </div>

      {/* Price */}
        <div className={modularcss.product_price}>
          <CurrencyFormat amount={price} />
        </div>

<<<<<<< HEAD
      {/* Add to Cart */}
        <button className={modularcss.add_to_cart_btn} onClick={AddToBasket}>
          Add to Cart
=======
        {/* Add to Cart */}
        <button className={modularcss.button} onClick={AddToBasket}>
          Add to Basket
>>>>>>> d07e829201cb0461a986a2950a0ed3ac7384a5ce
        </button>
        
        </div>


      {/* Quantity controls (cart only) */}
        {flex && (
          <div className={modularcss.qty_controls}>
          <button onClick={() => dispatch({ type: Type.DECREASE_QTY, id })}>-</button>
            <span>{product.amount}</span>
            <button onClick={() => dispatch({ type: Type.INCREASE_QTY, id })}>+</button>

          <button 
          className={modularcss.remove_btn}
          onClick={() =>
            dispatch({ type: Type.REMOVE_FROM_BASKET, id }
          )}>
          Remove
          </button>
        </div>
)}


    </div>
  );
}

export default ProductCard;

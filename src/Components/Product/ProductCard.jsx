import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import modularcss from "./Product.module.css";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../../Components/DataProvider/DataProvider";


function ProductCard({ product, flex }) {
  const { id, title, image, price, description, rating = { rate: 0, count: 0 } } = product;
  
  const [state, dispatch] = useContext(DataContext);
  console.log(state)

  const AddToBasket = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id, title, image, price, description, rating 
      },
    });
  };

  return (
    <div className={`${modularcss.product_card} ${flex ? modularcss.product_flexed : ""}`}>
      
      {/* Image Link */}
      <Link to={`/products/${id}`} className={modularcss.product_image_link}>
        <img src={image} alt={title} className={modularcss.product_img} />
      </Link>

      <div className={modularcss.product_info}>
        
        {/* Title Link */}
        <Link to={`/products/${id}`} className={modularcss.product_title_link}>
          <h3 className={modularcss.product_title}>{title}</h3>
        </Link>

        {/* Description only in flex mode */}
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

        {/* Add to Cart */}
        <button className={modularcss.button} onClick={AddToBasket}>
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

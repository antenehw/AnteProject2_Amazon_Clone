import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import modularcss from "./Product.module.css";

function ProductCard({ product }) {
  const { id, categoryId, title, img, price, rating = { rate: 0, count: 0 } } = product;

  return (
    <div className={modularcss.product_card}>
      <Link to={`/category/${categoryId}/product/${id}`} className={modularcss.product_link}>
        <img src={img} alt={title} className={modularcss.product_img} />
        <div className={modularcss.product_info}>
          <h3 className={modularcss.product_title}>{title}</h3>
          <div className={modularcss.product_rating}>
            <Rating value={rating.rate} precision={0.1} readOnly />
            <small>({rating.count})</small>
          </div>
          <div className={modularcss.product_price}>
            <CurrencyFormat amount={price || 0} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;

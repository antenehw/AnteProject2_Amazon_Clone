import React from "react";
import { useParams, Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import modularcss from "./Category.module.css";

function CategoryFullinfos({ products }) {
  const { categoryId, productId } = useParams();
  const prodId = Number(productId);

  // Find the product by ID
  const product = products.find((p) => p.id === prodId);

  if (!product) {
    return <h2 className={modularcss.not_found}>Product not found</h2>;
  }

  const { img, title, price, rating, description } = product;

  return (
    <div className={modularcss.product_full_info}>
      {/* Back link */}
      <Link to={`/category/${categoryId}`} className={modularcss.back_link}>
        ← Back to Category
      </Link>

      {/* Product main info */}
      <div className={modularcss.full_info_container}>
        <img
          src={img || "https://via.placeholder.com/400"}
          alt={title}
          className={modularcss.full_info_img}
        />

        <div className={modularcss.full_info_text}>
          <h2 className={modularcss.title}>{title}</h2>

          {rating && (
            <div className={modularcss.rating}>
              <Rating value={rating.rate} precision={0.1} readOnly />
              <small>({rating.count})</small>
            </div>
          )}

          <div className={modularcss.price}>
            <CurrencyFormat amount={price} />
          </div>

          {description && (
            <p className={modularcss.description}>{description}</p>
          )}

          <button className={modularcss.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryFullinfos;

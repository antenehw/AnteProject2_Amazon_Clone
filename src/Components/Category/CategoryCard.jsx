import React from "react";
import { Link } from "react-router-dom";
import modularcss from "./Category.module.css";

function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.id}`} className={modularcss.card}>
      <div className={modularcss.imageWrapper}>
        <img
          src={category.image || "https://via.placeholder.com/200"}
          alt={category.name}
        />
      </div>
      <h3 className={modularcss.name}>{category.name}</h3>
    </Link>
  );
}

export default CategoryCard;






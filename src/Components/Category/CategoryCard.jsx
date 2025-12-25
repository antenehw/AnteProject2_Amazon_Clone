import React from "react";
import { Link } from "react-router-dom";
import modularcss from "./Category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={modularcss.card}>
      <Link to={`/category/${data.name}`} className={modularcss.link}>
        <h2>{data.name}</h2>
        <h3>{data.title}</h3>

        <img
          src={data.imageLink}
          alt={data.name}
          className={modularcss.image}
        />

        <button className={modularcss.button}>Shop now</button>
      </Link>
    </div>
  );
}

export default CategoryCard;


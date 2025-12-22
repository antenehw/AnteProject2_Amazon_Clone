import React from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";


function CategoryCard({ data }) {
  return (
    <div className={styles.card}>
      <Link to={`/category/${data.name}`} className={styles.link}>
        <h2>{data.title}</h2>
        <img src={data.imageLink} alt={data.category} className={styles.image} />
      </Link>
    </div>
  );
}

export default CategoryCard;








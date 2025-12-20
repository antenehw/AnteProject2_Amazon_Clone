import React from "react";
import { data, Link } from "react-router-dom";
import styles from "./Category.module.css"



function CategoryCard({ data }) {
  return (
    <div className={styles.category}>
      <img src={data.imageLink} alt={data.title} />
      <p>{data.title}</p>
    
    </div>
  );
}

export default CategoryCard;







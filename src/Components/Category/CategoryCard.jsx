import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import styles from "./Category.module.css";


function CategoryCard({ data }) {
  return (
    <div className={styles.card}>
      <Link to={`/category/${data.name}`} className={styles.link}>
        <h2>{data.title}</h2>
        <img src={data.imageLink} alt={data.category} className={styles.image} />
      </Link>
=======
import { data, Link } from "react-router-dom";
import styles from "./Category.module.css"



function CategoryCard({ data }) {
  return (
    <div className={styles.category}>
      <img src={data.imageLink} alt={data.title} />
      <p>{data.title}</p>
    
>>>>>>> 56dbabc0c2672523e0771b2c4b5ecc1b5084f774
    </div>
  );
}

export default CategoryCard;






<<<<<<< HEAD

=======
>>>>>>> 56dbabc0c2672523e0771b2c4b5ecc1b5084f774

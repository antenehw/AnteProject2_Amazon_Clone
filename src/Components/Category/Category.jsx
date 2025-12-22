import React from "react";
<<<<<<< HEAD
import CategoryFullInfos from "./CategoryFullInfos";
import CategoryCard from "./CategoryCard";
import Classes from "./Category.module.css";
import { useParams } from "react-router-dom";


function Category({name: propName }) {
  const params = useParams();
  const name = params.name || propName;

  const filteredProducts = CategoryFullInfos.filter(
    (item) => item.name === name
  );
=======
import CategoryInfos from "./CategoryFullInfos";
import CategoryCard from './CategoryCard';
import styles from './Category.module.css';
>>>>>>> 56dbabc0c2672523e0771b2c4b5ecc1b5084f774

function Category() {
   // Filter only electronics
  const electronicsProducts = CategoryInfos.filter(
    (item) => item.category === "electronics"
  );
  
  return (
<<<<<<< HEAD
    <>
      <div className={Classes.category_page}>
        <h2 className={Classes.category_title}>{name}</h2>

        
=======
    <div className={styles.container}>
      <div className={styles.grid}>
        {CategoryInfos.map((infos) => (
          <CategoryCard key={infos.id} data={infos}/> 
        ))}
>>>>>>> 56dbabc0c2672523e0771b2c4b5ecc1b5084f774
      </div>

      <section className={Classes.category__container}>
        {CategoryFullInfos.map((data) => (
          <CategoryCard key={data.id} data={data} />
        ))}
      </section>
    </>
  );
}

export default Category;

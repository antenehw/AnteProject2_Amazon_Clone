import React from "react";
import CategoryInfos from "./CategoryFullInfos";
import CategoryCard from './CategoryCard';
import styles from './Category.module.css';

function Category() {
   // Filter only electronics
  const electronicsProducts = CategoryInfos.filter(
    (item) => item.category === "electronics"
  );
  
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {CategoryInfos.map((infos) => (
          <CategoryCard key={infos.id} data={infos}/> 
        ))}
      </div>
    </div>
  );
}

export default Category;

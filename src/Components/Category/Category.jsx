import React from "react";
import modularcss from "./Category.module.css";
import CategoryCard from "./CategoryCard";

function Category({ categories }) {
  if (!categories || categories.length === 0) {
    return <p className={modularcss.empty}>No categories available.</p>;
  }

  return (
    <div className={modularcss.container}>
      <h2 className={modularcss.heading}>Shop by Category</h2>
      <div className={modularcss.grid}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Category;

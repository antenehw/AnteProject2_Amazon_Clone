import React from "react";
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

  return (
    <>
      <div className={Classes.category_page}>
        <h2 className={Classes.category_title}>{name}</h2>

        
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

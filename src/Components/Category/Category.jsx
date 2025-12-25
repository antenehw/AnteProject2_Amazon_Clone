import React from "react";
import { useParams } from "react-router-dom";
import CategoryInfos from "./CategoryFullInfos";
import CategoryCard from "./CategoryCard";
import modularcss from "./Category.module.css";

function Category({ name: propName }) {
  const params = useParams();
  const name = params.name || propName;

  return (
    <div className={modularcss.category_page}>
      <h2 className={modularcss.category_title}>{name}</h2>

      <section className={modularcss.category__container}>
<<<<<<< HEAD
        
=======
>>>>>>> d07e829201cb0461a986a2950a0ed3ac7384a5ce
        {CategoryInfos.map((data) => (
          <CategoryCard key={data.id} data={data} />
        ))}
      </section>
    </div>
  );
}

export default Category;


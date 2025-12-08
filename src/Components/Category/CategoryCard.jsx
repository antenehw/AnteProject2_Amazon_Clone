import React from 'react'
import modularcss from "./Category.module.css"

function CategoryCard({data}) {
  return (
    <div className={modularcss.category}>
        
      <a href={data.link || "#"} className={modularcss.category__link} >
        <span>
            <h2> {data.title}</h2>
        </span>
        <img src={data.img} alt={data.title} />
        <p> shop now </p>
      </a>
    </div>
  )
}

export default CategoryCard;

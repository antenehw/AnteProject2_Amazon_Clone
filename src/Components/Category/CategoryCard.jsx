import React from 'react'
import modularcss from "./Category.module.css"

function CategoryCard({data}) {
  return (
    <div className={modularcss.category}>
        
      <a href=''>
        <span>
            <h2> title</h2>
        </span>
        <img src="" alt="" />
        <p> shop now </p>
      </a>
    </div>
  )
}

export default CategoryCard

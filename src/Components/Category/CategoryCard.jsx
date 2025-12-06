import React from 'react'
import classes from "./Category.module.css"

function CategoryCard({data}) {
  return (
    <div className={classes.category}>
        
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

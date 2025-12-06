import React from 'react'
import {categoryInfos} from './CategoryFullinofs'
import CategoryCard from './CategoryCard'
import classes from "./Category.module.css"

function Category() {
  return (
    <Section className={classes.category_container}>
        {categoryInfos.map((infos)=>(
            <categoryCard data={infos}/>
        ))
        }
              
    </Section>
  )
}

export default Category

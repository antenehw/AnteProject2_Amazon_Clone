import React from 'react'
import {categoryInfos} from './CategoryFullinofs'
import CategoryCard from './CategoryCard'
import modularcss from "./Category.module.css"

function Category() {
  return (
    <Section className={modularcss.category_container}>
        {categoryInfos.map((infos)=>(
            <CategoryCard data={infos}/>
        ))
        }
              
    </Section>
  )
}

export default Category

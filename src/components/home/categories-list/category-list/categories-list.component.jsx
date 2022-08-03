import React from 'react'
import Category from '../category/category.component'
import './categories-list.styles.scss'

function CategoryList({categories}) {
  return (
    <div className="categories-list-container">
      {
        categories.map((category) => (
          <Category category={category} key={category.id} />
        ))
      }
    </div>  
  )
}

export default CategoryList;

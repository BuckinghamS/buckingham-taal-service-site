import React from 'react'

const Category = ({ category, selected }) => {
  return <div className={`blog-category ${selected === category && 'active'}`}>{category}</div>
}

export default Category

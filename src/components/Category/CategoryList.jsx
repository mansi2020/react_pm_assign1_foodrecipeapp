import React from 'react'
import "./../../App.css"
import "./Category.css"
import { Link } from 'react-router-dom'

const CategoryList = ({categories}) => {
    console.log(categories);
  return (
    <div className='bg-whitesmoke section-wrapper'>
        <div className='container'>
            <div className="sc-title">categories</div>
            <section className="sc-category grid">
            {
              categories.map(category => {
                const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail} = category;

                return (
                  <Link to = {`/meal/category/${title}`} className = "category-itm align-center justify-center" key = {id}>
                    <div className='flex align-center justify-center category-itm-img h-100 w-100'>
                      <img src = {thumbnail} alt = {title} />
                      <div className='category-itm-title bg-orange'>
                        <h3 className='text-white ls-1 text-uppercase fs-11 fw-6'>{title}</h3>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
            </section>
        </div>
    </div>
  )
}

export default CategoryList

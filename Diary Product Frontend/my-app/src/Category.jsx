import React from 'react'
import './Category.css'
import { useNavigate } from "react-router-dom";

function Category() {

  const Navigate = useNavigate()
    const Categories=[
    {
        id: 1,
        name:"Milk",
        products: 12,
        image:"../icon1.jpg",
        path:"./Categories"
          
    },
    {
        id: 2,
        name:"Curd & Yogurt",
        products: 8,
        image:"../icon2.jpg",
        path:"./Categories"
    },
    {
        id: 3,
        name:"Butter & Ghee",
        products: 10,
        image:"../icon3.jpg",
        path:"./Categories"
        
    },
    {
        id: 4,
        name:"cheese",
        products: 5,
        image:"../icon4.png",
        path:"./Categories"
        
    },
    {
        id: 5,
        name:"Ice cream",
        products: 6,
        image:"../icon5.jpg",
        path:"./Categories"
        
    },
    {
        id: 6,
        name:"Sweets",
        products: 4,
        image:"../icon6.png",
        path:"./Categories"
        
    },
]
  return (
    <section className='category-section mt-3'>
      <h2>Shop by Categories</h2>
      <div className='category-container mt-3'>
        {Categories.map((item)=>(
          <div className='category-card' key={item.id} onClick={()=> Navigate(item.path)}  style={{ cursor: "pointer" }}>
            <img src={item.image} alt={item.name} />
            <h6>{item.name}</h6>
            <p className='text-secondary' >{item.products} Products </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Category
import React from 'react'
import './Category.css'
function Popular() {
    const product=[
       {
        id:1,
        img:"/Milk.jpg",
        name:"Farm Fresh Milk",
        gram:"1 ltr",
        price:"₹50"
       },
        {
        id:2,
        img:"/curd.png",
        name:"Fresh Curd",
        gram:"500g",
        price:"₹35"
       },
       {
        id:3,
        img:"/butter.png",
        name:"White Butter",
        gram:"200g",
        price:"₹55"
       },
       {
        id:4,
        img:"/ghee.png",
        name:"Cow Ghee",
        gram:"500ml",
        price:"₹50"
       },
       {
        id:5,
        img:"/vanilla.png",
        name:"Ice cream",
        gram:"500ml",
        price:"₹50"
       },
    ]
    
  return (
    
    <section className='popular-section mt-3'>
        <h2 className="format">Popular Products</h2>
        <div className='popular-container mt-3'>
            {product.map((item)=>(
                <div className='popular-card' key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <h6 className='text-start mt-2'>{item.name}</h6>
                    <p className='text-start'>{item.gram}</p>
                    <h5 className='text-start'>{item.price}</h5>
                    <a href="" className='btn btn-primary w-100'>Add to cart</a>

                </div>
            ))}

        </div>
    </section>
  )
}

export default Popular
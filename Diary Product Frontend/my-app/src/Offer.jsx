import React from 'react'
import { FaStar } from "react-icons/fa";
import './Category.css'
function Offer() {
  const Customer=[
      {
         id:1,
         img:"/person1.jpg",
         name:"Arun Kumar",
         review:"The Milk is always fresh and delivered on time.Great Packaging and Quality"
      },
      {
         id:2,
         img:"/person2.jpg",
         name:"Priyadharshini",
         review:"I love the curd and ghee.Totally worth the price "
      },
      {
         id:2,
         img:"/person3.jpg",
         name:"Rahul Dravid",
         review:"Best dairy store online. Fast delivery and Fresh products "
      }
  ]
  return (
    <>
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-4'>
                <img src="../offer.png" style={{width:" 300px"}} alt="" />
            </div>
            <div className='col-8'>
              <ul className='offer'>
                <li>
                  <img src="../service1.jpeg" style={{width:"50px"}} alt="logo1" />
                  <h6>Free delevery</h6>
                  <p>On orders above ₹499</p>
                </li>
                 <li>
                  <img src="../service2.jpeg"style={{width:"50px"}} alt="" />
                  <h6>100% Natural</h6>
                  <p>Pure & fresh products</p>
                </li>
                 <li>
                  <img src="../service3.jpeg" style={{width:"50px"}} alt="" />
                  <h6>Quality Assured</h6>
                  <p>Trusted by thousands</p>
                </li>
                 <li>
                  <img src="../service4.jpeg" style={{width:"50px"}} alt="" />
                  <h6>24/7 support</h6>
                  <p>we are here to help you</p>
                </li>
              </ul>
            </div>

        </div>

    </div>

  {/* Customer rating and review */}
    <div className='mt-4'>
      <h2> What Our Customers Say</h2>
      <div className='customer-container mt-4'>
        {Customer.map((item)=>(
          <div className='review-card' key={item.id}>
            <img src={item.img} style={{width:"100px",height:"100px", borderRadius:"50px",}} alt="" />
            <div className='review-content'>
              <FaStar style={{color:'yellow'}} />
              <FaStar style={{color:'yellow'}} />
              <FaStar style={{color:'yellow'}} />
              <FaStar style={{color:'yellow'}} />
              <FaStar style={{color:'yellow'}} />
            <h6>{item.name}</h6>
            <p>{item.review}</p>
          </div>
          </div>
        ))}

      </div>
    </div>
    </>
  )
}

export default Offer
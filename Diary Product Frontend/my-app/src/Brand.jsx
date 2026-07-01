import React from 'react'

function Brand() {
  return (
    <>
    <div className='brands mt-4'>
        <h2>Our Trusted Brands</h2>
        <div style={{display:"flex", justifyContent:"center", gap:'20px', marginTop:"25px"}}> 
            <div style={{border:"1px solid #ddd", borderRadius:"10px", width:"150px", height:"90px" }}>
                 <img src="../logo.png" style={{width:"150px"}} alt="" />
            </div>
            <div style={{border:"1px solid #ddd", borderRadius:"10px", width:"150px", height:"90px" }}>
                 <img src="../brand0.png" style={{width:"100px"}} alt="" />
            </div>
            <div style={{border:"1px solid #ddd", borderRadius:"10px", width:"150px", height:"90px" }}>
                 <img src="../brand1.png" style={{width:"130px", marginTop:"5px"}} alt="" />
            </div>
            <div style={{border:"1px solid #ddd", borderRadius:"10px", width:"150px", height:"85px" }}>
                 <img src="../brand2.jpg" style={{width:"130px"}} alt="" />
            </div>
            <div style={{border:"1px solid #ddd", borderRadius:"10px", width:"150px", height:"90px" }}>
                 <img src="../brand3.png" style={{width:"100px"}} alt="" />
            </div>
            <div style={{border:"1px solid #ddd", borderRadius:"10px", width:"150px", height:"90px" }}>
                 <img src="../brand4.jpg" style={{width:"100px"}} alt="" />
            </div>
           
           
        </div>
    </div>

    <div>
          <img src="../download banner.png" style={{width:"100%", marginTop:"50px"}} alt="" />
    </div>
    </>
  )
}

export default Brand
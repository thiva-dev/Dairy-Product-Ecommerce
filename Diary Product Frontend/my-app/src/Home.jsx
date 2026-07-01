import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
//import stored images
function Home() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="../heropic-1.png" alt=""  style={{height:"90vh"}} /></SwiperSlide>
        <SwiperSlide><img src="../heropic-2.png" alt=""  style={{height:"90vh"}} /></SwiperSlide>
        <SwiperSlide><img src="../heropic-3.png"  alt=""  style={{height:"90vh"}} /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home
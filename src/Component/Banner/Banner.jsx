import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper";

const Banner = () => {
    return (
        <div>
            <Swiper 
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,}}
                pagination={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                >
                <SwiperSlide><img src="https://web.bdbeautyglamorous.com/uploads/slider/16761182350IWCFOSS1P4318.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://web.bdbeautyglamorous.com/uploads/slider/1676116039ofhrwNjkyT6070.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://web.bdbeautyglamorous.com/uploads/slider/16761181410lQ0HVuYGw3813.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://web.bdbeautyglamorous.com/uploads/slider/1676115897gi1lQVxZD96606.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination, Autoplay } from "swiper";

const Streaming = () => {
    return (
        <div className='mt-10'>
            <div className='bg-[pink] lg:w-[500px] w-80 mx-auto  py-2  rounded-full '>
                <h1 className='text-center font-semibold'>BD BEAUTY GLAMOURS STREAMING</h1>
            </div>


            <div className='mt-8 lg:mx-40 mx-10 '>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"

                    breakpoints={{

                        0: {

                            slidesPerView: 2,
                        },

                        520: {

                            slidesPerView: 2,
                        },


                        768: {

                            slidesPerView: 2,
                        },

                        1000: {

                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide>

                    </SwiperSlide>



                </Swiper>
            </div>

            <p>COMING SOON</p>

        </div>
    );
};

export default Streaming;
import React from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination, Autoplay } from "swiper";

const ExploreProducts = () => {
    return (
        <div className='mt-10'>
             <div className='bg-[pink] lg:w-[500px] w-80 mx-auto  py-2 px-3  rounded-full '>
                <h1 className='text-center font-semibold '>EXPLORE PRODUCTS</h1>
            </div>


            <div className='mt-8  '>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"

                    breakpoints={{

                        0: {

                            slidesPerView: 1,
                        },

                        520: {

                            slidesPerView: 1,
                        },


                        768: {

                            slidesPerView: 2,
                        },

                        1000: {

                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div>
                            <img src="	https://web.bdbeautyglamorous.com/uploads/collection/1674490671DT4kXEMyba2346.jpeg" alt="" className='lg:h-80 h-40 w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src="		https://web.bdbeautyglamorous.com/uploads/collection/1680705264sfgsslPElx9070.jpeg" alt="" className='lg:h-80 h-40 w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src="https://web.bdbeautyglamorous.com/uploads/collection/1674491006M06Y5rBd90579.jpeg" alt="" className='lg:h-80 h-40 w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src="	https://web.bdbeautyglamorous.com/uploads/collection/1674491267tvNEkHcoxq610.jpeg" alt="" className='lg:h-80 h-40 w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src="	https://web.bdbeautyglamorous.com/uploads/collection/1674490671DT4kXEMyba2346.jpeg" alt="" className='lg:h-80 h-40 w-full' />
                        </div>
                    </SwiperSlide>



                </Swiper>
            </div>

            
        </div>
    );
};

export default ExploreProducts;
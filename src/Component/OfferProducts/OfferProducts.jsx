import React from 'react';

const OfferProducts = () => {
    return (
        <div className='mt-10'>

            <div className='bg-[pink] w-60 mx-auto  py-2 px-3  rounded-full '>
                <h1 className='text-center font-semibold'>OFFER PRODUCTS</h1>
            </div>

            <div className="carousel w-full mt-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://web.bdbeautyglamorous.com/uploads/collection/1674491095hKzFRYoEoh3622.jpeg" className="w-full lg:h-[450px]" />
                </div>
            </div>
        </div>
    );
};

export default OfferProducts;
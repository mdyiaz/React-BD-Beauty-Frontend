import React from 'react';
import { BsFillStarFill, BsFillCartPlusFill, BsFillSuitHeartFill } from 'react-icons/bs';

const EachProductsDetails = () => {
    return (
        <div className='container mx-auto py-20'>
            <div className='lg:mx-40 mx-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 bg-base-200 shadow-lg p-5'>
                <div className='grid lg:grid-cols-3 grid-cols-1'>
                    <div className='items-center'>
                        {/* <img src="https://web.bdbeautyglamorous.com/uploads/product/1680624365OG1dmU0ENS2536.jpeg" alt="" className='w-28 h-28 mx-auto mb-3'/> */}

                        <img src="https://web.bdbeautyglamorous.com/uploads/product/1680624365OG1dmU0ENS2536.jpeg" alt="" className='w-32 h-28 mb-3' />

                        <img src="https://web.bdbeautyglamorous.com/uploads/product/1680624365OG1dmU0ENS2536.jpeg" alt="" className='w-32 h-28 mb-3' />

                        <img src="https://web.bdbeautyglamorous.com/uploads/product/1680624365OG1dmU0ENS2536.jpeg" alt="" className='w-32 h-28 mb-3' />

                        <img src="https://web.bdbeautyglamorous.com/uploads/product/1680624365OG1dmU0ENS2536.jpeg" alt="" className='w-32 h-28 mb-3' />


                    </div>

                    <div className='col-span-2'>
                        <img src="https://web.bdbeautyglamorous.com/uploads/product/1680624365OG1dmU0ENS2536.jpeg" alt="" className='w-full h-[482px]' />
                    </div>
                </div>



                <div>
                    <h1 className='text-2xl mb-4  font-semibold'>Charcoal Pearl Detox & Brightening Bar</h1>

                    <div className='flex gap-5'>
                        <div className='flex gap-1 text-xl '>
                            <BsFillStarFill className='text-yellow-400' />
                            <BsFillStarFill className='text-yellow-400' />
                            <BsFillStarFill className='text-yellow-400' />
                            <BsFillStarFill className='text-gray-400' />
                            <BsFillStarFill className='text-gray-400' />
                        </div>

                        <div className='flex gap-5'>
                            <p>4.8</p>
                            <p>(73)</p>
                        </div>
                    </div>

                    <div className='mt-3'>
                        <p className='text-lg font-semibold text-gray-700'>TK 689.00</p>
                    </div>

                    <div className='flex gap-5 mt-10'>
                        <div className='flex  btn bg-black '>
                            <BsFillCartPlusFill className='text-[red]' />
                            <p className='text-white text-sm px-4'>ADD TO CART</p>
                        </div>

                        <div className='flex gap-2 btn btn-outline btn-secondary'>
                            <BsFillSuitHeartFill />
                            <p className=' text-sm'>ADD TO WISHLIST</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default EachProductsDetails;
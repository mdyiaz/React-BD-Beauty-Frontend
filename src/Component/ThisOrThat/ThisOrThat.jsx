import React from 'react';

const ThisOrThat = () => {
    return (
        <div className='mt-10'>

            <div className='bg-[pink] w-60 mx-auto  py-2 px-3  rounded-full '>
                <h1 className='text-center font-semibold'>THIS OR THAT</h1>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-5 mt-10'>
                <div>
                    <img src="	https://web.bdbeautyglamorous.com/uploads/thisOrThatSection/16807024939bdU2V9VPU4755.jpeg" alt="" className='w-full lg:h-[450px] h-72' />
                </div>

                <div>
                    <img src="	https://web.bdbeautyglamorous.com/uploads/thisOrThatSection/1680702494PHx7o4cmM59518.jpeg" alt="" className='w-full lg:h-[450px] h-72' />
                </div>
            </div>
        </div>
    );
};

export default ThisOrThat;
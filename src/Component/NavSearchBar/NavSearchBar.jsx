import React from 'react';
import { BsFillPersonFill, BsFillCartPlusFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavSearchBar = () => {
    return (
        <div className='lg:block hidden'>
            <div className='grid grid-cols-3  mt-4 '>
                <div>
                    <Link to='/' ><img src="https://web.bdbeautyglamorous.com/uploads/application/1661607420n2BrTj1cZN9142.jpg" alt="" className='w-24 mx-auto ' /></Link>

                </div>

                <div>
                    <div className="relative w-full ">
                        <input type="search" placeholder="Search Here" className="input input-bordered w-full pr-16 rounded-full border-none" />
                        <button className="btn bg-black absolute top-0 right-0 rounded-l-none rounded-full">Search</button>
                    </div>
                </div>

                <div className='grid grid-cols-2 justify-items-center'>
                    <div className='flex gap-2 items-right'>
                        <BsFillPersonFill className='text-xl mt-1' />
                        <Link to='/login' ><p className='text-blue-500'>Login</p></Link>
                        <Link to='/register' > <p className='hover:text-blue-500'>Register</p></Link>
                    </div>

                    <div className='flex gap-2'>
                        <Link to='/addtocart' > <BsFillCartPlusFill className='text-xl' /></Link>
                        <Link to='/wishlist' > <BsFillSuitHeartFill className='text-xl' /></Link>
                        <Link to='/generaloffer' ><img src="https://www.bdbeautyglamorous.com/static/media/discountIcon.6fa4bb0d9949c45217b6f0133685a37f.svg" alt="" className='w-5 h-5' /></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavSearchBar;
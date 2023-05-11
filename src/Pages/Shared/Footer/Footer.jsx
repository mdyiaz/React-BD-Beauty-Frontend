import React from 'react';
import { FaFacebookF, FaMobileAlt } from 'react-icons/fa';
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import { SlSupport } from 'react-icons/sl'
import { Link } from 'react-router-dom';

import apple from '../../../assets/png-transparent-app-store-apple-logo-apple-text-logo-video-game.png';
import googlePlay from '../../../assets/image.png';


const Footer = () => {
    return (
        <div>
            <footer className='bg-black text-white grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-14 lg:justify-items-center lg:px-0 px-5 py-10'>
                <div className='py-10'>
                    <img src="	https://web.bdbeautyglamorous.com/uploads/application/1661607420n2BrTj1cZN9142.jpg" alt="" className='w-44 mx-auto ' />

                    <div className='flex gap-2 justify-center mt-3 text-xl'>
                        <FaFacebookF />
                        <BsTwitter />
                        <BsInstagram />
                        <BsYoutube />
                    </div>
                </div>


                <div>
                    <h1 className='font-semibold text-lg'>GET IN TOUCH</h1>

                    <div className='mt-5'>
                        <div className='flex gap-1'>
                            <FaMobileAlt className='mt-1' />
                            <p className='font-semibold text-lg'>Call us at</p>

                        </div>
                        <p>+(880)1713-227555</p>
                        <p className='text-xs'>Monday to Friday : 9 AM to 7 PM</p>
                    </div>

                    <div className='mt-5'>
                        <div className='flex gap-1'>
                            <SlSupport className='mt-1' />
                            <p className='font-semibold text-lg'>Support</p>
                        </div>

                        <p>bdbeautyglamorous@gmail.com</p>
                    </div>


                    <div className='mt-5'>
                        <div className='flex gap-1'>
                            <SlSupport className='mt-1' />
                            <p className='font-semibold text-lg'>Careers</p>
                        </div>

                        <p>bdbeautyglamorous@gmail.com</p>
                    </div>


                    <div className='mt-5'>
                        <div className='flex gap-1'>
                            <SlSupport className='mt-1' />
                            <p className='font-semibold text-lg'>PR & Media</p>
                        </div>

                        <p>bdbeautyglamorous@gmail.com</p>
                    </div>
                </div>




                <div>
                    <h1 className='font-semibold text-lg'>INFORMATION</h1>

                    <div className='mt-5'>
                        <p><Link>Contact Us</Link></p>
                        <p><Link>Terms & Condition</Link></p>
                        <p><Link>Returns</Link></p>
                        <p><Link>FAQs</Link></p>
                        <p><Link>About Us</Link></p>

                    </div>
                </div>





                <div className='lg:col-span-2'>
                    <h1 className='font-semibold text-lg'>SUBSCRIBE TO OUR NEWSLETTER</h1>

                    <div className='mt-5'>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn bg-[pink] absolute top-0 text-black right-0 rounded-l-none">Subscribe</button>
                        </div>

                        <h1 className='font-semibold  mt-5'>GET THE NEW BD Beauty Glamorous APP TODAY.</h1>

                        <p className='mt-5'>Tap into a better shopping experience.</p>

                    </div>

                    <div className='flex justify-center gap-3 mt-5'>
                        <img src={googlePlay} alt=""  className='lg:w-40 w-32 h-20'/>
                        <img src={apple} alt="" className='lg:w-40 w-32 h-14 mt-3' />
                    </div>

                </div>
            </footer>

            <div className='bg-black'>
                <hr />
                <p className='text-center text-white py-5'>Copyright © 2022 BD Beauty Glamorous. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
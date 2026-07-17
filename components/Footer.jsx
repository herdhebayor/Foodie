'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import{FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest} from 'react-icons/fa'


function Footer(){
    const pathName = usePathname()
    const hideFooterOnRoute = ['/login', '/register','/onboarding','/checkout','/order-success']

    if(hideFooterOnRoute.includes(pathName)){
        return null
    }

    return(
        <div className='w-full h-fit min-h-50 bg-gray-400 relative overflow-x-hidden'>
            <div className='container mx-auto flex flex-col md:flex-row justify-around items-start md:items-center py-15 px-4 sm:px-6'>
                
                <div  className='flex flex-col sm:flex-row md:justify-around justify-between gap-6 items-start w-full md:w-1/2'>
                    <div className='text-gray-50'>
                        {/* //Web Logo */}
                        <div className="mr-8 font-display text-[4vw] md:text-[2vw] font-bold flex flex-col">
                             <span>Foodie.</span>
                             <p className='text-xs w-50'>
                                Crafted for cravings and built to be bitten. Explore our
                                signature burgers, fresh wraps, and refreshing drinks.
                            </p>
                        </div>
                        <div className='flex mt-10 gap-4 items-center'>
                            <FaFacebook size={20} className='hover:text-orange-500 cursor-pointer'/>
                            <FaTwitter size={20} className='hover:text-orange-500 cursor-pointer'/>
                            <FaInstagram size={20} className='hover:text-orange-500 cursor-pointer'/>
                            <FaYoutube size={20} className='hover:text-orange-500 cursor-pointer'/>
                            <FaPinterest size={20} className='hover:text-orange-500 cursor-pointer'/>
                        </div>
                    </div>

                    {/* Footer Menu */}
                    <div className='text-gray-50 text-sm'>
                        <div className='hover:text-orange-500 cursor-pointer'>Home</div>
                        <div className='hover:text-orange-500 cursor-pointer'>About</div>
                        <div className='hover:text-orange-500 cursor-pointer'>Our Services</div>
                        <div className='hover:text-orange-500 cursor-pointer'>Contact Us</div>
                        <div className='hover:text-orange-500 cursor-pointer'>Jobs</div>
                        <div className='hover:text-orange-500 cursor-pointer'>Bulk Orders</div>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row md:justify-around justify-between gap-6 mt-6 md:mt-0 items-start w-full md:w-1/2'>

                    {/* Office Address */}
                    <div className='text-gray-50 text-sm'>
                        <div>Office Address</div>
                        <div>123 Main Street</div>
                        <div>City, State, ZIP</div>
                        <div>Email: foodie@email.com</div>
                    </div>

                    {/* contact Us */}
                    <div className='text-gray-50 text-sm'>
                        <div>Contact Us</div>
                        <div>Phone: (123) 456-7890</div>
                        <div>Opening Hours: Mon - Fri, 9 A.M - 9 P.M</div>
                    </div>
                </div>

            </div>
            
            {/* copyright */}
            <div className='text-center absolute border-t bottom-1 text-xs left-0 w-full text-gray-50 py-4'>
                <div>&copy; 2023 Foodie. All rights reserved.</div>
            </div>


        </div>
    )
}

export default Footer
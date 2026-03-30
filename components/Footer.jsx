import React from 'react'
import{FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest} from 'react-icons/fa'


function Footer(){

    return(
        <div className='w-screen h-fit min-h-50 bg-gray-400 relative'>
            <div className='container mx-auto flex flex-col md:flex-row justify-around items-center py-15'>
                
                <div  className='flex justify-around items-center w-full md:w-1/2'>
                    <div className='text-gray-50'>
                        <div>Logo</div>
                        <div className='flex  mt-10 gap-4 items-center'>
                            <FaFacebook size={20}/>
                            <FaTwitter size={20}/>
                            <FaInstagram size={20}/>
                            <FaYoutube size={20}/>
                            <FaPinterest size={20}/>
                        </div>
                    </div>

                    {/* Footer Menu */}
                    <div className='text-gray-50 text-sm'>
                        <div>Home</div>
                        <div>About</div>
                        <div>Services</div>
                        <div>Contact</div>
                        <div>Jobs</div>
                        <div>Book multiple</div>
                    </div>
                </div>

                <div className='flex justify-around mt-6 md:mt-0  items-center w-full md:w-1/2'>

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
                        <div>Hours: Mon-Fri 9AM-5PM</div>
                    </div>
                </div>

            </div>
            {/* copyright */}
            <div className='text-center absolute bottom-1 md:bottom-3 text-xs left-0 w-full text-gray-50 py-4'>
                <div>&copy; 2023 Your Company. All rights reserved.</div>
            </div>


        </div>
    )
}

export default Footer
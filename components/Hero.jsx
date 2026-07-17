import React from 'react'
import Image from 'next/image';
import { BsFire } from "react-icons/bs";
import { FaStar} from "react-icons/fa";
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdDeliveryDining, MdLocationPin } from "react-icons/md";

// bg-[url('/images/image-bg.jpg)]
function Hero() {
  return (
    <div style={{backgroundImage:"url('/images/image-bg.jpg')"}} className="  bg-cover flex justify-center h-screen max-h-150  text-white w-full overflow-hidden">
      <div className=' bg-black/50  mx-auto px-4   md:px-10 flex  pt-20 py-10  w-full h-full'>
        <div className='md:container-xl lg:container w-full flex flex-col-reverse relative md:flex-row  md:justify-between gap-8 justify-left oveflow-hidden md:pt-8'>
          <div className='flex flex-col justify-end w-[80%] md:w-[60%] space-y-4 py-4 px-0 sm:px-2'>
            <h1 className='text-sm font-bold p-1 bg-orange-100 rounded-md text-orange-600 w-fit px-2 flex items-center gap-2'> <BsFire size={15} className="text-red-500 mr-2 "/> Delicious Food, Delivered Fast</h1>  
            <h2 className='md:text-[4.5vw] text-[10vw] w-full md:w-[60%] font-bold leading-tight flex flex-col'>
                FOODIE, Your Daily Dose of 
                <span className='text-orange-700'>Deliciousness</span>
            </h2>
            <p className='text-sm sm:text-base'>Enter your location to check for restaurants near you</p>
            <div className='w-full mb-10 md:mb-0'>
              <form className='flex  items-stretch w-full rounded-lg justify-between shadow-md border border-gray-200 p-1 gap-2 sm:gap-0'>
                <div className='flex items-center px-2'>
                  <MdLocationPin size={24} className='text-slate-500'/>
                  <input type='text' placeholder='Enter your location' className='w-full py-3 px-2 rounded-lg focus:outline-none'/>
                </div>
                <button className='px-8 py-3 cursor-pointer bg-orange-600 hover:text-lg duration-300 text-white rounded-lg hover:bg-orange-700 ease-in-out flex items-center justify-center gap-2 font-semibold'>Go <FaArrowRightLong size={25} className="text-white text-center"/></button>
              </form>
            </div>
          </div>

          <div className="absolute bottom-4 right-0 w-20 h-20 lg:w-40 md:w-30 md:h-30 lg:h-40 bg-black/10 backdrop-blur-xs border md:border-2 border-zinc-50 rounded-full hidden md:flex items-center justify-center">
              {/* <!-- The SVG container sized with Tailwind --> */}
              <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-spin [animation-duration:10s]">
                <defs>
                  {/* <!-- Defines the invisible circular path --> */}
                  <path 
                    id="circlePath" 
                    d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" 
                  />
                </defs>
                {/* <!-- Styles the text using Tailwind utilities --> */}
                <text className="text-[8px] font-semibold uppercase tracking-[0.2em] fill-zinc-50">
                  {/* <!-- Links the text to our predefined path id --> */}
                  <textPath href="#circlePath" startOffset="0%">
                    foodie • foodie • foodie • foodie • foodie • foodie • foodie • foodie •
                  </textPath>
                </text>
              </svg>
              
              {/* <!-- Optional Center Element (Logo, Icon, or Image) --> */}
              <div className=" w-12 h-12 md:w-18 md:h-18 lg:w-24 lg:h-24 border md:border-2 border-white rounded-full flex flex-col items-center justify-center text-white font-semi-bold md:font-bold shadow-md">
                <FaStar className="text-orange-500 text-lg"/>
                <span className="md:text-sm text-xs">4.8</span>
              </div>
            </div>

            <div className='absolute left-0 mx-auto top-[40%] right-0 w-fit bg-zinc-50 z-10 px-4 md:px-8 py-2 shadow-lg rounded-xl text-2xl hidden  md:flex gap-2  items-center justify-center text-orange-700 font-bold'>
              <MdDeliveryDining size={35} className="text-orange-500"/>  
              <div className='ml-1 text-xs font-bold text-slate-900  flex flex-col items-center justify-center '>
                <span  className="md:text-3xl text-2xl">25</span> min</div>
            </div>
          
        </div>
      </div>
    </div>
  )
}


export default Hero

import React from 'react'


function Hero() {
  return (
    <div className=" bg-[url('/hero-bg.png')] flex justify-center bg-center bg-cover h-150 md:h-screen  text-green-50 w-screen">
      <div className='bg-black/50 flex relative justify-center w-full h-full px-4 md:px-10'>
      <div className='container flex items-center md:justify-between justify-center'>
      <div className='flex flex-col space-y-5 px-6 md:w-1/3'>
        <h2 className='text-2xl font-bold flex flex-col'>
            Welcome to FOODIE
            <span className='text-lg italic'>Your Daily Dose of Deliciousness</span>
        </h2>
        <p>
            Crafted for cravings and built to be bitten. Explore our
             signature burgers, fresh wraps, and refreshing drinks.
        </p>
        <button className='bg-green-50 cursor-pointer w-fit text-stone-900 rounded-md py-2 px-6'>More...</button>
      </div>
      <div className="flex absolute opacity-40 -bottom-13 md:-bottom-32 left-0 items-center justify-center  w-screen">
        <p className="md:text-[18vw] text-[25vw]  font-extrabold text-white text-center">
            FOODIE
        </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

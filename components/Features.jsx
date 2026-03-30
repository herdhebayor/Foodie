import React from 'react'
import ProductCard from './ProductCard'

function Features() {
  return (
    <div className='relative z-2 w-screen bg-gray-50 min-h-screen'>
        <div className='container-xl block border px-10 py-10'>
            <div className='w-full flex flex-col justify-center'>
                <h2 className='text-2xl font-bold text-stone-900 text-center'>
                    Best Seller
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-4  gap-4 mt-10'>
                    
                </div>
                <button className='text-slate-900 cursor-pointer border rounded-md transition duration-300 ease-in-out hover:bg-slate-900 hover:text-green-50 hover:border-0 border-slate-900 px-6 py-2 mt-10 w-50 mx-auto'>View all</button>
            </div>
            <hr className='my-15'/>
            <div className='w-full flex flex-col justify-center'>
                <h2 className='text-2xl font-bold text-stone-900 mb-10 text-center'>
                    Combos you might like
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
                 
                </div>
                <button className='text-slate-900 cursor-pointer border rounded-md transition duration-300 ease-in-out hover:bg-slate-900 hover:text-green-50  hover:border-0 border-slate-900 px-6 py-2 mt-10 w-50 mx-auto'>View all</button>
            </div>

        </div>
      
    </div>
  )
}

export default Features

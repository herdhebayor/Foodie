import React from 'react'

function NewsLetter() {
  return (
    <div className='w-screen bg-white py-5 px-6 lg:px-10 '>
        <div className='md:container-xl lg:containre  bg-orange-600 text-slate-900 rounded-2xl mx-auto block px-10 py-6 md:py-10'>
            <h1 className='text-2xl font-bold text-center py-6'>Subscribe to our newsletter</h1>
        
            <div className='flex items-center justify-center gap-6'>
                <input type='email' placeholder='Enter your email' className='w-full md:w-1/2 px-4 py-3 rounded-md border border-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500'/>
                <button className='bg-slate-900 text-green-50 px-4 py-3 rounded-md'>Subscribe</button>
            </div>
        </div>
      
    </div>
  )
}

export default NewsLetter

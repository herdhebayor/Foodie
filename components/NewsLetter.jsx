import React from 'react'

function NewsLetter() {
  return (
    <div className='w-screen bg-white pt-5 min-h-100'>
        <div className='container bg-red-400 text-slate-900 rounded-2xl mx-auto block px-10 py-10'>
            <h1 className='text-2xl font-bold text-center py-10'>Subscribe to our newsletter</h1>
        
            <div className='flex items-center justify-center gap-6'>
                <input type='email' placeholder='Enter your email' className='w-full md:w-1/2 p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500'/>
                <button className='bg-green-500 text-green-50 px-4 py-2 rounded-md'>Subscribe</button>
            </div>
        </div>
      
    </div>
  )
}

export default NewsLetter

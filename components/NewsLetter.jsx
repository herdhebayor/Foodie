import React from 'react'

function NewsLetter() {
  return (
    <div className='w-screen py-5 px-6 lg:px-10 bg-white text-slate-900 '>
        <div className='md:container-xl lg:container space-y-3  rounded-2xl mx-auto block px-10'>
            <h1 className='text-2xl font-bold text-center'>Subscribe to our newsletter</h1>
            <p className='text-sm text-center'>Suscribe to our news letter to receive updates on our services and new products</p>
            <div className='flex items-center justify-center gap-6'>
                <input type='email' placeholder='Enter your email' className='w-full md:w-1/2 px-4 py-3 rounded-md border border-orange-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500'/>
                <button className='bg-orange-500 text-white px-4 py-3 rounded-md'>Subscribe</button>
            </div>
        </div>
      
    </div>
  )
}

export default NewsLetter

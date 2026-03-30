import React from 'react'

function ServicePage() {
  return (
    <div className='w-screen bg-white py-5'>
      <h1 className='text-3xl font-bold text-center py-4 text-slate-900'>Meet our staff</h1>
      <div className='container mx-auto block px-10 py-6'>
        <div className='flex items-center justify-center gap-6'>
          <div className='text-sm w-35 flex flex-col relative md:w-50 text-center items-center p-2 py-10 rounded-md'>
            <img src='/images/chef1.jpg' className='w-25  h-25 mb-4 rounded-full bg-black/10  mx-auto' alt='product'/>
            <div className='flex flex-col  text-slate-900'>
              <p className='font-bold '>John Doe</p>
              <p className='md:text-lg'>Assistant Chef</p>
            </div>
          </div>
          <div className='text-sm w-35 flex flex-col relative md:w-50 text-center items-center p-2 py-10 rounded-md'>
            <img src='/images/chef1.jpg' className='w-25  h-25 mb-4 rounded-full bg-black/10  mx-auto' alt='product'/>
            <div className='flex flex-col  text-slate-900'>
              <p className='font-bold '>Jane Smith</p>
              <p className='md:text-lg'>Head Chef</p>
            </div>
          </div>
          <div className='text-sm w-35 flex flex-col relative md:w-50 text-center items-center p-2 py-10 rounded-md'>
            <img src='/images/chef3.jpg' className='w-25  h-25 mb-4 rounded-full bg-black/10  mx-auto' alt='product'/>
            <div className='flex flex-col  text-slate-900'>
              <p className='font-bold '>Mike Johnson</p>
              <p className='md:text-lg'>Pastry Chef</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage

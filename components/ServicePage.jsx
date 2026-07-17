import React from 'react'
import Image from 'next/image';

function ServicePage() {
  return (
    <div className='w-full bg-white py-5 overflow-x-hidden'>
      <h1 className='text-3xl font-bold text-center py-4 text-slate-900'>Meet our staff</h1>
      <div className='md:container-xl lg:container mx-auto px-4 md:px-6 py-6'>
        <div className='flex items-center justify-between md:justify-center gap-4 md:gap-20'>
          <div className='text-sm  flex flex-col relative text-center items-center p-2 py-10 rounded-md'>
            <Image src='/images/assiChef.jpg' width={112} height={112} className='w-24 h-24 mb-4 rounded-full bg-black/10 mx-auto object-cover' alt='Assistant Chef'/>
            <div className='flex flex-col text-slate-900'>
              <p className='font-bold'>John Doe</p>
              <p className='md:text-lg'>Assistant Chef</p>
            </div>
          </div>
          <div className='text-sm flex flex-col relative text-center items-center p-2 py-10 rounded-md'>
            <Image src='/images/headChef.jpg' width={112} height={112} className='w-24 h-24  mb-4 rounded-full bg-black/10 mx-auto object-cover' alt='Head Chef'/>
            <div className='flex flex-col text-slate-900'>
              <p className='font-bold'>Jane Smith</p>
              <p className='md:text-lg'>Head Chef</p>
            </div>
          </div>
          <div className='text-sm  flex flex-col relative text-center items-center p-2 py-10 rounded-md'>
            <Image src='/images/pastryChef.jpg' width={112} height={112} className='w-24 h-24  mb-4 rounded-full bg-black/10 mx-auto object-cover' alt='Pastry Chef'/>
            <div className='flex flex-col text-slate-900'>
              <p className='font-bold'>Mike Johnson</p>
              <p className='md:text-lg'>Pastry Chef</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage

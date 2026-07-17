"use client";

import React from 'react';

function Bookings() {
  return (
    <div className='w-full bg-white text-slate-900 py-10'>
      <div className='md:container-xl lg:container mx-auto flex items-center justify-center px-4 md:px-6 lg:px-8 xl:px-10 gap-8 flex-col'>
        <div className='w-full md:text-center py-4 md:py-0'>
          <p className='text-4xl sm:text-5xl md:text-[5vw] text-center font-bold mb-4'>Book a Table</p>
          <p className='text-md sm:text-base'>
            Reserve your spot at FOODIE and savor the flavor! Book a table now for an unforgettable dining experience.
          </p>
          <p className='text-md sm:text-base mt-2'>
            You can also book us for your special events, parties, and corporate gatherings. Contact us for more details and let us make your occasion memorable with our delicious food and exceptional service.
          </p>
        </div>

        <div className='h-full rounded-md py-8 sm:py-10 shadow-lg px-4 sm:px-6 w-full'>
          <form className='w-full flex flex-col gap-6'>
              <div className='w-full mx-auto flex flex-col gap-3 justify-center lg:flex-row'>
                <div className='flex flex-col gap-3 justify-center md:flex-row '>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm text-slate-900 font-bold'>Name</label>
                    <input type='text' placeholder='Enter your name' className='w-full min-w-46 px-4 py-3 border border-gray-300 shadow-lg rounded-md text-slate-900' />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label className='text-sm text-slate-900 font-bold'>Email</label>
                    <input type='email' placeholder='Enter your email' className='w-full min-w-46 px-4 py-3 shadow-lg border border-gray-300 rounded-md text-slate-900' />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label className='text-sm text-slate-900 font-bold'>Phone</label>
                    <div className='relative w-full'>
                      <span className='text-gray-500 border-r border-gray-300 px-2 h-full flex justify-center items-center absolute left-0 top-0'>+234</span>
                      <input type='tel' id='phone' className='w-full min-w-46 pl-16 block px-4 py-3 border border-gray-300 rounded-md shadow-lg text-slate-900' placeholder='09123456' pattern='[0-9]{10}' required />
                    </div>
                  </div>

                  
                </div>

                <div className='grid md:max-w-300 mx-auto gap-3 grid-cols-5'>
                  <div className='flex flex-col gap-2 col-span-2'>
                    <label className='text-sm text-slate-900 font-bold'>Date</label>
                    <input
                      type='date'
                      id='booking-date'
                      className='block w-full sm:px-4 px-2 xl:px-4 py-3 border border-gray-300 rounded-lg shadow-lg text-slate-900'
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div className='flex flex-col gap-2 col-span-2'>
                    <label className='text-sm text-slate-900 font-bold'>Time</label>
                    <input type='time' id='time' className='block w-full px-2 sm:px-4 xl:px-4 py-3 cursor-pointer focus:border-indigo-500 border border-gray-300 rounded-lg shadow-lg' min='09:00' max='17:00' required />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label className='text-sm text-slate-900 font-bold'>Persons</label>
                    <input type='number' id='number-input' className='block w-full px-2 sm:px-4 xl:px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg outline-0 focus:border-indigo-500 shadow-lg placeholder:text-body' placeholder='1' max={10} min={1} required />
                  </div>
                </div>
              </div>

            <button className='bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 mt-2 mx-auto md:w-60 w-full rounded-md'>Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Bookings;

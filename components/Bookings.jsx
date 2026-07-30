"use client";

import React from 'react';
import {completeBooking} from '@/app/actions/completBooking'
import {useSession} from 'next-auth/react'
import { useGlobalContext } from '@/context/GlobalContext';

function Bookings() {

  const {data:session}= useSession()

  const {setShowToast,setToastType,setToastMessage} = useGlobalContext()

  const submitBooking = async (event) => {
    event.preventDefault();
    try {
      if (!session?.user) {
        setShowToast(true);
        setToastType('error');
        setToastMessage('User not logged in. Log in or create an account to book a table.');
        return;
      }

      const formData = new FormData(event.target);
      const name = formData.get('name');
      const email = formData.get('email');
      const time = formData.get('time');
      const person = formData.get('person');
      const date = formData.get('date');
      const phone = formData.get('phone');
      if (!name || !email || !time || !person || !date || !phone) {
        setShowToast(true);
        setToastType('error');
        setToastMessage('Some input fields are empty. Ensure all fields are filled.');
        return;
      }

      const newBooking = await completeBooking(formData);
      if (newBooking?.success) {
        setShowToast(true);
        setToastType('success');
        setToastMessage(newBooking.message || 'Your booking has been submitted successfully');
      } else {
        setShowToast(true);
        setToastType('error');
        setToastMessage(newBooking?.error || 'Could not submit booking.');
      }
    } catch (err) {
      console.log(err);
      setShowToast(true);
      setToastType('error');
      setToastMessage('Oops! Something went wrong while processing your data. Try again later.');
    }
  };

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
          <form onSubmit={submitBooking} className='w-full flex flex-col gap-6'>
              <div className='w-full mx-auto flex flex-col gap-3 justify-center lg:flex-row'>
                <div className='flex flex-col gap-3 justify-center md:flex-row '>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm text-slate-900 font-bold'>Name</label>
                    <input type='text' name='name' id='name' placeholder='Enter your name' className='w-full min-w-46 focus:border-orange-500 outline-0 p-4 border border-gray-300 shadow-lg rounded-md text-slate-900' />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label className='text-sm text-slate-900 font-bold'>Email</label>
                    <input type='email' name='email' id='email' placeholder='Enter your email' className='w-full focus:border-orange-500 outline-0 min-w-46 p-4 shadow-lg border border-gray-300 rounded-md text-slate-900' />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label className='text-sm text-slate-900 font-bold'>Phone</label>
                    <div className='relative w-full'>
                      <span className='text-gray-500 border-r border-gray-300 px-2 h-full flex justify-center items-center absolute left-0 top-0'>+234</span>
                      <input type='number' name='phone' id='phone' className='w-full min-w-46 pl-16 block p-4 border border-gray-300 rounded-md shadow-lg focus:border-orange-500 outline-0 text-slate-900' placeholder='09123456' pattern='[0-9]{10}' required />
                    </div>
                  </div>

                  
                </div>

                <div className='grid md:max-w-300 mx-auto gap-3 grid-cols-5'>
                  <div className='flex flex-col gap-2 col-span-2'>
                    <label className='text-sm text-slate-900 font-bold'>Date</label>
                    <input
                      type='date'
                      name='date' id='date'
                      className='block w-full sm:px-4 px-2 xl:px-4 py-4 border border-gray-300 outline-0 focus:border-orange-500 rounded-lg shadow-lg text-slate-900'
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div className='flex flex-col gap-2 col-span-2'>
                    <label className='text-sm text-slate-900 font-bold'>Time</label>
                    <input  type='time' name='time' id='time' className='block w-full px-2 sm:px-4 xl:px-4 py-4 cursor-pointer outline-0 focus:border-orange-500 border border-gray-300 rounded-lg shadow-lg' min='09:00' max='17:00' required />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label className='text-sm text-slate-900 font-bold'>Persons</label>
                    <input type='number' name='person' id='person' className='block w-full px-2 sm:px-4 xl:px-4 py-4 bg-gray-50 border border-gray-300 rounded-lg outline-0 focus:border-orange-500 shadow-lg placeholder:text-body' placeholder='1' max={10} min={1} required />
                  </div>
                </div>
              </div>

            <button className='bg-orange-500 hover:bg-orange-600 text-white cursor-pointer p-4 mt-2 mx-auto md:w-60 w-full rounded-xl font-bold text-md'>Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Bookings;

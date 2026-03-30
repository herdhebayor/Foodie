import React from 'react'

function Bookings() {
  return (
    <div className='w-full bg-slate-900 text-green-50 py-10'>
      <div className='container px-8  md:px-10 mx-auto flex items-center justify-center gap-10 flex-col md:flex-row '>
       <div className='w-full md:w-1/2  py-8 md:py-0'>
            <p className='md:text-[5vw] text-[8vw] text-center md:text-left font-bold mb-4'>Book a Table</p>
            <p className='text-sm text-gray-300 md:w-1/2'>
                Reserve your spot at FOODIE and savor the flavor! Book a table now for an unforgettable dining experience.
            </p>
            <p className='text-sm text-gray-300 mt-2 md:w-1/2'>
                You can also book us for your special events, 
                parties, and corporate gatherings. Contact us for more
                 details and let us make your occasion memorable with our 
                 delicious food and exceptional service.
            </p>
       </div>
       <div className='bg-white h-full rounded-md py-10 px-4 md:px-10'>
          <form className='flex flex-col gap-4 w-full md:w-100 mx-auto'>
            <div className='flex flex-col gap-2'>
              <label className='text-sm text-slate-900 font-bold'>Name</label>
              <input type='text' placeholder='Enter your name' className='w-full px-4 py-2 border border-gray-300 rounded-md text-slate-900'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-sm text-slate-900 font-bold'>Email</label>
              <input type='email' placeholder='Enter your email' className='w-full px-4 py-2 border border-gray-300 rounded-md text-slate-900'/>
            </div>
            <div className='flex items-center justify-between gap-2'>
                <div>
                    <label className='text-sm text-slate-900 font-bold'>Date</label>
                    <input type='date'  className=' w-35 px-4 py-2 border border-gray-300 rounded-md text-slate-900'/>
                </div>

                <div>
                    <label className='text-sm text-slate-900 font-bold'>Time</label>
                    <input type='time'  className='w-30 px-4 py-2 border border-gray-300 rounded-md text-slate-900'/>
                </div>

                <div>
                    <label className='text-sm text-slate-900 font-bold'>Persons</label>
                    <input type='number'  className='w-30 px-4 py-2 border border-gray-300 rounded-md text-slate-900'/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <textarea name="note" id="note" placeholder='Enter your note' className='w-full px-4 py-2 border border-gray-300 rounded-md text-slate-900'/>
            </div>
            <button className='bg-slate-900 hover:bg-slate-800 text-green-50 py-2 rounded-md'>Book Now</button>
          </form>
       </div>

      </div>
    </div>
  )
}

export default Bookings

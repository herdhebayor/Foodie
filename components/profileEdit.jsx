import React from 'react'

function EditProfile({ user }) {
  return (
    <div className='w-full'>
      <div className='mb-6 flex items-center justify-between'>
        <div>
          <h2 className='text-xl font-semibold text-slate-900'>Profile details</h2>
          <p className='text-sm text-slate-500'>Update your personal information for faster checkout.</p>
        </div>
        <button type='button' className='rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white'>Save changes</button>
      </div>

      <form className='grid gap-4 md:grid-cols-2'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='username' className='text-sm font-semibold text-slate-700'>Username</label>
          <input type='text' defaultValue={user?.username || ''} id='username' placeholder='Enter your username' className='rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-orange-400 focus:bg-white' />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='email' className='text-sm font-semibold text-slate-700'>Email</label>
          <input type='email' defaultValue={user?.email || ''} id='email' placeholder='Enter your email' className='rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-orange-400 focus:bg-white' />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='phone' className='text-sm font-semibold text-slate-700'>Phone</label>
          <input type='tel' defaultValue={user?.phone || ''} id='phone' name='phone' placeholder='Enter your phone number' className='rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-orange-400 focus:bg-white' />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='country' className='text-sm font-semibold text-slate-700'>Country</label>
          <select id='country' name='country' className='rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-orange-400 focus:bg-white'>
            <option>Nigeria</option>
          </select>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='state' className='text-sm font-semibold text-slate-700'>State</label>
          <select id='state' name='state' className='rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-orange-400 focus:bg-white'>
            <option>Lagos</option>
          </select>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='city' className='text-sm font-semibold text-slate-700'>City</label>
          <input type='text' id='city' defaultValue={user?.city || ''} name='city' className='rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-orange-400 focus:bg-white' />
        </div>

        <div className='flex flex-col gap-2 md:col-span-2'>
          <label htmlFor='street' className='text-sm font-semibold text-slate-700'>Delivery address</label>
          <textarea id='street' defaultValue={user?.street || user.address || ''} name='street' rows='3' className='rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-orange-400 focus:bg-white' />
        </div>
      </form>
    </div>
  )
}

export default EditProfile

import React from 'react'

function EditProfile({user}) {

  return (
    <div className='bg-white w-full h-full flex py-8 items-center justify-center'>
        {/* Profile edit */}
        <div className='w-full h-full md:w-100 rounded-md bg-gray-100 p-6'>
            <h1 className='text-2xl text-slate-900 font-bold'>Edit Profile</h1>
            <form className='flex flex-col gap-4'>
                <div>
                    <input type='file' accept='image' className='w-10 h-10 rounded-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='username' className='text-slate-900 font-semibold'>Username</label>
                    <input type='text' id='username' placeholder='Enter your username' className='w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email' className='text-slate-900 font-semibold'>Email</label>
                    <input type='email' id='email' placeholder='Enter your email' className='w-full px-4 py-2 rounded-md border border-gray-400 focus:outlinenone focus:ring-2 focus:ring-green-400'/>
                </div>
                <div>
                    <label htmlFor='phone' className='text-slate-900 font-semi-bold'>Phone</label>
                    <input type='phone' className='w-full px-4 py-2 rounded-md border border-gray-400 focus:ring-2 focus:ring-green-200' 
                    id='phone' name='phone' 
                    placeholder='Enter your phone number'
                    />
                </div>
                <div className='flex gap-4'>
                    <div>
                        <label htmlFor='country' className='text-slate-900 font-semibold'>Country</label>
                        <select id='country' name='country' className='w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'>
                            <option className='text-slate-900 font-semi-bold'>Nigeria</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='state' className='text-slate-900 font-semibold'>State</label>
                        <select id='state' name='state' className='w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'>
                            <option className='text-slate-900 font-semi-bold'>Lagos</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='city' className='text-slate-900 font-semibold'>City</label>
                        <input type='text' id='city' name='city' className='w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'/>
                    </div>
                </div>
                <div>
                    <label htmlFor='street' className='text-slate-900 font-semibold'>Street</label>
                    <input type='text' id='street' name='street' className='w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'/>
                </div>
            </form>

        </div>
      
    </div>
  )
}

export default EditProfile

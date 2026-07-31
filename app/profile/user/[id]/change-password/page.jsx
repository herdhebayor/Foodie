'use client'

import React,{useState} from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { FaArrowLeft } from "react-icons/fa6";
import { updatePassword } from "@/app/actions/updatePassword";
import deleteUser from '@/app/actions/deleteUser';


function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    

    const [status, setStatus] = useState({ type: null, message: '' })

    const {data: session} = useSession()
    if(!session || !session.user.id){
      return ( <div className='w-screen bg-white h-screen text-slate-900 flex flex-col justify-center items-center '>
            <h2 className='text-2xl font-bold'>No user is found, Signup to create an account with us</h2>
            <Link href='/register' className='px-4 py-3 rounded-xl mt-4 text-white bg-orange-500 hover:bg-orange-600'>Create account</Link>
        </div>)
    }

    const changePassword = async (e) => {
      e.preventDefault();

      setStatus({ type: null, message: '' })

      // basic client-side validation
      if (!oldPassword || !newPassword || !rePassword) {
        setStatus({ type: 'error', message: 'All fields are required' })
        return
      }
      if (newPassword !== rePassword) {
        setStatus({ type: 'error', message: 'New passwords do not match' })
        return
      }

      const formData = new FormData();
      formData.append('oldPassword', oldPassword);
      formData.append('newPassword', newPassword);
      formData.append('rePassword', rePassword);

      const res = await updatePassword(formData);

      if (!res?.success) {
        setStatus({ type: 'error', message: res?.error || 'Failed to update password' })
        return
      }

      setStatus({ type: 'success', message: 'Password updated successfully' })
      setOldPassword('')
      setNewPassword('')
      setRePassword('')
    }
  return (
    <div className='w-screen h-screen bg-white flex px-8 text-slate-900 justify-center items-center relative'>
        <Link href='/profile' className='p-2 px-4 absolute top-25 left-5 md:left-10 rounded-2xl border border-orange-600 flex gap-1 items-center'><FaArrowLeft/> Go back </Link>

        {status?.type && (
          <div
            className={`absolute top-24 left-0 right-0 mx-auto w-fit px-4 py-2 rounded-lg text-sm ${
              status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={changePassword} className='w-120 min-w-full flex flex-col gap-6'>
            <div >
                <label htmlFor='oldPassword'className='mb-3'>Enter Old Passwrod</label>
                <input type={showPassword ? 'text' : 'password'} 
                id='oldPassword' name='oldPassword'
                value={oldPassword}
                required
                onChange={(e)=> setOldPassword(e.target.value)}
                className='w-full px-4  py-3 border border-gray-100 shadow-sm hover:border-orange-600 focus:border-orange-600 outline-0 text-slate-900 rounded-lg'
                />
            </div>
            <div >
                <label htmlFor='newPassword'className='mb-3'>Enter New Passwrod</label>
                <input type={showPassword ? 'text' : 'password'} 
                id='newPassword' name='newPassword'
                value={newPassword}
                required
                onChange={(e)=> setNewPassword(e.target.value)}
                className='w-full px-4  py-3 border border-gray-100 shadow-sm hover:border-orange-600 focus:border-orange-600 outline-0 text-slate-900 rounded-lg'
                />
            </div>
            <div >
                <label htmlFor='rePassword'className='mb-3'>Enter New Passwrod Again</label>
                <input type={showPassword ? 'text' : 'password'} 
                id='rePassword' name='rePassword'
                value={rePassword}
                required
                onChange={(e)=> setRePassword(e.target.value)}
                className='w-full px-4  py-3 border border-gray-100 shadow-sm hover:border-orange-600 focus:border-orange-600 outline-0 text-slate-900 rounded-lg'
                />
            </div>

            <div className='flex items-center gap-2'>
              <input
                id='showPassword'
                type='checkbox'
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <label htmlFor='showPassword' className='text-sm text-slate-600'>Show passwords</label>
            </div>

            <button type='submit' className='w-full px-4 py-3 text-cente text-white bg-orange-500 shadow-sm hover:bg-orange-600 rounded-lg cursor-pointer'>
                Change Paswword
            </button>
        </form>
      
    </div>
  )
}

export default ChangePassword


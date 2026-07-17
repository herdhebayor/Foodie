'use client'

import React from 'react'
import {signOut} from 'next-auth/react'
import {CiLogout} from 'react-icons/ci'
import { useRouter } from 'next/navigation'

function LogoutBtn() {
    const router = useRouter()
  return (
    <div className='mt-2 flex cursor-pointer items-center justify-start 
    rounded-xl bg-red-50 hover:bg-red-100 px-3 py-3 text-sm font-semibold text-red-700' onClick={()=> {signOut(), router.push('/')}}><CiLogout size={18} className='mr-2' /> Logout</div>
  )
}

export default LogoutBtn

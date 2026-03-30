'use client'

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { useUser } from '@/hooks/useUser';
import { useGlobalContext } from '@/context/GlobalContext';

function OrderSuccess() {
  const router = useRouter();
  const {setCart} = useGlobalContext()
  const { user } = useUser();
  useEffect(
    ()=>{
      if(!user){
        toast.error(
          "User not logged in"
        )
        router.push('/login')
      }
      if(user){
        setCart([])
      }
    },[user, setCart]
  )

 

  
    return (
      <div className="w-screen min-h-screen pt-20 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your order has been place successfully, we'll contact you for more details</h2>
          <button 
            onClick={() => router.push('/menu')}
            className="px-6 py-2 bg-slate-900 text-white rounded-lg font-bold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  

  }

export default OrderSuccess;

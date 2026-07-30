'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Toast from '@/components/Toast';
import { useUser } from '@/hooks/useUser';
import { useGlobalContext } from '@/context/GlobalContext';
import { FaCheckCircle } from 'react-icons/fa';

function OrderSuccess() {
  const router = useRouter();
  const { setCart, setShowToast, setToastMessage,setToastType } = useGlobalContext()
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      setShowToast(true),
      setToastType('error')
      setToastMessage('You are not logged in')
      router.replace('/login?callbackUrl=%2Forder-success');
      return;
    }

    setCart([]);
  }, [user, router, setCart]);

  return (
    <div className='flex min-h-screen items-center justify-center bg-white px-4 py-20'>
      <div className='w-full max-w-xl rounded-4xl border border-gray-100 bg-white p-8 text-center shadow-xl'>
        <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600'>
          <FaCheckCircle size={32} />
        </div>
        <h1 className='mt-6 text-3xl font-bold text-slate-900'>Order confirmed!</h1>
        <p className='mt-3 text-sm leading-6 text-slate-500'>Your order has been placed successfully and our team will reach out with the next steps shortly.</p>
        <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center'>
          <button onClick={() => router.push('/orders')} className='rounded-full bg-orange-600 px-5 py-3 font-semibold text-white'>View my orders</button>
          <button onClick={() => router.push('/menu')} className='rounded-full border border-gray-200 px-5 py-3 font-semibold text-slate-700'>Continue shopping</button>
        </div>
      </div>
      <Toast/>
    </div>
  );
}

export default OrderSuccess;

'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useFormStatus } from 'react-dom';
import { useGlobalContext } from '@/context/GlobalContext';
import { useUser } from '@/hooks/useUser';
import { completeOrder } from '../actions/completeOrder';
import Loading from '@/components/Loading';
import { resolveImageSrc } from '@/utils/resolveImageSrc';
import Link from 'next/link';
import { IoIosArrowRoundBack } from 'react-icons/io';
import {useSession} from 'next-auth/react'

function Checkout() {
  const { cart, setToastType, setShowToast,setToastMessage } = useGlobalContext();
  const { user, loading } = useUser();
  const router = useRouter();
  const{ data:session, status} = useSession()

  //error state

  useEffect(() => {
    if (status === 'loading' || loading) {
      return <Loading />
    } else if (!session && !user) {
      setShowToast(true)
      setToastMessage('User not logged in')
      setToastType('error')
      router.replace('/login?callbackUrl=%2Fcheckout');
    }else if (session && !user?.profileCompleted) {
      router.push('/onboarding');
    }
  }, [router, cart.length, user]);

  console.log('cart:', cart);

  const handleCheckout = async (formData) => {
    try {
      const res = await completeOrder(formData);

      if (!res.success) {
        setShowToast(true)
        setToastMessage('Could not complete your order. Please try again')
        setToastType('error')
      }

      router.push('/order-success');
    } catch (error) {
      setShowToast(true)
      setToastMessage('Order failed. Please try again.')
      setToastType('error')
      setOrderLoading(false)
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
  const deliveryFee = ()=> {
    if (subtotal < 20000){
      return 500
    }
    return 0
  };
  const tax = Math.round(subtotal * 0.1);
  const discount = 0;
  const grandTotal = ()=> ( subtotal + deliveryFee() + tax ) - discount;
  const deliveryTime = '30-45 min';



  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <button
        type='submit'
        disabled={pending}
        className='mt-6 w-full rounded-2xl bg-orange-600 px-4 py-3 text-lg font-semibold text-white transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-50'
      >
        {pending ? 'Processing...' : 'Complete Order'}
      </button>
    );
  }

  return (
    <div className='min-h-screen relative bg-white px-4 py-6 md:px-8 pt-20 md:py-10'>
      <Link href='/cart' className='flex items-center gap-1 absolute top-5 left-5 rounded-full border border-gray-300 px-3 py-2 text-sm font-medium text-slate-900'>
          <IoIosArrowRoundBack size={20} />
          Back
        </Link>
      <div className='mx-auto max-w-7xl rounded-4xl border border-gray-100 bg-white p-4 shadow-xl md:p-6'>
        <div className='mb-6 flex flex-col gap-2'>
          <p className='text-sm font-semibold uppercase tracking-[0.25em] text-orange-600'>Checkout</p>
          <h1 className='text-2xl font-bold text-slate-900 md:text-3xl'>Almost there — confirm your order</h1>
          <p className='text-sm text-slate-500'>Your food is just a few taps away.</p>
        </div>

        <div className='grid gap-6 lg:grid-cols-[1.2fr_0.8fr]'>
          <div className='rounded-[28px] border border-gray-100 bg-gray-50 p-4 md:p-6'>
            <div className='mb-4 flex items-center justify-between'>
              <h2 className='text-xl font-semibold text-slate-900'>Order summary</h2>
              <span className='rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-600'>{cart.length} items</span>
            </div>

            <div className='space-y-3'>
              {cart.map((item, index) => (
                <div key={index} className='flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm'>
                  <div className='h-20 w-20 overflow-hidden rounded-2xl'>
                    <Image src={resolveImageSrc(item.image)} alt={item.name} width={120} height={120} className='h-full w-full object-cover' />
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-start justify-between gap-2'>
                      <div>
                        <h3 className='font-semibold text-slate-900'>{item.name}</h3>
                        <p className='text-sm text-slate-500'>Qty: {item.quantity}</p>
                      </div>
                      <p className='text-sm font-semibold text-slate-900'>&#x20A6;{(item.totalPrice || 0).toLocaleString('en-US')}</p>
                    </div>
                    {item.extras?.length > 0 && (
                      <div className='mt-2 flex flex-wrap gap-2'>
                        {item.extras.map((extra, eIndex) => (
                          <span key={eIndex} className='rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600'>
                            {extra.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='space-y-4'>
            <div className='rounded-[28px] border border-gray-100 bg-white p-5 shadow-sm'>
              <h2 className='text-xl font-semibold text-slate-900'>Payment summary</h2>
              <div className='mt-4 space-y-3 text-sm text-slate-600'>
                <div className='flex items-center justify-between'><span>Subtotal</span><span className='font-semibold text-slate-900'>&#x20A6;{subtotal.toLocaleString('en-US')}</span></div>
                <div className='flex items-center justify-between'><span>Delivery fee</span><span className='font-semibold text-slate-900'>&#x20A6;{deliveryFee( ).toLocaleString('en-US')}</span></div>
                <div className='flex items-center justify-between'><span>Tax</span><span className='font-semibold text-slate-900'>&#x20A6;{tax.toLocaleString('en-US')}</span></div>
                <div className='flex items-center justify-between'><span>Discount</span><span className='font-semibold text-emerald-600'>-&#x20A6;{discount.toLocaleString('en-US')}</span></div>
                <div className='flex items-center justify-between border-t border-dashed pt-3 text-base font-semibold text-slate-900'><span>Grand total</span><span>&#x20A6;{grandTotal().toLocaleString('en-US')}</span></div>
              </div>
              <div className='mt-4 rounded-2xl bg-orange-50 p-3 text-sm font-medium text-orange-700'>Estimated delivery: {deliveryTime}</div>
            </div>

            <div className='rounded-[28px] border border-gray-100 bg-white p-5 shadow-sm'>
              <h2 className='text-xl font-semibold text-slate-900'>Delivery details</h2>
              <form action={handleCheckout} className='mt-4 space-y-3 text-slate-900'>
                <div>
                  <label className='mb-1 block text-sm font-semibold pl-3'>Receiver Name</label>
                  <input type='text' name='receiver' defaultValue={user?.username || ''} className='w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none' required />
                </div>
                <div className='hidden'>
                  <label className='mb-1 block text-sm font-semibold pl-3'>Email</label>
                  <input type='email' name='email' defaultValue={user?.email || ''} readOnly className='w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none' required />
                </div>
                <div>
                  <label className='mb-1 block text-sm font-semibold pl-3'>Receiver Phone</label>
                  <input type='tel' name='phone' defaultValue={user?.phone || ''} className='w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none' required />
                  <span className='text-xs text-slate-500 leading-0.5 '>
                    Note: We will call you registered number incase we are not able to reach the number you provide.
                  </span>
                </div>
                <div>
                  <label className='mb-1 block text-sm font-semibold'>Delivery address</label>
                  <textarea name='address' defaultValue={user?.address || ''} rows='3'  className='w-full rounded- resize-none border border-gray-200 px-4 py-3 outline-none focus:border-orange-400' required />
                </div>
                <input type='hidden' name='cartData' value={JSON.stringify(cart)} />
                <input type='hidden' name='subtotal' value={subtotal} />
                <input type='hidden' name='tax' value={tax} />
                <input type='hidden' name='discount' value={discount} />
                <input type='hidden' name='deliveryFee' value={deliveryFee} />
                <input type='hidden' name='deliveryTime' value={deliveryTime} />
                <input type='hidden' name='totalAmount' value={grandTotal} />
                <SubmitButton />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;


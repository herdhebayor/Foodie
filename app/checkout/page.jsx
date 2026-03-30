'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useActionState} from 'react';
import { useFormStatus } from "react-dom";
import { toast } from 'react-toastify';
import { useGlobalContext } from '@/context/GlobalContext';
import { useUser } from '@/hooks/useUser';
import { completeOrder } from '../actions/completeOrder';
import Loading from '@/components/Loading';

function Checkout() {
  const { cart, setCart } = useGlobalContext();
  const {user, loading} = useUser()
  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      toast.info("Your cart is empty");
      router.push("/menu");
    } else if (!user?.profileCompleted) {
      router.push(`/onboarding`);
    }
  }, [router, cart.length, user]);

  
  const handleCheckout = async (formData) => {
  try {
    const res = await completeOrder(formData);
    
    if (!res.success) {
      throw new Error(data.error || "Order failed");
    }

    router.push("/order-success");

  } catch (error) {
    console.error(error);
    toast.error("Order failed. Please try again.");
  }
};
  
  const subtotal = cart.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
  const deliveryFee = 5;
  const tax = Math.round(subtotal * 0.1);
  const discount = 0;
  const grandTotal = subtotal + deliveryFee + tax - discount;
  const deliveryTime = '30-45 min';



  if (loading) return <Loading />;

  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <button
        type='submit'
        disabled={pending}
        className='w-full mt-6 rounded-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700 px-4 py-3 bg-slate-900 text-white font-bold text-lg'
      >
        {pending ? 'Processing...' : 'Complete Order'}
      </button>
    );
  }

  return (
    <div className='w-screen min-h-screen pt-6 bg-gray-50'>
      <div className='w-full min-h-screen'>
        <div className='m-auto min-h-screen flex items-start'>
          <div className='grid md:grid-cols-6 grid-cols-1 divide-gray-300 md:px-15 px-4 md:border-t border-t-gray-300 w-screen'>
            {/* Cart items summary */}
            <div className='md:col-span-4 md:border md:min-h-screen md:border-t-0 md:px-10 py-6 h-fit'>
              <div className='flex mb-4 justify-between text-slate-900 items-center'>
                <h3 className='text-2xl font-bold'>Order Summary</h3>
              </div>
              {cart.map((item, index) => (
                <div key={index} className='w-full flex md:p-4 px-2 py-3 border-dotted gap-4 items-center text-slate-900 border-b-2 border-b-gray-300'>
                  <div className='w-30 md:h-30 h-20 rounded-md'>
                    <img src={`/images/${item.image}`} alt={item.name} className='w-full h-full object-cover rounded-md'/>
                  </div>
                  <div className='flex justify-between w-full items-end'>
                    <div>
                      <h3 className='md:text-lg text-sm font-bold'>{item.name}</h3>
                      <div className='text-sm'>
                        {item.extras?.length === 0 ? null : item.extras.map((extra, eIndex) => (
                          <p className='flex text-xs' key={eIndex}>{extra.name} @{extra.price}</p>
                        ))}
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <p className='font-bold text-lg'>${(item.totalPrice || 0).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment & Delivery */}
            <div className='md:col-span-2 p-6 md:border flex flex-col items-center h-fit justify-center sticky top-0 border-gray-300 md:border-l-0 md:border-t-0'>
              <div className='container w-full px-4'>
                <div className='w-full border text-sm p-4 border-gray-300 rounded-xl mb-4'>
                  <h1 className='text-xl text-slate-900 font-bold text-center mb-4'>Payment Summary</h1>
                  <div className='p-4 space-y-1 border-b-2 border-dotted'>
                    <p className='flex justify-between items-center'>
                      Items Subtotal
                      <span className='text-slate-900 font-bold'>${subtotal.toFixed(2)}</span>
                    </p>
                    <p className='flex justify-between items-center'>
                      Delivery Fee
                      <span className='text-slate-900 font-bold'>${deliveryFee.toFixed(2)}</span>
                    </p>
                  </div>
                  <div className='p-4 space-y-1 border-b-2 border-dotted'>
                    <p className='flex justify-between items-center'>
                      Tax
                      <span className='text-slate-900 font-bold'>${tax.toFixed(2)}</span>
                    </p>
                    <p className='flex justify-between items-center'>
                      Discount
                      <span className='text-slate-900 font-bold'>-${discount.toFixed(2)}</span>
                    </p>
                    <p className='flex justify-between items-center font-bold text-lg pt-2'>
                      Grand Total
                      <span className='text-slate-900 text-2xl'>${grandTotal.toFixed(2)}</span>
                    </p>
                  </div>
                  <div className='p-4 space-y-1'>
                    <p className='flex justify-between items-center'>
                      Estimated Delivery
                      <span className='text-slate-900 font-bold'>{deliveryTime}</span>
                    </p>
                  </div>
                </div>

                <div className='w-full border text-sm p-4 border-gray-300 rounded-xl'>
                  <h3 className='text-xl font-bold text-slate-900 text-center mb-4'>Delivery Information</h3>
                  <form action={handleCheckout} className='space-y-3 text-slate-900'>
                    <div>
                      <label className='block text-sm mb-1'>Full Name</label>
                      <input
                        type='text'
                        name='receiver'
                        defaultValue={user?.username || ''}
                        readOnly
                        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-gray-50'
                        required
                      />
                    </div>
                    <div>
                      <label className='block text-sm mb-1'>Email</label>
                      <input
                        type='email'
                        name='email'
                        defaultValue={user?.email || ''}
                        readOnly
                        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-gray-50'
                        required
                      />
                    </div>
                    <div>
                      <label className='block text-sm mb-1'>Phone</label>
                      <input
                        type='tel'
                        name='phone'
                        defaultValue={user?.phone || ''}
                        readOnly
                        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-gray-50'
                        required
                      />
                    </div>
                    <div>
                      <label className='block text-sm mb-1'>Delivery Address</label>
                      <textarea
                        name='address'
                        defaultValue={user?.address || ''}
                        rows='3'
                        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900'
                        required
                      />
                    </div>
                    <input type="hidden" name="cartData" value={JSON.stringify(cart)} />
                    <input type="hidden" name="subtotal" value={subtotal} />
                    <input type="hidden" name="tax" value={tax} />
                    <input type="hidden" name="discount" value={discount} />
                    <input type="hidden" name="deliveryFee" value={deliveryFee} />
                    <input type="hidden" name="deliveryTime" value={deliveryTime} />
                    <input type="hidden" name="totalAmount" value={grandTotal} />
                    <SubmitButton />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;


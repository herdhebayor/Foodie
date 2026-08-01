'use client'

import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import CartProduct from '@/components/CartProduct'
import { useGlobalContext } from '@/context/GlobalContext';
import Loading from '@/components/Loading';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import Link from 'next/link'
import { IoMdClose } from "react-icons/io";
import { useSession } from 'next-auth/react';

export default function Cart() {
    const {cart,setCart, cartLoading, setToastMessage,setShowToast,setToastType} = useGlobalContext()
    const [loginErr, setLoginErr] = useState(false)
    const [profileErr, setProfileErr] = useState(false)
    const [message, setMessage] = useState('')
    

    const router = useRouter();
    const {data:session} = useSession()

    const calculateItemTotal = () => {
        const total = cart.reduce((sum, item) => sum + (Number(item?.totalPrice) || 0), 0)
        return total
    }

    const subtotal = calculateItemTotal()
    const tax = Math.round(subtotal * 0.1)
    const delivery = '500 - 1,400'
    const total1 = subtotal + tax + 500
    const total2 = subtotal + tax + 1400

    //Checkout cart
    const handleCheckoutCart = async () => {
        try {
            if(!session || !session.user){
                // show popup to login login
                setShowToast(true)
                setToastType('error')
                setToastMessage('You are not logged in')
            setLoginErr(true)
            setMessage('Login or create an account to continue')
            return
        }
            
            if (!session.user?.profileCompleted) {
                // show popup to complete profile
                setShowToast(true)
                setToastType('error')
                setToastMessage('Add address and phone number')
                setProfileErr(true)
                return;
            }
        } catch (error) {
            setShowToast(true)
            setToastType('error')
            setToastMessage('Network error please try again')
            return;
        }
        // Proceed to checkout
        router.push("/checkout");
    };
    if(cartLoading){<Loading/>}
    if (cart.length === 0) {
       return (
       <div className='w-screen bg-linear-to-b from-orange-100 to-zinc-100 text-slate-900 h-screen flex flex-col gap-6 justify-center items-center'>
            <MdOutlineRemoveShoppingCart size={50}/>
            <h1 className='text-2xl font-bold'>Your Cart is Empty</h1>
            <button onClick={()=>router.push('/menu')} className='ml-4 cursor-pointer px-8 py-3 bg-orange-600 shadow-xl hover:bg-orange-700 text-white rounded-lg'>Continue shopping</button>
        </div>)
        }
  return (
    <div className='w-screen min-h-screen pt-25 md:pt-30 py-16 md:px-10 px-0  bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15),transparent_80%)] bg-white'>
        <div className='xl:container h-full bg-white md:rounded-2xl md:shadow-lg mx-auto'>
        <div className='m-auto min-h-screen  flex  items-start'>
            <div className='flex md:flex-row flex-col md:gap-10 md:px-15 px-4  w-screen'>
                {/* main cart */}
                <div className='md:flex-1 w-full py-4 md:py-6 h-fit '>
                    <div className='flex my-8 justify-between text-slate-900 items-center'>
                        <h3 className='text-2xl font-bold'>Cart</h3>
                        <button onClick={()=>setCart([])} className='text-red-500 flex gap-2'>Clear cart</button>
                    </div>
                    {
                        !cart ? (<Loading/>):
                        (
                                cart.map((c, index)=>(
                                <Link key={index} href={`/menu/${c.id}`}>
                                    <CartProduct  item={c}/>
                                </Link>
                            ))
                        )
                    }
                </div>

                {/* Aside */}
                <div className='md:w-100 w-full p-6 flex items-center sticky top-0 h-fit justify-center md:border-l-0 md:border-t-0'>
                    <div className='md:container w-full rounded-b-xl h-full md:rounded-2xl md:border md:border-orange-100 bg-orange-50/70 p-4 md:shadow-sm'>
                        <h1 className='mb-4 text-center text-2xl font-bold text-slate-900'>Order Summary</h1>

                        <div className='w-full md:rounded-2xl md:border md:border-orange-100 bg-white p-4 text-sm text-slate-600'>
                            <div className='space-y-2 border-b border-dashed border-slate-200 pb-4'>
                                <p className='flex items-center justify-between'>
                                    <span>Total items</span>
                                    <span className='font-semibold text-slate-900'>{cart.length}</span>
                                </p>
                                <p className='flex items-center justify-between'>
                                    <span>Sub total</span>
                                    <span className='font-semibold text-slate-900'>₦{subtotal.toLocaleString('en-US')}</span>
                                </p>
                                <p className='flex items-center justify-between'>
                                    <span>Delivery fee</span>
                                    <span className='font-semibold text-slate-900'>₦{delivery}</span>
                                </p>
                                <p className='flex items-center justify-between'>
                                    <span>Service tax</span>
                                    <span className='font-semibold text-slate-900'>10%</span>
                                </p>
                            </div>

                            <div className='space-y-2 border-b border-dashed border-slate-200 py-4'>
                                <p className='flex items-center justify-between text-base'>
                                    <span className='font-semibold text-slate-800'>Estimated total</span>
                                    <span className='font-bold text-slate-900'>₦{`${total1.toLocaleString('en-US')} - ${total2.toLocaleString('en-US')}`}</span>
                                </p>
                            </div>

                            <div className='space-y-3 pt-4'>
                                <div className='rounded-xl bg-orange-50 p-3'>
                                    <p className='font-semibold text-slate-800'>Delivery window</p>
                                    <p className='mt-1 text-sm text-slate-600'>Your order is expected within 40 minutes after checkout.</p>
                                </div>

                                <div className='rounded-xl bg-slate-50 p-3'>
                                    <p className='font-semibold text-slate-800'>Payment</p>
                                    <p className='mt-1 text-sm text-slate-600'>Pay on delivery or through the secure checkout flow after you confirm your order.</p>
                                </div>

                                <div className='rounded-xl bg-emerald-50 p-3'>
                                    <p className='font-semibold text-emerald-700'>Need help?</p>
                                    <p className='mt-1 text-sm text-slate-600'>Contact support if your meal is delayed or if you need to change your order.</p>
                                </div>
                            </div>
                        </div>

                        <button onClick={handleCheckoutCart} className='mt-6 w-full cursor-pointer rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-orange-700'>
                            Checkout cart
                        </button>
                    </div>
                </div>

                {/* Login Error */}
                {
                    loginErr && (
                        <div className='fixed top-0 left-0 w-screen h-screen bg-black/50 z-100 flex p-6 text-slate-900 justify-center items-center'>
                            <div className='w-150 p-6 py-10 relative flex flex-col justify-center space-y-4 rounded-xl bg-white '>
                                <h2 className="text-2xl text-center font-bold w-full mb-4">You're Not Logged In</h2>
                                <p className='text-center'>{message}</p>
                                <Link onClick={()=>setLoginErr(false)} href='/login?callbackUrl=%2Fcart' className="px-8 w-fit min-w-30 py-3 bg-orange-600 text-white cursor-pointer rounded-xl mx-auto hover:bg-orange-500">Login</Link>
                                <button onClick={()=>setLoginErr(false)} className='absolute cursor-pointer right-5 top-5 w-fit font-bold text-2xl'><IoMdClose/></button>
                            </div>
                        </div>
                    )
                }


                {/* Profile Error */}
                {
                    profileErr && (
                        <div className='fixed top-0 left-0 w-screen h-screen bg-black/50 z-100 flex p-6 text-slate-900 justify-center items-center'>
                            <div className='w-150 p-6 py-10 relative flex flex-col justify-center space-y-4 rounded-xl bg-white '>
                                <h2 className="text-2xl text-center font-bold w-full mb-4">You're Not Logged In</h2>
                                <p className='text-center'>{message}</p>
                                <Link onClick={()=>setProfileErr(false)} href='/onbording' className="px-8 w-fit min-w-30 py-3 bg-orange-600 text-white cursor-pointer rounded-xl mx-auto hover:bg-orange-500">Complete Profile</Link>
                                <button onClick={()=>setProfileErr(false)} className='absolute cursor-pointer right-5 top-5 w-fit font-bold text-2xl'><IoMdClose/></button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        </div>

      
    </div>
  )
}

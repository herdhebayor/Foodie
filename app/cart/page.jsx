'use client'

import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import CartProduct from '@/components/CartProduct'
import { useGlobalContext } from '@/context/GlobalContext';
import Loading from '@/components/Loading';
import Toast from '@/components/Toast'
import { useUser } from '@/hooks/useUser';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import Link from 'next/link'
import { IoMdClose } from "react-icons/io";

function Cart() {
    const {cart,setCart, cartLoading, showToast, setToastMessage,setShowToast,setToastType} = useGlobalContext()
    const [loginErr, setLoginErr] = useState(false)
    const [profileErr, setProfileErr] = useState(false)
    const [message, setMessage] = useState('')
    
      
    
    const router = useRouter();
    const {user} = useUser()

    console.log(cart)

     const calculateItemTotal = () => {
        const total = cart.reduce((sum, e) => sum + e.totalPrice, 0)
        return total
    }
    const Tax = Math.round(calculateItemTotal * 0.1)
    const delivery = 500
    const Total = calculateItemTotal() + delivery + Tax ;

    //Checkout cart
    const handleCheckoutCart = async () => {
        try {
            if(!user){
                // show popup to login login
                setShowToast(true)
                setToastType('error')
                setToastMessage('You are not logged in')
                setProfileErr(true)
            setLoginErr(true)
            setMessage('Login or create an account to continue')
            return
        }
            
            if (user?.profileCompleted === false) {
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
    <div className='w-screen min-h-screen pt-25 py-16  bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15),transparent_80%)] bg-gray-50'>
        <div className='container h-full bg-white rounded-2xl shadow-lg mx-auto'>
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
                <div className='md:w-100 w-full p-6  flex items-center sticky top-0 h-fit justify-center md:border-l-0 md:border-t-0'>
                    <div className='container h-full px-4 rounded-md'>
                        <h1 className='text-3xl text-slate-900 font-bold text-center mb-4'>Summary</h1>

                        <div className='w-full border text-sm  text-gray-300 p-4 border-gray-300 rounded-xl'>
                            <div className='p-4 space-y-1 border-b-2 border-dotted'>
                                <p className='flex justify-between items-center'>
                                    Total items
                                    <span className='text-slate-900 font-bold'>{cart.length}</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    Sub Total
                                    <span className='text-slate-900 font-bold'>&#x20A6;{calculateItemTotal().toLocaleString('en-US')}</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    Delivery 
                                    <span className='text-slate-900 font-bold'>&#x20A6;{delivery}</span>
                                </p>
                            </div>
                            <div className='p-4 space-y-1 border-b-2 border-dotted'>
                                <p className='flex justify-between items-center'>
                                    Tax 
                                    <span className='text-slate-900 font-bold'>&#x20A6;{Tax}</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    Discount 
                                    <span className='text-slate-900 font-bold'>&#x20A6;5</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    Total Balance 
                                    <span className='text-slate-900 font-bold'>&#x20A6;{Total}</span>
                                </p>
                            </div>
                            <div className='p-4 space-y-1'>
                                <p className='flex justify-between items-center'>
                                    Delivery Time
                                    <span className='text-slate-900 font-bold'>40 min</span>
                                </p>
                            </div>

                        </div>

                        <button onClick={handleCheckoutCart} className='w-full mt-6 rounded-lg cursor-pointer hover:bg-orange-700 shadow-md px-4 py-3 bg-orange-600 text-white'>
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
                                <Link onClick={()=>setLoginErr(false)} href='/login' className="px-8 w-fit min-w-30 py-3 bg-orange-600 text-white cursor-pointer rounded-xl mx-auto hover:bg-orange-500">Login</Link>
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
        <Toast />
        </div>

      
    </div>
  )
}

export default Cart

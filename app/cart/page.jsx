'use client'

import React, {useState} from 'react'
import { useRouter } from 'next/navigation';
import CartProduct from '@/components/CartProduct'
import { RiDeleteBin5Line } from "react-icons/ri";
import { useGlobalContext } from '@/context/GlobalContext';
import Loading from '@/components/Loading';
import { toast } from 'react-toastify';
import { useUser } from '@/hooks/useUser';

function Cart() {
    const {cart,setCart, loading} = useGlobalContext()
    const [error, setError] = useState('')
    const router = useRouter();
    const {user} = useUser()

    

     const calculateItemTotal = () => {
        const total = cart.reduce((sum, e) => sum + e.totalPrice, 0)

        return total
    }

    //Checkout cart
    const handleCheckoutCart = async () => {
        
        
        try {
            if(!user){
            router.push('/login')
            toast.error('User not logged in')
            return
        }
            
            if (user?.profileCompleted === false) {
                router.push(`/onboarding`);
                return;
            }
        } catch (error) {
            toast.error('Network error, please try again');
            return;
        }
        // Proceed to checkout
        router.push("/checkout");
    };

    if (cart.length === 0) {
       return (
       <div className='w-screen bg-white text-slate-900 h-screen flex justify-center items-center'>
            <h1 className='text-2xl font-bold'>Your Cart is Empty</h1>
        </div>)
        }
  return (
    <div className='w-screen min-h-screen pt-6 bg-gray-50'>
        <div className='w-full min-h-screen'>
        <div className='m-auto min-h-screen  flex items-start'>
            <div className='grid md:grid-cols-6 grid-cols-1 divide-gray-300 md:px-15 px-4 md:border-t border-t-gray-300 w-screen'>
                {/* main cart */}
                <div className='md:col-span-4 md:border  md:min-h-screen md:border-t-0 md:px-10 py-4 md:py-6 h-fit '>
                    <div className='flex mb-4 justify-between text-slate-900 items-center'>
                        <h3 className='text-2xl font-bold'>Cart</h3>
                        <button onClick={()=>setCart([])} className='text-red-500 flex gap-2'>Delete All <RiDeleteBin5Line size={20}/></button>
                    </div>
                    {
                        loading ? (<Loading/>):
                        (
                                cart.map((c, index)=>(
                                <a key={index} href={`/menu/${c.id}`}>
                                    <CartProduct  item={c}/>
                                </a>
                            ))
                        )
                    }
                </div>

                {/* Aside */}
                <div className='md:col-span-2 p-6 md:border flex items-center sticky top-0 h-fit justify-center border-gray-300 md:border-l-0 md:border-t-0'>
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
                                    <span className='text-slate-900 font-bold'>${calculateItemTotal()}</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    Delivery 
                                    <span className='text-slate-900 font-bold'>$5</span>
                                </p>
                            </div>
                            <div className='p-4 space-y-1 border-b-2 border-dotted'>
                                <p className='flex justify-between items-center'>
                                    Tax 
                                    <span className='text-slate-900 font-bold'>$5</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    Discount 
                                    <span className='text-slate-900 font-bold'>$5</span>
                                </p>
                                <p className='flex justify-between items-center'>
                                    Total Balance 
                                    <span className='text-slate-900 font-bold'>$35</span>
                                </p>
                            </div>
                            <div className='p-4 space-y-1'>
                                <p className='flex justify-between items-center'>
                                    Delivery Time
                                    <span className='text-slate-900 font-bold'>40 min</span>
                                </p>
                            </div>

                        </div>

                        <button onClick={handleCheckoutCart} className='w-full mt-6 rounded-2xl cursor-pointer hover:bg-slate-700 px-4 py-2 bg-slate-900 text-white'>
                            Checkout cart
                        </button>

                    </div>

                </div>

            </div>

        </div>
        </div>
      
    </div>
  )
}

export default Cart

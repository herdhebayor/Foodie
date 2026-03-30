'use client'

import React,{useState, useEffect} from 'react'
import ProductCard from './ProductCard'
import {data } from '@/Product'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { useGlobalContext } from '@/context/GlobalContext'
import { IoCartOutline } from "react-icons/io5";

function Features() {

    const {cart, setCart}= useGlobalContext()
    const [btnDisabled, setBtnDisabled]= useState(false)

    const handleAddToCart = ()=>{
        const itemExist = cart.find(p => p.id === product.id)
        if(itemExist){
          alert('item allready add to cart')
        }
        const newProduct = {
          id: product.id,
          image: product.image,
          name:product.name,
          quantity: 1,
          extras: [],
          totalPrice:product.price ,
        }
    
        setCart(prev => [...prev, newProduct])
        setBtnDisabled(true)
        toast.success('item added to cart')
      }

    console.log('data', data)
   const shuffledProduct = data.products.sort(() => Math.random() - 1)
	const recentProducts = shuffledProduct.slice(0, 6)
  return (
    <div className='relative z-2 w-screen bg-white min-h-screen'>
        <div className='container mx-auto block border px-10 py-10'>
            <section className='flex flex-col justify-center '>
                <h2 className='text-3xl font-bold text-center mb-6'>Our Featured Dishes</h2>
                <div className='flex items-center justify-center gap-6'>
                    {recentProducts.map((item) => (
                        <div key={item.id} className='text-sm w-35 hover:shadow-2xl  md:w-45 items-center bg-black/10 p-2 rounded-md'>
                            <Link href={`/menu/${item.id}`}>
                                <img src={`/images/${item.image}`} className='w-fit h-25 md:h-30 mb-4  mx-auto' alt='product'/>
                            </Link>
                                <div className='flex flex-col space-y-3 text-slate-900'>
                                    <p className='font-bold line-clamp-1'>{item.name}</p>
                                    <p className='text-sm line-clamp-2'>{item.description}</p>
                                    <div className='bg-green-50 flex justify-between items-center p-1'>
                                        <h2 className='md:text-lg font-bold'>${item.price}</h2>
                                        <button onClick={handleAddToCart} disabled={btnDisabled} className='bg-slate-900 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed text-green-50 h-full p-1 text-center'><IoCartOutline className='text-xl md:text-2xl text-green-500'/></button>
                                    </div>
                                </div>
                            
                        </div>
                    ))}
                    
                </div>
                <Link href={'/menu'} className='bg-slate-900 mx-auto mt-6 text-green-500 px-4 py-2 rounded-md'>
                    View Full Menu
                </Link>
            </section>
            <section className='flex flex-col'>
                    {/* Service section */}
                    <h2 className='text-3xl font-bold text-center mb-6 mt-10'>Why Choose Us?</h2>
                    <div className='flex items-center justify-center gap-6'>
                        <div className='flex flex-col items-center text-center gap-4'>
                            <img src='/images/fresh.png' className='w-20 h-20' alt='fresh'/>
                            <h3 className='font-bold text-lg'>Fresh Ingredients</h3>
                            <p className='text-sm text-gray-500'>We use only the freshest ingredients to prepare our dishes, ensuring a delicious and healthy meal every time.</p>
                        </div>
                        <div className='flex flex-col items-center text-center gap-4'>
                            <img src='/images/delivery.png' className='w-20 h-20' alt='delivery'/>
                            <h3 className='font-bold text-lg'>Fast Delivery</h3>
                            <p className='text-sm text-gray-500'>Our efficient delivery system ensures that your food arrives hot and on time, every time.</p>
                        </div>
                        <div className='flex flex-col items-center text-center gap-4'>
                            <img src='/images/quality.png' className='w-20 h-20' alt='quality'/>
                            <h3 className='font-bold text-lg'>Quality Service</h3>
                            <p className='text-sm text-gray-500'>Our friendly and professional staff are dedicated to providing you with the best dining experience possible.</p>
                        </div>
                    </div>
            </section>

        </div>
      
    </div>
  )
}

export default Features

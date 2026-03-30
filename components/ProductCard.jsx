'use client'
import React, {useState, useEffect} from 'react'
import { IoCartOutline } from "react-icons/io5";
import { useGlobalContext } from '@/context/GlobalContext';
import Link from 'next/link';
import { toast } from 'react-toastify';

function ProductCard({product}) {
  const {cart, setCart}= useGlobalContext()
  const [btnDisabled, setBtnDisabled]= useState(false)
  

  useEffect(
    ()=>{
      const itemExist = cart.find(p => p.id === product.id)
      if(itemExist){
        setBtnDisabled(true)
      }else{
        setBtnDisabled(false)
      }
    }
  )
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

  const handleIncrease = ()=>{
    const item = cart.find((p)=> p.id === product.id)
    const updatedItem = {
      item,
      quantity:quantity + 1,
      totalPrice: product.price * quantity
    }
    setCart((prev)=>[...prev,updatedItem])
  }
  return (
    <div className='text-sm w-35 hover:shadow-2xl  md:w-45 items-center bg-black/10 p-2 rounded-md'>
       <Link href={`/menu/${product.id}`}>
         <img src={`/images/${product.image}`} className='w-fit h-25 md:h-30 mb-4  mx-auto' alt='product'/>
       </Link>
        <div className='flex flex-col space-y-3 text-slate-900'>
            <p className='font-bold line-clamp-1'>{product.name}</p>
            <p className='text-sm line-clamp-2'>{product.description}</p>
            <div className='bg-green-50 flex justify-between items-center p-1'>
                <h2 className='md:text-lg font-bold'>${product.price}</h2>
                <button onClick={handleAddToCart} disabled={btnDisabled} className='bg-slate-900 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed text-green-50 h-full p-1 text-center'><IoCartOutline className='text-xl md:text-2xl text-green-500'/></button>
            </div>
        </div>
      
    </div>
  )
}

export default ProductCard

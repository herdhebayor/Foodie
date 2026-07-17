'use client'

import React from 'react'
import Image from 'next/image';
import { RiDeleteBin5Line } from "react-icons/ri";
import {FaMinus, FaPlus} from 'react-icons/fa'
import { useGlobalContext } from '@/context/GlobalContext';
import { resolveImageSrc } from '@/utils/resolveImageSrc';

function CartProduct({item}) {
  const {cart, setCart} = useGlobalContext()
  //const {quantity, setQuantity} = useState(item.quantity)

  // Delete item from cart
  const handleDeleteItem = () => {
    setCart(prev => prev.filter(i => i.id !== item.id))
  }

  return (
    <div className='w-full flex md:p-4 px-2 py-3 border-dotted gap-4 items-center text-slate-900 border-b-2 border-b-gray-300'>
      <div className='w-30 md:h-30 h-20 rounded-md bg-linear-to-b from-gray-100 to-gray-200'>
        <Image src={resolveImageSrc(item.image)} alt='product' width={120} height={120} className='w-full h-full object-cover rounded-md'/>
      </div>
      <div className='flex justify-between w-full items-end'>
        <div>
            
            <h3 className='md:text-lg text-sm font-bold'>{item.name}</h3>
            <div className='text-sm'>
              {

                 item.extras.length === 0 ? (null) : (item.extras.map((item, index)=>(
                    <p className='flex text-xs' key={index}>{item.name}</p>
                  )))

              }
          </div>
          <div className='w-fit'>
              <p className='font-bold'>&#x20A6;{item.totalPrice.toLocaleString('en-US')}</p>
            </div>
        </div>
        <div className='flex items-center h-full gap-4 text-2xl'>
            <button onClick={(e)=>{
              e.preventDefault()
            e.stopPropagation()
              handleDeleteItem()}} className='flex-items-center text-red-500'><RiDeleteBin5Line /></button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct

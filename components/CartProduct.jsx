'use client'

import React, {useState} from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import {FaMinus, FaPlus} from 'react-icons/fa'
import { useGlobalContext } from '@/context/GlobalContext';

function CartProduct({item}) {
  const {cart, setCart} = useGlobalContext()
  //const {quantity, setQuantity} = useState(item.quantity)

  // Delete item from cart
  const handleDeleteItem = () => {
    setCart(prev => prev.filter(i => i.id !== item.id))
  }

  return (
    <div className='w-full flex md:p-4 px-2 py-3 border-dotted gap-4 items-center text-slate-900 border-b-2 border-b-gray-300'>
      <div className='w-30 md:h-30 h-20 rounded-md'>
        <img src={`/images/${item.image}`} alt='product' className='w-full h-full'/>
      </div>
      <div className='flex justify-between w-full items-end'>
        <div>
            <p className='border rounded-2xl w-fit px-2 border-gray-300 text-xs mb-4'>Tag</p>
            <h3 className='md:text-lg text-sm font-bold'>{item.name}</h3>
            <div className='text-sm'>
              {

                 item.extras.length === 0 ? (null) : (item.extras.map((item, index)=>(
                    <p className='flex text-xs' key={index}>{item.name} @{item.price}</p>
                  )))

              }
        </div>
        </div>
        <div className='flex items-center h-full gap-4 text-sm'>
            <div className=' flex items-center'>
                <p className='font-bold'>${item.totalPrice}</p>
            </div>
            <button onClick={()=>handleDeleteItem()} className='flex-items-center'><RiDeleteBin5Line size={15}/></button>

        </div>
      </div>
    </div>
  )
}

export default CartProduct

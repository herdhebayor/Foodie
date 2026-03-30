'use client'

import React, {useState} from 'react'
import ProductIdCard from '@/components/ProductIdCard'
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useParams } from 'next/navigation';
import { data } from '@/Product';

function ProductId() {
      const params = useParams()
      const product = data.products.find((product)=>( product.id === params.id))
      
    
  return (
    <div className='w-screen  bg-gray-50'>
        <div className='flex border md:gap-20 gap-8 items-center py-6 px-4'>
            <a href='/menu' className='w-fit gap-1 text-sm flex md:ml-10 items-center px-3 py-1 rounded-2xl border border-gray-300 text-slate-900'>
                <IoIosArrowRoundBack size={20}/>
                Back
            </a>
            <div className='flex items-center text-slate-700  text-sm'> Category 
                <MdOutlineKeyboardDoubleArrowRight className='text-gray-400 ml-4'/> 
                <MdOutlineKeyboardDoubleArrowRight className='text-gray-400 mr-4'/>
                 {product.category}
            </div>
        </div>
      <ProductIdCard product={product}/>
    </div>
  )
}

export default ProductId

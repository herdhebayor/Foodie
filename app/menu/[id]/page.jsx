'use client'

import React from 'react'
import ProductIdCard from '@/components/ProductIdCard'
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { data } from '@/foodie_products';

function ProductId() {
  const params = useParams()
  const product = data.products.find((item) => item.id === params.id)

  if (!product) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-white px-4 py-10'>
        <div className='rounded-3xl border border-gray-200 bg-gray-50 px-8 py-6 text-center'>
          <h1 className='text-xl font-semibold text-slate-900'>Product not found</h1>
          <p className='mt-2 text-sm text-slate-500'>The dish you are looking for is unavailable right now.</p>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full bg-white pt-20'>
      <div className='mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-6 md:px-8'>
        <Link href='/menu' className='flex items-center gap-1 rounded-full border border-gray-300 px-3 py-2 text-sm font-medium text-slate-900'>
          <IoIosArrowRoundBack size={20} />
          Back to menu
        </Link>
        <div className='flex items-center text-sm text-slate-500'>
          <span className='rounded-full bg-gray-100 px-3 py-1'>Category</span>
          <MdOutlineKeyboardDoubleArrowRight className='mx-2 text-gray-400' />
          <span className='rounded-full bg-orange-50 px-3 py-1 font-semibold text-orange-600'>{product.category?.name ?? product.category}</span>
        </div>
      </div>
      <ProductIdCard product={product} />
    </div>
  )
}

export default ProductId

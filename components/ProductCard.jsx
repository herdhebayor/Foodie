'use client'
import React from 'react'
import Image from 'next/image';
import { IoCartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import LikeBtn from '@/components/LikeBtn'


function ProductCard({ product }) {
  const getProductCategoryName = (item) => item?.category?.name ?? item?.category ?? 'Featured'
  
  const getProductImage = (item) => {
    const images = Array.isArray(item?.images) ? item.images : []
    const firstImage = images[0]

    if (typeof firstImage === 'string' && firstImage.startsWith('http')) return firstImage
    if (typeof firstImage === 'string' && firstImage.startsWith('/')) return firstImage
    return '/images/chicken_burger.jpg'
  }
  
  const isFeatured = Boolean(product?.featured ?? product?.badges?.includes('Popular'))

  const imageSrc = getProductImage(product)
  const categoryName = getProductCategoryName(product)

  return (
    <div className='group w-full overflow-hidden md:rounded-3xl rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:w-50'>
      <div className='relative h-26 overflow-hidden bg-linear-to-br from-orange-50 to-amber-100 md:h-30'>
        <Image
          src={imageSrc}
          width={240}
          height={180}
          loading='lazy'
          unoptimized={imageSrc.startsWith('http')}
          className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
          alt={product.name}
        />
        <div className='absolute left-2 w-fit max-w-[60%] line-clamp-1 top-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-slate-700 backdrop-blur md:text-xs'>
          {product.badges?.[0] || (isFeatured ? 'Featured' : '')}
        </div>
        <div
          className='absolute right-2 top-2 '
          onClick={(e) => {
            // Prevent any parent navigation (e.g., if card is wrapped in a Link)
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          <LikeBtn product={product}/>
        </div>

        <div className='absolute bottom-2 left-2 rounded-full bg-slate-900/80 px-2 py-1 text-[10px] font-semibold text-white md:text-xs'>
          {categoryName}
        </div>
      </div>

      <div className='space-y-2 md:p-3 p-2'>
        <div className='flex items-start md:items-center justify-between gap-2'>
          <p className='line-clamp-1 text-sm font-semibold text-slate-900'>{product.name}</p>
          <div className='flex items-center text-amber-500'>
            <FaStar size={11} />
            <span className='ml-1 text-[11px] text-slate-600'>{product.reviewStats?.averageRating?.toFixed(1) || "3.9"}</span>
          </div>
        </div>

        <p className='line-clamp-2 text-xs leading-5 text-slate-500'>{product.shortDescription}</p>

        <div className='flex items-end justify-between gap-2 pt-0 md:pt-1'>
          <div>
            <p className='text-sm font-bold text-slate-900'>&#x20A6;{product.pricing.basePrice.toLocaleString('en-US')}</p>
            <p className='text-[11px] text-slate-400'>Fast delivery • {product.prerpTime || '15-20 mins'}</p>
          </div>
          
            <button
              className='rounded-full bg-orange-600 p-2 text-white shadow-sm transition hover:bg-orange-500'
            >
              <IoCartOutline size={16} />
            </button>
          

        </div>
      </div>
    </div>
  )
}

export default ProductCard

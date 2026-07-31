 'use client'

import React,{useState, useEffect} from 'react'
import ProductCard from './ProductCard'
import {data } from '@/foodie_products'
import Link from 'next/link'
import Image from 'next/image';
import { useGlobalContext } from '@/context/GlobalContext'
import { FaArrowRightLong  } from "react-icons/fa6";
import { BiCustomize } from "react-icons/bi";

function Features() {

    const { setSelectedCategory}= useGlobalContext()


    const recentProducts = data.products.slice(0, 10); // Get the first 10 products from the data
  return (
    <div className='relative z-2 w-full bg-white min-h-screen overflow-x-hidden'>
        <div className='md:container-xl lg:container mx-auto block px-0 md:px-8 lg:px-10 py-4'>
            <section className='py-10 text-slate-900'>
                <div className='flex justify-between items-center mb-4 px-4 md:px-0'>
                    <h2 className='text-lg md:text-xl font-bold'>Explore our category</h2>
                    <Link href={'/menu'} className='text-orange-600 text-sm md:text-base flex items-center gap-2 font-bold hover:text-orange-700'>
                        View All <FaArrowRightLong className='ml-1'/>
                    </Link>
                </div>
                    <div className="flex snap-x items-center justify-between snap-mandatory ml-2 md:ml-0 snap-center overflow-x-scroll gap-4 p-4 md:rounded-xl md:shadow-lg">
                    <Link href='/menu' onClick={()=> setSelectedCategory('Burger')} className='flex flex-col gap-1 md:p-4 justify-center min-w-20 h-fit md:min-w-55 rounded-xl cursor-pointer md:border border-gray-100 hover:border-orange-300 md:shadow-md md:bg-linear-to-t from-zinc-50 to-white'>
                        <Image src='/images/chicken_burger.jpg' alt='Burger' width={150} height={150} className='w-20 h-20 mx-auto object-cover rounded-full'/>
                        <p className='w-full text-center text-sm'>Burger</p>
                    </Link>

                    <Link href='/menu' onClick={()=> setSelectedCategory('Pizza')} className='flex flex-col gap-1 md:p-4 justify-center min-w-20 h-fit md:min-w-55 rounded-xl cursor-pointer md:border border-gray-100 hover:border-orange-300 md:shadow-md md:bg-linear-to-t from-zinc-50 to-white'>
                        <Image src='/images/pepperoni-pizza.jpg' alt='Pizza' width={150} height={150} className='w-16 h-16 sm:w-20 sm:h-20 mx-auto object-cover rounded-full'/>
                        <p className='w-full text-center text-sm'>Pizza</p>
                    </Link>

                    <Link href='/menu' onClick={()=> setSelectedCategory('Drinks')} className='flex flex-col gap-1 md:p-4 justify-center min-w-20 h-fit md:min-w-55 rounded-xl cursor-pointer md:border border-gray-100 hover:border-orange-300 md:shadow-md md:bg-linear-to-t from-zinc-50 to-white'>
                        <Image src='/images/oreo-milkshake.jpg' alt='Milkshakes' width={150} height={150} className='w-16 h-16 sm:w-20 sm:h-20 mx-auto object-cover rounded-full'/>
                        <p className='w-full text-center text-sm'>Milkshakes</p>
                    </Link>

                    <Link href='/menu' onClick={()=> setSelectedCategory('Dessert')} className='flex flex-col gap-1 md:p-4 justify-center min-w-20 h-fit md:min-w-55 rounded-xl cursor-pointer md:border border-gray-100 hover:border-orange-300 md:shadow-md md:bg-linear-to-t from-zinc-50 to-white'>
                        <Image src='/images/chocolate_cake_slice.jpg' alt='Dessert' width={150} height={150} className='w-16 h-16 sm:w-20 sm:h-20 mx-auto object-cover rounded-full'/>
                        <p className='w-full text-center text-sm'>Dessert</p>
                    </Link>

                    <Link href='/menu' onClick={()=> setSelectedCategory('Wrap')} className='flex flex-col gap-1 md:p-4 justify-center min-w-20 h-fit md:min-w-55 rounded-xl cursor-pointer md:border border-gray-100 hover:border-orange-300 md:shadow-md md:bg-linear-to-t from-zinc-50 to-white'>
                        <Image src='/images/bbq-chicken.jpg' alt='BBQ grills' width={150} height={150} className='w-16 h-16 sm:w-20 sm:h-20 mx-auto object-cover rounded-full'/>
                        <p className='w-full text-center text-sm'>BBQ grills</p>
                    </Link>

                    <Link href='/menu' onClick={()=> setSelectedCategory('All')} className='flex flex-col gap-1 md:p-4 justify-center min-w-20 h-fit md:min-w-55 rounded-xl cursor-pointer md:border border-gray-100 hover:border-orange-300 md:shadow-md md:bg-linear-to-t from-zinc-50 to-white'>
                        <BiCustomize className='w-12 h-12 sm:w-16 sm:h-16 mx-auto'/>
                        <p className='w-full text-center text-sm'>More</p>
                    </Link>
                </div>
            </section>
            <section className='flex flex-col justify-center text-slate-900 my-10'>
                <div className='flex items-center justify-between mb-6 px-4 md:px-0'>
                    <h2 className='md:text-xl text-lg font-bold'>Popular From Today</h2>
                <Link href={'/menu'} className='text-orange-600 text-sm md:text-base flex items-center gap-2 font-bold hover:text-orange-700'>
                    View All <FaArrowRightLong className='ml-1'/>
                </Link>
                </div>
                
                <div className='flex gap-4 md:gap-6 overflow-x-auto py-4 px-2 ml-2 md:ml-0 md:p-4 snap-x snap-mandatory '>
                    {recentProducts.map((item) => (
                        <Link href={`/menu/${item.id}`} key={item.id} className='min-w-40 md:min-w-50 snap-center snap-always flex justify-center'>
                                <ProductCard product={item}/>
                        </Link>
                    ))}
                    
                </div>
                </section>
                <section className='px-2 md:px-0'>
                <div className="bg-orange-600 rounded-xl relative flex justify-around items-center gap-4 md:gap-8 lg:justify-between p-6 pb-10 lg:px-10">
                    <div className='flex flex-col sm-w-[60%] w-1/2 max-w-150'>
                        <h3 className='text-sm font-bold mb-1 text-white p-2 md:p-3 px-4 lg:px-10 bg-orange-400 rounded-lg w-fit'>Special Offers</h3>
                        <p className='md:text-5xl lg:text-6xl text-3xl font-bold'>Enjoy free delivery on orders above 
                            <span className="text-4xl md:text-6xl lg:text-7xl text-slate-900"> 20K</span>
                        </p>
                    </div>
                    <div className='w-1/2 min-w-fit h-full'>
                        <div className='flex items-center justify-center w-full h-full '>
                            <Image src='/images/veggie_burger.jpg' alt='Special Offer' width={2400} height={2400} className=' object-cover w-full h-full min-h-30 md:min-h-50 '/>
                        </div>
                        
                    </div>
                    <Link href='/menu' className="px-8 lg:px-10 py-3 cursor-pointer bg-white hover:bg-zinc-50 duration-150 ease-in-out shadow-xl border border-gray-300 rounded-lg flex items-center text-slate-900 font-bold absolute right-1/4 md:right-1/3 bottom-6">
                            Order Now <FaArrowRightLong className='text-orange-600 ml-2'/>
                    </Link>
                </div>
                </section>
        </div>
      
    </div>
  )
}

export default Features

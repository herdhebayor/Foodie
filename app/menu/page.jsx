import React from 'react'
import ProductCard from '@/components/ProductCard'
import { CiBurger, CiFries } from "react-icons/ci";
import { MdCake } from "react-icons/md";
import { GiSodaCan } from "react-icons/gi";
import { TbMilkshake } from "react-icons/tb";
import { FaWineBottle } from "react-icons/fa";
import { GiSandwich, GiCookie } from "react-icons/gi";
import { MdOutdoorGrill } from "react-icons/md";
import {data} from '@/Product'


function Menu() {
    const products = data.products
    
  return (
    <div className='w-screen block min-h-screen bg-white'>
        <div className='w-full min-h-screen  h-full border-slate-900'>
        <div className='flex flex-col md:gap-6 gap-4 relative'>
            <div className='sticky top-18 md:top-20 h-auto flex text-sm items-center bg-teal-100 text-slate-900 justify-around'>
                <a href='#burgers' className='group relative transition-all px-4 py-2 cursor-pointer duration-300 flex items-center hover:bg-teal-200'>
                    <CiBurger className='md:text-xl block text-lg'/>
                    <span className="ml-2 overflow-hidden transition-all duration-300 ease-in-out w-0 md:w-auto group-hover:w-auto group-hover:block whitespace-nowrap opacity-0 md:opacity-100 group-hover:opacity-100">
                        Burgers
                    </span>
                </a>
                <a href='#shawarma' className='group relative transition-all px-4 py-2 cursor-pointer duration-300 flex items-center hover:bg-teal-200'>
                    <GiSandwich className='md:text-xl block text-lg'/>
                    <span className="ml-2 overflow-hidden transition-all duration-300 ease-in-out w-0 md:w-auto group-hover:w-auto group-hover:block whitespace-nowrap opacity-0 md:opacity-100 group-hover:opacity-100">
                        Sharwama
                    </span>
                </a>
                <a href='#grills' className='group relative transition-all px-4 py-2 cursor-pointer duration-300 flex items-center hover:bg-teal-200'>
                    <MdOutdoorGrill className='md:text-xl block text-lg'/>
                    <span className="ml-2 overflow-hidden transition-all duration-300 ease-in-out w-0 md:w-auto md:opacity-100 group-hover:w-auto group-hover:block whitespace-nowrap opacity-0 group-hover:opacity-100">
                        Grills
                    </span>
                </a>
                <a href='#cakes' className='group relative transition-all px-4 py-2 cursor-pointer duration-300 flex items-center hover:bg-teal-200'>
                    <MdCake className='md:text-xl block text-lg'/>
                    <span className="ml-2 overflow-hidden transition-all duration-300 ease-in-out w-0 md:w-auto md:opacity-100 group-hover:w-auto group-hover:block whitespace-nowrap opacity-0 group-hover:opacity-100">
                        Cakes
                    </span>
                </a>
                <a href='#small_chops' className='group relative transition-all px-4 py-2 cursor-pointer duration-300 flex items-center hover:bg-teal-200'>
                    <GiCookie className='md:text-xl block text-lg'/>
                    <span className="ml-2 overflow-hidden transition-all duration-300 ease-in-out w-0 md:w-auto md:opacity-100 group-hover:w-auto group-hover:block whitespace-nowrap opacity-0 group-hover:opacity-100">
                        Small chops
                    </span>
                </a>
                <a href='#crunches' className='group relative transition-all px-4 py-2 cursor-pointer duration-300 flex items-center hover:bg-teal-200'>
                    <CiFries className='md:text-xl block text-lg'/>
                    <span className="ml-2 overflow-hidden transition-all duration-300 ease-in-out w-0 md:w-auto md:opacity-100 group-hover:w-auto group-hover:block whitespace-nowrap opacity-0 group-hover:opacity-100">
                        Crunchies
                    </span>
                </a>
                <a href='#milkshakes' className='group relative transition-all px-4 py-2 cursor-pointer duration-300 flex items-center hover:bg-teal-200'>
                    <TbMilkshake className='md:text-xl block text-lg'/>
                    <span className="ml-2 overflow-hidden transition-all duration-300 ease-in-out w-0 md:w-auto md:opacity-100 group-hover:w-auto group-hover:block whitespace-nowrap opacity-0 group-hover:opacity-100">
                        Milkshakes
                    </span>
                </a>
                <a href='#soda_drinks' className='group relative transition-all px-4 py-2 cursor-pointer duration-300 flex items-center hover:bg-teal-200'>
                    <GiSodaCan className='md:text-xl block text-lg'/>
                    <span className="ml-2 overflow-hidden transition-all duration-300 ease-in-out w-0 md:w-auto md:opacity-100 group-hover:w-auto group-hover:block whitespace-nowrap opacity-0 group-hover:opacity-100">
                        Soda Drinks
                    </span>
                </a>
            </div>
            <div className='flex-1 flex flex-col items-center'>
                <section className='text-slate-900 my-4 w-full' id='burgers'>
                    <div className='font-bold py-1 italic bg-slate-900 text-gray-50 px-4 md:pl-30 mb-6'>Burgers</div>
                    <div className=' w-fit mx-auto flex justify-center flex-wrap px-4 gap-4 md:px-20'>
                        {
                            products.filter(product=> product.category === 'Burgers').map((p, index) =>(
                                <div key={index} >
                                    <ProductCard product={p}/>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section id='shawarma' className='text-slate-900 my-4 w-full'>
                    <div className='font-bold py-1 px-4 md:pl-30 bg-slate-900 text-gray-50 italic mb-6'>Sharwarma</div>
                    <div className=' w-fit mx-auto md:px-20 flex justify-center flex-wrap gap-4 px-4  '>
                        {
                            products.filter(product=> product.category === 'Shawarma').map((p, index) =>(
                                <div key={index} >
                                    <ProductCard product={p}/>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section id='grills' className='text-slate-900 my-4 w-full '>
                    <div className='font-bold py-1 px-4 md:pl-30 bg-slate-900 text-gray-50 italic mb-6'>Grills</div>
                    <div className=' w-fit  mx-auto md:px-20 flex justify-center flex-wrap gap-4 px-4'>
                        {
                            products.filter(product=> product.category === 'Grills').map((p, index) =>(
                                <div key={index} >
                                    <ProductCard product={p}/>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section id='cakes' className='text-slate-900 my-4 w-full'>
                    <div className='font-bold py-1 px-4 md:pl-30 bg-slate-900 text-gray-50 italic mb-6'>Cakes</div>
                    <div className=' w-fit mx-auto md:px-20 flex justify-center flex-wrap gap-4 px-4  '>
                        {
                            products.filter(product=> product.category === 'Cakes').map((p, index) =>(
                                <div key={index} >
                                    <ProductCard product={p}/>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section id='small_chops' className='text-slate-900 my-4 w-full'>
                    <div className='font-bold py-1  px-4 md:pl-30 bg-slate-900 text-gray-50 italic mb-6'>Small chops</div>
                    <div className=' w-fit mx-auto md:px-20 px-4 flex justify-center flex-wrap gap-4'>
                        {
                            products.filter(product=> product.category === 'Small Chops').map((p, index) =>(
                                <div key={index}>
                                    <ProductCard product={p}/>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section id='crunches' className='text-slate-900 my-4 w-full '>
                    <div className='font-bold py-1 px-4 md:pl-30 bg-slate-900 text-gray-50 italic mb-6'>Crunches</div>
                    <div className=' w-fit mx-auto md:px-20 flex justify-center flex-wrap gap-4 px-4 '>
                        {
                            products.filter(product=> product.category === 'Crunches').map((p, index) =>(
                                <div key={index} >
                                    <ProductCard product={p}/>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section id='milk_shakes' className='text-slate-900 my-4 w-full'>
                    <div className='font-bold py-1 px-4 md:pl-30 bg-slate-900 text-gray-50 italic mb-6'>Milk shakes</div>
                    <div className=' w-fit mx-auto md:px-20 flex justify-center flex-wrap gap-4 px-4'>
                        {
                            products.filter(product=> product.category === 'Drinks').map((p, index) =>(
                                <div key={index} >
                                    <ProductCard product={p}/>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section id='soda_drinks' className='text-slate-900 my-4 w-full'>
                    <div className='font-bold py-1 px-4 md:pl-30 bg-slate-900 text-gray-50 italic mb-6'>Soda drinks</div>
                    <div className=' w-fit mx-auto md:px-20 flex justify-center flex-wrap gap-4 px-4 items-center '>
                        {
                            products.filter(product=> product.category === 'soda').map((p, index) =>(
                                <div key={index} >
                                    <ProductCard product={p}/>
                                </div>
                            ))
                        }
                    </div>
                </section>
                
            </div>
        </div>
            
        </div>
      
    </div>
  )
}

export default Menu

'use client'

import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { CiBurger, CiFries } from "react-icons/ci";
import { MdCake, MdOutlineRestaurantMenu } from "react-icons/md";
import { GiSodaCan } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { GiSandwich, GiChickenOven } from "react-icons/gi";
import { FaChevronDown, FaChevronUp, FaSearch, FaStar, FaPizzaSlice } from "react-icons/fa"
import { data } from '@/foodie_products'
import Link from 'next/link';
import { useGlobalContext } from '@/context/GlobalContext';

const categoryOptions = [
  { id: 'all', label: 'All', icon: MdOutlineRestaurantMenu },
  { id: 'Burger', label: 'Burgers', icon: CiBurger },
  { id: 'Wrap', label: 'Wraps', icon: GiSandwich },
  { id: 'Rice Bowl', label: 'Rice Bowls', icon: FaBowlFood },
  { id: 'Dessert', label: 'Desserts', icon: MdCake },
  { id: 'Pizza', label: 'Pizza', icon: FaPizzaSlice },
  { id: 'Chicken', label: 'Chickens', icon: GiChickenOven },
  { id: 'Drinks', label: 'Drinks', icon: GiSodaCan },
  { id: 'Fries', label: 'Fries', icon: GiSodaCan },
]

function Menu() {
  const products = data.products
  const [showMenuCategory, setShowMenuCategory] = useState(false)
  const {selectedCategory, setSelectedCategory} = useGlobalContext()

  const productName = products.map(product => (product.name) )
   

  const getCategoryLabel = (product) => product?.category?.name ?? product?.category ?? 'Featured'
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()

    const result = products.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || getCategoryLabel(product) === selectedCategory
      const haystack = `${product.name} ${product.description} ${getCategoryLabel(product)}`.toLowerCase()
      const matchesSearch = !query || haystack.includes(query)

      return matchesCategory && matchesSearch
    })

    return result.sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0)
      return Number(b.featured) - Number(a.featured)
    })
  }, [products, searchQuery, selectedCategory, sortBy])

  const featuredProducts = filteredProducts.filter((product) => product.badges?.find(b => b === 'Featured ')).slice(0, 3)
  const regularProducts = filteredProducts.filter((product) => !product.featured)

  return (
    <div className='min-h-screen w-full bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15),transparent_55%)] bg-gray-50 py-25 text-slate-900'>
      <div className='lg:container md:container-xl mx-auto px-4 md:px-8'>
        <div className='mb-6 rounded-3xl bg-linear-to-r from-orange-500 to-amber-400 p-6 text-white shadow-lg'>
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='mb-2 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-semibold'>Fresh picks for every craving</p>
              <h1 className='text-2xl font-bold sm:text-3xl'>Discover your next favorite meal</h1>
              <p className='mt-2 max-w-2xl text-sm text-orange-50'>Browse by category, search fast, and find the perfect comfort food in seconds.</p>
            </div>
            <div className='flex flex-col gap-2 sm:flex-row'>
              <label className='flex items-center rounded-full bg-white px-3 py-2 text-sm text-slate-700 shadow-sm'>
                <FaSearch className='mr-2 text-orange-500' />
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder='Search menu'
                  className='w-full bg-transparent outline-none'
                />
              </label>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className='rounded-full border border-white/60 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none'
              >
                <option value='featured'>Featured</option>
                <option value='rating'>Highest Rated</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 md:flex-row md:gap-8'>
          <aside className='hidden w-60 shrink-0 lg:block'>
            <div className='sticky top-24 rounded-2xl bg-white p-4 shadow-md'>
              <p className='mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500'>Categories</p>
              <div className='flex flex-col gap-2'>
                {categoryOptions.map((category) => {
                  const Icon = category.icon
                  const isActive = selectedCategory === category.id

                  return (
                    <button
                      key={category.id}
                      type='button'
                      onClick={() => {
                        setSelectedCategory(category.id)
                        setShowMenuCategory(false)
                      }}
                      className={`flex items-center cursor-pointer rounded-xl px-3 py-2 text-left text-sm transition ${isActive ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100 hover:text-orange-600'}`}
                    >
                      <Icon className='mr-2 text-base' />
                      {category.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </aside>

          <div className='md:hidden'>
            <button
              type='button'
              onClick={() => setShowMenuCategory((value) => !value)}
              className='flex w-full items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm'
            >
              <span className='font-semibold'>Filter by category</span>
              {showMenuCategory ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
            </button>

            {showMenuCategory && (
              <div className='mt-3 flex flex-col justify-around gap-2 rounded-2xl bg-white p-3 shadow-sm'>
                {categoryOptions.map((category) => {
                  const Icon = category.icon
                  const isActive = selectedCategory === category.id

                  return (
                    <button
                      key={category.id}
                      type='button'
                      onClick={() => {
                        setSelectedCategory(category.id)
                        setShowMenuCategory(false)
                      }}
                      className={`flex items-center rounded-xl px-3 py-2 text-left text-sm ${isActive ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'}`}
                    >
                      <Icon className='mr-2 text-base' />
                      {category.label}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          <main className='flex-1'>
            <div className='mb-5 flex flex-wrap items-center gap-2 overflow-x-auto pb-1'>
              {categoryOptions.map((category) => {
                const Icon = category.icon
                const isActive = selectedCategory === category.id

                return (
                  <button
                    key={category.id}
                    type='button'
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center rounded-full border px-3 py-2 text-sm whitespace-nowrap ${isActive ? 'border-orange-500 bg-orange-50 text-orange-600' : 'border-gray-200 bg-white text-slate-700'}`}
                  >
                    <Icon className='mr-2' />
                    {category.label}
                  </button>
                )
              })}
            </div>

            {featuredProducts.length > 0 && (
              <section className='mb-6 rounded-2xl bg-white p-4 shadow-sm'>
                <div className='mb-4 flex items-center justify-between'>
                  <div>
                    <h2 className='text-lg font-bold'>Popular picks</h2>
                    <p className='text-sm text-slate-500'>Handpicked favorites customers love right now.</p>
                  </div>
                  <div className='flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600'>
                    <FaStar className='mr-1' />
                    Top rated
                  </div>
                </div>
                <div className='grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 place-items-center lg:gap-6'>
                  {featuredProducts.map((product) => (
                    <Link className='cursor-pointer' href={`/menu/${product.id}`} key={product.id}>
                      <ProductCard product={product} />
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className='rounded-2xl bg-white p-4 shadow-sm'>
              <div className='mb-4 flex items-center justify-between'>
                <div>
                  <h2 className='text-lg font-bold'>Full menu</h2>
                  <p className='text-sm text-slate-500'>{filteredProducts.length} items available</p>
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className='rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-slate-500'>
                  No dishes match your search yet. Try a different keyword or category.
                </div>
              ) : (
                <div className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  place-items-center md:gap-6'>
                  {regularProducts.length > 0 ? regularProducts.map((product) => (
                    <Link className='cursor-pointer' href={`/menu/${product.id}`} key={product.id}>
                      <ProductCard product={product} />
                    </Link>
                  )) : filteredProducts.map((product) => (
                    <Link className='cursor-pointer' href={`/menu/${product.id}`} key={product.id}>
                      <ProductCard product={product} />
                    </Link>
                  ))}
                </div>
              )}
            </section>
          </main>
        </div>
      </div>
      
    </div>
  )
}

export default Menu


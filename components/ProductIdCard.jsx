'use client'

import React, { useMemo, useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { FaPlus, FaMinus } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io';
import { useGlobalContext } from '@/context/GlobalContext'
import { Rating, Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { data as productsData } from '@/foodie_products'
import Link from 'next/link'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import ProductCard from './ProductCard'
import LikeBtn from '@/components/LikeBtn'
import {reviewProduct} from '@/app/actions/reviewProduct'


function ProductIdCard({ product }) {
  const [extra, setExtra] = useState([])
  const { cart, setCart,setToastType, setToastMessage,setShowToast  } = useGlobalContext()
  const [quantity, setQuantity] = useState(1)
  const [variants, setVariants] = useState(null)
  const [spiceLevel, setSpiceLevel] = useState()
  const [removeIngredients, setRemoveIngredients] = useState([])
  const [milkType, setMilkType] = useState(null)
  const [crustType, setCrustType] = useState(null)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [rateSelected, setRateSelected] = useState(1)
  const [reviewComment, setReviewComment] = useState()

  const {data:session} = useSession()
  
  const getProductPrice = (item) => variants?.price ? variants.price : item?.pricing?.basePrice 
  const getProductImage = (item) => {
    const images = Array.isArray(item?.images) ? item.images : []
    const firstImage = images[0]

    if (typeof firstImage === 'string' && firstImage.startsWith('http')) return firstImage
    if (typeof firstImage === 'string' && firstImage.startsWith('/')) return firstImage
  }

  const submitReveiew = async (product)=>{
    try{
      if(!session){
      setShowToast(true),
      setToastType('error')
      setToastMessage('User not logged in, log in to review product')
      return;
      }
      const comment = reviewComment
      const rating = rateSelected 

      const review = await reviewProduct({ id: product.id, comment, rating })
      setShowToast(true),
      setToastType('success')
      setToastMessage('Thank You!, your review has been submited successfuly')
      setShowReviewForm(false)
      
    }catch(err){
      console.log(err)
      setShowToast(true),
      setToastType('error')
      setToastMessage('Could not complete you task, please try again')
    }
  }
  
 

  const suggestedProducts = useMemo(() => (
    productsData.products.filter((item) => item.category.name  === product.category.name && item.id !== product.id).slice(0, 6) ||
    Math.random(productsData.filter((item)=> item.id !== product.id) * productsData.length).slice(0, 6)
  ), [product.category.name, product.id])

  const myStyles = {
    itemShapes: Star,
    activeFillColor: '#f59e0b',
    inactiveFillColor: '#fed7aa',
    width:'5px'
  };

  const cartKey = JSON.stringify({
    id: product.id,
    size: variants?.name ?? null,
    extras: [...extra].sort((a, b) => a.name.localeCompare(b.name)),
    spiceLevel: spiceLevel || null,
    removeIngredients: [...removeIngredients].sort(),
    });

  const cartProduct = cart.find((item) => item.cartKey === cartKey)

  const isAddDisabled = cartProduct &&
    cartProduct.quantity === quantity;


  const handleSelectExtra = (event, selectedExtra) => {
    if (event.target.checked) {
      setExtra((prev) => [
        ...prev,
        {
          name: selectedExtra.name,
          price: selectedExtra.price,
        },
      ])
    } else {
      setExtra((prev) => prev.filter((item) => item.name !== selectedExtra.name))
    }
  }

  const handleIncreaseQuantity = () => {
    if (quantity < 20) {
      setQuantity((prev) => prev + 1)
    }
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const calculateItemTotal = () => {
    const extrasTotal = extra.reduce((sum, item) => sum + item.price, 0)
    return (getProductPrice(product) + extrasTotal) * quantity
  }

  const formatCurrency = (value) => new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(value)

  const handleAddToCart = () => {

    if( variants === null){
      setToastType('error')
      setToastMessage('Add Variants')
      setShowToast(true)
      return;
    }
    const newProduct = {
      cartKey,
      id: product.id,
      name: product.name,
      image: getProductImage(product),
      price: getProductPrice(product),
      size: variants?.name,
      spiceLevel,
      removeIngredients,
      milkType,
      crustType,
      quantity,
      extras: extra,
      totalPrice: calculateItemTotal(),
    }

    
    setCart((prev) => {
      const existing = prev.find((item) => item.cartKey === cartKey)
      if (existing) {
        return prev.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity, totalPrice: calculateItemTotal() }
            : item
        )
      }
      return [...prev, newProduct]
    })

    setShowToast(true)
    setToastMessage('Item has been added to cart successfully')
    setToastType('success')
  }

  const reviewStats = [
    { label: 'ServingSize', value: `${product.nutrition?.servingSize || 0}` },
    { label: 'Calories', value: `${product.nutrition?.calories || 0}` },
    { label: 'Protein', value: `${product.nutrition?.protein || 0}g` },
    { label: 'Carbs', value: `${product.nutrition?.carbs || 0}g` },
    { label: 'Fat', value: `${product.nutrition?.fat || 0}g` },
    { label: 'Sugar', value: `${product.nutrition?.sugar || 0}g` },
    { label: 'Fiber', value: `${product.nutrition?.fiber || 0}g ` },
    { label: 'Sodium', value: `${product.nutrition?.sodium || 0}mg ` },
  ]

  return (
    <div className='w-full min-h-screen bg-ambient-orange px-4 py-6 md:px-8 '>
      <div className='mx-auto flex max-w-7xl flex-col gap-6'>
        <div className='grid gap-6 lg:grid-cols-[1fr_0.9fr]'>
          <div className='rounded-4xl border border-orange-100 bg-white p-3 shadow-sm'>
            <div className='relative overflow-hidden rounded-3xl bg-orange-50'>
              <Image
                src={product.images[0]}
                alt={product.name}
                width={1400}
                height={2000}
                className=' w-full object-cover '
              />
              <div className='absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur'>
                {product.category.name}
              </div>
              <div className='absolute bottom-4 right-4 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-semibold text-white'>
                {product.availability.quantityAvailable >= 5  ? 'In stock' : product.availability.quantityAvailable > 1 ? 'Limited' : 'Out of stock'}
              </div>
            </div>
          </div>

          <div className='rounded-4xl border border-gray-100 bg-white p-6 shadow-sm'>
            <div className='flex items-start justify-between gap-4'>
              <div>
                <div className='mb-3 inline-flex rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-600'>
                  Popular choice
                </div>
                <h1 className='text-3xl font-bold text-slate-900'>{product.name}</h1>
                <p className='mt-2 text-sm leading-6 text-slate-500'>{product.description}</p>
              </div>
              {<LikeBtn product={product}/>}
            </div>

            <div className='mt-5 flex flex-wrap items-center gap-3'>
              <div className='flex items-center rounded-full bg-amber-50 px-3 py-2 text-sm font-medium text-amber-600'>
                <Rating value={product.reviewStats.averageRating} readOnly itemStyles={myStyles} />
                <span className='ml-2'>{product.reviewStats.averageRating.toFixed(1)}</span>
              </div>
              <span className='rounded-full bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-600'>⚡ {product.deleiveryTime}</span>
              <span className='rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600'>Free delivery over &#x20A6;5,000</span>
            </div>

            <div className='mt-6 rounded-2xl bg-slate-50 p-3'>
              <div className='mb-3 flex items-center justify-between'>
                <h2 className='text-lg font-semibold text-slate-900'>Make it your own</h2>
                <span className='text-sm text-slate-500'>Add extras</span>
              </div>

              {product?.extras?.length ? (
                <div className='flex flex-wrap gap-2'>
                  {product.extras.map((ext, index) => {
                    const isChecked = extra.some((item) => item.name === ext.name)
                    return (
                      <label
                        key={`${ext.name}-${index}`}
                        className={`flex min-w-35 cursor-pointer items-center justify-between rounded-2xl border px-3 py-3 text-sm transition ${isChecked ? 'border-orange-400 bg-orange-50 text-orange-700' : 'border-gray-200 bg-white text-slate-700'}`}
                      >
                        <span className='flex items-center gap-2'>
                          <input
                            type='checkbox'
                            checked={isChecked}
                            onChange={(event) => handleSelectExtra(event, ext)}
                            className='h-4 w-4 rounded border-gray-300 text-orange-600 accent-orange-600 focus:ring-orange-500'
                          />
                          <span className='text-xs'>{ext.name}</span>
                        </span>
                        <span className='font-semibold'> + {formatCurrency(ext.price * quantity)}</span>
                      </label>
                    )
                  })}
                </div>
              ) : (
                <p className='text-sm text-slate-500'>No add-ons available for this item yet.</p>
              )}
            </div>

            <div className='mt-6'>
              <h2 className='text-lg font-semibold text-slate-900'>Variant</h2>
              <div className='mt-3 flex flex-wrap gap-2'>
                {product.variants?.map((variant) => (
                  <span key={variant.id} onClick={() => setVariants(prev => prev?.name === variant.name ? prev : {"name": variant.name, "price":variant.price})} className={`cursor-pointer rounded-2xl border p-3 text-sm transition ${variants?.name === variant.name  ? 'border-orange-400 bg-orange-50 text-orange-700' : 'border-gray-200 bg-white text-slate-700'}`}>
                    {variant.name}
                  </span>
                ))}
              </div>
            </div>

            {product.customizations.spiceLevel && product.customizations.spiceLevel > 0 && <div className='mt-6'>
              <h2 className='text-lg font-semibold text-slate-900'>Spice Level</h2>
              <div className='mt-3 flex flex-wrap gap-2'>
                {product.customizations?.spiceLevel?.map((level, index) => (
                  <span key={`${level}-${index}`} onClick={() => setSpiceLevel(prev=> prev === level ?'' : level)} className={`cursor-pointer rounded-2xl border px-3 py-3 text-sm transition ${spiceLevel === level ? 'border-orange-400 bg-orange-50 text-orange-700' : 'border-gray-200 bg-white text-slate-700'}`}>
                    {level}
                  </span>
                ))}
              </div>
            </div>}

            {/* //Milk type */}
            {product.customizations.milkType && product.customizations.milkType > 0 && <div className='mt-6'>
              <h2 className='text-lg font-semibold text-slate-900'>Select Milk Type</h2>
              <div className='mt-3 flex flex-wrap gap-2'>
                {product.customizations?.milkType?.map((type, index) => (
                  <span key={`${type}-${index}`} onClick={() => setMilkType(prev=> prev === type ?'' : type)} className={`cursor-pointer rounded-2xl border px-3 py-3 text-sm transition ${milkType === type ? 'border-orange-400 bg-orange-50 text-orange-700' : 'border-gray-200 bg-white text-slate-700'}`}>
                    {type}
                  </span>
                ))}
              </div>
            </div>}

                {/* //Crust type for pizza */}
            {product.customizations.crustType && product.customizations.crustType > 0 && <div className='mt-6'>
              <h2 className='text-lg font-semibold text-slate-900'>Select Crust Type</h2>
              <div className='mt-3 flex flex-wrap gap-2'>
                {product.customizations?.crustType?.map((type, index) => (
                  <span key={`${type}-${index}`} onClick={() => setCrustType(prev=> prev === type ?'' : type)} className={`cursor-pointer rounded-2xl border px-3 py-3 text-sm transition ${crustType === type ? 'border-orange-400 bg-orange-50 text-orange-700' : 'border-gray-200 bg-white text-slate-700'}`}>
                    {type}
                  </span>
                ))}
              </div>
            </div>}

            {product.customizations.removeIngredients && product.customizations.removeIngredients.length > 0 && <div className='mt-6'>
              <h2 className='text-lg font-semibold text-slate-900'>Remove Ingredients</h2>
              <div className='mt-3 flex flex-wrap gap-2'>
                {product.customizations.removeIngredients.map((ing, index) => (
                  <span key={`${ing}-${index}`} onClick={() => setRemoveIngredients((prev) => prev.includes(ing) ? prev.filter((i) => i !== ing) : [...prev, ing])} className={`cursor-pointer rounded-2xl border px-3 py-3 text-sm transition ${removeIngredients.includes(ing) ? 'border-orange-400 bg-orange-50 text-orange-700' : 'border-gray-200 bg-white text-slate-700'}`}>
                    {ing}
                  </span>
                ))}
              </div>
            </div>}

            <div className='mt-6 flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4'>
              <div>
                <p className='text-sm text-slate-500'>Your total</p>
                <p className='text-2xl font-bold text-slate-900'>{formatCurrency(calculateItemTotal())}</p>
              </div>
              <div className='flex items-center gap-2'>
                <button
                  type='button'
                  disabled={quantity === 1}
                  onClick={handleDecreaseQuantity}
                  className='flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-orange-600 disabled:cursor-not-allowed disabled:bg-gray-100'
                >
                  <FaMinus size={12} />
                </button>
                <span className='min-w-8 text-center font-semibold text-slate-900'>{quantity}</span>
                <button
                  type='button'
                  disabled={quantity === 20}
                  onClick={handleIncreaseQuantity}
                  className='flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-orange-600 disabled:cursor-not-allowed disabled:bg-gray-100'
                >
                  <FaPlus size={12} />
                </button>
              </div>
            </div>

            <button
              type='button'
              onClick={handleAddToCart}
              disabled={isAddDisabled}
              className='mt-4 w-full rounded-2xl cursor-pointer bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-gray-400'
            >
              Add to cart
            </button>
          </div>
        </div>

        <div className='  '>
          <section className='rounded-4xl border border-gray-100 bg-white p-6 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div>
                <h2 className='text-xl font-semibold text-slate-900'>Nutrition & details</h2>
                <p className='text-sm text-slate-500'>Helpful info for a balanced order.</p>
              </div>
              <div className='rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-600'>
                {product.availability.quantityAvailable >= 5  ? 'In stock' : product.availability.quantityAvailable > 1 ? 'Limited' : 'Out of stock'}
              </div>
            </div>
            <div className='mt-3 flex flex-wrap gap-4'>
              {reviewStats.map((item) => (
                <div key={item.label} className='w-fit'>
                  <p className='text-sm text-slate-500'>{item.label}</p>
                  <p className='text-lg font-semibold text-slate-900'>{item.value || null}</p>
                </div>
              ))}
            </div>

            <div className='mt-3'>
              <h2 className='text-lg font-semibold text-slate-900'>Ingredients</h2>
              <div className='mt-3 flex flex-wrap gap-2'>
                {product.ingredients?.map((ingredient) => (
                  <span key={ingredient} className='text-sm text-slate-600 mr-2'>
                    {ingredient} |
                  </span>
                ))}
              </div>
            </div>

            <div className='mt-3'>
              <h2 className='text-lg font-semibold text-slate-900'>Dietary Information</h2>
              <div className='mt-3 flex flex-wrap gap-2'>
                
                  {<span className=' text-sm text-slate-600'>
                    {product.dietary.halal ? 'Halal' : 'Non-halal'}
                  </span>}
                  {product.dietary.vegetarian && (
                    <span className=' text-sm text-slate-600'>
                      Vegetarian
                    </span>
                  )}
                  {product.dietary.vegan && (
                    <span classN ame='text-sm text-slate-600'>
                      Vegan
                    </span>
                  )}
                  {product.dietary.glutenFree && (
                    <span className='text-sm text-slate-600'>
                      Gluten-Free
                    </span>
                  )}
              </div>
            </div>

            <div className='mt-3'>
              <h2 className='text-lg font-semibold text-slate-900'>Allergies</h2>
              <div className='mt-3 flex flex-wrap gap-2'>
                {product.allergens?.map((allergy) => (
                  <span key={allergy} className='text-sm text-slate-600'>
                    {allergy}
                  </span>
                ))}
              </div>
            </div>

              <h2 className='text-lg mt-3 font-semibold text-slate-900'>Stats</h2>
            <div className=' flex mt-3 flex-wrap gap-4'>
                              
              
                <div className='font-semibold text-slate-900 min-w-35'>
                  <p className='text-sm'>Sold</p>
                  <p className='mt-1 text-lg '>{product.metrics.soldCount.toLocaleString('en-US')}</p>
                </div>

                <div className='font-semibold text-slate-900 min-w-35 '>
                  <p className='text-sm '>Wish List</p>
                  <p className='mt-1 text-lg '>{product.metrics.wishlistCount.toLocaleString('en-US')}</p>
                </div>

                <div className='font-semibold text-slate-900 min-w-35'>
                  <p className='text-sm'>Views</p>
                  <p className='mt-1 text-lg '>{product.metrics.views.toLocaleString('en-US')}</p>
                </div>

                <div className='font-semibold text-slate-900 min-w-35'>
                  <p className='text-sm '>Cart Add</p>
                  <p className='mt-1 text-lg '>{product.metrics.cartAdds.toLocaleString('en-US')}</p>
                </div>
              
            </div>

            <section className='rounded-4xl border border-gray-100 bg-white p-6 shadow-sm mt-10'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-xl font-semibold text-slate-900'>Customer reviews <span className='text-sm'>({product.reviewStats.totalReviews})</span></h2>
              <p className='text-sm text-slate-500'>What people say after trying this dish.</p>
            </div>
            <button onClick={()=> setShowReviewForm(true)} type='button' className='flex items-center cursor-pointer gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white'>
              <FaPlus size={12} />
              Write a review
            </button>
          </div>

          <div className='mt-5 grid gap-4 lg:grid-cols-2'>
            {product.reviews?.map((review, index) => {
              const reviewTitle = review.rating >= 4 ? 'Loved it' : review.rating === 3 ? 'Solid choice' : 'Needs a tweak'
              const reviewDate = review.date ? new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently reviewed'
              return (
                <div key={`${review.userName}-${index}`} className='rounded-2xl border border-gray-100 bg-gray-50 p-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-semibold text-orange-600'>
                        {review.userName?.charAt(0) ?? 'U'}
                      </div>
                      <div>
                        <p className='font-semibold text-slate-900'>{review.userName}</p>
                        <p className='text-sm text-slate-500'>{reviewDate}</p>
                      </div>
                    </div>
                    <div className='rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600'>Verified order</div>
                  </div>

                  <div className='mt-3 flex flex-col gap-2'>
                    <div className='flex items-center'><Rating value={review.rating} readOnly itemStyles={myStyles} /></div>
                    <span className='text-sm font-semibold text-slate-700'>{reviewTitle}</span>
                  </div>

                  <p className='mt-3 text-sm leading-6 text-slate-600'>{review.comment}</p>
                  <div className='mt-4 flex items-center justify-between text-sm text-slate-500'>
                    <span>Helpful • {Math.max(3, review.rating + 2)} people found this useful</span>
                    <button type='button' className='font-semibold text-orange-600'>Helpful</button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
          </section>

          <section className='rounded-4xl border border-gray-100 bg-white p-4 md:p-6 shadow-sm'>
            <div className='flex items-center  justify-between'>
              <h2 className='text-xl font-semibold text-slate-900'>You may also like</h2>
              <Link href='/menu' className='flex items-center gap-1 text-sm font-medium text-orange-600'>
                View all
                <MdOutlineKeyboardDoubleArrowRight size={15} />
              </Link>
            </div>
            <div className='mt-5 flex overflow-x-scroll snap-x snap-mandatory gap-4'>
              {suggestedProducts.map((item) => (
                <Link href={`/menu/${item.id}`} key={item.id} className='min-w-40 max-w-40 md:max-w-50 md:min-w-50 py-4 snap-center cursor-pointer'>
                  <ProductCard product={item} />
                </Link>
              ))}
            </div>
          </section>
        </div>

              {/* Revie container */}
                  <div className={` ${ showReviewForm ? 'translate-y-0' : '-translate-y-1000'} duration-150 ease-in w-screen fixed top-0 left-0 py-10 z-3 pt-20 h-screen bg-black/20`}>
                    <div className={` w-full max-w-130  mx-auto h-full text-center relative overflow-y-scroll bg-white shadow-sm p-10 text-slate-900 rounded-xl`}>
                      <button onClick={()=> setShowReviewForm(false)} className="absolute right-5 top-5 border border-orange-100 bg-orange-50 w-10 h-10 rounded-full cursor-pointer flex justify-center items-center">
                        <IoMdClose/>
                      </button>
                      <h2 className='text-2xl font-bold mx-auto mb-10'>Write a Review</h2>
                      <div >
                        <p className='text-sm mb-6'>How would you rate this product</p>
                        <div className='mb-6 flex items-center justify-center gap-6'>
                          <button  
                          onClick={()=> setRateSelected(1)}  
                          className={`${rateSelected === 1 ?'border-orange-500 bg-orange-500 text-white' :'bg-white shadow-sm border-gray-100'} border hover:border-orange-500 hover:bg-orange-50 hover:text-slate-600 cursor-pointer  rounded-full w-12 h-12 flex justify-center items-center text-xl outline-white`}
                          >1</button>
                          <button 
                          onClick={()=> setRateSelected(2)}   
                          className={`${rateSelected === 2 ?'border-orange-500 bg-orange-500 text-white' :'bg-white shadow-sm border-gray-100'} border hover:border-orange-500 hover:bg-orange-50 hover:text-slate-600 cursor-pointer  rounded-full w-12 h-12 flex justify-center items-center text-xl outline-white`}
                          >2</button>
                          <button    
                          onClick={()=> setRateSelected(3)}   
                          className={`${rateSelected === 3 ?'border-orange-500 bg-orange-500 text-white' :'bg-white shadow-sm border-gray-100'} border hover:border-orange-500 hover:bg-orange-50 hover:text-slate-600 cursor-pointer  rounded-full w-12 h-12 flex justify-center items-center text-xl outline-white`}
                          >3</button>
                          <button   
                          onClick={()=> setRateSelected(4)}
                          className={`${rateSelected === 4 ?'border-orange-500 bg-orange-500 text-white' :'bg-white shadow-sm border-gray-100'} border hover:border-orange-500 hover:bg-orange-50 hover:text-slate-600 cursor-pointer  rounded-full w-12 h-12 flex justify-center items-center text-xl outline-white`}
                          >4</button>
                          <button    
                          onClick={()=> setRateSelected(5)}
                          className={`${rateSelected === 5 ?'border-orange-500 bg-orange-500 text-white' :'bg-white shadow-sm border-gray-100'} border hover:border-orange-500 hover:bg-orange-50 hover:text-slate-600 cursor-pointer  rounded-full w-12 h-12 flex justify-center items-center text-xl outline-white`}
                          >5</button>
                        </div>
                        <div className='my-2 mb-4'>
                          <p className='text-sm mb-4'>Write a short note about your experience with this product</p>
                          <textarea onChange={(e)=> setReviewComment(e.target.value)} placeholder='Write your review...' className='resize-none p-4 border border-gray-100 focus:border-orange-500 shadow-sm rounded-xl h-50 w-full outline-0'/>
                        </div>

                        <button onClick={()=>submitReveiew(product)} className='w-full cursor-pointer bg-orange-500 mt-6 hover:orange-600 text-white p-4 text-center rounded-full outline-0'>
                          Submit Review
                        </button>
                      </div>
                    </div>
                  </div>
                
              
        
      </div>
    </div>
  )
}

export default ProductIdCard

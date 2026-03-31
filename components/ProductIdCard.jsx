'use client'

import React, {useState, useEffect} from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'
import { useGlobalContext } from '@/context/GlobalContext'
import { useParams } from 'next/navigation'
import { data } from '@/Product'
import { toast } from 'react-toastify'
import { Rating, Star } from '@smastrom/react-rating';


 

function ProductIdCard({product}) {
    const [extra, setExtra]= useState([])
    const {cart, setCart} = useGlobalContext()
    const [btnDisabled, setBtnDisabled]= useState(false)
    const [quantity, setQuantity] = useState(1) 
    

    const myStyles = {
    itemShapes: Star,
    activeFillColor: '#f59e0b', // Tailwind's amber-500
    inactiveFillColor: '#fed7aa', // Tailwind's orange-200
  };
    


    useEffect(() => {
      const cartProduct = cart.find(p => p.id === product.id)
      if (!cartProduct) {
        setBtnDisabled(false)
        return
      }
      const sameQuantity = cartProduct.quantity === quantity
      const sameExtras = JSON.stringify(cartProduct.extras) === JSON.stringify(extra)
      setBtnDisabled(sameQuantity && sameExtras)
    }, [cart, quantity, extra, product.id])

    //Select extra
    const handleSelectExtra = (e, selectedExtra) => {
      if (e.target.checked) {
        setExtra(prev => [
          ...prev,
          {
            name: selectedExtra.name,
            price: selectedExtra.price
          }
        ])
      } else {
        setExtra(prev => prev.filter(ex => ex.name !== selectedExtra.name))
      }
    }

    //Increase Quantity

    const handleIncreaseQuantity = () => {
        if (quantity < 20) {
            setQuantity(prev => prev + 1);
        }
    }


    // Decrease Quantity
    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    }

    

    const calculateItemTotal = () => {
  const extrasTotal = extra.reduce((sum, e) => sum + e.price, 0)

  return (product.price + extrasTotal) * quantity
}


    const handleAddToCart = () => {
      const newProduct = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity,
        extras: extra,
        totalPrice: calculateItemTotal()
      }
      setCart(prev => {
        const existing = prev.find(item => item.id === product.id)
        if (existing) {
          // update quantity instead
          return prev.map(item =>
            item.id === product.id
              ? { ...item, quantity, extras: extra, totalPrice: calculateItemTotal() }
              : item
          )
        }
        return [...prev, newProduct]
      })
      toast.success('Product added to cart')
    }

  return (
    <div className='w-screen min-h-screen border flex items-center justify-center bg-gray-50'>
        <div className='container  min-h-screen'>
            <div className='flex gap-6 mx-auto md:px-15 px-4 md:flex-row flex-col'>
                <div className='md:w-1/3 w-full h-100 border'>
                    <div className='container mx-auto h-full mt-2 w-full border p-4 border-gray-300'>
                        <img src={`/images/${product.image}`} alt='product-img' className='w-full h-full'/>
                    </div>
                </div>
                <div className='md:w-1/3 w-full min-h-screen h-fit py-4 px-6 md:px-8'>
                    <div className='text-slate-900 space-y-3'>
                        <p className='text-sm border border-gray-300 rounded-2xl md:mb-20 w-fit px-4'>tag</p>
                        <h2 className='text-2xl font-bold'>{product.name}</h2>
                        <div className='w-15 flex'><Rating value={product.rating} readOnly itemStyles={myStyles} /></div>
                        <p className='italic'>
                           {product.description}
                        </p>
                        <div className='px-4 '>
                            {/* Extras */}
                            {
                                product?.extras?.map((extra, index)=>(
                                    <div key={index} className='flex gap-4 items-center'>
                                        <input onChange={(e) => handleSelectExtra(e, extra)} type='checkbox' value={extra.name} className='accent-slate-900 cursor-pointer'/>
                                        <span>{extra.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-2xl'>${calculateItemTotal()}</h3>
                            
                            <div className='flex gap-4 items-center w-fit'>
                                <button disabled={quantity === 1} 
                                onClick={()=> handleDecreaseQuantity()} 
                                className='border border-gray-300 cursor-pointer disabled:bg-gray-200 disabled:cursor-not-allowed hover:bg-gray-100 w-6 h-6 flex justify-center items-center rounded-full'><FaMinus/></button>
                                <span>{quantity}</span>
                                <button disabled={quantity === 20} onClick={()=> handleIncreaseQuantity()} className='border disabled:bg-gray-200 disabled:cursor-not-allowed disabled:border border-gray-300 cursor-pointer hover:bg-gray-100 w-6 h-6 flex justify-center items-center rounded-full'><FaPlus/></button>
                            </div>
                        </div>

                        <button onClick={()=> handleAddToCart()} disabled={btnDisabled} className='md:w-100 w-full disabled:bg-gray-400 disabled:cursor-not-allowed px-6 py-2 mt-4 cursor-pointer hover:bg-slate-700 bg-slate-900 text-white text-center rounded-xl'>Add To Cart</button>
                        
                    </div>
                    <div className='my-4 p-4'>
                        Reviews
                    </div>
                    

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ProductIdCard

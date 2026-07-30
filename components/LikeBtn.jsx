 'use client'
import React, { useEffect, useState } from 'react'

import { useGlobalContext } from '@/context/GlobalContext';
import Toast from '@/components/Toast'
import { FaRegHeart, FaHeart} from "react-icons/fa";
import { likedProduct } from '@/app/actions/likeProduct';
import unlikedProduct from '@/app/actions/unlikeProduct';
import { useSession } from 'next-auth/react';
import { getApiUrl } from '@/utils/apiUrl';

async function fetchLikedProducts() {
  const response = await fetch(getApiUrl('/api/user/getUserLikedProduct'));
  if (!response.ok) return [];
  const data = await response.json();
  return data.success ? data.likedProducts : [];
}

function LikeBtn({ product }) {
  const [liked, setLiked] = useState(false)
  const [loadingLiked, setLoadingLiked] = useState(true)
  const {setShowToast,setToastMessage,setToastType} = useGlobalContext()

  const {data:session} = useSession()

  useEffect(() => {
    let mounted = true;
    const loadLikedStatus = async () => {
      try {
        const likedResult = await fetchLikedProducts();
        const likedArray = Array.isArray(likedResult) ? likedResult : [];
        const isProductLiked = likedArray.some((p) => p.productId === product.id);
        if (mounted) {
          setLiked(isProductLiked);
        }
      } catch (e) {
        if (mounted) setLiked(false);
      } finally {
        if (mounted) setLoadingLiked(false);
      }
    };

    if (session?.user?.id) {
      loadLikedStatus();
    } else {
      setLiked(false);
      setLoadingLiked(false);
    }

    return () => {
      mounted = false;
    };
  }, [product.id, session?.user?.id]);


 

  

  return (
    <>
        <button
          type='button'
          className='cursor-pointer rounded-full bg-white/90 p-1.5 text-slate-700 shadow-sm backdrop-blur md:p-2'
          onClick={(e) => {
            // Prevent any parent navigation (e.g., if card is wrapped in a Link)
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          {liked ? (
            <FaHeart
              className='text-orange-600'
              onClick={async (e) => {
                e.preventDefault()
                e.stopPropagation()

                if (!session?.user?.id) {
                  setShowToast(true)
                  setToastType('error')
                  setToastMessage('Log in to add favorite products')
                  return
                }

                try {
                  const result = await unlikedProduct(product.id)
                  if (!result || result.success === false) {
                    throw new Error(result?.error || 'Unable to remove favorite product')
                  }

                  setLiked(false)
                  setShowToast(true)
                  setToastType('success')
                  setToastMessage('Product removed from favorites')
                } catch (err) {
                  console.error('Error unliking product:', err)
                  setShowToast(true)
                  setToastType('error')
                  setToastMessage(err.message || 'An error occurred while unliking the product.')
                }
              }}
            />
          ) : (
            <FaRegHeart
              onClick={async (e) => {
                e.preventDefault()
                e.stopPropagation()

                if (!session?.user?.id) {
                  setShowToast(true)
                  setToastType('error')
                  setToastMessage('Log in to add favorite products')
                  return
                }

                try {
                  const result = await likedProduct(product.id)
                  if (!result || result.success === false) {
                    throw new Error(result?.error || 'Unable to add favorite product')
                  }

                  setLiked(true)
                  setShowToast(true)
                  setToastType('success')
                  setToastMessage('Product added to favorites')
                } catch (err) {
                  console.error('Error liking product:', err)
                  setShowToast(true)
                  setToastType('error')
                  setToastMessage(err.message || 'An error occurred while liking the product.')
                }
              }}
            />
          )}
          
        </button>
        
        </>

  )
}

export default LikeBtn

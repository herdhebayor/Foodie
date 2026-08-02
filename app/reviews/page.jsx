'use client'

import React, { useEffect, useMemo, useState } from 'react'; 
import Loading from "@/components/Loading"
import ButtonLoading from "@/components/ButtonLoading"
import {useRouter, usePathname} from 'next/navigation'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import { useGlobalContext } from '@/context/GlobalContext';
import { getApiUrl } from '@/utils/apiUrl';
import { data } from '@/foodie_products';
import Image from 'next/image';

async function fetchUserReviews() {
  const response = await fetch(getApiUrl('/api/user/getUserReviews'));
  if (!response.ok) {
    throw new Error('Unable to fetch Reviews');
  }
  const data = await response.json();
  return data.success ? data.reviews : [];
}

function ReviewPage() {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter()
  const pathname = usePathname()

  const { data: session, status } = useSession();
  const {setShowToast, setToastType, setToastMessage} = useGlobalContext()

  //error state

  useEffect(() => {
    if (session || session?.user) {
    let mounted = true;

    async function load() {
      try {
        setLoading(true);
        const res = await fetchUserReviews();
        if (!mounted) return;
        setReview(res || []);

      } catch (e) {
        setShowToast(true)
      setToastMessage('Failed to laod notification. Please try again')
      setToastType('error')
      console.error('Error fetching reviews:', e);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    
      load();
    

    return () => {
      mounted = false;
    }
    };
  }, []);

  
  console.log('review', review)


  if (loading || status === 'loading') {
    return <Loading />;
  } 

  if(!session || !session.user){
    return(
      <div className='flex min-h-screen items-center justify-center bg-white px-4 py-16 pt-20'>
        <div className='w-full max-w-xl space-y-6 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm'>
          <h1 className='text-2xl font-bold text-slate-900'>Your session has expired</h1>
          <p className='text-sm text-slate-500'>You were signed out because your session timed out. Please sign in again to continue using your profile.</p>
          <button onClick={()=> router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`)}
         className='bg-orange-500 px-6 py-3 cursor-pointer rounded-lg text-center text-white  hover:bg-orange-600'>
          Login to continue
        </button>
        </div>
      </div>
    )
  }

  

  

  return (
    <div className="min-h-screen bg-white px-4 py-10 pt-25  md:pt-30">
      <div className="mx-auto w-full max-w-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Reviews</h1>
            <p className="mt-2 text-sm text-slate-500">
              {loading ? <ButtonLoading /> : `${review.length} user review${review.length === 1 ? '' : 's'}`}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {review.length === 0 && !loading ? (
            <div className="rounded-xl border border-slate-200 p-6 text-center text-slate-600">
              You do not have any reviews yet
            </div>
          ) : null}

          {review.map((m) => (
            <div
              key={m._id}
              className={`rounded-xl md:w-150 w-full border p-4 'border-slate-200 bg-white'}`}
            > 
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-slate-500">
                    {new Date(m.createdAt).toLocaleString()}
                  </div>
                  <div className="mt-1 text-sm font-medium text-slate-900">{m.body}</div>
                  
                    <div className="mt-2 space-y-3">
                      <Link
                      href={`/menu/${m.productId}`}
                        className="text-orange-600 text-sm hover:underline"
                      >
                        <Image src={data.products.find((p)=>p.id === m.productId).images[0]} alt='product' width={800} height={800}
                        className=" w-20 h-20 object-cover bg-gray-200 rounded-xl"/>
                        <p><span >Product name: </span> {data.products.find((p)=>p.id === m.productId)?.name}</p>
                      </Link>
                      <div>
                        <div className='flex gap-2 items-start text-slate-900 '>
                            <p className='font-bold'>Comment: </p>
                            <p>{m.reviewComment}</p>
                        </div>
                        <div className='flex items-start text-slate-900'>
                            <p>Rating:</p>
                            <p>{m.rating}</p>
                        </div>
                        <p className='text-orange-500 bg-orange-100 p-1 mt-4 rounded-xl'>helpfull: <span className='ml-2'>{m.helpfull || 0 }</span></p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;


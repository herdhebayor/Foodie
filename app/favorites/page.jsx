
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
import {FaArrowLeftLong} from 'react-icons/fa6'


async function getCookieHeader() {
  const cookieStore = await cookies();
  return cookieStore.getAll().map((cookie) => `${cookie.name}=${cookie.value}`).join('; ');
}

async function fetchLikedProducts() {
  const response = await fetch(getApiUrl('/api/user/getUserLikedProduct'),)
  if (!response.ok) return [];
  const json = await response.json();
  return json.success ? json.likedProducts : [];
}

function LikePage() {
  const [likedProducts, setLikedProducts] = useState([]);
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
        const res = await fetchLikedProducts();
        if (!mounted) return;
        setLikedProducts(res || []);

      } catch (e) {
        setShowToast(true)
      setToastMessage('Failed to laod notification. Please try again')
      setToastType('error')
      console.error('Error fetching liked products:', e);
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
    <div className="min-h-screen bg-white px-4 md:px-10 py-10 pt-25  md:pt-30">
      <div className="mx-auto w-full  lg:container">
        <button onClick={()=>router.back()} className=" mb-6 text-orange-500 flex items-center gap-2 text-md cursor-pointer outline-0">
          <FaArrowLeftLong/> Go Back
        </button>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Liked Products</h1>
            <p className="mt-2 text-sm text-slate-500">
              {loading ? <ButtonLoading /> : `${likedProducts.length} user liked Product${likedProducts.length === 1 ? '' : 's'}`}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {likedProducts.length === 0 && !loading ? (
            <div className="rounded-xl border flex flex-col justify-center gap-6 border-slate-200 p-6 text-center text-slate-600">
              <p>You do not have any liked products yet</p>
              <button onClick={()=> router.push('/menu')}
                className='mt-4 bg-orange-500 px-6 py-3 cursor-pointer  rounded-lg text-center text-white  hover:bg-orange-600'>
                Explore Products
              </button>
            </div>
          ) : null}

          {likedProducts.map((product) => (
            <div
              key={product._id}
              className={`rounded-xl w-full border p-4 'border-slate-200 bg-white'}`}
            > 
                <Link href={`/menu/${product.productId}`} key={product._id} className='mt-2 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm'>
                    <div className='h-12 w-12 overflow-hidden rounded-2xl'>
                        <Image src={product.image} alt={product.name} loading='eager' width={48} height={48} className='h-full w-full object-cover' />
                    </div>
                    <div>
                        <h3 className='font-semibold text-slate-900'>{product.name}</h3>
                        <p className='text-sm text-slate-500'>&#x20A6;{product.basePrice.toLocaleString('en-US')}</p>
                    </div>
                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LikePage;


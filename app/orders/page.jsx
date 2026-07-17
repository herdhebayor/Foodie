import React from 'react'
import Link from 'next/link';
import { cache } from 'react';
import getUserOrders from '@/app/actions/getUserOrders';
import { getUser } from '@/app/actions/getUser';
import { getSessionUser } from '@/utils/getSessionUser';
import { LuShoppingBag } from "react-icons/lu";
import UserOrders from '@/components/UserOrders';
import Loading from '@/components/Loading';

async function fetchUser() {
  return await getUser();
}

async function fetchOrders() {
  return await getUserOrders();
}


  

async function Orders() {
  const getCachedUser = cache(fetchUser);
  const getCachedOrders = cache(fetchOrders);
  const session = getSessionUser();

  const [dbUser, orders] = await Promise.all([
    getCachedUser(),
    getCachedOrders(),
  ]);

  const userOrders = orders.filter(order => order.user === dbUser._id);

  if (!dbUser) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-white px-4 pt-20 py-16'>
        <div className='w-full max-w-xl md:rounded-4xl border border-gray-100 bg-white p-8 text-center shadow-lg'>
          <h1 className='text-2xl font-bold text-slate-900'>You need to be logged in to view this page</h1>
          <p className='mt-2 text-sm text-slate-500'>Sign in to access your profile, saved favorites, and recent orders.</p>
          <Link href='/login' className='mt-6 inline-flex rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white'>Login</Link>
        </div>
      </div>
    );
  }

  if (session?.status === 'loading') {
    return <Loading />;
  }
  return (
    <div className='min-h-screen bg-white md:px-10 px-4 py-16 pt-25'>
        <section className='relative container mx-auto realtive  '>
              {userOrders.length > 0 ? <UserOrders orders={userOrders} /> : (
                <div className='rounded-2xl h-full w-full flex flex-col items-center justify-center p-8 text-center'>
                  <h2 className='text-lg font-semibold text-slate-900'>No orders yet</h2>
                  <p className='mt-2 text-sm text-slate-500'>Your recent orders will show up here once you place your first meal.</p>
                  <Link href='/menu' className='mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700'>
                    <LuShoppingBag size={18} /> Start ordering
                  </Link>
                </div>
              )}
        </section>
    </div>
  )
}

export default Orders

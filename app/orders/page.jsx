import React from 'react'
import Link from 'next/link';
import { LuShoppingBag } from "react-icons/lu";
import UserOrders from '@/components/UserOrders';
import Loading from '@/components/Loading';
import { cookies } from 'next/headers';
import { getApiUrl } from '@/utils/apiUrl';

async function getCookieHeader() {
  const cookieStore = await cookies();
  return cookieStore.getAll().map((cookie) => `${cookie.name}=${cookie.value}`).join('; ');
}

async function fetchUser() {
  const response = await fetch(getApiUrl('/api/user/getUser'), {
    cache: 'no-store',
    headers: { cookie: await getCookieHeader() },
  });
  if (!response.ok) return null;
  const json = await response.json();
  return json.success ? json.user : null;
}

async function fetchOrders() {
  const response = await fetch(getApiUrl('/api/user/getUserOrders'), {
    cache: 'no-store',
    headers: { cookie: await getCookieHeader() },
  });
  if (!response.ok) return [];
  const json = await response.json();
  return json.success ? json.orders : [];
}

async function Orders() {
  const [dbUser, orders] = await Promise.all([
    fetchUser(),
    fetchOrders(),
  ]);

  const userOrders = orders.filter(order => order.user === dbUser._id);

  if (!dbUser) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-white px-4 pt-20 py-16'>
        <div className='w-full max-w-xl md:rounded-4xl border border-gray-100 bg-white p-8 text-center shadow-lg'>
          <h1 className='text-2xl font-bold text-slate-900'>You need to be logged in to view this page</h1>
          <p className='mt-2 text-sm text-slate-500'>Sign in to access your profile, saved favorites, and recent orders.</p>
          <Link href='/login?callbackUrl=%2Forders' className='mt-6 inline-flex rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white'>Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white md:px-10 px-4 py-16 pt-25'>
        <section className=' container mx-auto realtive  '>
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

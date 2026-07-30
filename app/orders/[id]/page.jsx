
import Image from 'next/image';
import { resolveImageSrc } from '@/utils/resolveImageSrc';
import Link from 'next/link';
import { FaChevronLeft } from "react-icons/fa";
import DelBtn from '@/components/DelBtn'
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

export default async function OrderDetails({ params }) {
  const { id } = await params;
  const [orders, dbUser] = await Promise.all([
    fetchOrders(),
    fetchUser(),
  ]);


  const order = orders.find((order)=> order._id === id)

  if (!order) {
    return <div className=' min-h-screen w-screen bg-white items-center justify-center px-4 py-20 text-slate-600'>
      <span>Can not find the order you're looking for</span>
      <Link href={'/orders'} className='ml-2 inline-flex items-center gap-1 mt-4 rounded-xl shadow-sm w-fit px-4 py-3 bg-orange-600 hover:bg-orange-700'>
          <FaChevronLeft /> Back to orders
        </Link>
      </div>;
  }

  if (!dbUser) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-white px-4 pt-20 py-16'>
        <div className='w-full max-w-xl md:rounded-4xl border border-gray-100 bg-white p-8 text-center shadow-lg'>
          <h1 className='text-2xl font-bold text-slate-900'>You need to be logged in to view this page</h1>
          <p className='mt-2 text-sm text-slate-500'>Sign in to access your profile, saved favorites, and recent orders.</p>
          <Link href={`/login?callbackUrl=${encodeURIComponent(`/orders/${id}`)}`} className='mt-6 inline-flex rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white'>Login</Link>
        </div>
      </div>
    );
  }

  if(order.user !== dbUser._id){
    return (
      <div className='flex min-h-screen bg-white flex-col items-center justify-center px-4 py-20 text-slate-600'>
        <h2 className="text-xl font-bold">You are not authorized to view this order</h2>
        <Link href={'/orders'} className='ml-2 inline-flex items-center gap-1 mt-4 rounded-xl shadow-sm w-fit px-4 py-3 text-orange-600 hover:text-orange-700'>
          <FaChevronLeft /> Back to orders
        </Link>
      </div>
     )
  }
  

  return (
    <div className='min-h-screen bg-white px-4 py-16 pt-25 md:pt-30 md:px-8'>
      <div className='mx-auto realtive rounded-4xl border border-gray-100 bg-white p-6 shadow-xl md:p-8'>
        <Link href={'/orders'} className=' inline-flex cursor-pointer items-center mb-10 gap-2 text-sm font-medium text-orange-600 hover:text-orange-700'>
          <FaChevronLeft /> Back to orders
        </Link>
        <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.25em] text-orange-600'>Order details</p>
            <h1 className='text-2xl font-bold text-slate-900'>Order id:{order._id?.slice(-6)}</h1>
          </div>
          <span className={`rounded-full px-3 py-1 text-sm font-semibold ${order.status === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
            {order.status}
          </span>
        </div>

        <div className='mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
          <div className='rounded-3xl border border-gray-100 bg-gray-50 p-5'>
            <h2 className='text-lg font-semibold text-slate-900'>Delivery info</h2>
            <div className='mt-4 space-y-2 text-sm text-slate-600'>
              <p><span className='font-semibold text-slate-900'>Name:</span> {order.receiver}</p>
              <p><span className='font-semibold text-slate-900'>Phone:</span> {order.phone}</p>
              <p><span className='font-semibold text-slate-900'>Address:</span> {order.deliveryAddress}</p>
            </div>
          </div>

          <div className='rounded-3xl border border-gray-100 bg-orange-50 p-5'>
            <h2 className='text-lg font-semibold text-slate-900'>Summary</h2>
            <div className='mt-4 space-y-2 text-sm text-slate-600'>
              <div className='flex items-center justify-between'><span>Subtotal</span><span className='font-semibold text-slate-900'>&#x20A6;{order.subtotal.toLocaleString('en-US')}</span></div>
              <div className='flex items-center justify-between'><span>Tax</span><span className='font-semibold text-slate-900'>&#x20A6;{order.tax.toLocaleString('en-US')}</span></div>
              <div className='flex items-center justify-between'><span>Delivery fee</span><span className='font-semibold text-slate-900'>&#x20A6;{order.deliveryFee.toLocaleString('en-US')}</span></div>
              <div className='flex items-center justify-between border-t border-dashed pt-3 text-base font-semibold text-slate-900'><span>Total</span><span>&#x20A6;{order.totalAmount.toLocaleString('en-US')}</span></div>
            </div>
          </div>
        </div>

        <div className='mt-6 rounded-3xl border border-gray-100 bg-white p-5'>
          <h2 className='text-lg font-semibold text-slate-900'>Items</h2>
          <div className='mt-4 space-y-3'>
            {order.items?.map((item, index) => (
              <div key={index} className='flex items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3'>
                <div className='flex items-center gap-3'>
                  <div className='h-20 w-20 overflow-hidden rounded-xl'>
                    <Image src={resolveImageSrc(item.image)} alt={item.name} width={48} height={48} className='h-full w-full object-cover' />
                  </div>
                  <div>
                    <p className='font-semibold text-slate-900'>{item.name}</p>
                    <p className='text-sm text-slate-500'>Qty: {item.quantity}</p>
                    <p className='text-sm text-slate-500'>Size: {item?.size || 'normal'}</p>
                    <p className='text-sm text-slate-500'>Spice: {item?.spiceLevel || 'normal'}</p>
                    <div className='mt-1 flex flex-wrap gap-2'>
                      {item.removeIngredients?.length > 0 && item.removeIngredients.map((ing, index) => (
                        <span key={index} className='rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600'>
                          {ing}
                        </span>
                      ))}
                    </div>
                    <div className='mt-1 flex flex-wrap gap-2'>
                      {item.extras?.length > 0 && item.extras.map((extra, eIndex) => (
                        <span key={eIndex} className='rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600'>
                          {extra.name}
                        </span>
                      ))}
                    </div>
                    <p className='font-semibold text-slate-900'>&#x20A6;{item.purchasePrice.toLocaleString('en-US')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <DelBtn order={order} page={false}/>
      </div>
    </div>
  );
}

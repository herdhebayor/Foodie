import Link from 'next/link';
import { cache } from 'react';
import getUserOrders from '@/app/actions/getUserOrders';
import {getUser} from '@/app/actions/getUser';
import { getSessionUser } from '@/utils/getSessionUser';
import { LuShoppingBag } from "react-icons/lu";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { CiMail, CiInboxIn, CiLogout } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

async function fetchUser() {
  return await getUser();
}

async function fetchOrders() {
  return await getUserOrders();
}

export default async function UserProfile({ params }) {
  const getCachedUser = cache(fetchUser);
  const getCachedOrders = cache(fetchOrders);
  const session = getSessionUser();
  
  const [dbUser, orders] = await Promise.all([
    getCachedUser(),
    getCachedOrders()
  ]);


  if(!dbUser) {
    return (
      <div className='bg-gray-100 w-screen min-h-screen flex items-center justify-center'>
        <div className='bg-white flex flex-col gap-6 px-4 py-3 rounded-md w-full h-fit min-h-50'>
          <h1 className='text-2xl text-slate-900 font-bold'>You need to be logged in to view this page</h1>
          <Link href='/auth/login' className='bg-slate-900 px-4 py-1 text-white rounded-md cursor-pointer hover:bg-white hover:text-slate-900 hover:border border-slate-900 w-fit'>
            Login
          </Link>
        </div>
      </div>
    );
  }

  if(orders.length === 0) {
    return (
      <div className='bg-gray-50 w-screen min-h-screen flex items-center justify-center'>
        <div className='bg-white flex flex-col gap-6 px-4 py-3 rounded-md w-full h-fit min-h-50'>
          <h1 className='text-2xl text-slate-900 font-bold'>You currently do not have any order</h1>
        </div>
      </div>
    );
  }

  if(session?.status === 'loading') {
    return <Loading />;
  }

  return (
    <div className='bg-gray-100 w-screen min-h-screen'>
      <div className='container mx-auto min-h-screen md:px-6 md:py-4'>
        <div className="bg-white flex flex-col gap-6 px-4 py-3 rounded-md w-full h-fit min-h-50">
          <div className='flex items-center gap-6'>
            <img src={null} className='w-50 h-50 bg-gray-100 rounded-full' alt='userImg'/>
            <div className='text-slate-900 flex h-50 flex-col justify-around'>
              <div>
                <h1 className='text-2xl text-slate-900 font-bold'>{dbUser?.username}</h1>
                <p className='text-lg'>{dbUser?.email || 'set your email'}</p>
                <p className='text-lg'>{dbUser?.phone}</p>
              </div>
              <button className='bg-slate-900 px-4 py-1 text-white rounded-md cursor-pointer hover:bg-white hover:text-slate-900 hover:border border-slate-900'>
                Edit profile
              </button>
            </div>
          </div>
        </div>
        <div className='flex gap-6 mt-6 w-full h-fit min-h-100'>

          {/* Profile Navigation */}
          <div className='md:w-1/3 w-full rounded-md bg-white text-slate-900 h-fit p-6 space-y-4 '>
              <div className='flex gap-4'><LuShoppingBag size={20}/> Orders</div>
              <div className='flex gap-4'><FaRegHeart size={20}/> Likes</div>
              <div className='flex gap-4'><FaRegStar size={20}/> Rating and Reviews</div>
              <div className='flex gap-4'><CiMail size={20}/> Inbox</div>
              <div className='flex gap-4'><CiInboxIn size={20}/> Suggestions</div>
              
              <div className='flex gap-4 text-red-500'><MdDeleteOutline size={20}/> Delete Account</div>
              <div className='flex gap-4 items-center justify-center w-full bg-amber-50 px-4 py-2 text-center'><CiLogout size={20}/> Logout</div>
            
          </div>



          <div className='hidden md:block md:flex-1 px-15 rounded-md bg-white min-h-60 overflow-y-scroll max-h-200'>
            <div className="container mx-auto p-6">
              <h1 className="text-2xl font-bold mb-6">My Orders</h1>
              <div className="space-y-4">
                {orders.map(order => (
                  <Link
                    key={order._id}
                    href={`/orders/${order._id}`}
                    className="block border p-4 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex justify-between">
                      <p className="font-semibold">
                        Order #{order._id.slice(-6)}
                      </p>
                      <span className="capitalize">
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                    <p className="font-bold">
                      ₦{order.totalAmount}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

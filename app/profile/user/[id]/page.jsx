import Link from 'next/link';
import { cache } from 'react';
import getUserOrders from '@/app/actions/getUserOrders';
import {getUser} from '@/app/actions/getUser';
import { getSessionUser } from '@/utils/getSessionUser';
import { LuShoppingBag } from "react-icons/lu";
import { FaRegHeart, FaRegStar, FaQuestion, FaUser } from "react-icons/fa";
import { CiMail, CiInboxIn, CiLogout, CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import ProfileEdit from '@/components/profileEdit';
import UserOrders from '@/components/UserOrders';

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
        <div className='flex gap-6 mt-6 w-full h-fit min-h-100'>

          
          <div className='md:w-1/3 w-full rounded-md bg-white text-slate-900 h-fit p-6 space-y-4 '>

              {/* profile */}
              <div className='md:hidden flex items-center gap-6 py-2 border-b-2 border-gray-300  mb-6'>
                <div className='w-10 relative h-10 bg-gray-100 rounded-full flex items-center justify-center'>
                  {
                    dbUser?.image ?
                    (<img src={dbUser?.image || null} className='w-10 h-10 bg-gray-100 rounded-full' alt='userImg'/>)
                    : (<FaUser size={20} className='text-gray-400'/>)
                  }
                <CiEdit size={16} className='absolute -right-1  bottom-0 text-slate-900 cursor-pointer hover:text-gray-600'/>
                  </div>
                  <div className='text-xs text-slate-900'>
                    <p>{dbUser.username}</p>
                    <p className='italic'>{dbUser.email}</p>
                    <p>{dbUser.phone}</p>
                  </div>
              </div>

                {/* Profile Navigation */}
              <div className='flex gap-4'><LuShoppingBag size={20}/> Orders</div>
              <div className='flex gap-4'><FaRegHeart size={20}/> Likes</div>
              <div className='flex gap-4'><IoSettingsOutline size={20}/> Settings</div>
              <div className='flex gap-4'><FaRegStar size={20}/> Rating and Reviews</div>
              <div className='flex gap-4'><CiMail size={20}/> Inbox</div>
              <div className='flex gap-4'><CiInboxIn size={20}/> Suggestions</div>
              <div className='flex gap-4'><FaQuestion size={20}/> Faq</div>
              <div className='flex gap-4'><AiOutlineExclamationCircle size={20}/> Help & Support</div>
              
              <div className='flex gap-4 text-red-500'><MdDeleteOutline size={20}/> Delete Account</div>
              <div className='flex gap-4 items-center justify-center w-full bg-amber-50 px-4 py-2 text-center'><CiLogout size={20}/> Logout</div>
            
          </div>



          <div className='hidden md:block md:flex-1 px-15 rounded-md bg-white min-h-60 overflow-y-scroll max-h-200'>
            {/* profile header */}
            <div className='flex items-center gap-6 px-6 py-2 border-b'>
              <div className='w-10 relative h-10 bg-gray-100 rounded-full flex items-center justify-center'>
                {
                  dbUser?.image ?
                  (<img src={dbUser?.image || null} className='w-10 h-10 bg-gray-100 rounded-full' alt='userImg'/>)
                  : (<FaUser size={20} className='text-gray-400'/>)
                }
              <CiEdit size={16} className='absolute -right-1  bottom-0 text-slate-900 cursor-pointer hover:text-gray-600'/>
                </div>
                <div className='text-xs text-slate-900'>
                  <p>{dbUser.username}</p>
                  <p className='italic'>{dbUser.email}</p>
                  <p>{dbUser.phone}</p>
                </div>
            </div>
            
            
            {/* Pages */}
            <div>
              <UserOrders orders={orders}/>
            </div>
            <div>
               <ProfileEdit user={dbUser}/>
            </div>    
          </div>
        </div>
      </div>
    </div>
  );
}

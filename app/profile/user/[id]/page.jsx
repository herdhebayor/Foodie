import Link from 'next/link';
import Image from 'next/image';
import { LuShoppingBag } from "react-icons/lu";
import { FaRegHeart, FaRegStar, FaQuestion, FaUser } from "react-icons/fa";
import { CiMail, CiInboxIn, CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import UserOrders from '@/components/UserOrders';
import LogoutBtn from '@/components/LogoutBtn';
import { MdOutlineEmail,MdReviews } from "react-icons/md";
import {FaRegUser, FaPhone} from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import {IoIosNotifications} from 'react-icons/io'
import {TbLockPassword} from 'react-icons/tb'
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

async function fetchLikedProducts() {
  const response = await fetch(getApiUrl('/api/user/getUserLikedProduct'), {
    cache: 'no-store',
    headers: { cookie: await getCookieHeader() },
  });
  if (!response.ok) return [];
  const json = await response.json();
  return json.success ? json.likedProducts : [];
}

async function fetchUserReviews() {
  const response = await fetch(getApiUrl('/api/user/getUserReviews'), {
    cache: 'no-store',
    headers: { cookie: await getCookieHeader() },
  });
  if (!response.ok) {
    throw new Error('Unable to fetch Reviews');
  }
  const data = await response.json();
  return data.success ? data.reviews : [];
}

export default async function UserProfile({ searchParams }) {
  const [dbUser, orders, likedProducts, reviews] = await Promise.all([
    fetchUser(),
    fetchOrders(),
    fetchLikedProducts(),
    fetchUserReviews(),
  ]);

  const params = await searchParams || {};

  const callbackUrl = `/profile/user/${params.id}`;

  if (!dbUser ) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-white px-4 pt-20 py-16'>
        <div className='w-full max-w-xl space-y-6 bg-white p-8 text-center '>
          <p className='text-sm text-slate-500'>Looks like you've been logged out of oyur account</p>
          <Link href={`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`} className='bg-orange-500 px-6 py-3 rounded-lg text-center text-white hover:bg-orange-600'>
            Login to continue
          </Link>
        </div>
      </div>
    );
  }

  const userOrders = orders.filter(order => String(order.user) === String(dbUser._id));

  

  return (
    <div className='min-h-screen bg-white pt-15  md:pt-20'>
      <div className='mx-auto overflow-hidden bg-white shadow-xl'>
        <div className='bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-8 md:py-10 text-white md:px-8'>
          <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
            <div className='flex items-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white/20'>
                {dbUser?.image ? (
                  <Image src={dbUser.image} width={64} height={64} unoptimized className='h-full w-full object-cover' alt='userImg' />
                ) : (
                  <FaUser size={24} className='text-white' />
                )}
              </div>
              <div>
                <p className='text-sm font-semibold uppercase tracking-[0.25em] text-orange-100'>Welcome back</p>
                <h1 className='text-2xl font-bold'>{dbUser.username}</h1>
                <p className='text-sm text-orange-50'>{dbUser.email}</p>
              </div>
            </div>

            <div className='grid gap-3 sm:grid-cols-3'>
              <div className='rounded-2xl bg-white/20 px-4 py-3 backdrop-blur'>
                <p className='text-sm text-orange-100'>Orders</p>
                <p className='text-xl font-semibold'>{userOrders.length || 0}</p>
              </div>
              <div className='rounded-2xl bg-white/20 px-4 py-3 backdrop-blur'>
                <p className='text-sm text-orange-100'>Favorites</p>
                <p className='text-xl font-semibold'>{likedProducts?.length || 0}</p>
              </div>
              <div className='rounded-2xl bg-white/20 px-4 py-3 backdrop-blur'>
                <p className='text-sm text-orange-100'>Reviews</p>
                <p className='text-xl font-semibold'>{reviews?.length || 0}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='grid gap-6 p-6 md:grid-cols-[230px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)] lg:p-8'>
          <aside className='rounded-xl h-fit min-h-150 border md:block hidden border-gray-100 bg-gray-50 p-4'>
            <div className='mb-4'>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-slate-500'>Profile</p>
            </div>
            <div className='flex flex-col gap-2'>
              <Link href='/orders' className='flex cursor-pointer items-center gap-3 rounded-2xl hover:bg-white px-3 py-3 text-sm font-semibold text-slate-700 hover:shadow-sm'><LuShoppingBag size={18} /> Orders</Link>
              <Link href='/favorites' className='flex cursor-pointer items-center gap-3 rounded-2xl p-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><FaRegHeart size={18} /> Favorites</Link>
              <Link href={`/profile/user/${dbUser._id}/edit-profile`} className='flex cursor-pointer items-center gap-3 rounded-2xl p-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><IoSettingsOutline size={18} /> Settings</Link> 
              <Link href='/reviews' className='flex cursor-pointer items-center gap-3 rounded-2xl p-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><FaRegStar size={18} /> Reviews</Link>
              <Link href='notification' className='flex cursor-pointer items-center gap-3 rounded-2xl p-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><CiMail size={18} /> Inbox</Link>
              <div className='flex cursor-pointer items-center gap-3 rounded-2xl p-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><CiInboxIn size={18} /> Suggestions</div>
              <Link href='faq' className='flex cursor-pointer items-center gap-3 rounded-2xl p-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><FaQuestion size={18} /> FAQ</Link>
              <div className='flex cursor-pointer items-center gap-3 rounded-2xl p-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><AiOutlineExclamationCircle size={18} /> Help</div>
                {LogoutBtn && <LogoutBtn />}
              <Link href={`profile/user/${dbUser._id}/delete-account`} className='mt-3 flex cursor-pointer items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold text-red-500 hover:bg-red-50'><MdDeleteOutline size={18} /> Delete account</Link>
              
            </div>
          </aside>

          <div className='space-y-6 lg:flex gap-6 lg:gap-10'>
            <section className='rounded-xl border border-gray-100 bg-white py-5 px-6 shadow-sm h-150 overflow-y-scroll'>
              <h2 className='text-lg font-semibold text-slate-900 mb-4'>Basic Info</h2>
              <div>
                <h2 className='text-lg flex gap-2 items-center  font-semibold text-slate-900'><FaRegUser /> {dbUser.username}</h2>
                <p className='mt-1 flex gap-2 items-center text-sm text-slate-500'><MdOutlineEmail/>{dbUser.email}</p>
                <p className='mt-1 flex gap-2 items-center text-sm text-slate-500'><FaPhone/> {dbUser.phone}</p>
                <p className='mt-1 flex gap-2 items-center text-sm text-slate-500'><IoLocationSharp/> {dbUser.address}</p>

                <button className='mt-4 hidden md:inline-flex items-center gap-2 cursor-pointer rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700'>
                  <CiEdit size={18} /> Edit profile
                </button>
                <div className='my-4 block md:hidden'>
                  <h2 className='text-lg font-semibold text-slate-900 mb-4'>Profile Menu</h2>

                  <div className="flex flex-col md:hidde gap-4 text-slate-900 text-sm">
                  
                  <Link href={`/profile/user/${dbUser._id}/edit-profile`} className='w-full flex items-center gap-2 min-w-30 duration-300 ease-in-out transition-all  p-2 hover:text-orange-600 '>
                    <IoSettingsOutline size={18} />
                    Edit Profile
                  </Link>
                  <Link href={`/profile/user/${dbUser._id}/change-password`} className='w-full flex items-center gap-2 min-w-30 duration-300 ease-in-out transition-all  p-2 hover:text-orange-600 '>
                    <TbLockPassword size={18}/>
                    Change Password
                  </Link>
                  <Link href={`/profile/user/orders`} className='w-full flex items-center gap-2 min-w-30 duration-300 ease-in-out transition-all  p-2 hover:text-orange-600 '>
                    <LuShoppingBag size={18} />
                    My Orders
                  </Link>
                  <Link href={`/reviews`} className='w-full flex items-center gap-2 min-w-30 duration-300 ease-in-out transition-all  p-2 hover:text-orange-600 '>
                    <MdReviews siz={18}/>
                    Reviews
                  </Link>
                  <Link href={`/favorites`} className='w-full flex items-center gap-2 min-w-30 duration-300 ease-in-out transition-all  p-2 hover:text-orange-600 '>
                    <FaRegHeart size={18} />
                    Favorites
                  </Link>
                  <Link href={`/notification`} className='w-full flex items-center gap-2 min-w-30 duration-300 ease-in-out transition-all  p-2 hover:text-orange-600 '>
                    <IoIosNotifications size={18}/>
                    Inbox
                  </Link>
                </div>
                </div>
                

              </div>

              <div>
                <div className="flex items-center justify-between mt-2">
                  <h2 className='text-lg font-semibold text-slate-900'>Favorites</h2>
                   {
                      likedProducts.length > 0 && (
                        <div className='w-fit bg-linear-to-t from-white to-transparent py-4 text-center'>
                          <Link href='/favorites' className='inline-flex items-center gap-2 rounded-lg text-orange-600 px-4 py-2 text-sm font-semibold hover:text-orange-700'>
                            View all <PiCaretDoubleRightBold/>
                          </Link>
                        </div>
                      )
                  }
                </div>
                
                <div className='mt-4 flex flex-col gap-3 '>
                  {
                    likedProducts?.length > 0 ? (
                      likedProducts?.slice(0, 7).map(product => (
                        <Link href={`/menu/${product.productId}`} key={product._id} className='mt-2 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm'>
                          <div className='h-12 w-12 overflow-hidden rounded-2xl'>
                            <Image src={product.image} alt={product.name} width={48} height={48} className='h-full w-full object-cover' />
                          </div>
                          <div>
                            <h3 className='font-semibold text-slate-900'>{product.name}</h3>
                            <p className='text-sm text-slate-500'>&#x20A6;{product.basePrice.toLocaleString('en-US')}</p>
                          </div>
                        </Link>
                      ))
                    ):(
                      <div className='mt-4 flex flex-col items-center justify-center gap-2 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm'>
                        <p className='text-sm text-slate-500'>You haven't liked any products yet.</p>
                        <Link href='/menu' className='mt-2 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700'>
                          <LuShoppingBag size={18} /> Start exploring
                        </Link>
                      </div>
                    )
                  }
                  
                </div>
              </div>
            </section>
            <section className='relative rounded-xl h-150 overflow-y-scroll flex-1  border border-gray-100 bg-white shadow-sm'>
              {userOrders.length > 0 ? <UserOrders orders={userOrders} /> : (
                <div className='rounded-2xl h-full w-full flex flex-col items-center justify-center p-8 text-center'>
                  <h2 className='text-lg font-semibold text-slate-900'>No orders yet</h2>
                  <p className='mt-2 text-sm text-slate-500'>Your recent orders will show up here once you place your first meal.</p>
                  <Link href='/menu' className='mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700'>
                    <LuShoppingBag size={18} /> Start ordering
                  </Link>
                </div>
              )}
              {
                userOrders.length > 0 && (
                  <div className='sticky bottom-0 left-0 w-full bg-linear-to-t from-white to-transparent py-4 text-center'>
                    <Link href='/orders' className='inline-flex items-center gap-2 rounded-lg text-orange-600 px-4 py-2 text-sm font-semibold hover:text-orange-700'>
                      View all orders <PiCaretDoubleRightBold/>
                    </Link>
                  </div>
                )
              }
            </section>

            <section className='block md:hidden my-4'>
              <div className='flex flex-col gap-2'>
              <div className='flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><CiInboxIn size={18} /> Suggestions</div>
              <div className='flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><FaQuestion size={18} /> FAQ</div>
              <div className='flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><AiOutlineExclamationCircle size={18} /> Help</div>
              {LogoutBtn && <LogoutBtn />}
              <Link href={`/profile/user/${dbUser._id}/delete-account`} className='mt-3 flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-red-700 hover:bg-red-100 bg-red-50'><MdDeleteOutline size={18} /> Delete account</Link>
              
            </div>
            </section>

            
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { LuShoppingBag } from 'react-icons/lu';
import { FaRegHeart, FaRegStar, FaQuestion, FaUser } from 'react-icons/fa';
import { CiMail, CiInboxIn, CiEdit } from 'react-icons/ci';
import { MdDeleteOutline, MdOutlineEmail, MdReviews } from 'react-icons/md';
import { IoSettingsOutline, IoLocationSharp } from 'react-icons/io5';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { FaRegUser, FaPhone } from 'react-icons/fa';
import { PiCaretDoubleRightBold } from 'react-icons/pi';
import { IoIosNotifications } from 'react-icons/io';
import { TbLockPassword } from 'react-icons/tb';
import { cookies } from 'next/headers';
import { getServerApiUrl } from '@/utils/serverApiUrl';
import UserOrders from '@/components/UserOrders';
import LogoutBtn from '@/components/LogoutBtn';

async function getCookieHeader() {
  const cookieStore = await cookies();
  return cookieStore.getAll().map((cookie) => `${cookie.name}=${cookie.value}`).join('; ');
}

async function fetchUser() {
  const response = await fetch(await getServerApiUrl('/api/user/getUser'), {
    cache: 'no-store',
    headers: { cookie: await getCookieHeader() },
  });

  if (!response.ok) {
    if (response.status === 401) return null;
    throw new Error('Unable to load profile');
  }

  const json = await response.json();
  return json.success ? json.user : null;
}

async function fetchOrders() {
  const response = await fetch(await getServerApiUrl('/api/user/getUserOrders'), {
    cache: 'no-store',
    headers: { cookie: await getCookieHeader() },
  });

  if (!response.ok) {
    if (response.status === 401) return [];
    throw new Error('Unable to load orders');
  }

  const json = await response.json();
  return json.success ? json.orders : [];
}

async function fetchLikedProducts() {
  const response = await fetch(await getServerApiUrl('/api/user/getUserLikedProduct'), {
    cache: 'no-store',
    headers: { cookie: await getCookieHeader() },
  });

  if (!response.ok) {
    if (response.status === 401) return [];
    throw new Error('Unable to load favorites');
  }

  const json = await response.json();
  return json.success ? json.likedProducts : [];
}

async function fetchUserReviews() {
  const response = await fetch(await getServerApiUrl('/api/user/getUserReviews'), {
    cache: 'no-store',
    headers: { cookie: await getCookieHeader() },
  });

  if (!response.ok) {
    if (response.status === 401) return [];
    throw new Error('Unable to load reviews');
  }

  const json = await response.json();
  return json.success ? json.reviews : [];
}

export default async function ProfilePage() {
  const results = await Promise.allSettled([
    fetchUser(),
    fetchOrders(),
    fetchLikedProducts(),
    fetchUserReviews(),
  ]);

  const [userResult, ordersResult, likedProductsResult, reviewsResult] = results;
  const dbUser = userResult.status === 'fulfilled' ? userResult.value : null;
  const orders = ordersResult.status === 'fulfilled' ? ordersResult.value : [];
  const likedProducts = likedProductsResult.status === 'fulfilled' ? likedProductsResult.value : [];
  const reviews = reviewsResult.status === 'fulfilled' ? reviewsResult.value : [];
  const hasError = results.some((result) => result.status === 'rejected');
  if (!dbUser) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-white px-4 py-16 pt-20'>
        <div className='w-full max-w-xl space-y-6 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm'>
          <h1 className='text-2xl font-bold text-slate-900'>Your session has expired</h1>
          <p className='text-sm text-slate-500'>You were signed out because your session timed out. Please sign in again to continue using your profile.</p>
          <Link href='/login?callbackUrl=/profile' className='inline-flex rounded-lg bg-orange-600 px-6 py-3 text-center text-white hover:bg-orange-700'>
            Login to continue
          </Link>
        </div>
      </div>
    );
  }

  const userOrders = orders.filter((order) => String(order.user) === String(dbUser._id));

  return (
    <div className='min-h-screen bg-white pt-16 md:pt-20'>
      <div className='mx-auto overflow-hidden bg-white shadow-xl'>
        {hasError && (
          <div className='border-b border-amber-200 bg-amber-50 px-6 py-3 text-sm text-amber-800 md:px-8'>
            Some profile data could not be loaded. Please refresh the page or try again soon.
          </div>
        )}

        <div className='bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-8 text-white md:px-8 md:py-10'>
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
          <aside className='hidden h-fit min-h-150 rounded-xl border border-gray-100 bg-gray-50 p-4 md:block'>
            <div className='mb-4'>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-slate-500'>Profile</p>
            </div>
            <div className='flex flex-col gap-2'>
              <Link href='/orders' className='flex cursor-pointer items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-white hover:shadow-sm'><LuShoppingBag size={18} /> Orders</Link>
              <Link href='/favorites' className='flex cursor-pointer items-center gap-3 rounded-2xl p-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><FaRegHeart size={18} /> Favorites</Link>
              <Link href='/profile/edit-profile' className='flex cursor-pointer items-center gap-3 rounded-2xl p-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><IoSettingsOutline size={18} /> Settings</Link>
              <Link href='/reviews' className='flex cursor-pointer items-center gap-3 rounded-2xl p-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><FaRegStar size={18} /> Reviews</Link>
              <Link href='/notification' className='flex cursor-pointer items-center gap-3 rounded-2xl p-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><CiMail size={18} /> Inbox</Link>
              <div className='flex cursor-pointer items-center gap-3 rounded-2xl p-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><CiInboxIn size={18} /> Suggestions</div>
              <Link href='/faq' className='flex cursor-pointer items-center gap-3 rounded-2xl p-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><FaQuestion size={18} /> FAQ</Link>
              <div className='flex cursor-pointer items-center gap-3 rounded-2xl p-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><AiOutlineExclamationCircle size={18} /> Help</div>
              {LogoutBtn && <LogoutBtn />}
              <Link href='/profile/delete-account' className='mt-3 flex cursor-pointer items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold text-red-500 hover:bg-red-50'><MdDeleteOutline size={18} /> Delete account</Link>
            </div>
          </aside>

          <div className='space-y-6 lg:flex lg:gap-10'>
            <section className='h-150 overflow-y-scroll rounded-xl border border-gray-100 bg-white px-6 py-5 shadow-sm'>
              <h2 className='mb-4 text-lg font-semibold text-slate-900'>Basic Info</h2>
              <div>
                <h2 className='flex items-center gap-2 text-lg font-semibold text-slate-900'><FaRegUser /> {dbUser.username}</h2>
                <p className='mt-1 flex items-center gap-2 text-sm text-slate-500'><MdOutlineEmail />{dbUser.email}</p>
                <p className='mt-1 flex items-center gap-2 text-sm text-slate-500'><FaPhone /> {dbUser.phone}</p>
                <p className='mt-1 flex items-center gap-2 text-sm text-slate-500'><IoLocationSharp /> {dbUser.address}</p>

                <Link href='/profile/edit-profile' className='mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700'>
                  <CiEdit size={18} /> Edit profile
                </Link>

                <div className='my-4 block md:hidden'>
                  <h2 className='mb-4 text-lg font-semibold text-slate-900'>Profile Menu</h2>
                  <div className='flex flex-col gap-4 text-sm text-slate-900'>
                    <Link href='/profile/edit-profile' className='flex w-full items-center gap-2 p-2 transition-all duration-300 ease-in-out hover:text-orange-600'>
                      <IoSettingsOutline size={18} /> Edit Profile
                    </Link>
                    <Link href='/profile/change-password' className='flex w-full items-center gap-2 p-2 transition-all duration-300 ease-in-out hover:text-orange-600'>
                      <TbLockPassword size={18} /> Change Password
                    </Link>
                    <Link href='/orders' className='flex w-full items-center gap-2 p-2 transition-all duration-300 ease-in-out hover:text-orange-600'>
                      <LuShoppingBag size={18} /> My Orders
                    </Link>
                    <Link href='/reviews' className='flex w-full items-center gap-2 p-2 transition-all duration-300 ease-in-out hover:text-orange-600'>
                      <MdReviews size={18} /> Reviews
                    </Link>
                    <Link href='/favorites' className='flex w-full items-center gap-2 p-2 transition-all duration-300 ease-in-out hover:text-orange-600'>
                      <FaRegHeart size={18} /> Favorites
                    </Link>
                    <Link href='/notification' className='flex w-full items-center gap-2 p-2 transition-all duration-300 ease-in-out hover:text-orange-600'>
                      <IoIosNotifications size={18} /> Inbox
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <div className='mt-2 flex items-center justify-between'>
                  <h2 className='text-lg font-semibold text-slate-900'>Favorites</h2>
                  {likedProducts.length > 0 && (
                    <div className='w-fit bg-linear-to-t from-white to-transparent py-4 text-center'>
                      <Link href='/favorites' className='inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-orange-600 hover:text-orange-700'>
                        View all <PiCaretDoubleRightBold />
                      </Link>
                    </div>
                  )}
                </div>

                <div className='mt-4 flex flex-col gap-3'>
                  {likedProducts?.length > 0 ? (
                    likedProducts?.slice(0, 7).map((product) => (
                      <Link href={`/menu/${product.productId}`} key={product._id} className='mt-2 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm'>
                        <div className='h-12 w-12 overflow-hidden rounded-2xl'>
                          <Image src={product.image} alt={product.name} width={48} height={48} className='h-full w-full object-cover' />
                        </div>
                        <div>
                          <h3 className='font-semibold text-slate-900'>{product.name}</h3>
                          <p className='text-sm text-slate-500'>₦{product.basePrice.toLocaleString('en-US')}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className='mt-4 flex flex-col items-center justify-center gap-2 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm'>
                      <p className='text-sm text-slate-500'>You haven&apos;t liked any products yet.</p>
                      <Link href='/menu' className='mt-2 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700'>
                        <LuShoppingBag size={18} /> Start exploring
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section className='relative flex-1 overflow-y-scroll rounded-xl border border-gray-100 bg-white shadow-sm h-150'>
              {userOrders.length > 0 ? <UserOrders orders={userOrders} /> : (
                <div className='flex h-full w-full flex-col items-center justify-center rounded-2xl p-8 text-center'>
                  <h2 className='text-lg font-semibold text-slate-900'>No orders yet</h2>
                  <p className='mt-2 text-sm text-slate-500'>Your recent orders will show up here once you place your first meal.</p>
                  <Link href='/menu' className='mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700'>
                    <LuShoppingBag size={18} /> Start ordering
                  </Link>
                </div>
              )}
              {userOrders.length > 0 && (
                <div className='sticky bottom-0 left-0 w-full bg-linear-to-t from-white to-transparent py-4 text-center'>
                  <Link href='/orders' className='inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-orange-600 hover:text-orange-700'>
                    View all orders <PiCaretDoubleRightBold />
                  </Link>
                </div>
              )}
            </section>

            <section className='my-4 block md:hidden'>
              <div className='flex flex-col gap-2'>
                <div className='flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><CiInboxIn size={18} /> Suggestions</div>
                <div className='flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><FaQuestion size={18} /> FAQ</div>
                <div className='flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm'><AiOutlineExclamationCircle size={18} /> Help</div>
                {LogoutBtn && <LogoutBtn />}
                <Link href='/profile/delete-account' className='mt-3 flex cursor-pointer items-center gap-3 rounded-xl bg-red-50 px-3 py-3 text-sm font-semibold text-red-700 hover:bg-red-100'><MdDeleteOutline size={18} /> Delete account</Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

import { updateUser } from '@/app/actions/updateUser';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { getServerApiUrl } from '@/utils/serverApiUrl';

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
    throw new Error('Unable to load user');
  }

  const json = await response.json();
  return json.success ? json.user : null;
}

export default async function EditProfilePage() {
  let dbUser = null;
  try {
    dbUser = await fetchUser();
  } catch (error) {
    dbUser = null;
  }

  if (!dbUser) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-white px-6 py-16 pt-20'>
        <div className='w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm'>
          <h2 className='text-2xl font-bold text-slate-900'>You need to sign in</h2>
          <p className='mt-2 text-sm text-slate-500'>Please sign in again to update your profile information.</p>
          <Link href='/login?callbackUrl=/profile/edit-profile' className='mt-5 inline-flex rounded-lg bg-orange-600 px-6 py-3 text-center text-white hover:bg-orange-700'>
            Login to continue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-white px-4 py-16 pt-20'>
      <div className='w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8'>
        <div className='mb-6 flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-bold text-slate-900'>Update Profile</h1>
            <p className='text-sm text-slate-500'>Keep your information up to date.</p>
          </div>
          <Link href='/profile' className='rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50'>
            Back to profile
          </Link>
        </div>

        <form action={updateUser} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <label htmlFor='username' className='font-semibold text-slate-900'>Username</label>
            <input type='text' name='username' defaultValue={dbUser.username} id='username' placeholder='Enter your username' className='w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400' />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='font-semibold text-slate-900'>Email</label>
            <input name='email' defaultValue={dbUser.email} type='email' id='email' placeholder='Enter your email' className='w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400' />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='phone' className='font-semibold text-slate-900'>Phone</label>
            <input type='tel' defaultValue={dbUser.phone} className='w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400' id='phone' name='phone' placeholder='Enter your phone number' />
          </div>

          <div className='grid gap-4 md:grid-cols-3'>
            <div>
              <label htmlFor='country' className='font-semibold text-slate-900'>Country</label>
              <select id='country' name='country' defaultValue='Nigeria' className='w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400'>
                <option>Nigeria</option>
              </select>
            </div>
            <div>
              <label htmlFor='state' className='font-semibold text-slate-900'>State</label>
              <select id='state' name='state' defaultValue='Lagos' className='w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400'>
                <option>Lagos</option>
              </select>
            </div>
            <div>
              <label htmlFor='city' className='font-semibold text-slate-900'>City</label>
              <input type='text' id='city' name='city' className='w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400' />
            </div>
          </div>

          <div>
            <label htmlFor='street' className='font-semibold text-slate-900'>Street</label>
            <input type='text' defaultValue={dbUser.address} id='street' name='street' className='w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400' />
          </div>

          <button type='submit' className='mt-2 rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-700'>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

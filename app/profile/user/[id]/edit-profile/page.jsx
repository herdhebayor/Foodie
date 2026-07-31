import { updateUser } from '@/app/actions/updateUser'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { getApiUrl } from '@/utils/apiUrl'

function getCookieHeader() {
  return cookies().getAll().map((cookie) => `${cookie.name}=${cookie.value}`).join('; ');
}

async function fetchUser() {
  const response = await fetch(getApiUrl('/api/user/getUser'), {
    cache: 'no-store',
    headers: {
      cookie: getCookieHeader(),
    },
  });
  if (!response.ok) return null;
  const json = await response.json();
  return json.success ? json.user : null;
}

async function EditProfile({ params }) {
  const dbUser = await fetchUser()

  const callbackUrl = '/profile/edit-profile';

  if (!dbUser) {
    return (
      <div className='w-screen h-screen flex flex-col justify-center items-center bg-white px-6'>
        <h2 className="text-2xl font-bold text-slate-900">Looks like you've been logged out of your account</h2>
        <Link href={`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`} className='bg-orange-500 px-6 py-3 rounded-lg text-center text-white hover:bg-orange-600'>
          Login to continue
        </Link>
      </div>
    )
  }

  return (
    <div className='bg-white w-full h-full flex py-8 pt-20 text-slate-900 items-center justify-center'>
      {/* Profile edit */}
      <div className='w-full h-full md:w-100 rounded-md px-6'>
        <h1 className='text-2xl text-slate-900 my-4 font-bold'>Update Profile</h1>
        <form action={updateUser} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <label htmlFor='username' className='text-slate-900 font-semibold'>Username</label>
            <input
              type='text'
              name='username'
              defaultValue={dbUser.username}
              id='username'
              placeholder='Enter your username'
              className='w-full px-4 py-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='text-slate-900 font-semibold'>Email</label>
            <input
              name='email'
              defaultValue={dbUser.email}
              type='email'
              id='email'
              placeholder='Enter your email'
              className='w-full px-4 py-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'
            />
          </div>

          <div>
            <label htmlFor='phone' className='text-slate-900 font-semi-bold'>Phone</label>
            <input
              type='phone'
              defaultValue={dbUser.phone}
              className='w-full px-4 py-2 rounded-md border border-gray-400 focus:ring-2 focus:ring-green-200'
              id='phone'
              name='phone'
              placeholder='Enter your phone number'
            />
          </div>

          <div className='flex gap-4'>
            <div>
              <label htmlFor='country' className='text-slate-900 font-semibold'>Country</label>
              <select
                id='country'
                name='country'
                defaultValue='Nigeria'
                className='w-full px-4 py-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'
              >
                <option className='text-slate-900 font-semi-bold'>Nigeria</option>
              </select>
            </div>

            <div>
              <label htmlFor='state' className='text-slate-900 font-semibold'>State</label>
              <select
                id='state'
                name='state'
                defaultValue='Lagos'
                className='w-full px-4 py-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'
              >
                <option className='text-slate-900 font-semi-bold'>Lagos</option>
              </select>
            </div>

            <div>
              <label htmlFor='city' className='text-slate-900 font-semibold'>City</label>
              <input
                type='text'
                id='city'
                name='city'
                className='w-full px-4 py-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'
              />
            </div>
          </div>

          <div>
            <label htmlFor='street' className='text-slate-900 font-semibold'>Street</label>
            <input
              type='text'
              defaultValue={dbUser.address}
              id='street'
              name='street'
              className='w-full px-4 py-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400'
            />
          </div>

          <button
            type='submit'
            className='mt-2 rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-700'
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProfile


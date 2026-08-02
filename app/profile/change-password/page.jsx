'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { FaArrowLeft } from 'react-icons/fa6';
import { updatePassword } from '@/app/actions/updatePassword';

export default function ChangePasswordPage() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });
  const { data: session, status: sessionStatus } = useSession();

  if (sessionStatus === 'loading') {
    return (
      <div className='flex min-h-screen items-center justify-center bg-white px-4 py-16 pt-20'>
        <div className='h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-orange-600' />
      </div>
    );
  }

  if (!session?.user?.id) {
    return (
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
    );
  }

  const changePassword = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    if (!oldPassword || !newPassword || !rePassword) {
      setStatus({ type: 'error', message: 'All fields are required' });
      return;
    }

    if (newPassword !== rePassword) {
      setStatus({ type: 'error', message: 'New passwords do not match' });
      return;
    }

    const formData = new FormData();
    formData.append('oldPassword', oldPassword);
    formData.append('newPassword', newPassword);
    formData.append('rePassword', rePassword);

    const res = await updatePassword(formData);

    if (!res?.success) {
      setStatus({ type: 'error', message: res?.error || 'Failed to update password' });
      return;
    }

    setStatus({ type: 'success', message: 'Password updated successfully' });
    setOldPassword('');
    setNewPassword('');
    setRePassword('');
  };

  return (
    <div className='relative flex min-h-screen items-center justify-center bg-white px-4 py-16 pt-20 text-slate-900'>
      <Link href='/profile' className='absolute left-5 top-24 flex items-center gap-2 rounded-2xl border border-orange-600 px-4 py-2 text-sm font-semibold text-orange-600'>
        <FaArrowLeft /> Go back
      </Link>

      {status?.type && (
        <div className={`absolute left-0 right-0 top-32 mx-auto w-fit rounded-lg border px-4 py-2 text-sm ${status.type === 'success' ? 'border-green-200 bg-green-50 text-green-800' : 'border-red-200 bg-red-50 text-red-800'}`}>
          {status.message}
        </div>
      )}

      <form onSubmit={changePassword} className='w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8'>
        <h1 className='text-2xl font-bold text-slate-900'>Change Password</h1>
        <p className='mt-2 text-sm text-slate-500'>Use a strong password you have not used before.</p>

        <div className='mt-6 flex flex-col gap-5'>
          <div>
            <label htmlFor='oldPassword' className='mb-2 block text-sm font-semibold'>Enter Old Password</label>
            <input type={showPassword ? 'text' : 'password'} id='oldPassword' name='oldPassword' value={oldPassword} required onChange={(e) => setOldPassword(e.target.value)} className='w-full rounded-lg border border-gray-200 px-4 py-3 text-slate-900 outline-none ring-0 focus:border-orange-500' />
          </div>
          <div>
            <label htmlFor='newPassword' className='mb-2 block text-sm font-semibold'>Enter New Password</label>
            <input type={showPassword ? 'text' : 'password'} id='newPassword' name='newPassword' value={newPassword} required onChange={(e) => setNewPassword(e.target.value)} className='w-full rounded-lg border border-gray-200 px-4 py-3 text-slate-900 outline-none ring-0 focus:border-orange-500' />
          </div>
          <div>
            <label htmlFor='rePassword' className='mb-2 block text-sm font-semibold'>Enter New Password Again</label>
            <input type={showPassword ? 'text' : 'password'} id='rePassword' name='rePassword' value={rePassword} required onChange={(e) => setRePassword(e.target.value)} className='w-full rounded-lg border border-gray-200 px-4 py-3 text-slate-900 outline-none ring-0 focus:border-orange-500' />
          </div>

          <label className='flex items-center gap-2 text-sm text-slate-600'>
            <input id='showPassword' type='checkbox' checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)} />
            Show passwords
          </label>

          <button type='submit' className='w-full rounded-lg bg-orange-500 px-4 py-3 text-center font-semibold text-white shadow-sm hover:bg-orange-600'>
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}

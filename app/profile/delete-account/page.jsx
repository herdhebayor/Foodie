'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import deleteUser from '@/app/actions/deleteUser';

const msgs = [
  { id: 1, body: 'Not satisfied with the app performance' },
  { id: 2, body: 'Delivery arrived late' },
  { id: 3, body: 'Products and delivery fee are too expensive' },
  { id: 4, body: 'Products are not up to standard' },
  { id: 5, body: 'Others' },
];

export default function DeleteAccountPage() {
  const [message, setMessage] = useState('');
  const [addText, setAddText] = useState('');
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!session?.user?.id) {
      setStatus({ type: 'error', message: 'You need to be signed in to delete your account.' });
      return;
    }

    if (!message) {
      setStatus({ type: 'error', message: 'Please choose a reason before deleting your account.' });
      return;
    }

    const reason = message === 'Others' ? addText : message;
    if (message === 'Others' && !reason.trim()) {
      setStatus({ type: 'error', message: 'Please tell us why you want to delete your account.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const formData = new FormData();
      formData.append('message', message);
      formData.append('addText', reason);

      const result = await deleteUser(session.user.id, formData);

      if (!result?.success) {
        setStatus({ type: 'error', message: result?.error || 'Failed to delete your account.' });
        return;
      }

      await signOut({ redirect: false });
      router.push('/');
    } catch (err) {
      setStatus({ type: 'error', message: 'An error occurred while deleting your account. Please try again later.' });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-white px-4 py-16 pt-25'>
      <div className='w-full max-w-2xl h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8'>
        <h2 className='text-center text-2xl font-bold text-slate-900'>Delete Account</h2>
        <p className='mt-2 text-center text-sm text-slate-500'>You are about to delete your account permanently.</p>

        {status?.type && (
          <div className={`mt-4 rounded-lg border px-4 py-3 text-sm ${status.type === 'error' ? 'border-red-200 bg-red-50 text-red-700'  : 'border-green-200 bg-green-50 text-green-700'}`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleDelete} className='mt-6 flex flex-col gap-4'>
          <p className='text-sm font-semibold text-slate-700'>Tell us why you want to delete your account</p>

          {msgs.map((msg) => (
            <label key={msg.id} className={`flex cursor-pointer items-center gap-4 rounded-lg border px-4 py-3 text-sm ${message === msg.body ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-slate-200 text-slate-700'}`}>
              <input type='checkbox' checked={message === msg.body} onChange={() => setMessage(message === msg.body ? '' : msg.body)} className='h-4 w-4 cursor-pointer accent-orange-500' />
              <span>{msg.body}</span>
            </label>
          ))}

          <div className={`${message === 'Others' ? 'scale-y-100 flex flex-col gap-2 h-fit' : 'scale-y-0'} duration-300 transition ease-in-out origin-top  `}>
            <label htmlFor='addText' className='text-sm font-semibold text-slate-700'>Additional text</label>
            <textarea name='addText' id='addText' value={addText} onChange={(e) => setAddText(e.target.value)} className='h-28 w-full resize-none rounded-lg border cursor-pointer border-gray-200 px-4 py-3 focus:border-orange-500 focus:outline-none' maxLength={200} minLength={3} placeholder='Tell us more about your experience...' />
          </div>

          <div className='flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <button type='submit' disabled={isSubmitting} className='rounded-lg bg-red-200 px-6 py-3 text-sm font-semibold text-red-700 hover:bg-red-300 disabled:cursor-not-allowed disabled:opacity-70'>
              {isSubmitting ? 'Deleting...' : 'Delete Account'}
            </button>
            <button type='button' onClick={() => router.back()} className='rounded-lg bg-indigo-200 px-6  py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-300'>
              No i changed my mind
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

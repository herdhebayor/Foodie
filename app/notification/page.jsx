'use client'

import React, { useEffect, useMemo, useState } from 'react';
import Toast from '@/components/Toast';
import getUserMessages  from '@/app/actions/getUserMessages';
import  markMessagesRead  from '@/app/actions/markMessagesRead';
import Loading from "@/components/Loading"
import ButtonLoading from "@/components/ButtonLoading"
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import { useGlobalContext } from '@/context/GlobalContext';


function NotificationPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data: session, status } = useSession();
  const {setShowToast, setToastType, setToastMessage} = useGlobalContext()

  //error state

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setLoading(true);
        const res = await getUserMessages();
        if (!mounted) return;
        setMessages(res || []);

        // Mark as read once user opens notification page
        await markMessagesRead();
      } catch (e) {
        setShowToast(true)
      setToastMessage('Failed to laod notification. Please try again')
      setToastType('error')
      console.error('Error fetching messages:', e);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, []);

  const unreadCount = useMemo(
    () => messages.filter((m) => m.read === false).length,
    [messages]
  );

  if (loading || status === 'loading') {
    return <Loading />;
  } 

  if(!session || !session.user){
    return(
      <div className='w-screen h-screen bg-white px-6  flex flex-col justify-center items-center'>
        <h2 className="text-2xl font-bold text-slate-900 ">No User Found</h2>
        <Link href="/login" className='bg-orange-500 text-white hover:bg.orange-600 rounded-lg px-4 py-3'>
          Login to continue
        </Link>
      </div>
    )
  }

  

  

  return (
    <div className="min-h-screen bg-white px-4 py-10 pt-25  md:pt-30">
      <div className="mx-auto w-full max-w-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
            <p className="mt-2 text-sm text-slate-500">
              {loading ? <ButtonLoading /> : `${unreadCount} unread message${unreadCount === 1 ? '' : 's'}`}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {messages.length === 0 && !loading ? (
            <div className="rounded-xl border border-slate-200 p-6 text-center text-slate-600">
              No notifications yet.
            </div>
          ) : null}

          {messages.map((m) => (
            <div
              key={m._id}
              className={`rounded-xl md:w-150 w-full border p-4 ${m.read === false ? 'border-orange-300 bg-orange-50' : 'border-slate-200 bg-white'}`}
            > 
              <Link href={`/notification/${m._id}`} className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-slate-500">
                    {new Date(m.createdAt).toLocaleString()}
                  </div>
                  <div className="mt-1 text-sm font-medium text-slate-900">{m.body}</div>
                  {m.orderId ? (
                    <div className="mt-2">
                      <div
                        className="text-orange-600 text-sm hover:underline"
                      >
                        Track your order
                      </div>
                    </div>
                  ) : null}

                </div>
                {m.read === false ? (
                  <span className="inline-flex items-center rounded-xl bg-orange-600 px-3 py-1 text-xs font-semibold text-white">
                    Unread
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-xl bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                    Read
                  </span>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationPage;


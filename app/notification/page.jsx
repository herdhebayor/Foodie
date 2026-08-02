'use client'

import React, { useEffect, useMemo, useState } from 'react';
import  markMessagesRead  from '@/app/actions/markMessagesRead';
import Loading from "@/components/Loading"
import ButtonLoading from "@/components/ButtonLoading"
import {useRouter, usePathname} from 'next/navigation'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import { useGlobalContext } from '@/context/GlobalContext';
import { getApiUrl } from '@/utils/apiUrl';

async function fetchUserMessages() {
  const response = await fetch(getApiUrl('/api/user/getUserMessages'));
  if (!response.ok) {
    throw new Error('Unable to fetch messages');
  }
  const data = await response.json();
  return data.success ? data.messages : [];
}

function NotificationPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all'); 


  const mapMessages = ()=>{
    
    if(filter === 'unread'){
      return messages.filter((m) => m.read === false)
    }
    if(filter === 'read'){
      return messages.filter((m) => m.read === true)
    }

    return messages
  }

  const router = useRouter()
  const pathname = usePathname()

  const { data: session, status } = useSession();
  const {setShowToast, setToastType, setToastMessage} = useGlobalContext()

  //error state

  useEffect(() => {
    if (session || session?.user) {
    let mounted = true;

    async function load() {
      try {
        setLoading(true);
        const res = await fetchUserMessages();
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
    }
    };
  }, []);

  if (loading || status === 'loading') {
    return <Loading />;
  } 

  if(!session || !session.user){
    return(
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
    )
  }

  

  

  return (
    <div className="min-h-screen w-screen bg-white px-4 md:px-6 py-10 pt-25 lg-px-10  md:pt-30">
      <div className="mx-auto w-full container min-h-screen ">
        <div className="flex flex-wrap w-full items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded-lg text-sm outline-0 font-medium ${
                  filter === 'all' ? 'bg-orange-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-3 py-1 rounded-lg outline-0 text-sm font-medium ${
                  filter === 'unread' ? 'bg-orange-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                Unread
              </button>
              <button
                onClick={() => setFilter('read')}
                className={`px-3 py-1 rounded-lg outline-0 text-sm font-medium ${
                  filter === 'read' ? 'bg-orange-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                Read
              </button>
            </div>
          </div>
          <div>
            <p className="mt-2 text-sm text-slate-500">
              {loading ? <ButtonLoading /> : `${messages.length} total message${messages.length === 1 ? '' : 's'}`}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          { messages.length === 0 && !loading ? (
            <div className="rounded-xl border border-slate-200 p-6 text-center text-slate-600">
              You do not have any notifications yet
            </div>
          ) : null}



          { mapMessages().length > 0 ? 
            (  mapMessages().map((m) => (
              <div
                key={m._id}
                className={`rounded-xl w-full border p-4 ${m.read === false ? 'border-orange-300 bg-orange-50' : 'border-slate-200 bg-white'}`}
              > 
                <Link href={`/notification/${m._id}`} className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-slate-500">
                      {new Date(m.createdAt).toLocaleString()}
                    </div>
                    <div className="mt-1 text-sm font-medium text-slate-900">{m.body}</div>
                    {m.messageType === 'order' && m.messageId ? (
                      <div className="mt-2">
                        <Link
                        href={`/orders/${m.messageId}`}
                          className="text-orange-600 text-sm hover:underline"
                        >
                          Track your order
                        </Link>
                      </div>
                    ): null}

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
            ))) : <p className='text-slate-900'>{filter === 'unread' ? 'You do not have any unread messages' : filter === 'read' ? 'You do not have any read messages' : null}</p> }
          
            
          
        </div>
      </div>
    </div>
  );
}

export default NotificationPage;


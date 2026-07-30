'use client'
import React, {useState, useEffect} from 'react'
import { useParams, useRouter, usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Loading from '@/components/Loading'
import Link from 'next/link'
import deleteMessage from '@/app/actions/deleteMessage'
import { FaArrowLeft } from "react-icons/fa6";
import { useGlobalContext } from '@/context/GlobalContext'
import { getApiUrl } from '@/utils/apiUrl';

async function fetchUserMessages() {
  const response = await fetch(getApiUrl('/api/user/getUserMessages'));
  if (!response.ok) {
    throw new Error('Unable to fetch messages');
  }
  const data = await response.json();
  return data.success ? data.messages : [];
}

function NotificationId() {
    const params = useParams()
    const router = useRouter()
    const pathname = usePathname()
    const {data: session, status} = useSession()
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState()
    const [showDeleteAlert, setShowDeleteAlert] = useState(false)

    

    const {setshowToast, setToastMessage, setToastType} = useGlobalContext()
    
    
    useEffect(() => {
      if (session?.user) {
        let mounted = true;
    
        async function load() {
          try {
            setLoading(true);
            const res = await fetchUserMessages();
            if (!mounted) return;
            setMessages(res || [])
          } catch (e) {
            console.log('Error fetching messages:', e);
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

      const message = messages.find((m) => m._id === params.id)
      const messageUserId = message.user?._id?.toString?.() || message.user?.toString?.() || message.user;
      const sessionUserId = session.user.id?.toString?.() || session.user.id;

      const handleDeleteMsg = (id)=>{
        if(!session && messageUserId === sessionUserId){
          setToastMessage('You are not authorized to perform this task')
          setshowToast(true)
          setToastType('error')
        }
        deleteMessage(id)
        router.push('/notification')
      }
      


       if(status === 'loading' || loading){
        return <Loading/>
      }



      if(!session || !session.user){
        return( 
          <div className='w-screen h-screen bg-white px-6 flex flex-col justify-center items-center'>
            <h2 className="text-2xl font-bold text-slate-900 ">Looks like you've been logged out of your account</h2>
            <button onClick={()=> router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`)}
            className='bg-orange-500 px-6 py-3 rounded-lg text-center text-white  hover:bg-orange-600'>
              Login to continue
            </button>
          </div>
        )
      }

      
      
      if (sessionUserId && messageUserId && messageUserId !== sessionUserId) {
        return (
          <div className='w-screen h-screen bg-white px-6 flex flex-col justify-center items-center'>
            <h2 className="text-2xl font-bold text-slate-900 ">User not Authorize</h2>
            <button onClick={()=> router.back()} className='bg-orange-500 text-white hover:bg.orange-600 rounded-lg px-4 py-3'>
              Go Back
            </button>
          </div>
        )
      }

      
      if(!message){

        return(
          <div className='w-screen h-screen bg-white px-6 flex flex-col justify-center items-center'>
            <h2 className="text-2xl font-bold text-slate-900 ">Message Not Found</h2>
            <Link href="/notification" className='bg-orange-500  text-white hover:bg.orange-600 rounded-lg px-4 py-3'>
               Go Back
            </Link>
          </div>
        )
      }

     

    

  return (
    <div className='w-screen h-screen bg-white p-6 pt-25 md:pt-30 '>
        <div className='text-slate-900 space-y-3'>
            <Link href='/notification' className='text-orange-500 bg-orange-100 w-fit px-2 py-3 rounded-2xl flex items-center gap-2 hover:text-orange-600  '><FaArrowLeft/> Back</Link>
            <h2 className='text-2xl font-bold  '>{message.messageType}</h2>
            <p classname="text-xs text-slate-900 mb-6">{message.createdAt.toLocaleString('en-US')}</p>

            <div className='' >
                <p>{message.body}</p>

                {message?.orderId ? (
                  <Link href={`/orders/${message.orderId}`} className="text-orange-600 text-sm mt-6 hover:underline">
                    Track my order
                  </Link>
                ) : null}

                
            </div>
            <button onClick={()=>setShowDeleteAlert(true)} className='bg-red-100 text-xs text-red-500 border border-red-300 px-2 py-1 rounded-full hover:bg-red-200 cursor-pointer'>
                  delete message
            </button>

            {
              
               showDeleteAlert && <div className='h-screen w-screen duration-300 px-6 pt-25 md:pt-30 bg-black/10 fixed top-0 left-0'>
                  <div className={`${showDeleteAlert ? 'translate-y-0': '-translate-y-96'} duration-300 ease-in-out w-full md:w-120 flex flex-col justify-between h-60 p-6 rounded-lg shadow-lg bg-white`}>
                    <h2 className="text-2xl font-bold text-center">This will remove your message permanently</h2>

                    <div className="flex justify-between">
                      <button onClick={()=>setShowDeleteAlert(false)} className="px-4 py-3 w-30 bg-indigo-500 text-white rounded-lg cursor-pointer text-sm hover:bg-indigo-600">
                        Cancel
                      </button>
                      <button onClick={()=>handleDeleteMsg(message._id)} className="px-4 w-30 py-3 bg-red-500 text-white rounded-lg cursor-pointer text-sm hover:bg-red-600">
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              
            }
        </div>
    </div>
  )
}

export default NotificationId

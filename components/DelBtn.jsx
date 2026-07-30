'use client'

import React, {useState} from 'react'
import { MdDelete } from "react-icons/md";
import {useSession} from 'next-auth/react'
import deleteOrder from '@/app/actions/deleteOrder'
import {useRouter, usePathname} from 'next/navigation'
import { useGlobalContext } from '@/context/GlobalContext';
import Portal from './Portal';


function DelBtn({order, page, }) {
  const [delState, setDelState] = useState(false)  
  const {setToastMessage, setToastType, setShowToast} = useGlobalContext()

  const {data:session} = useSession()
  const router = useRouter()
  const pathname = usePathname()
  

  const handleDelete =(id)=>{
    if(!session?.user && !session.user?.id === order.user){
      setShowToast(true)
      setToastMessage('You are not allowed to perform this task')
      setToastType('error')
      return
    }

    deleteOrder(id)
    setDelState(false)
    if(pathname.startsWith('/profile') || pathname === '/orders'){
      router.refresh()
    }
    router.push('/orders')
  }
  return (
    <div>
    <button onClick={()=>setDelState(true)} className={`${page ? 'w-full rounded-md mt-6 py-3 ' : "py-1 px-4 mt-6 rounded-full w-fit "} border border-orange-100 cursor-pointer flex gap-2 items-center text-center px-2 text-sm font-semibold text-red-600 transition hover:bg-orange-50`}>
        <MdDelete/> Delete
    </button>
    <Portal>
    {
      delState && <div className='h-screen w-screen flex justify-center items-center text-slate-900 px-6 pt-25 md:pt-30 bg-black/10 z-200 fixed top-0 left-0'>
                  <div className={` w-full md:w-100  flex flex-col justify-between h-60 p-6 rounded-lg shadow-lg bg-white`}>
                    <h2 className="text-xl text-center">
                      Are you sure you want to delete this item.
                      This will remove your message permanently and you will not be able to recover it back</h2>

                    <div className="flex justify-between gap-10">
                      <button onClick={()=>setDelState(false)} className="px-4 py-3 w-full bg-indigo-500 text-white rounded-lg cursor-pointer text-sm hover:bg-indigo-600">
                        Cancel
                      </button>
                      <button onClick={()=>handleDelete(order._id)} className="px-4 w-full py-3 bg-red-500 text-white rounded-lg cursor-pointer text-sm hover:bg-red-600">
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
    }
  </Portal>
    </div>
  )
}

export default DelBtn

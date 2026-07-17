'use client'

import React from 'react'
import { MdDelete } from "react-icons/md";
import deleteOrder from '@/app/actions/deleteOrder';
function DelBtn({order, page}) {

  const handleDelete =(id)=>{
    if(window.confirm('This will remove the order permanently')){
      deleteOrder(id)
    }
  }
  return (
    <button onClick={()=>handleDelete(order._id)} className={`${page ? 'w-full rounded-md mt-6 py-3 ' : "py-1 rounded-full w-30 "} border border-orange-100 cursor-pointer flex gap-2 items-center text-center px-3 text-sm font-semibold text-red-600 transition hover:bg-orange-50`}>
        <MdDelete/> Delete
    </button>
  )
}

export default DelBtn

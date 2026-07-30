import React from 'react' 
import { useGlobalContext } from '@/context/GlobalContext'
import {IoMdClose} from 'react-icons/io'

function Toast() {
    const {toastType, toastMessage, showToast, setShowToast} = useGlobalContext()
  
  return (
    <div className={`${showToast ? 'translate-y-0' : '-translate-y-100'} fixed top-0 left-0 z-200 duration-300 transition  ease-in-out w-screen p-0 `}>
      <div className={`${ toastType === 'error' ? 'bg-red-500' : toastType === 'success' ? 'bg-green-500' : 'bg-indigo-500'}  relative w-full h-18 p-6 text-white font-bold
          text-2xl flex justify-center items-center duration-300 ease-in-out origin-top`}>
            <p>{toastMessage}</p>
            <button onClick={()=> setShowToast(false)} className='absolute top-5 right-5 text-white text-2xl font-bold outline-0 bg-transparent'> 
              <IoMdClose/>
            </button>
      </div>
    </div>
  )
}

export default Toast

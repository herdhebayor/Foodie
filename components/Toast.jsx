import React from 'react' 
import { useGlobalContext } from '@/context/GlobalContext'

function Toast() {
    const {toastType, toastMessage, showToast} = useGlobalContext()
  
  return (
    <div className={`${showToast ? 'tranlate-y-0' : '-translate-y-100'} fixed top-0 left-0 z-200 duration-300 transition-all ease-in-out w-screen p-4 md:p-6`}>
      <div className={`${ toastType === 'error' ? 'bg-red-500' : toastType === 'success' ? 'bg-green-500' : 'bg-indigo-500'} rounded-xl w-full h-20 p-6 text-white font-bold
          text-2xl flex justify-center items-center duration-300 ease-in-out origin-top`}>
            <p>{toastMessage}</p>
      </div>
    </div>
  )
}

export default Toast

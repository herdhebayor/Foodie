import React from 'react'
import { useGlobalContext } from '@/context/GlobalContext'

function NewsLetter() {
  const {setShowToast, setToastMessage, setToastType} = useGlobalContext()

  const subscribe = (formData)=>{
    const email = formData.get('email')
    

    setShowToast(true)
      setToastMessage(`${email} has been added to our news letter`)
      setToastType('success')
  }
  return (
    <div className='w-screen py-5 px-4 lg:px-10 bg-white text-slate-900 '>
        <div className='lg:container space-y-3 w-full rounded-2xl mx-auto block md:px-10'>
            <h1 className='text-2xl font-bold text-center'>Subscribe to our newsletter</h1>
            <p className='text-sm text-center'>Suscribe to our news letter to receive updates on our latest services and new products</p>
            <form action={subscribe} className='flex items-center justify-center gap-6 w-full'>
                <input type='email' required name='email' id='email' placeholder='Enter your email' className='w-full md:w-1/2 px-4 py-3 rounded-md border border-orange-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500'/>
                <button type='submit' className='bg-orange-500 hover:bg-orange-600 cursor-pointer text-white px-4 py-3 rounded-md'>Subscribe</button>
            </form>
        </div>
      
    </div>
  )
}

export default NewsLetter

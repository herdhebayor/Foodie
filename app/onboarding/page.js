'use client'
import { useState, useEffect } from "react";
import { addEmailAndPhone } from "../actions/onboarding";
import { useUser } from '@/hooks/useUser'
import { useRouter } from "next/navigation";
import Loading from '@/components/Loading'
import { useGlobalContext } from "@/context/GlobalContext";
import {useSession} from 'next-auth/react'
import Toast from '@/components/Toast'


export default function Onboarding() {
  const [sessionLoading, setSessionLoading] = useState(true)
  const { user} = useUser()
  const router = useRouter()
  const {setToastMessage,setShowToast,setToastType} = useGlobalContext()
  const {data:session, status, update}= useSession()

  useEffect(() => {
    if (status === 'loading') return;
    if (session) {setSessionLoading(false)}; 
    if (!session?.user) {
      setShowToast(true)
      setToastMessage('You are not logged in')
      setToastType('error')
      router.push(`/login?callbackUrl=${encodeURIComponent('/onboarding')}`)
      return
    }
    
  }, [status, session, user, router, setShowToast, setToastMessage, setToastType]);

  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error,setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const completeSignup = async (formData)=>{
    setSubmitting(true)
  try{
   if(phone === '' || address === ''){
      setError('Input field cannot be empty')
      setSubmitting(false)
      return
    }
    const result = await addEmailAndPhone(formData)
    if (!result?.success) {
      throw new Error('Could not complete signup. Please try again.')
    }
    // Refresh the session JWT so profileCompleted:true is in the cookie
    await update()
    setPhone('')
    setAddress('')
    router.push('/')
    }catch(err){
      console.error('Error completing signup:', err);
      setError(err.message || 'An error occurred while completing signup.');
      setShowToast(true);
      setToastMessage(err.message || 'An error occurred while completing signup.');
      setToastType('error');
      setSubmitting(false)
    }
  }


  if(sessionLoading){
    return <Loading/>
  }
  

  return (
    <div className="w-screen h-screen flex items-center overflow-hidden justify-center bg-white px-4">
     <div className="w-90 bg-white shadow-lg md:w-120 p-6 border border-gray-100 space-y-3 flex justify-center items-center flex-col text-slate-900 rounded-lg mx-auto">
       <h2 className="text-xl text-center mb-6 font-bold">{`Welcome ${session?.user?.username}`} </h2>
       <p className="text-sm md:text-lg text-left">Add your phone number and Address to continue</p>
       <form className="space-y-4" action={completeSignup}>
        <input
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none  focus:border-orange-500"
         placeholder="enter your phone number"
         name="phone"
         id="phone"
         onChange={(e)=>setPhone(e.target.value)}
       />

       <input
         placeholder="Enter your address"
         name="address"
         id="address"
         className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none  focus:border-orange-500"
         onChange={(e)=>setAddress(e.target.value)}
       />
        {error && <p className="text-red-500 text-sm">{error}</p>}

       <button 
       disabled={submitting}
       className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 w-full rounded-xl cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
       type="submit">
         {submitting ? 'Saving...' : 'Continue'}
       </button>
       </form>
     </div>
     <Toast/>
     </div>
   )
}

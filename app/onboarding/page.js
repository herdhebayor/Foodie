'use client'
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { addEmailAndPhone } from "../actions/onboarding";
import { useUser } from '@/hooks/useUser'
import { useRouter } from "next/navigation";

export default function Onboarding() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (loading) return; // Wait for session to load
    if (!user) {
      router.push('/login')
      return
    }
    console.log('🚀 Onboarding - Full user object:', user); // DEBUG: Check this in console
  }, [loading, user, router]);

  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div className="w-screen h-screen flex items-center overflow-hidden justify-center bg-gray-50 px-4">
     <div className="w-90 bg-orange-50 md:w-100 px-4 border border-gray-300 space-y-2 py-4 md:border flex justify-center items-center flex-col text-slate-900 rounded-lg mx-auto">
       <h2 className="text-xl text-center mb-6 font-bold">Update Profile</h2>
       <p className="text-sm md:text-lg text-left">Add your phone number and Address</p>
       <form className="space-y-3" action={addEmailAndPhone}>
        <input
        className="w-full px-4 py-3 border border-gray-300 rounded-md"
         placeholder="Phone Number"
         name="phone"
         onChange={(e)=>setPhone(e.target.value)}
       />

       <input
         placeholder="Address"
         name="address"
         className="w-full px-4 py-3 border border-gray-300 rounded-md"
         onChange={(e)=>setAddress(e.target.value)}
       />

       <button 
       className="bg-slate-900 hover:bg-slate-800 text-gray-50 px-4 py-2 w-full rounded-lg"
       type="submit">
         Continue
       </button>
       </form>
     </div>
     </div>
   )
}

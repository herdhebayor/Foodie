'use client'
import { useState } from "react";
import { registerUser } from "@/app/actions/registerNewUser";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import ButtonLoading from "@/components/ButtonLoading";
import Link from "next/link";
import {toast} from 'react-toastify'

export default function RegisterForm() {
    const [error, setError] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [btnLoading, setBtnLoading] = useState(false)
    const [emailLoading, setEmailLoading] = useState(false)
    const [googleLoading, setGoogleLoading] = useState(false)
  const router = useRouter();

  async function handleRegister(formData) {
    setBtnDisabled(true)
    setBtnLoading(true)
    const password = formData.get("password");
    const confirmPassword = formData.get('confirmPassword')
    
    if(password !== confirmPassword){
        setError('password do not match')
        return
    }
    
    try {
      // ✅ create user
      const res = await registerUser(formData);
      if(res.error){
        toast.error(res.error)
        setBtnLoading(false)
        setBtnDisabled(false)
        return
      }

      // auto login after signup
      const email = formData.get("email");
      
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      setError('')
      setBtnDisabled(false)
      setBtnlLoading(false)

      router.push("/onboarding");
    } catch (error) {
      toast.error(error.message);
      setBtnDisabled(false)
      setBtnLoading(false)
    }
  }

   //signin with google or register with google
      const handleGoogleLogin = async () => {
        setBtnDisabled(true)
        setGoogleLoading(true)
      const res = await signIn("google", {
        callbackUrl: "/",
      });
      if(res.error){
        setError(res.error.message)
        setBtnDisabled(false)
        setGoogleLoading(false)
        return
      }
      setError('')
      router.push("/onboarding")
      setBtnDisabled(false)
      setGoogleLoading(false)
    };

  return (
    <div className="w-screen h-screen bg-gray-50">
        <div className="container h-screen px-8 flex justify-center items-center">
            <div className="bg-orange-50 w-full md:w-100 block border border-gray-400 px-6 py-4 rounded-md">
                <h2 className="text-2xl text-slate-900 font-bold text-center my-3">Register</h2>
                <form className="flex flex-col space-y-3" action={handleRegister}>
                  <p className='text-sm text-gray-400 '>Don't have an account <span onClick={()=> router.push('/login')} className='text-blue-500 underline cursor-pointer'>Login</span></p>
                <input
                type='text'
                className=' w-full py-2 px-4 border border-gray-300 rounded-md text-slate-900'
                 name="username" placeholder="Enter your username" required />
                <input 
                className=' w-full py-2 px-4 border border-gray-300 rounded-md text-slate-900'
                name="email" type="email" placeholder="Enter your email" required />
                <input 
                className=' w-full py-2 px-4 border border-gray-300 rounded-md text-slate-900'
                name="password" type="password" placeholder="Eneter your password" required />

                <input 
                className=' w-full py-2 px-4 border border-gray-300 rounded-md text-slate-900'
                name="confirmPassword" type="password" placeholder="Confirm password" required />
                <span className='text-red-500 text-xs'>{error}</span>

                <button
                disabled={btnDisabled}
                className="w-full hover:bg-slate-800 flex items-center gap-4 justify-center bg-slate-900 text-gray-50 cursor-pointer rounded-md text-center px-4 py-2"
                 type="submit">{btnLoading ? <> <ButtonLoading /> 'Creating account...'</> : 'Register'}
                </button>
                </form>

                {/* Divide */}
                 <div className='flex gap-2 items-center my-4 text-slate-900'>
                    <span className='w-1/2 border-b border-b-gray-300'></span>
                    <p>Or</p>
                    <span className='w-1/2 border-b border-b-gray-300'></span>
                </div>
                
                {/* Google signin button */}
                <button disabled={btnDisabled} onClick={handleGoogleLogin} className='text-green-50 px-4 py-2 cursor-pointer flex items-center justify-center w-full hover:bg-red-400 rounded-md mt-3 bg-red-500'>
                    {googleLoading? <ButtonLoading /> : <><FaGoogle size={20} className='mr-4'/> Signin with Google</>}
                </button>
            </div>
        </div>
    </div>
  );
}
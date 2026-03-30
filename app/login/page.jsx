'use client'
import React,{useState, useEffect} from 'react'
import { FaGoogle } from "react-icons/fa";
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import ButtonLoading from '@/components/ButtonLoading';
import { useSession } from 'next-auth/react';

function Register() {
    const router = useRouter()
    const {data:session, status} = useSession()

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [showPassword, setShowPassword]= useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [googleLoading, setGoogleLoading] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(false)


    useEffect(()=>{
      if(status === 'loading'){
        setBtnDisabled(true)
      }
      if(session?.user){
        router.push('/')
      }
    },[status, router, session])
    //signin with google or register with google
    const handleGoogleLogin = async () => {
      setGoogleLoading(true)
      setBtnDisabled(true)
    const res = await signIn("google", {
      callbackUrl: "/",
    });
    if(res.error){
      setError(res.error.message)
      setGoogleLoading(false)
      setBtnDisabled(false)
    }

    setError('')
    setGoogleLoading(false)
    setBtnDisabled(false)
  };

  // Sign in with email
  const handleLogin = async (e) => {
   e.preventDefault();

    setBtnDisabled(true)
    setLoading(true)
    
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.error) {
      if (res.error === "Invalid credentials" || res.error === "User not found") {
      setError("Invalid email or password. Please try again.");
      } else {
        setError("An error occurred during login. Please try again later.");
      }
      setLoading(false)
      setBtnDisabled(false)
    } else {
      
      router.push('/')
      setError('')
      setLoading(false)
      setBtnDisabled(false)
    }
  };

  return (
    <div className='w-screen bg-gray-50'>
        <div className='flex justify-center items-center w-full'>
            <div className='container text-slate-900 flex justify-center items-center px-6 py-8 md:px-6  '>
                <div className='w-full md:w-100 border  border-gray-400 py-4 px-6 rounded-md bg-orange-50'>

                  {/* header */}
                    <h2 className='text-2xl font-bold text-center mb-6'> Login</h2>

                        {/* Email signin form */}
                        <div>  
                          <p className='text-sm'>Don't have an account <span onClick={()=> router.push('/register')} className='text-blue-500 underline cursor-pointer'>Sign up</span></p>
                            <form onSubmit={handleLogin}>
                            <div className='my-2'>
                                <input type='email' 
                                placeholder='Enter your email address'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} 
                                required
                                className=' py-2 w-full px-4 border border-gray-300 rounded-md text-slate-900'/>
                            </div>
                            <div className='my-2 relative'>
                                <input type={showPassword ? 'text' : 'password'} 
                                placeholder='Enter you password'
                                value={password} 
                                required
                                onChange={(e)=> setPassword(e.target.value)}
                                className=' py-2 w-full px-4 border border-gray-300 rounded-md text-slate-900'
                                />
                                <span onClick={()=> setShowPassword(prev => !prev)} className='absolute top-1/3 text-slate-900 cursor-pointer right-3 my-auto '>{showPassword ? <FaEye/> : <FaEyeSlash/>}</span>
                            </div>
                            <button disabled={btnDisabled} 
                              className='text-gray-50 px-4 py-2 cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-600 flex items-center gap-4 justify-center hover:bg-slate-800 w-full rounded-md mt-3 bg-slate-900'>
                              {loading ? <><ButtonLoading/> Signing in...</>  : "Sign in" }
                            </button>
                          </form>
                          <span className='block text-red-500 hover:bg-red-400 text-xs mt-2'>{error}</span>
                          <span className='text-slate-900 text-sm mt-2'>forgot password?</span>
                        </div>
                    
                    {/* Divide */}
                    <div className='flex gap-2 items-center my-4'>
                        <span className='w-1/2 border-b border-b-gray-200'></span>
                        <p>Or</p>
                        <span className='w-1/2 border-b border-b-gray-200'></span>
                    </div>

                    {/* Google signin button */}
                    <button 
                      disabled={btnDisabled} 
                      onClick={handleGoogleLogin} 
                      className='text-green-50 px-4 py-2 cursor-pointer disabled:cursor-not-allowed flex disabled:bg-red-200 items-center
                      justify-center w-full rounded-md mt-3 bg-red-500'
                      >
                        {googleLoading ? <> <ButtonLoading/> Signing in... </> : <><FaGoogle size={20} className='mr-4'/> Signin with Google</>}
                    </button>
                </div>
            </div>
        </div>
         {/*  */}
    </div>
  )
}

export default Register

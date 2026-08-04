'use client'
 import React,{useState, useEffect} from 'react'
 import { FcGoogle } from "react-icons/fc";
 import { signIn } from 'next-auth/react';
 import { useRouter, useSearchParams } from "next/navigation";
 import {FaEye, FaEyeSlash} from 'react-icons/fa'
 import ButtonLoading from '@/components/ButtonLoading';
 import { useSession } from 'next-auth/react';
 import {FaUnlockAlt} from 'react-icons/fa'
 import Image from 'next/image';
 import { useGlobalContext } from '@/context/GlobalContext';
 
 function Login() {
     const router = useRouter()
     const searchParam = useSearchParams()
     const {data:session, status} = useSession()
     const {setLogingin, logingin} = useGlobalContext()
 
     const [email, setEmail]= useState('')
     const [password, setPassword]= useState('')
     const [showPassword, setShowPassword]= useState(false)
     const [error, setError] = useState('')
     const [loading, setLoading] = useState(false)
     const [googleLoading, setGoogleLoading] = useState(false)
     const [btnDisabled, setBtnDisabled] = useState(false)
     const [fallbackCallbackUrl, setFallbackCallbackUrl] = useState('/')
 
     const callBackUrl = searchParam?.get('callbackUrl') || fallbackCallbackUrl;
     const sessionExpired = searchParam?.get('sessionExpired') === 'true';
 
useEffect(() => {
       if (session?.user) {
         if (session.user.profileCompleted === false) {
           router.replace("/onboarding");
         } else {
           router.replace(callBackUrl === '/login' || callBackUrl === '/register' ? '/' : callBackUrl)
         }
       }
     }, [router, session, callBackUrl]);
 
     useEffect(() => {
       if (!searchParam?.get('callbackUrl') && typeof document !== 'undefined') {
         try {
           const referrerUrl = document.referrer ? new URL(document.referrer, window.location.origin) : null;
           const referrerPath = referrerUrl && referrerUrl.origin === window.location.origin
             ? `${referrerUrl.pathname}${referrerUrl.search}`
             : '/';
           setFallbackCallbackUrl(referrerPath || '/');
         } catch (err) {
           setFallbackCallbackUrl('/');
         }
       }
     }, [searchParam]);
 
     const handleGoogleLogin = async () => {
       setGoogleLoading(true)
       setBtnDisabled(true)
     const res = await signIn("google", {
       callbackUrl: (typeof window !== 'undefined' && callBackUrl && !/^https?:\/\//i.test(callBackUrl))
         ? `${window.location.origin}${callBackUrl}`
         : callBackUrl === '/login' || callBackUrl ==='/register' ? '/' : callBackUrl,
     });
     if(res.error){
       setError(res.error.message)
       setGoogleLoading(false)
       setBtnDisabled(false)
     }
 
     setLogingin('true')
     setError('')
     setGoogleLoading(false)
     setBtnDisabled(false)
   };
 
   const handleLogin = async (e) => {
    e.preventDefault();
 
     setBtnDisabled(true)
     setLoading(true)
     setError('')
     
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
       return;
     } 

      console.log(callBackUrl)
      setLogingin(true)
      router.push(callBackUrl === '/login' ? '/' : callBackUrl)
      setError('')
      setLoading(false)
      setBtnDisabled(false)
   };

   if(logingin){
     return (
       <div className="w-screen h-screen bg-white p-6">
         <div className="w-full md:w-120 text-slate-900  h-30 text-center flex justify-center items-center mx-auto">
           <p>{`Loginging as ${session?.user?.email}...`}</p>
         </div>
      </div>
     )
   }
 
   return (
      <div className='w-screen h-fit min-h-screen bg-white'>
        <div className='flex justify-between items-center h-full w-full'>

          <div className='text-slate-900 w-full sm:min-w-full md:w-[30%] md:min-w-100  max-w-full h-full flex justify-center items-center '>
            <div className='p-6 lg:px-10 w-full  max-w-120 sm:min-w-full'>
              <div className='w-full mx-auto  md:max-w-120 border border-gray-100 shadow-xl  py-4 px-6 sm:px-4 rounded-md'>
 
                <div className="p-4 rounded-full mx-auto w-fit bg-orange-500 text-white text-4xl">
                  <FaUnlockAlt/>
                </div>
                <h2 className='text-3xl font-bold text-center mb-10'> Login</h2>
                {sessionExpired && (
                  <div className='mb-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800'>
                    Your session expired. Please sign in again to continue.
                  </div>
                )}
  
                  <div>  
                    <form onSubmit={handleLogin}>
                      <div className='my-4'>
                        <input type='email' 
                          placeholder='Enter your email address'
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)} 
                          required
                          className=' w-full p-4 border-2 outline-0 bg-white focus:border-orange-500 border-orange-100 shadow-md rounded-lg text-slate-900'
                        />
                      </div>
                      <div className='my-6 relative'>
                        <input type={showPassword ? 'text' : 'password'} 
                          placeholder='Enter you password'
                          value={password} 
                          required
                          onChange={(e)=> setPassword(e.target.value)}
                          className=' w-full p-4 border-2 border-orange-100 shadow-md bg-white outline-0 focus:border-orange-500 rounded-lg text-slate-900'
                        />
                        <span onClick={()=> setShowPassword(prev => !prev)} className='absolute top-1/3 text-xl text-slate-900 cursor-pointer right-3 my-auto '>{showPassword ? <FaEye/> : <FaEyeSlash/>}</span>
                      </div>
                      <button disabled={btnDisabled} 
                        className='text-gray-50 p-4 cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-600 flex items-center gap-4 justify-center hover:bg-orange-600 w-full rounded-lg mt-8 bg-orange-500'>
                        {loading ? <><ButtonLoading/> Signing in...</>  : "Sign in" }
                      </button>
                    </form>
                    <span className='block text-red-500 text-xs mt-2'>{error}</span>
                    <span className='text-slate-900 text-sm mt-2'>forgot password?</span>
                  </div>
                      
                <div className='flex gap-2 items-center my-4'>
                  <span className='w-1/2 border-b border-b-orange-200'></span>
                  <p>Or</p>
                  <span className='w-1/2 border-b border-b-orange-200'></span>
                </div>
  
                <button 
                  disabled={btnDisabled} 
                  onClick={handleGoogleLogin} 
                  className='text-orange-500 border border-gray-100 p-4 gap-4 cursor-pointer disabled:cursor-not-allowed flex disabled:bg-gray-200 items-center justify-center w-full rounded-lg mt-6 bg-orange-100 font-bold shadow-md'
                >
                  {googleLoading ? <> <ButtonLoading /> Signing in... </> : <><FcGoogle size={30} className='mr-4'/> Signin with Google</>}
                </button>
                <p className='text-md mx-auto mt-6'>Don&apos;t have an account <span onClick={()=> router.push('/register')} className='text-blue-500 underline cursor-pointer'>Sign up</span></p>
              </div>
            </div>
          </div>
 
          <div className="bg-orange-500 md:flex w-[70%] hidden h-full h-screen min-h-171 ">
            <div className="w-full h-full relative overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/images/image-login-landing.webp"
                  alt="foodie"
                  fill
                  className="object-cover opacity-30"
                  priority
                />
              </div>
 
              <div className="relative z-10 h-full w-full flex flex-col justify-center px-10 py-12">
                <div className="max-w-md text-white">
                  <h3 className="text-5xl font-bold leading-tight">Welcome back </h3>
                  <p className="mt-4 text-white">
                    Discover great food, track orders, and save your favorites—right from your phone.
                  </p>
  
                  <ul className="mt-8 space-y-3 text-white/95">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white" />
                      <span>Fast login with Google or email.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white" />
                      <span>Order updates & notifications in real time.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white" />
                      <span>Secure credentials-based access.</span>
                    </li>
                  </ul>
 
                  <div className="mt-10 rounded-2xl bg-white/10 border border-white/20 p-5">
                    <p className="text-sm text-white/90">
                      Tip: If you forgot your password, contact support so we can help you regain access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
   )
 }
 
 export default Login
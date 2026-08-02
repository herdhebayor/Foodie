'use client'
import { useState, useEffect } from "react";
import { registerUser } from "@/app/actions/registerNewUser";
import { signIn } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import ButtonLoading from "@/components/ButtonLoading";
import Toast from '@/components/Toast'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useGlobalContext } from "@/context/GlobalContext";
import {FaUnlockAlt} from 'react-icons/fa'
import Image from 'next/image';

export default function RegisterForm() {
    const [error, setError] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [btnLoading, setBtnLoading] = useState(false)
    const [googleLoading, setGoogleLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const {setLogingin,logingin, setShowToast, setToastMessage,setToastType } = useGlobalContext()
    const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();

useEffect(() => {
    if (session?.user) {
      if (session.user.profileCompleted === false) {
        router.replace("/onboarding");
      } else {
        router.replace('/')
      }
    }
  }, [router, session?.user]);

  async function handleRegister(e) {
    e.preventDefault();
    setBtnDisabled(true);
    setBtnLoading(true);
    const formData = new FormData(e.target);
    const password = formData.get("password");
    const confirmPassword = formData.get('confirmPassword');
    if(password !== confirmPassword){
        setError('password do not match');
        setBtnDisabled(false);
        setBtnLoading(false);
        return;
    }
    try {
      //Create User
      const res = await registerUser(formData);
      if(res.error){
        setShowToast(true),
        setToastType('error')
        setToastMessage(res.error)
        setError(res.error)
        setBtnLoading(false);
        setBtnDisabled(false);
        return;
      }
      // auto login after signup
      const email = formData.get("email");
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      setLogingin(true)
      router.push("/onboarding");
      setError('');
      setBtnDisabled(false);
      setBtnLoading(false);
      
    } catch (error) {
      setShowToast(true),
      setToastType('error')
      setToastMessage(error.message)
      setError(error.message)
      setBtnDisabled(false);
      setBtnLoading(false);
    }
  }

   //signin with google or register with google
      const handleGoogleLogin = async () => {
        setBtnDisabled(true)
        setGoogleLoading(true)
      const res = await signIn("google", {
        callbackUrl: (typeof window !== 'undefined') ? `${window.location.origin}/onboarding` : '/onboarding',
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

    if(logingin){
    return <div className="w-screen h-screen bg-white p-6">
      <div classname="text-slate-900 h-30 flex justify-center items-center bg-white shadow-lg rounded-lg w-full md:w-120 mx-auto mt-6 border border-gray-200">
        <p>{`Logingin as ${session.user?.email}`}</p>
        </div>
    </div>
  }

  return (
    <div className="w-screen h-screen bg-white">
        <div className="mx-auto h-full w-full flex justify-between items-center">
          <div className="p-6 w-full h-screen flex justify-center items-center overflow-scroll md:w-[30%] min-w-100 max-w-full lg:px-10">
              <div className="w-full max-w-130 mx-auto block border border-gray-100 shadow-lg  px-6 py-4 rounded-md">
                <div className="p-4 rounded-full mx-auto w-fit bg-orange-500 text-white text-4xl">
                        <FaUnlockAlt/>
                      </div>
                  <h2 className="text-2xl text-slate-900 font-bold text-center my-3 mb-6">Register</h2>
                  <form className="flex flex-col space-y-3 mx-auto" onSubmit={handleRegister}>
                    <input
                      type='text'
                      className=' w-full p-4 border border-gray-100 shadow-sm outline-0  focus:border-orange-500 rounded-lg text-slate-900'
                      name="username" placeholder="Enter your username" required 
                    />
                    <input 
                    className=' w-full p-4 border border-gray-100 rounded-lg shadow-sm focus:border-orange-500 outline-0 text-slate-900'
                    name="email" 
                    type="email" 
                    placeholder="Enter your email" required 
                    />
                  
                  <div className="relative">
                    <input 
                      className=' w-full p-4 border border-gray-100 rounded-lg focus:border-orange-500 outline-0 shadow-sm text-slate-900'
                      name="password"
                      type={showPassword ? 'text' : 'password'} 
                      placeholder="Eneter your password" required 
                    />
                    <span onClick={()=> setShowPassword(prev => !prev)} className='absolute text-slate-900 cursor-pointer top-1/3 right-3 my-auto '>
                      {showPassword ? <FaEye/> : <FaEyeSlash/>}
                    </span>
                  </div>
                  <div className="relative">
                    <input 
                    className='w-full p-4 border border-gray-100 rounded-lg focus:border-orange-500 outline-0 shadow-sm text-slate-900'
                    name="confirmPassword" 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="Confirm password" required 
                    />
                    <span onClick={()=> setShowPassword(prev => !prev)} className='absolute text-slate-900 text-xl cursor-pointer top-1/3 right-3'>
                      {showPassword ? <FaEye/> : <FaEyeSlash/>}
                    </span>
                  </div>
                  <span className='text-red-500 text-xs'>{error}</span>

                  <button
                  disabled={btnDisabled}
                  className="w-full hover:bg-orange-600 shadow-sm flex items-center gap-4 justify-center bg-orange-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-gray-50 cursor-pointer rounded-lg text-center p-4 mt-4"
                  type="submit">{btnLoading ? <> <ButtonLoading /> Creating account...</> : 'Register'}
                  </button>
                  </form>

                  {/* Divide */}
                  <div className='flex gap-2 items-center my-4 text-slate-900'>
                      <span className='w-1/2 border-b border-b-orange-300'></span>
                      <p>Or</p>
                      <span className='w-1/2 border-b border-b-orange-300'></span>
                  </div>
                  
                  {/* Google signin button */}
                  <button disabled={btnDisabled} onClick={handleGoogleLogin}  className='text-orange-500 p-4 shadow-md disabled:bg-gray-200 disabled:cursor-not-allowed  mt-4 cursor-pointer flex items-center justify-center w-full  rounded-lg bg-orange-100'>
                      {googleLoading? <ButtonLoading /> : <><FcGoogle size={30} className='mr-4'/> Signin with Google</>}
                  </button>

                  <p className='text-md text-gray-400 mt-6 mx-auto'>Don&apos;t have an account <span onClick={()=> router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`)} className='text-blue-500 underline cursor-pointer'>Login</span></p>
              </div>
            </div>
            <div className='bg-orange-500 md:flex w-[70%] min-w-100 hidden h-screen overflow-hidden'>
              <div className="w-full h-full relative ">
                <div className="absolute inset-0">
                  <Image
                    src="/images/image-login-landing.webp"
                    alt="foodie"
                    fill
                    className="object-cover opacity-25"
                    priority
                  />
                </div>

                <div className="relative z-10 h-full w-full flex flex-col justify-center px-15 py-12">
                  <div className="max-w-md text-white">
                    <h3 className="text-5xl font-bold leading-tight">Join MyFoodie</h3>
                    <p className="mt-4 text-white">
                      Create your account to order faster, track progress, and enjoy personalized recommendations.
                    </p>

                    <ul className="mt-8 space-y-3 text-white/95">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white" />
                        <span>Secure registration with email/password.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white" />
                        <span>Use Google sign-up for a quick start.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white" />
                        <span>Get onboarding tips right after signup.</span>
                      </li>
                    </ul>

                    <div className="mt-10 rounded-2xl bg-white/10 border border-white/20 p-5">
                      <p className="text-sm text-white/90">
                        We respect your privacy—your data is only used to provide the service.
                      </p>
                    </div>
                  </div>
                </div>
                <Toast/>
              </div>
            </div>
        </div>
    </div>
  );
}
'use client'
import { useState, useEffect } from "react";
import { registerUser } from "@/app/actions/registerNewUser";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import ButtonLoading from "@/components/ButtonLoading";
import {toast} from 'react-toastify'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSession } from "next-auth/react";

export default function RegisterForm() {
    const [error, setError] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [btnLoading, setBtnLoading] = useState(false)
    const [googleLoading, setGoogleLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") {
      setBtnDisabled(true);
    }
    if (session?.user) {
      router.push("/");
    }
  }, [status, router, session]);

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
      // ✅ create user
      const res = await registerUser(formData);
      if(res.error){
        toast.error(res.error);
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
      setError('');
      setBtnDisabled(false);
      setBtnLoading(false);
      router.push("/onboarding");
    } catch (error) {
      toast.error(error.message);
      setBtnDisabled(false);
      setBtnLoading(false);
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
    <div className="w-screen h-screen bg-gray-100">
        <div className="container h-full px-6 py-8 flex justify-center items-center">
            <div className="bg-orange-50 w-full md:w-100 block border border-gray-400 px-6 py-4 rounded-md">
                <h2 className="text-2xl text-slate-900 font-bold text-center my-3">Register</h2>
                <form className="flex flex-col space-y-3" onSubmit={handleRegister}>
                  <p className='text-sm text-gray-400 '>Don't have an account <span onClick={()=> router.push('/login')} className='text-blue-500 underline cursor-pointer'>Login</span></p>
                <input
                type='text'
                className=' w-full py-2 px-4 border border-gray-300 rounded-md text-slate-900'
                 name="username" placeholder="Enter your username" required 
                 />
                <input 
                className=' w-full py-2 px-4 border border-gray-300 rounded-md text-slate-900'
                name="email" 
                type="email" 
                placeholder="Enter your email" required 
                />
                
                <div className="relative">
                  <input 
                    className=' w-full py-2 px-4 border border-gray-300 rounded-md text-slate-900'
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
                  className='w-full py-2 px-4 border border-gray-300 rounded-md text-slate-900'
                  name="confirmPassword" 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="Confirm password" required 
                  />
                  <span onClick={()=> setShowPassword(prev => !prev)} className='absolute text-slate-900 cursor-pointer top-1/3 right-3'>
                    {showPassword ? <FaEye/> : <FaEyeSlash/>}
                  </span>
                </div>
                <span className='text-red-500 text-xs'>{error}</span>

                <button
                disabled={btnDisabled}
                className="w-full hover:bg-slate-800 flex items-center gap-4 justify-center bg-slate-900 disabled:bg-slate-600 disabled:cursor-not-allowed text-gray-50 cursor-pointer rounded-md text-center px-4 py-2"
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
                <button disabled={btnDisabled} onClick={handleGoogleLogin} className='text-green-50 px-4 disabled:bg-red-200 disabled:cursor-not-allowed py-2 cursor-pointer flex items-center justify-center w-full hover:bg-red-400 rounded-md mt-3 bg-red-500'>
                    {googleLoading? <ButtonLoading /> : <><FaGoogle size={20} className='mr-4'/> Signin with Google</>}
                </button>
            </div>
        </div>
    </div>
  );
}
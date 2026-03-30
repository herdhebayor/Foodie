'use client'
import React ,{useState}from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useGlobalContext } from '@/context/GlobalContext'
import ButtonLoading from './ButtonLoading'

function LoginPopUp({
    googleSignIn,
    emailSignin,
    disabled,
     error}) {
 
        
        const {email, setEmail, password, setPassword} = useGlobalContext()
  return (
    <div className='w-screen fixed h-screen z-100 bg-black/10 top-0 left-0'>
        <div className='container py-3 flex justify-center items-center'>
            <div className='w-fit space-y-2 text-sm text-slate-900 h-fit px-4 py-3 bg-gray-50'>
               <p>Don't have an account? <a href='/register' className='text-blue-500 underline'> click here to register</a></p> 
                <form onSubmit={(e) => {e.preventDefault(); emailSignin()}}>
                    <div className='my-2'>
                        <input type='text' 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        className='px-4 py-1 w-75  rounded-md border border-gray-200 focus:ring focus:ring-green-500'
                        placeholder='Enter Your Email'/>
                    </div>
                    <div className='my-2'>
                        <input type='password' 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className='px-4 py-1 w-75  rounded-md border border-gray-200 focus:ring focus:ring-green-500'
                        placeholder='Enter your password'/>
                    </div>
                    <button type='submit' disabled={email ===''|| password === '' || disabled} className='px-4 disabled:bg-gray-300 disabled:cursor-not-allowed py-1 bg-slate-900 text-white text-center w-full rounded-xl'>
                        {
                          disabled ? ( <ButtonLoading/>):
                            ('Submit')
                        }
                    </button>
                    <span className='text-sm text-red-500'>{error}</span>
                </form>
                <div className='flex items-center gap-2'>
                    <span className='w-1/2 block border border-gray-300'></span>
                    <p>Or</p>
                    <span className='block w-1/2 border border-gray-300'></span>
                </div>
                <button disabled={disabled}  onClick={()=>googleSignIn()} className='px-4 py-1 bg-red-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-white flex items-center justify-center gap-2 w-full rounded-xl'> <FaGoogle/> Signin with google</button>
            </div>
        </div>
      
    </div>
  )
}

export default LoginPopUp

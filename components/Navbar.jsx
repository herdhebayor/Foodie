'use client'

import React , {useState} from 'react'
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { FaRegUser } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useGlobalContext } from '@/context/GlobalContext';
import { signOut } from 'next-auth/react';
import Loading from './Loading';
import ButtonLoading from './ButtonLoading';
import Link from 'next/link';


function Navbar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
const {data:session, status, update}= useSession()
const pathName = usePathname()
const hideNavBarOnRoute = ['/login', '/register']

  const {cart} = useGlobalContext()
  const profileImg = session?.user?.image
  const handleSignout = async ()=>{
    await signOut({redirect: false})
  }
  if(hideNavBarOnRoute.includes(pathName)){
    return null
  }


  
  return (
    <div className="sticky top-0 flex justify-center w-screen left-0 text-gary-50 z-100 shadow-lg bg-slate-900 py-4 md:pb-6">
      <div className="container flex justify-between md:px-6 px-4">
        {/* //Web Logo */}
        <div className="mr-8 text-gray-50 font-display text-[4vw] md:text-[2vw] font-bold flex justify-center items-center">
          Foodie.
          </div>
        {/* Nav menu */}
        <div className="flex items-center gap-4 md:gap-10 text-sm md:text-lg">
            <span className="text-gray-50 hover:text-green-400"><Link href="/">Home</Link></span>
            <span className="text-gray-50  hover:text-green-400"><Link href="/menu">Menu</Link></span>
            <span className=" text-gray-50  hover:text-green-400"><Link href="/about_us">About Us</Link></span>
            <div className="relative hover:text-green-400 text-gray-50 ">
              <Link href="/cart">
              <IoCartOutline className="md:text-2xl text-xl"/>
              </Link>
              <span className="absolute -top-2 -right-2 p-1 h-4 w-4 flex text-white items-center justify-center text-xs bg-red-700 rounded-full">{cart.length}</span>
            </div>
        </div>
      
        {/* User */}
        <div className="flex items-center gap-8">
          
            {
              status === "loading" ? (
                <ButtonLoading/>
              ) : session ? (
              <div className="flex gap-4 items-center">
                <div className="relative hover:text-green-400">
                  <Link href="/cart">
                  <IoIosNotificationsOutline className="md:text-3xl text-xl"/>
                  </Link>
                  <span className="absolute -top-2 -right-2 p-1  h-4 w-4 flex items-center justify-center text-white text-xs bg-red-700 rounded-full">2</span>
                </div>
                { 
                  <div className="relative">
                    <button className="cursor-pointer" onClick={()=>setShowProfileMenu((prev)=> !prev)}>
                        <img src={profileImg || null} className="md:w-8 w-6 h-6 md:h-8  rounded-full" alt="user"/>
                    </button>
                    
                    <div className={`${showProfileMenu ? "scale-y-100 " : "scale-y-0"} transition-all overflow-hidden origin-top  duration-500 absolute flex flex-col w-fit bg-gray-50 text-sm shadow-xl  h-fit text-gray-800 md:-left-4 -left-10 top-10 rounded-md`}>
                      <button onClick={() => setShowProfileMenu(false)} className="py-1 hover:bg-gray-200  cursor-pointer px-1"><Link href={`/profile/user/${session.user.id}`} className="py-1 w-full border-dotted px-4 border-b border-b-gray-200">Profile</Link></button>
                      <button onClick={() => setShowProfileMenu(false)} className="py-1 hover:bg-gray-200 cursor-pointer px-1"><span className="py-1 w-full border-dotted px-4 border-b border-b-gray-200">Setting</span></button>
                      <button onClick={() => setShowProfileMenu(false)} className="py-1 hover:bg-gray-200 cursor-pointer px-1"><span className="py-1 w-full border-dotted px-4 border-b border-b-gray-200">Orders</span></button>
                      <button  onClick={()=>{handleSignout(), setShowProfileMenu(false)}} className="py-1 hover:bg-gray-200 cursor-pointer px-1"><span className="py-1 w-full border-dotted px-4 border-b border-b-gray-200">Logout</span></button>
                    </div>
                  </div>
                }
              </div> 
            ):(
            //Login button
            <div className="flex items-center md:gap-2">
              <Link href="/login" className="md:px-4 md:py-2 ml-2 p-1 px-2 w-fit md:textlg bg-gray-50 text-slate-900 hover:bg-transparent hover:text-gray-50 hover:border border-gray-50 md:text-sm text-xs rounded-md cursor-pointer "> Login </Link>
              <Link href="/register" className="md:px-4 md:py-2 ml-2 p-1 border-gray-50 text-gray-50 px-2 w-fit md:textlg border md:text-sm text-xs rounded-md cursor-pointer ">Signup </Link>
            </div>
          )
            }
        </div>
      </div>
    </div>
  )
}

export default Navbar

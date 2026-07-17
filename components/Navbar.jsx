'use client'

import React , {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { FaRegUser } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { useGlobalContext } from '@/context/GlobalContext';
import { signOut } from 'next-auth/react';
import ButtonLoading from './ButtonLoading';
import Link from 'next/link';
import Image from 'next/image';
import { MdLogin, MdLogout } from "react-icons/md";
import getUserMessages from '@/app/actions/getUserMessages';
import Toast from '@/components/Toast'



function Navbar() {
const [messages, setMessages] = useState([])
const [loading, setLoading] = useState()
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
const {data:session, status, update}= useSession()
const pathName = usePathname()
const hideNavBarOnRoute = ['/login', '/register','/onboarding','/checkout','/order-success']

  const {cart, setShowToast, setToastMessage,showToast, setToastType} = useGlobalContext()
  const profileImg = session?.user?.image

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const handleSignout = async ()=>{
    await signOut({redirect: false})
  }


  useEffect(() => {
    if(session || session?.user){
          let mounted = true;
      
          async function load() {
            try {
              setLoading(true);
              const res = await getUserMessages();
              if (!mounted) return;
              setMessages(Array.isArray(res) ? res : [])
            } catch (e) {
              setShowToast(true),
              setToastType('info')
              setToastMessage('Fail to load notification')
              if (!mounted) return;
              setMessages([]);
            } finally {
              if (mounted) setLoading(false);
            }
          }
      
          load();
      
          return () => {
            mounted = false;
          };
        }
        }, [session]);
        


 
  if(hideNavBarOnRoute.includes(pathName)){
    return null
  }

  



  
  return (
    <div className="fixed top-0 text-sm flex bg-white backdrop-blur-md text-slate-900 font-semibold justify-center w-full left-0 z-100 py-4 md:pb-6 shadow-lg">
      <div className="w-full mx-auto flex items-center justify-between gap-3 px-4 sm:px-6">
        {/* //Web Logo */}
        <Link href='/' className="font-display text-xl md:text-[2vw] font-bold flex justify-center items-center">
          Foodie.
        </Link>

        {/* Nav menu */}
        <div className="hidden md:flex items-center gap-4 md:gap-10">
            <div className="flex items-center gap-4 md:gap-10">
              <Link className={`${pathName === '/' ? 'text-orange-600 border-b-2 font-bold border-orange-600' : 'hover:text-orange-600'} duration-300 ease-in-out`} href="/">Home</Link>
              <Link className={`${pathName === '/menu' ? 'text-orange-600 border-b-2 font-bold border-orange-600' : 'hover:text-orange-600'} duration-300 ease-in-out`} href="/menu">Menu</Link>
              <Link className={`${pathName === '/about_us' ? 'text-orange-600 border-b-2 font-bold border-orange-600' : 'hover:text-orange-600'} duration-300 ease-in-out`} href="/about_us">About Us</Link>
            </div>
            <div className={`${pathName === '/cart' ? 'text-orange-600 font-bold border-orange-600' : 'hover:text-orange-600'} duration-300 ease-in-out relative`}>
            <Link href="/cart">
              <FiShoppingCart size={20}/>
            </Link>
            {cart.length > 0 && <span className="absolute -top-2 -right-2 p-1 h-4 w-4 flex text-white items-center justify-center text-xs bg-orange-600 rounded-full">{cart.length}</span>}
          </div>
          
          {
            session && (
              <>
                <div className=" relative hover:text-green-400">
                    <Link href="/notification" className={`${pathName === '/notification' ? 'text-orange-600 font-bold border-orange-600' : 'hover:text-orange-600'} duration-300 ease-in-out flex items-center relative`}>
                    <IoIosNotificationsOutline className="md:text-3xl sm:block hidden text-2xl"/>
                    <span className="sm:hidden block">Notification</span>
                    </Link>
                    {messages.filter((m) => m.read === false).length > 0 && <span className="absolute -top-1 -right-1 h-0 w-0 border-3 border-red-500 rounded-full"></span>}
                </div>
                <Link href={`/profile/user/${session.user.id}`} className={`${pathName.includes('profile') ? 'text-orange-600 border-b-2 font-bold border-orange-600' : 'hover:text-orange-600'} duration-300 ease-in-out`}>Profile</Link>
              </>
            )
          }
        </div>
      
        {/* User */}
        <div className="flex  items-center gap-4 sm:gap-6">
          <div className="flex md:hidden items-center gap-4 mr-6">
            <div className={`${pathName === '/cart' ? 'text-orange-600 font-bold border-orange-600' : 'hover:text-orange-600'} duration-300 ease-in-out relative`}>
            <Link href="/cart">
              <FiShoppingCart size={20}/>
            </Link>
            {cart.length > 0 && <span className="absolute -top-2 -right-2 p-1 h-4 w-4 flex text-white items-center justify-center text-xs bg-orange-600 rounded-full">{cart.length}</span>}
            </div>
            <div className=" relative hover:text-green-400">
                    <Link href="/notification" className={`${pathName === '/notification' ? 'text-orange-600 font-bold border-orange-600' : 'hover:text-orange-600'} duration-300 ease-in-out flex items-center relative`}>
                    <IoIosNotificationsOutline className="md:text-3xl text-2xl"/>
                    </Link>
                    {messages.filter((m) => m.read === false).length > 0 && <span className="absolute -top-1 -right-1 h-0 w-0 border-3 border-red-500 rounded-full"></span>}
              </div>
          </div>
            {
              session ? (
              <div className="flex gap-4 items-center">
                { 
                  <div className="relative">
                    <Link href={`/profile/user/${session.user.id}`} className="cursor-pointer">
                        {profileImg ? <Image src={profileImg} width={32} height={32} unoptimized className="md:w-6 md:h-6 w-5 h-5 rounded-full object-cover" alt="user"/> : <div className='bg-indigo-500 text-white rounded-full p-2 md:p-3'> <FaRegUser size={20}/> </div>}
                    </Link>
                    
                  </div>
                }
                  <button onClick={()=> signOut()} className="px-2 py-1.5 sm:px-3 sm:py-2 border border-orange-600 text-orange-600 text-xs sm:text-sm rounded-xl cursor-pointer">
                      <span className='hidden sm:block'>Logout</span> <MdLogout size={18} className='sm:hidden block'/>
                  </button>
              </div> 
            ):(
            //Login button
            <div className=" hidden md:flex items-center gap-2">
              <Link href="/register" className="px-2 py-1.5 sm:px-3 sm:py-2 bg-orange-600 text-zinc-50 hover:text-md duration-150 ease-in border border-orange-500 text-xs sm:text-sm rounded-xl cursor-pointer"> Register </Link>
              <Link href="/login" className="px-2 py-1.5 sm:px-3 sm:py-2 border border-orange-600 text-orange-600 text-xs sm:text-sm rounded-xl cursor-pointer">
                <span className='hidden sm:block'>Signin</span> <MdLogin size={18} className='sm:hidden block'/>
              </Link>
            </div>
            )
            }

            <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden cursor-pointer rounded-lg p-2 text-slate-700 hover:bg-orange-50 outline-0 hover:text-orange-600"
            aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <IoCloseOutline size={22} /> : <IoMenuOutline size={22} />}
            </button>
        </div>
      </div>
      {showToast && <Toast/>}

      {isMobileMenuOpen && (
        <div className="absolute top-full right-5 duration-300 transition-all p-3 ease-in-out  mt-2 w-[50%] rounded-2xl max-w-80 bg-white px-4 py-4 shadow-lg  md:hidden">
          <div className="container mx-auto flex flex-col gap-3 text-sm font-medium text-slate-700">
            <Link href="/" onClick={closeMobileMenu} className={`${pathName === '/' ? 'text-orange-600 font-bold' : 'hover:text-orange-600'} px-2 py-2 rounded-lg`}>Home</Link>
            <Link href="/menu" onClick={closeMobileMenu} className={`${pathName === '/menu' ? 'text-orange-600 font-bold' : 'hover:text-orange-600'} px-2 py-2 rounded-lg`}>Menu</Link>
            <Link href="/about_us" onClick={closeMobileMenu} className={`${pathName === '/about_us' ? 'text-orange-600 font-bold' : 'hover:text-orange-600'} px-2 py-2 rounded-lg`}>About Us</Link>
            {session ? (
              <>
                <Link href="/notification" onClick={closeMobileMenu} className={`${pathName === '/notification' ? 'text-orange-600 font-bold' : 'hover:text-orange-600'} flex px-2 py-2relative rounded-lg`}>
                  Notifications 
                  {messages.filter((m) => m.read === false).length > 0 && (<span className=" w-4 h-4 text-xs text-white flex items-center ml-1 -mt-1 p-1 bg-red-500 rounded-full">{messages.filter((m) => m.read === false).length}</span>) }
                </Link>
                <Link href={`/profile/user/${session.user.id}`} onClick={closeMobileMenu} className="px-2 py-2 rounded-lg hover:text-orange-600">Profile</Link>
              </>
            ) : (
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/register" onClick={closeMobileMenu} className="rounded-xl bg-orange-600 px-4 py-3 text-center text-white">Register</Link>
                <Link href="/login" onClick={closeMobileMenu} className="rounded-xl border border-orange-600 px-3 py-3 text-center text-orange-600">Sign in</Link>
              </div>
            )}
            {session && (
              <button onClick={handleSignout} className="w-full rounded-xl border border-red-500 px-3 py-3 text-center text-red-500 hover:bg-red-100">
                Sign out
              </button>
            )}
          </div>
        </div>
      )}
      
    </div>
  )
}

export default Navbar

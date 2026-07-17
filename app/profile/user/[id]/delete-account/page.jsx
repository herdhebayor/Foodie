'use client'

import React, {useState, useEffect} from 'react'
import deleteUser from '@/app/actions/deleteUser'
import { useSession } from 'next-auth/react'
import Loading from '@/components/Loading'
import Link from 'next/link'

const msgs = [
    {
        id:1,
        bdy: 'Not satisfy with site performance'
    },{
        id:2,
        bdy: 'Delivery arrive late'
    },{
        id:3,
        bdy:'Products and delivery fee are too expensive'
    },{
        id:4,
        bdy:'Products are not up to standard'
    },{
        id:5,
        bdy: 'Others'
    }
]

function page() {
    const [message, setMessgae]= useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [addText, setAddText] = useState('')

    useEffect(()=>{
        const disAbleBtn = ()=>{
            if(message === ' '){
                setBtnDisabled(true)
            }else{
                setBtnDisabled(false)
            }
        }

        disAbleBtn()
    }, [message, btnDisabled])

    const handleDelAccount = (id)=>{
        deleteUser(id)
    }

    const {data:session, status} = useSession()
    console.log(session.user)

    if(!session || !session?.user?.id){
        return <div className =" w-screen h-screen bg-white flex flex-col justify-center items-center">
            <h2 className='text-2xl font-bold text-slate-900'>
                No user found
            </h2>
            <Link href='/login' className="min-w-30 px-4 py-3 text-white mb-5 bg-orange-500 hover:bg-orange-600 shadow-sm w-fit rounded-lg">
                Log in to continue
            </Link>
        </div>
    }

    if(status === 'loading'){
        return <Loading/>
    }

    

    

    
  return (
    <div className='w-screen min-h-screen bg-white px-4 py-16 pt-25 flex flex-col'>
        <div className="container h-full text-slate-900">
            <h2 className='text-2xl font-bold text-center w-full'>Delete Account</h2>
            <p className="text-sm w-full text-center pb-10">You are about to delete your account permanently</p>

            <form onSubmit={()=>handleDelAccount(session.user.id) } className='flex flex-col gap-4'>
                <p>Tell us why you want to delete your account</p>
                {
                    msgs.map(msg =>(
                        <div onClick={()=>setMessgae(prev => prev === msg.bdy ? ' ' : msg.bdy )} key={msg.id} className={`${message === msg.bdy ? 'text-orange-50' : 'text-slate-900 '} p-4 flex items-center gap-4 cursor-pointer w-fit rounded-lg`}>
                            <input type='checkbox'
                            checked={message === msg.bdy}
                            className='accent-orange-500 cursor-pointer w-4 h-4'
                            onClick={()=>setMessgae()}
                            />
                            <p>{msg.bdy}</p>
                        </div>
                    ))
                }
                {
                    message === 'Others' && (
                        <textarea 
                        className='resize-none w-full duration-300 origin-top rounded-lg focus:border-orange-500 h-30 border border-gray-200'
                        maxLength={200} minLength={3}
                        onChange={(e)=> setAddText(e.target.value)}
                        />
                    )
                }

                <button type='submit' className='bg-red-200 cursor-pointer text-red-500 px-4 py-3 w-full rounded-lg shadow-sm'>
                    Delete Account
                </button>
                
            </form>
        </div>
      
    </div>
  )
}

export default page

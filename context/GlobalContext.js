"use client"

import { createContext,useContext, useState,useEffect } from "react"
import { useSession } from "next-auth/react";
//import getUnreadMessageCount from "@/app/action/getUnreadMessageCount";

//Create context
const GlobalContext = createContext();

//Create Provider

export function GlobalProvider({children}){
        //const [unreadCount, setUnreadCount] = useState(0)
        const [email, setEmail]= useState('')
        const [password, setPassword]= useState('')
        const [cart, setCart] = useState([])
        const [loading , setLoading] = useState(false)

        // Hydrate cart from localStorage on mount (client only)
        useEffect(() => {
            setLoading(true)
            const savedCart = localStorage.getItem("foodieCart")
            if (savedCart) {
                setCart(JSON.parse(savedCart))
                setLoading(false)
            }
        }, [])

        // Save cart to localStorage whenever it changes
        useEffect(() => {
            localStorage.setItem("foodieCart", JSON.stringify(cart))
        }, [cart])

        


    // useEffect(
    //     ()=>{
    //         if(session && session.user){
    //             getUnreadMessageCount().then((res)=>{
    //                 if(res.count) setUnreadCount(res.count)
    //             })
    //         }
    //     },[session]
    // )

    return(
        <GlobalContext.Provider
        value={{
            cart,
            setCart,
            email,
            setEmail,
            password,
            setPassword,
            loading,
            setLoading,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export function useGlobalContext(){
    return useContext(GlobalContext)
}
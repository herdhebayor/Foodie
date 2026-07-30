"use client"

import { createContext,useContext, useState,useEffect } from "react"
import { useSession } from "next-auth/react";

//Create context
const GlobalContext = createContext();

//Create Provider

export function GlobalProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartLoading, setCartLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [logingin, setLogingin] = useState(false);

  const [cart, setCart] = useState(() => {
    setCartLoading(true);
    if (typeof window === "undefined") return [];

    try {
      const savedCart = window.localStorage.getItem("foodieCart");
      setCartLoading(false);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      setCartLoading(false);
      return [];
    }
  });
  const [loading, setLoading] = useState(false);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("foodieCart", JSON.stringify(cart));
    }
  }, [cart]);

  //Toast
  useEffect(() => {
    let timer;
    if (showToast) {
      timer = setTimeout(() => {
        (setShowToast(false), setToastMessage(""), setToastType(""));
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [showToast, toastMessage, toastType]);

  //Logiginin
  useEffect(() => {
    let timer;
    if (logingin) {
      timer = setTimeout(() => {
        (setLogingin(false));
      }, 2000);
    }
    return () => clearInterval(timer);
  }, [logingin]);

  return (
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
        selectedCategory,
        setSelectedCategory,
        cartLoading,
        setShowToast,
        setToastMessage,
        setToastType,
        toastMessage,
        toastType,
        showToast,
        logingin,
        setLogingin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext(){
    return useContext(GlobalContext)
}
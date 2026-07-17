'use client'
import {useEffect} from 'react'
import Hero from './Hero'
import Features from './Features'
import ServicePage from './ServicePage'
import Bookings from './Bookings'
import Testimonial from './Testimonial'
import NewsLetter from './NewsLetter'
import { useGlobalContext } from '@/context/GlobalContext'

function HomePage() {
  const {setLogingin} = useGlobalContext()
  useEffect(
    ()=>{setLogingin(false)},[]
  );
  
  return (
    <div className='w-full min-h-screen pt-10 overflow-x-hidden'>
      <Hero/>
      <Features/>
      <Bookings/>
      <Testimonial/>
      <ServicePage/>
      <NewsLetter/>
    </div>
  )
}

export default HomePage

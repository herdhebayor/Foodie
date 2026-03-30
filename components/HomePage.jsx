import React from 'react'
import Hero from './Hero'
import Features from './Features'
import ServicePage from './ServicePage'
import Bookings from './Bookings'
import Testimonial from './Testimonial'
import NewsLetter from './NewsLetter'

function HomePage() {
  
  return (
    <div className='w-screen min-hscreen'>
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

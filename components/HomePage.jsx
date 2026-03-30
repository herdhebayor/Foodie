import React from 'react'
import Hero from './Hero'
import Features from './Features'
import ServicePage from './ServicePage'

function HomePage() {
  return (
    <div className='w-screen min-hscreen'>
      <Hero/>
      <Features/>
      <ServicePage/>
    </div>
  )
}

export default HomePage

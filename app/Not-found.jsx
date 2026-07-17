import React from 'react'
import Link from 'next/link'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section className='bg-white flex justify-center items-center w-screen min-h-screen grow'>
        <div className='container flex justify-center items-center'>
            <div className='bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0'>
                <div className='flex justify-center'>
                    <FaExclamationTriangle className='fa-5x text-8xl text-yellow-400'/>
                </div>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold mt-4 mb-2'>Page Not Found</h1>
                    <p className='text-gray-500 text-xl mb-10'>
                        The page you are looking for does not exist
                    </p>
                    <Link href='/'
                    className='bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-6 rounded'>
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default NotFoundPage
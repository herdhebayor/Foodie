/** @format */

'use client'

import Link from 'next/link'
import { FaExclamationCircle } from 'react-icons/fa'

const ErrorPage = ({ error }) => {
	return (
		<section className='bg-white min-h-screen pt-25 grow'>
			<div className='container m-auto py-24'>
				<div className='bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0'>
					<div className='flex justify-center'>
						<FaExclamationCircle className='fa-5x text-8xl text-red-600' />
					</div>
					<div className='text-center'>
						<h1 className='text-3xl font-bold mt-4 mb-2'>
							Something went wrong
						</h1>
						<p className='text-slate-500 text-xl mb-10'>{error.toString()}</p>
						{error === "You've been logged out, log in to continue" 
						?<Link
							href='/login'
							className='bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-6 rounded-lg'
						>Log in</Link>
						:<Link
							href='/'
							className='bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-6 rounded-lg'
						>Go Home</Link>
						}
					</div>
				</div>
			</div>
            <div className='grow'></div>
		</section>
	)
}

export default ErrorPage

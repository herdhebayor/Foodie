/** @format */

'use client'

import Link from 'next/link'
import { FaExclamationCircle } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const ErrorPage = ({ error }) => {
	const Router = useRouter()
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
						
						:<div className='flex justify-center gap-4'>
						<button
							onClick={() => Router.push('/')}
							className='bg-orange-500 hover:bg-orange-600 cursor-pointer outline-0 text-white font-bold py-3 px-6 rounded-xl'
						>Go Home</button>
						<button
							onClick={() => Router.back()}
							className='bg-gray-700 cursor-pointer hover:bg-gray-800 outline-0 text-white font-bold py-3 px-6 rounded-xl'
						>Go Back</button>
						</div>
						
					</div>
				</div>
			</div>
            <div className='grow'></div>
		</section>
	)
}

export default ErrorPage

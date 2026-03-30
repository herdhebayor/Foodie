/** @format */

'use client'
import { SessionProvider } from 'next-auth/react'

const AuthProvider = ({ children, session }) => {
	return (
		<SessionProvider 
		session={session}
			refetchInterval={60}
			refetchOnWindowFocus={false}
		>
			{children}
		</SessionProvider>
	)
}

export default AuthProvider

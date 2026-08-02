'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Loading from '@/components/Loading'

/**
 * Client-side guard used on protected pages (e.g. /profile).
 * - Not logged in       -> redirect to login
 * - profile not finished -> redirect to onboarding
 * - otherwise            -> render children
 */
export default function ProfileGuard({ children }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return

    if (!session?.user) {
      router.replace('/login?callbackUrl=/profile')
      return
    }

    if (!session.user.profileCompleted) {
      router.replace('/onboarding')
    }
  }, [status, session, router])

  if (status === 'loading') {
    return <Loading/>
  }

  return <>{children}</>
}


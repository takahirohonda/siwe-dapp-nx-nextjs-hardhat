'use client'

import { useSession } from 'next-auth/react'
import { SignInButton } from './SignInButton'
import { SignOutButton } from './SignOutButton'

export const AuthButtonGroup = () => {
  const { data: session, status } = useSession()
  console.log(session)
  console.log(status)
  return (
    <div>
      {status === 'authenticated' ? <SignOutButton /> : <SignInButton />}
    </div>
  )
}

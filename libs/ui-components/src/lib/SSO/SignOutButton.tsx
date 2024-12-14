'use client'

import { GradientButton } from '../Buttons/GradientButton'
import { signOut } from 'next-auth/react'
import { useCallback } from 'react'
import { useDisconnect } from 'wagmi'
// import { revalidate } from '../server-actions/revalidate'

export const SignOutButton = () => {
  const { disconnect } = useDisconnect()

  const singOutHandler = useCallback(() => {
    signOut()
    disconnect()
  }, [disconnect])
  return (
    <GradientButton variant="primary" onClick={singOutHandler}>
      Sign Out
    </GradientButton>
  )
}

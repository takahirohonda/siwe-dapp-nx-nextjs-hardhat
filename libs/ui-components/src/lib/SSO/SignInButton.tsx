'use client'

import { useDisclosure } from '@nextui-org/react'
import { GradientButton } from '../Buttons/GradientButton'
import { SignInModal } from './SignInModal/SignInModal'
import { useSession } from 'next-auth/react'

export const SignInButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { data: session, status } = useSession()
  console.log(session)
  console.log(status)
  return (
    <>
      <GradientButton variant="primary" onClick={onOpen}>
        Sign In
      </GradientButton>
      {status !== 'authenticated' && (
        <SignInModal isOpen={isOpen} onOpenChange={onOpenChange} />
      )}
    </>
  )
}

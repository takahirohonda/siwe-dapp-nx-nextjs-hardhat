'use client'
import { useDisclosure } from '@nextui-org/react'
import { GradientButton } from 'ui-components'

export const UserProfileUpdate = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <div>
      <GradientButton variant="secondary" onClick={onOpen}>
        Sign In
      </GradientButton>
    </div>
  )
}

'use client'
import { useDisclosure } from '@nextui-org/react'
import { GradientButton } from 'ui-components'
import { UpdateModal } from './UserProfileUpdate/UpdateModal'

export const UserProfileUpdate = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <div>
      <GradientButton variant="secondary" onClick={onOpen}>
        Update your profile
      </GradientButton>
      <UpdateModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}

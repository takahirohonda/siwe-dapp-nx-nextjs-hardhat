'use client'

import { Button, useDisclosure } from '@nextui-org/react'
import { UserProfileUpdateModal } from './UserProfileUpdate/UserProfileUpdateModal'

export const UserProfileUpdate = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <div>
      <Button
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        radius="full"
        onPress={onOpen}
      >
        Edit profile
      </Button>
      <UserProfileUpdateModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}

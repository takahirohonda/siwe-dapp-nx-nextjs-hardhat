'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/modal'
import { Button } from '@nextui-org/button'
import { UserProfileUpdateForm } from './UserProfileUpdateForm'

export interface ConnectToWalletModalProps {
  isOpen: boolean
  onOpenChange: () => void
}
export const UserProfileUpdateModal = ({
  isOpen,
  onOpenChange,
}: ConnectToWalletModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-[16px]">
              Update your profile
            </ModalHeader>
            <ModalBody>
              <UserProfileUpdateForm closeModal={onClose} />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

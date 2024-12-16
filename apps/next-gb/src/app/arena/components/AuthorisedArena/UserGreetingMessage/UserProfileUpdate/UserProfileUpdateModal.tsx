'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/modal'
import { Button } from '@nextui-org/button'
import { Input, Textarea } from '@nextui-org/react'

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
              <form>
                <Input
                  label="Player Name"
                  type="playerName"
                  name="playerName"
                />
                <Textarea
                  label="Bio"
                  name="bio"
                  placeholder="Enter your description"
                />
                <Button color="primary" variant="light" type="button">
                  Update
                </Button>
              </form>
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

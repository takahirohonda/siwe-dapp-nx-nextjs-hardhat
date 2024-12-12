'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react'

import { ConnectedNetwork } from './ConnectedNetwork'
import { ConnectedAccount } from './ConnectedAccount'

export interface ConnectToWalletModalProps {
  isOpen: boolean
  onOpenChange: () => void
}
export const ConnectedAccountInfoModal = ({
  isOpen,
  onOpenChange,
}: ConnectToWalletModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-[16px]">
              Detected Wallets
            </ModalHeader>
            <ModalBody>
              <p>Connected Account Info</p>
              <ConnectedAccount />
              <p>Connected Network Info</p>
              <ConnectedNetwork />
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

'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/modal'
import { Button } from '@nextui-org/button'
import { useAccount } from 'wagmi'
import { SignInWithWalletContent } from './SignInWithWalletContent'
import { ConnectToWalletContent } from './ConnectToWalletContent'

export interface ConnectToWalletModalProps {
  isOpen: boolean
  onOpenChange: () => void
}
export const SignInModal = ({
  isOpen,
  onOpenChange,
}: ConnectToWalletModalProps) => {
  const { isConnected } = useAccount()
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="bg-slate-800">
        {(onClose) => (
          <>
            {isConnected ? (
              <SignInWithWalletContent />
            ) : (
              <ConnectToWalletContent />
            )}
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

'use client'

import { useDisclosure } from '@nextui-org/react'
import { GradientButton } from '../../Buttons/GradientButton'
import { ConnectToWalletModal } from '../ConnectToWalletModal/ConnectToWalletModal'

export const ConnectToWalletButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <GradientButton variant="primary" onClick={onOpen}>
        Connect To Wallet
      </GradientButton>
      <ConnectToWalletModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}

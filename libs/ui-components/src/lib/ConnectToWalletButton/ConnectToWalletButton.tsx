'use client'

import { useDisclosure } from '@nextui-org/react'
import { GradientButton } from './GradientButton'
import { ConnectToWalletModal } from '../Modals/ConnectToWalletModal/ConnectToWalletModal'

export const ConnectToWalletButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <GradientButton onClick={onOpen}>Connect To Wallet</GradientButton>
      <ConnectToWalletModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}

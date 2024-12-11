import { useDisclosure } from '@nextui-org/react'
import { GradientButton } from './GradientButton'
import { ConnectToWalletModal } from 'utils-wagmi'
export const ConnectToWalletButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <GradientButton>Connect To Wallet</GradientButton>
      <ConnectToWalletModal />
    </>
  )
}

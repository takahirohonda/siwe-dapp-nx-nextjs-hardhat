import { ModalBody, ModalHeader } from '@nextui-org/react'
import { WalletOptions } from '../ConnectToWalletModal/WalletOptions'

export const ConnectToWalletContent = () => {
  return (
    <>
      <ModalHeader className="flex flex-col gap-[16px] text-white">
        Detected Wallets
      </ModalHeader>
      <ModalBody>
        <p>Choose a wallet to Sign In</p>
        <WalletOptions />
      </ModalBody>
    </>
  )
}

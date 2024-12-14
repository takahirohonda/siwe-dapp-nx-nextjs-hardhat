'use client'

import { Button, useDisclosure } from '@nextui-org/react'
import { GradientButton } from '../../Buttons/GradientButton'
import { useDisconnect } from 'wagmi'
import { ConnectedAccountInfoModal } from '../ConnectedAccountInfoModal/ConnectedAccountInfoModal'

export const ConnectedButtonGroup = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { disconnect } = useDisconnect()
  return (
    <div className="flex gap-[16px]">
      <Button color="warning" variant="light" onPress={onOpen}>
        Connected Account Info
      </Button>
      <GradientButton variant="secondary" onClick={disconnect}>
        No, I want to disconnect...
      </GradientButton>
      <ConnectedAccountInfoModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}

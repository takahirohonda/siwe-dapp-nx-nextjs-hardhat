'use client'

import { useAccount } from 'wagmi'
import { ConnectedButtonGroup } from './ConnectedButtonGroup'
import { ConnectToWalletButton } from './ConnectToWalletButton'
import { useEffect, useState } from 'react'

export const ConnectToWallet = () => {
  const { isConnected } = useAccount()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    // Prevent rendering the component on the server
    return null
  }

  return (
    <div>
      {!isConnected ? <ConnectToWalletButton /> : <ConnectedButtonGroup />}
    </div>
  )
}

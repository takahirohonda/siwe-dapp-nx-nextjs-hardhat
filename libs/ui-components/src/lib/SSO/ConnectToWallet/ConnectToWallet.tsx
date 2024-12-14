'use client'

import { useAccount, useSignMessage } from 'wagmi'
import { ConnectedButtonGroup } from './ConnectedButtonGroup'
import { ConnectToWalletButton } from './ConnectToWalletButton'
import { useCallback, useEffect, useState } from 'react'
import { getAccount } from '@wagmi/core'
import { signIn, useSession } from 'next-auth/react'
import { SiweMessage } from 'siwe'
import { config } from 'utils-wagmi'
export const ConnectToWallet = () => {
  const { signMessageAsync } = useSignMessage()
  const { chainId } = getAccount(config)
  const { address, isConnected } = useAccount()

  const [isClient, setIsClient] = useState(false)

  const { data: session } = useSession()

  const handleLogin = useCallback(async () => {
    try {
      const res = await fetch('/api/nonce')
      console.log(`checking res: ${JSON.stringify(res.json())}`)
      const nonce = await res.json()
      console.log(`checking nonce: ${nonce}`)

      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        chainId,
        nonce,
      })

      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      })

      await signIn('credentials', {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl: '/protected',
      })
    } catch (error) {
      // window.alert(error)
      console.log(error)
    }
  }, [address, chainId, signMessageAsync])

  useEffect(() => {
    if (isConnected && !session) {
      console.log('calling handle login...')
      handleLogin()
    }
  }, [handleLogin, isConnected, session])

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

import { useAccount, useSignMessage } from 'wagmi'
import { useCallback } from 'react'
import { getAccount } from '@wagmi/core'
import { signIn } from 'next-auth/react'
import { SiweMessage } from 'siwe'
import { config } from 'utils-wagmi'

export const useHandleSignIn = () => {
  const { signMessageAsync } = useSignMessage()
  const { chainId } = getAccount(config)
  const { address } = useAccount()

  const handleLogin = useCallback(async () => {
    try {
      const res = await fetch('/api/nonce')
      const nonce = await res.text()
      console.log(`checking nonce: ${nonce}`)

      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: 'Sign in with Ethereum to the app.',
        version: '1',
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

  return { handleLogin }
}

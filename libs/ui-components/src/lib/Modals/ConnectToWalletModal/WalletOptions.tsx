'use client'

import { Button } from '@nextui-org/button'
import { useEffect, useState } from 'react'
import { useConnect } from 'wagmi'

export const WalletOptions = () => {
  const { connectors, connect } = useConnect()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    // Prevent rendering modal on the server
    return null
  }
  return (
    <div className="flex flex-col gap-[24px]">
      {connectors.map((connector) => (
        <Button
          key={connector.uid}
          color="success"
          variant="bordered"
          onPress={() => connect({ connector })}
        >
          {connector.name}
        </Button>
      ))}
    </div>
  )
}

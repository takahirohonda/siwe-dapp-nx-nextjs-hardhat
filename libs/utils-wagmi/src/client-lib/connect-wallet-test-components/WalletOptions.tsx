'use client'

import { Button } from '@nextui-org/react'
import { useConnect } from 'wagmi'

export const WalletOptions = () => {
  const { connectors, connect } = useConnect()

  return (
    <div className="flex flex-col gap-[24px]">
      {connectors.map((connector) => (
        <Button
          key={connector.uid}
          color="success"
          variant="bordered"
          onClick={() => connect({ connector })}
        >
          {connector.name}
        </Button>
      ))}
    </div>
  )
}

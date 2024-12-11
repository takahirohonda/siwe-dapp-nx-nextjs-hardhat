'use client'

import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { ConnectedNetwork } from './ConnectedNetwork'
import { Button } from '@nextui-org/react'

export const ConnectedAccount = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div className="flex flex-col gap-[24px]">
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && (
        <div className="flex flex-col gap-[16px]">
          <p>{ensName ? `${ensName} (${address})` : address}</p>
          <ConnectedNetwork />
        </div>
      )}
      <Button color="warning" variant="bordered" onPress={() => disconnect()}>
        Disconnect
      </Button>
    </div>
  )
}

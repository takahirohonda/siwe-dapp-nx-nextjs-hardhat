'use client'

import { getAccount } from '@wagmi/core'
import { config } from 'utils-wagmi'

export const ConnectedNetwork = () => {
  const { chainId } = getAccount(config)
  const chain = config.chains.find((chain) => chain.id === chainId)
  return (
    <div className="flex flex-col">
      <p>Connected to: {chain?.name}</p>
      {/* <p>{JSON.stringify(chain)}</p> */}
    </div>
  )
}

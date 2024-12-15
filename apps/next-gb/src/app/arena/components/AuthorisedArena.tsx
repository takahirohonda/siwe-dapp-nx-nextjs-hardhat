'use client'

import { useAccount, useBalance } from 'wagmi'
import { ConnectedNetwork } from 'ui-components'
import { getAccount } from 'wagmi/actions'
import { config } from 'utils-wagmi'
import { UserInfo } from './AuthorisedArena/UserInfo'

export const AuthorisedArena = () => {
  const { address } = useAccount()
  const { chainId } = getAccount(config)
  const result = useBalance({ address, chainId })

  return (
    <div className="flex flex-col gap-[24px]">
      <h2 className="yellow-red-gradient text-[36px] md:text-[36px]">
        Here we come....
      </h2>
      {address && (
        <div className="flex flex-col gap-[16px]">
          <p className="yellow-red-gradient text-[32px] md:text-[36px]">
            Address: {address}
          </p>
          <p className="yellow-red-gradient text-[32px] md:text-[36px]">
            {/* Todo: format the big int correctly by not using deprecated formatted property */}
            Your remaining balance is: {result?.data?.formatted}{' '}
            {result?.data?.symbol}
          </p>
          <ConnectedNetwork />
        </div>
      )}
      <UserInfo />
    </div>
  )
}

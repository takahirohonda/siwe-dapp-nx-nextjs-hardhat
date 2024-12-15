'use client'

import { useAccount, useBalance } from 'wagmi'
import { ConnectedNetwork } from 'ui-components'
import { getAccount } from 'wagmi/actions'
import { config } from 'utils-wagmi'
import { UserInfo } from './AuthorisedArena/for-testing/UserInfo'
import { UserGreetingMessage } from './AuthorisedArena/UserGreetingMessage'
import { PlayGameButton } from './AuthorisedArena/PlayGameButton'

export const AuthorisedArena = () => {
  const { address } = useAccount()
  const { chainId } = getAccount(config)
  const result = useBalance({ address, chainId })

  return (
    <div className="flex flex-col gap-[24px]">
      {/* <UserGreetingMessage /> */}
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
      {/* <PlayGameButton /> */}
    </div>
  )
}

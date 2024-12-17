'use client'

import { useAccount, useBalance } from 'wagmi'
import { ConnectedNetwork } from 'ui-components'
import { getAccount } from 'wagmi/actions'
import { config } from 'utils-wagmi'
import { UserGreetingMessage } from './AuthorisedArena/UserGreetingMessage'
import { PlayGameButton } from './AuthorisedArena/PlayGameButton'
import { ResetGameButton } from './AuthorisedArena/ResetGameButton'
import { DeleteUserButton } from './AuthorisedArena/DeleteUserButton'
import { PlayerAssets } from './AuthorisedArena/PlayerAssets'

export const AuthorisedArena = () => {
  const { address } = useAccount()
  const { chainId } = getAccount(config)
  const result = useBalance({ address, chainId })

  return (
    <div className="flex flex-col gap-[24px]">
      <UserGreetingMessage />
      {address && (
        <div className="flex flex-col gap-[16px]">
          <p className="text-[18px] md:text-[18px]">Address: {address}</p>
          <p className="text-[18px] md:text-[18px]">
            {/* Todo: format the big int correctly by not using deprecated formatted property */}
            Your remaining balance is: {result?.data?.formatted}{' '}
            {result?.data?.symbol}
          </p>
          <ConnectedNetwork />
        </div>
      )}
      <PlayGameButton />
      <div className="flex gap-[8px]">
        <DeleteUserButton />
        <ResetGameButton />
      </div>
      <div>
        <h3 className="text-[18px] md:text-[18px]">Player Asset: </h3>
        <PlayerAssets />
      </div>
    </div>
  )
}

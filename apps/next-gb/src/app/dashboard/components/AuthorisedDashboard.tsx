'use client'

import { useAccount } from 'wagmi'
import { ConnectedNetwork } from 'ui-components'

export const AuthorisedDashboard = () => {
  const { address } = useAccount()

  return (
    <div className="flex flex-col gap-[24px]">
      {address && (
        <div className="flex flex-col gap-[16px]">
          <p>Address: {address}</p>
          <ConnectedNetwork />
        </div>
      )}
    </div>
  )
}

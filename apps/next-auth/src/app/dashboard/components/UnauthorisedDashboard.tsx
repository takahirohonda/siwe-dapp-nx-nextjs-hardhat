'use client'

import { SignInButton } from 'ui-components'

export const UnauthorisedDashboard = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <h2 className="yellow-red-gradient text-[24px] md:text-[36px]">
        Sign in to see your stats❗️
      </h2>
      <div>
        <SignInButton />
      </div>
    </div>
  )
}

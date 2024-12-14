'use client'

import { SignInButton } from 'ui-components'

export const UnauthorisedArena = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <h2 className="yellow-red-gradient text-[24px] md:text-[36px]">
        For all the crypto gladiators... 🪖
      </h2>
      <p className="yellow-red-gradient text-[24px] md:text-[36px]">
        Sign in for the epic battle! 🛡️
      </p>
      <div className="w-[500px]">
        <SignInButton />
      </div>
    </div>
  )
}

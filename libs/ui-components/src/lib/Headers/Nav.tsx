import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { ConnectToWalletButton } from '../ConnectToWalletButton/ConnectToWalletButton'

export const PageLinks = () => (
  <>
    <Link className="hover:text-link-blue" href="/">
      Home
    </Link>
    <Link className="hover:text-link-blue" href="/">
      Pricing
    </Link>
  </>
)

export const Nav = () => {
  return (
    <>
      <div className="flex gap-[16px] grow">
        <PageLinks />
      </div>
      <div className="flex gap-[24px] items-center">
        <ConnectToWalletButton />
      </div>
    </>
  )
}

import Link from 'next/link'
import { ConnectToWallet } from '../SSO/ConnectToWallet/ConnectToWallet'
import { AuthButtonGroup } from '../SSO/AuthButtonGroup'

export const PageLinks = () => (
  <>
    <Link className="hover:text-link-blue" href="/">
      Home
    </Link>
    <Link className="hover:text-link-blue" href="/arena">
      Game Arena
    </Link>
    <Link className="hover:text-link-blue" href="/dashboard">
      Dashboard
    </Link>
    <Link className="hover:text-link-blue" href="/about">
      About
    </Link>
    <Link className="hover:text-link-blue" href="/no-auth-test">
      No Auth Test
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
        <AuthButtonGroup />
      </div>
    </>
  )
}

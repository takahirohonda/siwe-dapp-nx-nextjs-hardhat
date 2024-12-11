import Link from 'next/link'
import { Button } from '@nextui-org/react'

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
        <Button color="success" variant="solid">
          Connect to Wallet
        </Button>
      </div>
    </>
  )
}

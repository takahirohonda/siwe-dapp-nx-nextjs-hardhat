import { Button } from '@nextui-org/react'
import { ConnectedWallet } from 'utils-wagmi'

const HomePage = () => {
  return (
    <div>
      <div>Hello world</div>
      <ConnectedWallet />
    </div>
  )
}

export default HomePage

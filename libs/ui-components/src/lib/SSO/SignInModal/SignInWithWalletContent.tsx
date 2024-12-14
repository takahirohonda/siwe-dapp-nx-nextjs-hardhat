import { ModalBody, ModalHeader } from '@nextui-org/react'
import { ConnectedAccount } from '../ConnectedAccountInfoModal/ConnectedAccount'
import { GradientButton } from '../../Buttons/GradientButton'
import { useHandleSignIn } from './useHandleSignIn'

export const SignInWithWalletContent = () => {
  const { handleLogin } = useHandleSignIn()

  return (
    <>
      <ModalHeader className="flex flex-col gap-[16px] text-white">
        Sign In with your ethereum account
      </ModalHeader>
      <ModalBody>
        <p>Your Account Info</p>
        <ConnectedAccount />
        <p>Are you happy to sign in with this account?</p>
        <GradientButton variant="primary" onClick={handleLogin}>
          Yep, sign me in!
        </GradientButton>
      </ModalBody>
    </>
  )
}

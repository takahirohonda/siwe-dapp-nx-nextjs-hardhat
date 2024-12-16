import { Button } from '@nextui-org/react'
import { signOut } from 'next-auth/react'
import { useCallback } from 'react'
import { useDisconnect } from 'wagmi'

export const DeleteUserButton = () => {
  const { disconnect } = useDisconnect()
  const onClick = useCallback(async () => {
    await fetch('/api/user-profile', {
      method: 'DELETE',
    })
    signOut()
    disconnect()
  }, [disconnect])

  return (
    <Button onPress={onClick} color="danger">
      Delete User
    </Button>
  )
}

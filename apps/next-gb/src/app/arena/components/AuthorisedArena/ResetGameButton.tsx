import { Button } from '@nextui-org/react'

import { useCallback } from 'react'

export const ResetGameButton = () => {
  const onClick = useCallback(async () => {
    await fetch('/api/game-records', {
      method: 'DELETE',
    })
  }, [])

  return (
    <Button onPress={onClick} color="warning" variant="bordered">
      Reset Game
    </Button>
  )
}

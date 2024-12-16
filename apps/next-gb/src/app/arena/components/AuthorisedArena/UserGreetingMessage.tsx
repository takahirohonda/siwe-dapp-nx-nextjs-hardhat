import { useEffect, useState } from 'react'
import { UserProfileUpdate } from './UserGreetingMessage/UserProfileUpdate'

export const UserGreetingMessage = () => {
  const [playerName, setPlayerName] = useState('')
  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetch('/api/user-profile')
      const user = await data.json()
      setPlayerName(user[0]?.playerName)
    }
    fetchUser()
  }, [])
  return (
    <div className="flex gap-[20px]">
      <h2 className="yellow-red-gradient text-[36px] md:text-[36px]">
        Hello, {playerName || 'Player 1'}
      </h2>
      <UserProfileUpdate />
    </div>
  )
}

import { useEffect, useState } from 'react'
import { UserProfileUpdate } from './UserGreetingMessage/UserProfileUpdate'

export const UserGreetingMessage = () => {
  const [playerName, setPlayerName] = useState('')
  const [bio, setBio] = useState('')
  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetch('/api/user-profile')
      const user = await data.json()
      setPlayerName(user[0]?.users.playerName)
      setBio(user[0]?.user_profile.bio)
    }
    fetchUser()
  }, [])
  return (
    <>
      <div className="flex gap-[40px] items-center">
        <h2 className="yellow-red-gradient text-[42px] md:text-[42px]">
          Hello, {playerName || 'Player 1'}
        </h2>
        <UserProfileUpdate />
      </div>
      <h3 className="yellow-light-blue-gradient text-[36px] md:text-[36px]">
        Your Bio:
      </h3>
      <p className="red-purple-gradient  text-[24px] md:text-[24px]">
        {bio || 'No bio available'}
      </p>
    </>
  )
}

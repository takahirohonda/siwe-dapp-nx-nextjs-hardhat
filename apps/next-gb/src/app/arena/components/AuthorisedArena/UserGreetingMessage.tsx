import { getAuthenticatedUserId } from '../../../../auth/auth.utils'
import { getUserById } from '../../../../drizzle/useOperations'
import { UserProfileUpdate } from './UserGreetingMessage/UserProfileUpdate'

export const UserGreetingMessage = async () => {
  const userId = await getAuthenticatedUserId()
  const user = await getUserById(userId)
  return (
    <div className="flex gap-[20px]">
      <h2 className="yellow-red-gradient text-[36px] md:text-[36px]">
        Hello, {user[0].playerName || 'Player 1'}
      </h2>
      <UserProfileUpdate />
    </div>
  )
}

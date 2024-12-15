import { auth } from '../../../../auth/auth'
import { getUserById } from '../../../../drizzle/useOperations'

export const UserGreetingMessage = async () => {
  const session = await auth()
  const userId = session?.user?.id ?? ''
  const user = await getUserById(userId)
  return (
    <div className="flex gap-[20px]">
      <h2 className="yellow-red-gradient text-[36px] md:text-[36px]">
        Hello, {user[0].playerName || 'Player 1'}
      </h2>
    </div>
  )
}

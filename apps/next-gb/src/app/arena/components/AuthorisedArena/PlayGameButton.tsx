import { getAuthenticatedUserId } from '../../../../auth/auth.utils'
import { insertGameRecord } from '../../../../drizzle/gameRecordsOperations'
import clsx from 'clsx'

export const PlayGameButton = async () => {
  const handleOnClick = async () => {
    const userId = await getAuthenticatedUserId()
    await insertGameRecord({
      userId,
      score: 12,
      win: 1,
      battleName: 'Epic Battle 1',
    })
    await insertGameRecord({
      userId,
      score: 8,
      win: 1,
      battleName: 'Epic Battle 2',
    })
    await insertGameRecord({
      userId,
      score: 9,
      win: 1,
      battleName: 'Epic Battle 3',
    })
  }
  return (
    <button
      className={clsx(
        `
        text-white
        text-center
        rounded-full
        hover:brightness-90
        red-purple-button-gradient
        py-[16px] px-[38px]
        `
      )}
      onClick={handleOnClick}
    >
      Play Game
    </button>
  )
}

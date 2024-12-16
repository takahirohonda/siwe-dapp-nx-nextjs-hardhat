import clsx from 'clsx'

export const PlayGameButton = () => {
  const handleOnClick = async () => {
    await fetch('/api/game-records', {
      method: 'POST',
      body: JSON.stringify({
        score: 10,
        win: 1,
        battleName: 'Epic Battle 1',
      }),
    })

    await fetch('/api/game-records', {
      method: 'POST',
      body: JSON.stringify({
        score: 8,
        win: 1,
        battleName: 'Epic Battle 2',
      }),
    })

    await fetch('/api/game-records', {
      method: 'POST',
      body: JSON.stringify({
        score: 15,
        win: 1,
        battleName: 'Epic Battle 3',
      }),
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
        primary-button-gradient
        py-[16px]
        px-[16px]
        w-[200px]
        `
      )}
      onClick={handleOnClick}
    >
      Play Game
    </button>
  )
}

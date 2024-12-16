'use client'

import { useEffect, useState } from 'react'
import { SelectGameRecords } from '../../../../drizzle/schema'

export const GameRecords = () => {
  const [gameRecords, setGameRecords] = useState<SelectGameRecords[]>([])
  useEffect(() => {
    const getGameRecords = async () => {
      const records = await fetch('/api/game-records')
      const data = await records.json()
      setGameRecords(data)
    }
    getGameRecords()
  }, [])

  return (
    <>
      <h2 className="yellow-red-gradient text-[32px] md:text-[36px]">
        Your Stats
      </h2>
      <p>{JSON.stringify(gameRecords)}</p>
    </>
  )
}

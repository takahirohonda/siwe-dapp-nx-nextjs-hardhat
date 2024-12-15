import { db } from './db'
import { eq } from 'drizzle-orm'
import { type InsertGameRecords, gameRecords } from './schema'

export const getGameRecordByUserId = async (userId: string) => {
  return await db
    .select()
    .from(gameRecords)
    .where(eq(gameRecords.userId, userId))
}

export const insertGameRecord = async (data: InsertGameRecords) => {
  const userId = data?.userId
  if (!userId) {
    throw new Error('User id is required')
  }
  await db.insert(gameRecords).values(data)
}

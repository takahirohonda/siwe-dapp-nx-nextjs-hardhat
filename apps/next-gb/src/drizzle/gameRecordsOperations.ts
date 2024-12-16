import { db } from './db'
import { eq } from 'drizzle-orm'
import { type InsertGameRecords, type SelectUser, gameRecords } from './schema'

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
  return await db.insert(gameRecords).values(data)
}

export const deleteGameRecordsByUserId = async (userId: SelectUser['id']) => {
  await db.delete(gameRecords).where(eq(gameRecords.userId, userId))
}

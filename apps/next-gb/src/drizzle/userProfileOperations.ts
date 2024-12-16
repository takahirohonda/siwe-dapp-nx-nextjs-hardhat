import { db } from './db'
import { eq } from 'drizzle-orm'
import { type InsertUserProfile, userProfile, users } from './schema'

export const getUserProfileById = async (userId: string) => {
  return await db
    .select()
    .from(userProfile)
    .innerJoin(users, eq(users.id, userProfile.userId))
    .where(eq(userProfile.userId, userId))
}

export const upsertUserProfile = async (data: InsertUserProfile) => {
  const userId = data?.userId
  if (!userId) {
    throw new Error('User id is required')
  }
  await db.insert(userProfile).values(data).onConflictDoUpdate({
    target: users.id,
    set: data,
  })
}

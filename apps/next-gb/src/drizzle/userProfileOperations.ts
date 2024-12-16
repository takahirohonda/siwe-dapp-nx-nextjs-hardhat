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

export const getUserProfileTableDataById = async (userId: string) => {
  return await db
    .select()
    .from(userProfile)
    .where(eq(userProfile.userId, userId))
    .get()
}

export const upsertUserProfile = async (data: InsertUserProfile) => {
  const userId = data?.userId
  if (!userId) {
    throw new Error('User id is required')
  }

  const profileData = await getUserProfileTableDataById(userId)

  console.log(`Checking if profile data exists for userId: ${userId}`)

  if (!profileData) {
    return await db.insert(userProfile).values(data)
  }

  return await db
    .update(userProfile)
    .set(data)
    .where(eq(userProfile.userId, userId))
}

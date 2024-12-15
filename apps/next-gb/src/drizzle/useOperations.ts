import { db } from './db'
import { eq } from 'drizzle-orm'
import { type InsertUser, type SelectUser, users } from './schema'

export const getUserByAddress = async (address: string) => {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.ethereumAddress, address))
  return user
}

export const createUser = async (data: InsertUser) => {
  await db.insert(users).values(data)
}

export const updateUser = async (data: Partial<InsertUser>) => {
  const userId = data?.id
  if (!userId) {
    throw new Error('User id is required')
  }
  await db.update(users).set(data).where(eq(users.id, userId))
}

export const deleteUser = async (userId: SelectUser['id']) => {
  await db.delete(users).where(eq(users.id, userId))
}

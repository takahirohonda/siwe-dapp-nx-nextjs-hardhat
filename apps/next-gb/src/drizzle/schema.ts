import { int, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { randomUUID } from 'crypto'
import { sql } from 'drizzle-orm'

const id = () =>
  text('id')
    .primaryKey()
    .$default(() => randomUUID())

const createdAt = () =>
  text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()

export const users = sqliteTable('users', {
  id: id(),
  createdAt: createdAt(),
  ethereumAddress: text('ethereum_address').notNull().unique(),
  playerName: text('player_name'),
  email: text().unique(),
})

export const userProfile = sqliteTable('user_profile', {
  id: integer('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  bio: text('bio'),
  avatarUrl: text('avatar_url'),
  createdAt: createdAt(),
  updatedAt: createdAt(),
})

export const gameRecords = sqliteTable('game_records', {
  id: integer('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  score: int('score').notNull(),
  win: int('win').notNull(),
  battleName: text('battle_name').notNull(),
  createdAt: createdAt(),
})

export type InsertUser = typeof users.$inferInsert
export type SelectUser = typeof users.$inferSelect

export type InsertUserProfile = typeof userProfile.$inferInsert
export type SelectUserProfile = typeof userProfile.$inferSelect

export type InsertGameRecords = typeof gameRecords.$inferInsert
export type SelectGameRecords = typeof gameRecords.$inferSelect

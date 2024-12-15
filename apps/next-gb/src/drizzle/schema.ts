import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'
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
  chainId: int('chain_id').notNull(),
  playerName: text('player_name').notNull(),
  email: text().notNull().unique(),
})

export type InsertUser = typeof users.$inferInsert
export type SelectUser = typeof users.$inferSelect

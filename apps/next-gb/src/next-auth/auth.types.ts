import { JWT } from 'next-auth/jwt'
import { DefaultSession } from 'next-auth'

export type TokenData = {
  address: string
  id: string
} & JWT

export type SessionData = {
  address: string
  userId: string
} & DefaultSession

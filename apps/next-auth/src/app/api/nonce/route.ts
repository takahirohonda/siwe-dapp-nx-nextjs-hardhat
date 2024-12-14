import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { generateNonce } from 'siwe'
import {
  SessionData,
  sessionOptions,
} from '../../../next-auth/iron-session-config'

export async function GET() {
  const nonce = generateNonce()
  const session = await getIronSession<SessionData>(cookies(), sessionOptions)
  session.nonce = nonce
  await session.save()
  return new Response(nonce, {
    headers: { 'Content-Type': 'text/plain' },
  })
}

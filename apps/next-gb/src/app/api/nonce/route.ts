import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { generateNonce } from 'siwe'
import {
  IronSessionData,
  ironSessionOptions,
} from '../../../next-auth/iron-session-config'

export async function GET() {
  const nonce = generateNonce()
  const session = await getIronSession<IronSessionData>(
    cookies(),
    ironSessionOptions
  )
  session.nonce = nonce
  await session.save()
  return new Response(nonce, {
    headers: { 'Content-Type': 'text/plain' },
  })
}

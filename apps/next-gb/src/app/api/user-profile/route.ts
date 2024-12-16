import { NextResponse } from 'next/server'
import { auth } from '../../../auth/auth'
import { getAuthenticatedUserId } from '../../../auth/auth.utils'
import {
  getUserProfileById,
  upsertUserProfile,
} from '../../../drizzle/userProfileOperations'
import { updateUser } from '../../../drizzle/useOperations'

export const GET = auth(async function GET(req: Request & { auth?: unknown }) {
  if (!req.auth) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 })
  }

  const userId = await getAuthenticatedUserId()
  const records = await getUserProfileById(userId)
  console.log(`User profile has been requested with userId: ${userId}`)
  console.log(`User profile: ${JSON.stringify(records)}`)

  return NextResponse.json(records)
})

export const POST = auth(async function POST(
  req: Request & { auth?: unknown }
) {
  if (!req.auth) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 })
  }

  const userId = await getAuthenticatedUserId()
  const body = await req.json()
  console.log(`Game record to be inserted with userId: ${userId}`)
  console.log(`Game record: ${JSON.stringify(body)}`)

  upsertUserProfile({
    userId,
    bio: body.bio,
  })

  updateUser({
    id: userId,
    playerName: body.playerName,
  })

  return NextResponse.json({ message: 'User profile has been updated' })
})

import { NextResponse } from 'next/server'
import { auth } from '../../../auth/auth'
import { getAuthenticatedUserId } from '../../../auth/auth.utils'
import {
  deleteGameRecordsByUserId,
  getGameRecordByUserId,
  insertGameRecord,
} from '../../../drizzle/gameRecordsOperations'

export const GET = auth(async function GET(req: Request & { auth?: unknown }) {
  if (!req.auth) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 })
  }

  const userId = await getAuthenticatedUserId()
  const records = await getGameRecordByUserId(userId)
  console.log(`Game records has been requested with userId: ${userId}`)
  console.log(`Game records: ${JSON.stringify(records)}`)

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

  const insertGameResult = await insertGameRecord({ ...body, userId })
  console.log(`Insert game record result: ${JSON.stringify(insertGameResult)}`)

  return NextResponse.json({ message: 'Game record has been inserted' })
})

export const DELETE = auth(async function DELETE(
  req: Request & { auth?: unknown }
) {
  if (!req.auth) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 })
  }

  const userId = await getAuthenticatedUserId()
  const records = await deleteGameRecordsByUserId(userId)
  console.log(`Delete user has been requested with userId: ${userId}`)

  return NextResponse.json({ message: 'Game record has been deleted' })
})

import { NextResponse } from 'next/server'
import { auth } from '../../../auth/auth'

export const GET = auth(function GET(req: Request & { auth?: any }) {
  if (req.auth) return NextResponse.json(req.auth)
  return NextResponse.json({ message: 'Not authenticated' }, { status: 401 })
})

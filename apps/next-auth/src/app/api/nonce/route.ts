import { NextResponse } from 'next/server'
import { getCsrfToken } from 'next-auth/react'

export async function GET(request: Request) {
  try {
    // Retrieve the CSRF token
    const csrfToken = await getCsrfToken({ req: request as any })

    if (!csrfToken) {
      return NextResponse.json(
        { error: 'Unable to fetch CSRF token' },
        { status: 500 }
      )
    }

    return NextResponse.json({ csrfToken })
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while fetching the CSRF token' },
      { status: 500 }
    )
  }
}

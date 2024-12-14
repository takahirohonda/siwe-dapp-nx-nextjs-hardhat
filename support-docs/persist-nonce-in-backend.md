## Persisting Nonce with session-based storage

The frontend get nonce from the API and then send back to the backend with chain information. The backend has to use the same nonce to verify. For this, we can use session based storage mechanism with `iron-session` or `auth.js`.

# (1) using `auth.js`

`pages/api/auth/[...nextauth].js`

```ts
import NextAuth from 'next-auth'

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET, // Ensure you have a secret
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      // Attach the nonce to the token if generated
      if (user?.nonce) {
        token.nonce = user.nonce
      }
      return token
    },
    async session({ session, token }) {
      // Attach the nonce from the token to the session
      if (token?.nonce) {
        session.user.nonce = token.nonce
      }
      return session
    },
  },
}

export default NextAuth(authOptions)
```

`to verify`

```ts
import { getServerSession } from 'next-auth/next'
import { authOptions } from './[...nextauth]'

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (req.method === 'POST') {
    const { returnedNonce } = req.body

    if (session.user.nonce === returnedNonce) {
      return res.status(200).json({ success: true })
    } else {
      return res.status(400).json({ error: 'Invalid nonce' })
    }
  }

  res.status(405).json({ error: 'Method Not Allowed' })
}
```

# (2) Using `iron-session`

`app/api/nonce/route.js`

```ts
import { withIronSessionApiRoute } from 'iron-session/next'
import { generateNonce } from 'siwe'

export const ironOptions = {
  cookieName: 'siwe-session',
  password: process.env.SECRET_COOKIE_PASSWORD, // Use a secure environment variable
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

export default withIronSessionApiRoute(async function handler(req, res) {
  if (req.method === 'GET') {
    const nonce = generateNonce()
    req.session.nonce = nonce
    await req.session.save()
    res.setHeader('Content-Type', 'text/plain')
    res.send(nonce)
  } else {
    res.status(405).end() // Method Not Allowed
  }
}, ironOptions)
```

`app/api/verify/route.js`

```ts
import { withIronSessionApiRoute } from 'iron-session/next'
import { ironOptions } from './nonce' // Adjust the path as necessary

export default withIronSessionApiRoute(async function handler(req, res) {
  if (req.method === 'POST') {
    const { nonce } = req.session
    const { returnedNonce } = req.body

    if (nonce === returnedNonce) {
      res.status(200).json({ success: true })
    } else {
      res.status(400).json({ error: 'Invalid nonce' })
    }
  } else {
    res.status(405).end() // Method Not Allowed
  }
}, ironOptions)
```

Frontend

```ts
async function getNonce() {
  const response = await fetch('/api/nonce')
  return await response.text()
}

async function verifyNonce(returnedNonce) {
  const response = await fetch('/api/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ returnedNonce }),
  })

  return await response.json()
}
```

# Key considerations

## Security:

- Always validate the nonce on the server.
- Ensure nonces have an expiration to prevent replay attacks.
  Scalability:
- Securely manage sensitive credentials like SECRET_COOKIE_PASSWORD or REDIS_URL.

## For Distributed systems

- Use Redis or a database for distributed systems.
- Avoid relying on memory-based storage if deploying to multiple instances.
  Environment Variables:

# Examples

using iron session to assign nonce to session: https://github.com/vvo/iron-session/blob/main/examples/next/src/app/app-router-client-component-route-handler-swr/session/route.ts

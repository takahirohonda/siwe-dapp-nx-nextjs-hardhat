import { getIronSession } from 'iron-session'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { SiweMessage } from 'siwe'
import { IronSessionData, ironSessionOptions } from './iron-session-config'
import { cookies } from 'next/headers'
import { SessionData, TokenData } from './auth.types'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Ethereum',
      credentials: {
        message: {
          label: 'Message',
          type: 'text',
          placeholder: '0x0',
        },
        signature: {
          label: 'Signature',
          type: 'text',
          placeholder: '0x0',
        },
      },
      async authorize(credentials, req) {
        console.log('checking credentials: ', JSON.stringify(credentials))
        try {
          const ironSession = await getIronSession<IronSessionData>(
            cookies(),
            ironSessionOptions
          )
          console.log('checking nonce: ', ironSession.nonce)

          const siwe = new SiweMessage(JSON.parse(credentials?.message as any))
          console.log('checking siwe: ', JSON.stringify(siwe))

          const nextAuthUrl = new URL(process.env.NEXTAUTH_URL || '')
          console.log('checking nextAuthUrl: ', JSON.stringify(nextAuthUrl))

          const result = await siwe.verify({
            signature: (credentials?.signature as string) || '',
            domain: nextAuthUrl.host,
            nonce: ironSession.nonce,
          })

          console.log('checking result: ', JSON.stringify(result))

          if (result.success) {
            // once authenticated, destroy the iron session
            ironSession.destroy()

            // these are the fields included in the jwt token
            return {
              address: siwe.address,
              id: crypto.randomUUID(), // replace it with the address from the db
            }
          }
          return null
        } catch (e) {
          console.log(`this is the error from authenticate function: ${e}`)
          return null
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      // Add address and uuid to the token when the user is authenticated
      if (user) {
        token.address = user.address
        token.id = user.id
      }
      return token
    },
    async session({
      session,
      token,
    }: {
      session: any // need to have a better type... SessionData
      token: any // update the type TokenData
    }) {
      session.address = token.address
      session.user.id = token.id
      // session.address = token.sub
      // session.user.name = token.sub

      return session
    },
  },
})

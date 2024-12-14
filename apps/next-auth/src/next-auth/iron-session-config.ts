import { SessionOptions } from 'iron-session'

export interface SessionData {
  nonce: string
}

export const defaultSession: SessionData = {
  nonce: '',
}

export const sessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_PW || '',
  cookieName: 'iron-siwe-sso',
  cookieOptions: {
    // secure only works in `https` environments for production
    secure: process.env.NODE_ENV === 'production',
  },
}

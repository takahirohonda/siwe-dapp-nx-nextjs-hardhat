import { SessionOptions } from 'iron-session'

export interface IronSessionData {
  nonce: string
}

export const defaultSession: IronSessionData = {
  nonce: '',
}

export const ironSessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_PW || '',
  cookieName: 'iron-siwe-sso',
  cookieOptions: {
    // secure only works in `https` environments for production
    secure: process.env.NODE_ENV === 'production',
  },
}

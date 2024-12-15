/* eslint-disable @typescript-eslint/no-explicit-any */
import 'iron-session'
import { SiweMessage } from 'siwe'

declare module 'iron-session' {
  interface IronSessionData {
    nonce?: string
    siwe?: SiweMessage
  }
}

declare module '*.svg' {
  const content: any
  export const ReactComponent: any
  export default content
}

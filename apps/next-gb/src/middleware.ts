// keep the session alive, this will update the session expiry every time its called.
// https://authjs.dev/getting-started/installation?framework=Next.js
export { auth as middleware } from './auth/auth'

// export const config = {
//   matcher: '/:path*',
// }

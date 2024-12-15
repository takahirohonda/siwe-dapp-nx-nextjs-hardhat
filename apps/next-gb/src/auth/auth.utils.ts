import { auth } from './auth'

export const getAuthenticatedUserId = async () => {
  const session = await auth()
  return session?.user?.id ?? ''
}

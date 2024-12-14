# Revalidate based on auth

We can enhance the caching by making ArenaPage and DashbordPage server components. We need to revalidate the path whenever auth changes.

```tsx
import { auth } from '../../next-auth/auth'
import { AuthorisedArena } from './components/AuthorisedArena'
import { UnauthorisedArena } from './components/UnauthorisedArena'

const ArenaPage = async () => {
  const session = await auth()

  const isSignedIn = Boolean(session?.user)
  return (
    <main>
      <h1>Game Arena 🏛️</h1>
      <p>For all the crypto gladiators... ⚔️</p>
      {isSignedIn ? <AuthorisedArena /> : <UnauthorisedArena />}
    </main>
  )
}

export default ArenaPage
```

revalidate path when calling sign out...

```ts
const singOutHandler = useCallback(async () => {
  await signOut()
  disconnect()
  await revalidate('/dahsboard')
  await revalidate('/arena')
}, [disconnect])
```

```tsx
'use client'

import { useSession } from 'next-auth/react'

import { AuthorisedArena } from './components/AuthorisedArena'
import { UnauthorisedArena } from './components/UnauthorisedArena'

const ArenaPage = () => {
  const { status } = useSession()
  const isSignedIn = status === 'authenticated'

  return (
    <main>
      <h1>Game Arena 🏛️</h1>
      <p>For all the crypto gladiators... ⚔️</p>
      {isSignedIn ? <AuthorisedArena /> : <UnauthorisedArena />}
    </main>
  )
}

export default ArenaPage
```

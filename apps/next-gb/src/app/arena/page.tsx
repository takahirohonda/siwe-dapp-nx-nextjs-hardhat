'use client'

import { useSession } from 'next-auth/react'
import clsx from 'clsx'
import { AuthorisedArena } from './components/AuthorisedArena'
import { UnauthorisedArena } from './components/UnauthorisedArena'
import { PageContentLoader } from '../../components/PageContentLoader/PageContent'

const ArenaPage = () => {
  const { status } = useSession()
  const isSignedIn = status === 'authenticated'
  if (status === 'loading') {
    return <PageContentLoader />
  }
  return (
    <main>
      <h1
        className={clsx(`
              text-[48px]
              md:text-[90px]
              yellow-light-blue-gradient
              `)}
      >
        ⚔️ Arena
      </h1>

      {isSignedIn ? <AuthorisedArena /> : <UnauthorisedArena />}
    </main>
  )
}

export default ArenaPage

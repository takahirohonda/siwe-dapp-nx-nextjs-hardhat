'use client'

import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import { AuthorisedDashboard } from './components/AuthorisedDashboard'
import { UnauthorisedDashboard } from './components/UnauthorisedDashboard'

const DashboardPage = () => {
  const { status } = useSession()
  const isSignedIn = status === 'authenticated'

  return (
    <main>
      <h1
        className={clsx(`
              text-[48px]
              md:text-[90px]
              yellow-light-blue-gradient
              `)}
      >
        ⭐️ Dashboard
      </h1>
      {isSignedIn ? <AuthorisedDashboard /> : <UnauthorisedDashboard />}
    </main>
  )
}

export default DashboardPage

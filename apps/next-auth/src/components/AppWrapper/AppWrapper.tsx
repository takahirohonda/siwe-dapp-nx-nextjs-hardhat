'use client'
import { NextUIProviderWrapper } from '../NextUiProviderWrapper/NextUiProviderWrapper'
import { WagmiProviderWrapper } from '../WagmiProviderWrapper/WagmiProviderWrapper'
import { Header } from 'ui-components'
import { clsx } from 'clsx'
import { getSession, SessionProvider } from 'next-auth/react'
import { useEffect, useState } from 'react'
export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<any>()

  useEffect(() => {
    const getAuthSession = async () => {
      const session = await getSession()
      setSession(session)
    }
    if (session) {
      return
    } else {
      getAuthSession()
    }
  }, [])
  return (
    <WagmiProviderWrapper>
      {/* Next UI Provider creates <div data-overlay-container="true">
      So we need to add the style tot he div */}
      <SessionProvider session={session} refetchInterval={0}>
        <NextUIProviderWrapper className="h-screen flex flex-col">
          <header>
            <Header />
          </header>
          {children}
        </NextUIProviderWrapper>
      </SessionProvider>
    </WagmiProviderWrapper>
  )
}

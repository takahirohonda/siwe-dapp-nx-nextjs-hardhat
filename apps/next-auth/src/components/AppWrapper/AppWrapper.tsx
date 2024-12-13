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
    <SessionProvider session={session} refetchInterval={0}>
      <WagmiProviderWrapper>
        {/* Next UI Provider creates <div data-overlay-container="true">
      So we need to add the style tot he div */}
        <NextUIProviderWrapper className="h-screen flex flex-col">
          <header>
            <Header />
          </header>
          <main
            className={clsx(`
            flex
            flex-col
            items-center
            justify-center     
            flex-grow
          `)}
          >
            {children}
          </main>
        </NextUIProviderWrapper>
      </WagmiProviderWrapper>
    </SessionProvider>
  )
}

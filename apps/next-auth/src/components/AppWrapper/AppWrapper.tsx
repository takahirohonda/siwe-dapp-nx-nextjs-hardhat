'use client'
import { NextUIProviderWrapper } from '../NextUiProviderWrapper/NextUiProviderWrapper'
import { WagmiProviderWrapper } from '../WagmiProviderWrapper/WagmiProviderWrapper'
import { Header } from 'ui-components'
import { clsx } from 'clsx'
export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProviderWrapper>
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
  )
}

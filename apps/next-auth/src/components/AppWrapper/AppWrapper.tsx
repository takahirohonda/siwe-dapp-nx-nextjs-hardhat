'use client'
import { NextUIProviderWrapper } from '../NextUiProviderWrapper/NextUiProviderWrapper'
import { WagmiProviderWrapper } from '../WagmiProviderWrapper/WagmiProviderWrapper'
import { Header } from 'ui-components'

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProviderWrapper>
      <NextUIProviderWrapper>
        <div className="container h-full flex flex-col px-[16px]">
          <header>
            <Header />
          </header>
          <main>{children}</main>
        </div>
      </NextUIProviderWrapper>
    </WagmiProviderWrapper>
  )
}

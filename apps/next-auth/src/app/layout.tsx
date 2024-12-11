import './global.css'
import { NextUIProviderWrapper } from '../components/NextUiProviderWrapper/NextUiProviderWrapper'
import { WagmiProviderWrapper } from '../components/WagmiProviderWrapper/WagmiProviderWrapper'
import { Header } from 'ui-components'
export const metadata = {
  title: 'SIWE example',
  description: 'Experimenting with Sign In With Ethereum (SIWE)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary-black h-screen">
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
      </body>
    </html>
  )
}

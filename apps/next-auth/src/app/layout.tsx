import './global.css'
import { NextUIProviderWrapper } from '../components/NextUiProviderWrapper/NextUiProviderWrapper'
import { WagmiProviderWrapper } from '../components/WagmiProviderWrapper/WagmiProviderWrapper'

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
      <body>
        <WagmiProviderWrapper>
          <NextUIProviderWrapper>
            <div className="container">
              <main>{children}</main>
            </div>
          </NextUIProviderWrapper>
        </WagmiProviderWrapper>
      </body>
    </html>
  )
}

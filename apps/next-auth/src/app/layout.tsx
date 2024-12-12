import './global.css'

import { AppWrapper } from '../components/AppWrapper/AppWrapper'
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
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}

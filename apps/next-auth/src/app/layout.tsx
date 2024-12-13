import './global.css'

import { AppWrapper } from '../components/AppWrapper/AppWrapper'
export const metadata = {
  title: 'Gambla 🙄',
  description: 'Be a crypto gladiator...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary-black">
        <div className="container h-full flex flex-col px-[16px]">
          <AppWrapper>{children}</AppWrapper>
        </div>
      </body>
    </html>
  )
}

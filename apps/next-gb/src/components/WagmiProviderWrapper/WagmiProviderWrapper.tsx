'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from 'utils-wagmi'

const queryClient = new QueryClient()

export const WagmiProviderWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

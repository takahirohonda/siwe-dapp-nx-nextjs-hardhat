import { NextUIProvider } from '@nextui-org/react'

// From the NextUI docs: https://nextui.org/docs/frameworks/nextjs
export const NextUIProviderWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <NextUIProvider>{children}</NextUIProvider>
}

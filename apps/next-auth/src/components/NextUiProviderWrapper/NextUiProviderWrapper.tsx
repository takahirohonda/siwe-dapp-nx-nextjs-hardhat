'use client'
import { NextUIProvider } from '@nextui-org/react'

// From the NextUI docs: https://nextui.org/docs/frameworks/nextjs
export const NextUIProviderWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <NextUIProvider className={className}>{children}</NextUIProvider>
}

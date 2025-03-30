'use client'
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { getQueryClient } from "@/shared/lib/getQueryClient"

import { ProgressProvider } from "@bprogress/next/app"

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <ProgressProvider
      height="3px"
      color="#F3A505"
      options={{ showSpinner: false }}
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ProgressProvider>
  )
}

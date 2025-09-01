"use client"

import type React from "react"
import { Suspense } from "react"

function ClientLayoutContent({
  children,
}: {
  children: React.ReactNode
}) {
  // This component can use useSearchParams safely within Suspense
  return <>{children}</>
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </Suspense>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Oswald } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { AppProvider } from "@/contexts/app-context"
import { Suspense } from "react"
import "./globals.css"

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: "Sports Tournament Portal",
  description: "Register for tournaments, book accommodation, and manage your participation",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`font-sans ${oswald.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <AppProvider>{children}</AppProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

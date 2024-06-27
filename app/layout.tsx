import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />

        {children}

        {/* Toaster */}
      </body>
    </html>
  )
}

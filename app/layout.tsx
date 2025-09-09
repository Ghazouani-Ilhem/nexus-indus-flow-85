import './globals.css'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
const inter=Inter({subsets:['latin'],variable:'--font-inter'})
const spaceGrotesk=Space_Grotesk({subsets:['latin'],variable:'--font-space-grotesk'})
const jetBrains=JetBrains_Mono({subsets:['latin'],variable:'--font-jetbrains'})
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'App',
    template: '%s | App'
  },
  description: 'Modern industrial software solutions with clean, professional UI.',
  icons: { icon: '/favicon.ico' },
}

import Providers from './providers'
import ClientHeader from './client-header'
import ClientFooter from './client-footer'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrains.variable}`}>
      <body className='min-h-screen bg-background font-body text-foreground'>
        <Providers>
          <ClientHeader />
          <main className="min-h-[60vh]">{children}</main>
          <ClientFooter />
        </Providers>
      </body>
    </html>
  )
}

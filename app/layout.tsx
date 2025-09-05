import './globals.css'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
const spaceGrotesk=Space_Grotesk({subsets:['latin'],variable:'--font-space-grotesk'})
const jetBrains=JetBrains_Mono({subsets:['latin'],variable:'--font-jetbrains'})
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'App',
}

import Providers from './providers'
import ClientHeader from './client-header'
import ClientFooter from './client-footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetBrains.variable}`}>
      <body className='min-h-screen'>
        <Providers>
          <ClientHeader />
          {children}
          <ClientFooter />
        </Providers>
      </body>
    </html>
  )
}

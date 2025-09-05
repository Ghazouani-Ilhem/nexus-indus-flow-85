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
      <body className='min-h-screen relative'>
        {/* Global background layers */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 mesh-gradient opacity-[0.35]" />
          <div className="absolute inset-0 tech-grid opacity-[0.08]" />
        </div>
        <Providers>
          <ClientHeader />
          <main className="relative pt-24">{children}</main>
          <ClientFooter />
        </Providers>
      </body>
    </html>
  )
}

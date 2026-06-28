import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Exo_2 } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const exo = Exo_2({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Trinetra Aerospace | Autonomous Aerial Intelligence',
  description:
    'Trinetra Aerospace builds intelligent autonomous drone systems and AI-powered aerial solutions for surveillance, infrastructure inspection, and mission-critical operations.',
  generator: 'v0.app',
  keywords: [
    'Trinetra Aerospace',
    'autonomous drones',
    'aerial intelligence',
    'drone surveillance',
    'infrastructure inspection',
    'AI aerial analytics',
    'aerospace technology',
  ],
  openGraph: {
    title: 'Trinetra Aerospace | Autonomous Aerial Intelligence',
    description:
      'Autonomous aerial intelligence for surveillance, infrastructure monitoring, and mission-critical operations.',
    type: 'website',
  },
  icons: {
  icon: [
    {
      url: '/icon.png',
    },
    {
      url: '/icon-light-32x32.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/icon-dark-32x32.png',
      media: '(prefers-color-scheme: dark)',
    },
  ],
  apple: '/apple-icon.png',
},
}
export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F5F1E8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${exo.variable} bg-background`}
    >
      {/* Entire website uses Geist by default */}
      <body className={`${geistSans.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
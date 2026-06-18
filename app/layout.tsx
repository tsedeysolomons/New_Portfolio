import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Tsedey Solomon - Software Developer & AI/ML Specialist',
  description: 'Premium portfolio showcasing full-stack web development, AI/ML expertise, and embedded systems projects. Innovative software solutions builder.',
  keywords: 'developer, portfolio, AI, machine learning, React, Next.js, embedded systems, Python',
  authors: [{ name: 'Tsedey Solomon' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Tsedey Solomon - Software Developer & AI/ML Specialist',
    description: 'Premium portfolio showcasing software development, AI/ML learning, and embedded systems expertise.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#A78BFA' },
    { media: '(prefers-color-scheme: dark)', color: '#A78BFA' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

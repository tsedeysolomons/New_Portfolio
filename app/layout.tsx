import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: '../public/fonts/geist-latin.woff2',
  variable: '--font-geist-sans',
  display: 'swap',
})
const geistMono = localFont({
  src: '../public/fonts/geist-mono-latin.woff2',
  variable: '--font-geist-mono',
  display: 'swap',
})

/* Display serif used for the big editorial headlines (terminal-luxe theme) */
const instrumentSerif = localFont({
  src: [
    { path: '../public/fonts/instrument-serif-latin.woff2', style: 'normal', weight: '400' },
    { path: '../public/fonts/instrument-serif-italic-latin.woff2', style: 'italic', weight: '400' },
  ],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tsedey Solomon | Full-Stack Software Developer',
  description: 'Full-Stack Software Developer based in Addis Ababa, Ethiopia. Specialized in Angular, .NET, React/Next.js, TypeScript, and PostgreSQL. Available for opportunities.',
  keywords: 'Tsedey Solomon, Full-Stack Developer, Angular, React, Next.js, TypeScript, .NET, Node.js, PostgreSQL, Software Developer Ethiopia, Addis Ababa',
  authors: [{ name: 'Tsedey Solomon' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://my-portfolio-tsed.vercel.app',
    siteName: 'Tsedey Solomon Portfolio',
    title: 'Tsedey Solomon | Full-Stack Software Developer',
    description: 'Crafting performant, high-scale digital solutions that bridge design and technology. Angular, .NET, React, TypeScript specialist.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#0E0D0C' },
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} bg-background scroll-smooth`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

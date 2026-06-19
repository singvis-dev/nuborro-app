import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Nuborro — Borrow Anything, From Anyone',
    template: '%s | Nuborro',
  },
  description:
    'Rent books, cycles, gadgets, cameras and more from people around you. India\'s neighbourhood rent-anything marketplace.',
  keywords: ['rent', 'borrow', 'marketplace', 'India', 'neighbourhood', 'sharing economy'],
  authors: [{ name: 'Nuborro' }],
  creator: 'Nuborro',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://nuborro.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nuborro.com',
    siteName: 'Nuborro',
    title: 'Nuborro — Borrow Anything, From Anyone',
    description: 'Rent anything from people around you.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuborro — Borrow Anything, From Anyone',
    description: 'Rent anything from people around you.',
  },
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ff5c1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Prevents iOS zoom on input focus
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-paper text-ink font-body antialiased">
        {children}
      </body>
    </html>
  )
}

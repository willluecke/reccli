import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://reccli.com'),
  title: 'RecCli - Terminal Recorder with One-Click Export | Free & Open Source',
  description: 'Dead-simple terminal recorder with a floating button. One click to start, one click to stop. Perfect for debugging sessions, AI coding tools, and documentation. Free, open-source alternative to asciinema with GUI.',
  keywords: ['terminal recorder', 'CLI recorder', 'asciinema', 'terminal', 'recording', 'dev tools', 'Claude Code', 'AI coding', 'screen recording', 'terminal session', 'command line recorder', 'developer tools', 'homebrew', 'mac terminal recorder'],
  authors: [{ name: 'Will Luecke' }],
  creator: 'Will Luecke',
  publisher: 'RecCli',
  alternates: {
    canonical: 'https://reccli.com',
  },
  openGraph: {
    title: 'RecCli - Terminal Recorder with One-Click Export',
    description: 'Dead-simple terminal recorder with a floating button. One click to start, one click to stop. Free & open source.',
    url: 'https://reccli.com',
    siteName: 'RecCli',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RecCli - Terminal Recorder with One-Click Export',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RecCli - Terminal Recorder with One-Click Export',
    description: 'Dead-simple terminal recorder with a floating button. One click to start, one click to stop. Free & open source.',
    creator: '@reccli_app',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

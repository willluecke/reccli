import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'RecCli - The First GUI-Based Terminal Text Recorder',
  description: 'Dead-simple terminal recorder with a floating button. One click to start, one click to stop. Perfect for debugging sessions, AI coding tools, and documentation.',
  keywords: ['terminal recorder', 'CLI recorder', 'asciinema', 'terminal', 'recording', 'dev tools', 'Claude Code', 'AI coding'],
  authors: [{ name: 'Will Luecke' }],
  creator: 'Will Luecke',
  publisher: 'RecCli',
  openGraph: {
    title: 'RecCli - The First GUI-Based Terminal Text Recorder',
    description: 'Dead-simple terminal recorder with a floating button. One click to start, one click to stop.',
    url: 'https://reccli.com',
    siteName: 'RecCli',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RecCli - The First GUI-Based Terminal Text Recorder',
    description: 'Dead-simple terminal recorder with a floating button. One click to start, one click to stop.',
    creator: '@reccli_app',
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

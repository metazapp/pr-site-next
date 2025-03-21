import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'PR Plastics | Premium Automotive Component Manufacturing',
    template: '%s | PR Plastics'
  },
  description: 'PR Plastics specializes in high-quality plastic component manufacturing for the automotive industry, providing innovative solutions with precision engineering.',
  keywords: ['plastic manufacturing', 'automotive components', 'plastic injection molding', 'automotive parts', 'precision engineering'],
  authors: [{ name: 'PR Plastics' }],
  creator: 'PR Plastics',
  publisher: 'PR Plastics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://prplastics.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PR Plastics | Premium Automotive Component Manufacturing',
    description: 'Specialized in high-quality plastic component manufacturing for the automotive industry.',
    url: 'https://prplastics.in',
    siteName: 'PR Plastics',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PR Plastics - Automotive Component Manufacturing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PR Plastics | Premium Automotive Component Manufacturing',
    description: 'Specialized in high-quality plastic component manufacturing for the automotive industry.',
    images: ['/images/twitter-image.jpg'],
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
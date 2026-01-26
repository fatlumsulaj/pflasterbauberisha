import type { Metadata } from 'next'
import './globals.css'

import { Figtree } from 'next/font/google'
import { Suspense } from 'react'

import CookieBanner from '@/components/analytics/banner'
import GoogleAnalytics from '@/components/analytics/google-analytics'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Typebot from '@/components/typebot'

const default_font = Figtree({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'BS Pflaster- & Tiefbau Meisterbetrieb',
  description: 'Ihrem zuverlässigen Partner für hochwertige Pflasterarbeiten und kreative Gestaltung im Außenbereich. Entdecken Sie unsere umfassende Expertise...',
  keywords: ["Berisha Pflasterbau", "BS Pflasterbau", "Sherif Berisha", "Pflasterbau Munich", "Pflasterbau Passau"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={default_font.className}>
        <Navbar />
        {children}
        <Footer />
        {/* <Typebot /> */}
        <CookieBanner />
        <GoogleAnalytics GA_MEASUREMENT_ID='G-TT49HEHZHM' />
      </body>
    </html>
  )
}

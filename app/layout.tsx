import type { Metadata } from 'next'
import './globals.css'

import { Figtree } from 'next/font/google'
import { Suspense } from 'react'

import CookieBanner from '@/components/cookie-banner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GoogleAnalytics from './GoogleAnalytics'

const default_font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BS Pflasterbau Meisterbetrieb',
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
      <Suspense fallback={<></>}>
        <GoogleAnalytics GA_MEASUREMENT_ID='G-TT49HEHZHM' />
      </Suspense>
      <body className={default_font.className}>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}

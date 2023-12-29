import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GoogleAnalytics from './GoogleAnalytics'

import { Inter } from 'next/font/google'
import { Manrope } from 'next/font/google'

const default_font = Manrope({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700', '800',] })

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
    <GoogleAnalytics GA_TRACKING_ID='G-TT49HEHZHM' />
    <body className={default_font.className}>
      <Navbar />
      {children}
      <Footer />
      </body>
  </html>
  )
}

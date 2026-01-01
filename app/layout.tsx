import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// 1. Primary Sans-Serif Font (Clean, Swiss style)
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// 2. Secondary Monospace Font (For technical data/tags)
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Blockchain Skilllab',
  description: 'Master blockchain fundamentals through a structured 5-day program covering distributed ledgers, cryptography, and modern platforms like Ethereum, Solana, and Algorand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      {/* Global Theme Application:
        - bg-black: Sets the strict black background globally
        - text-white: Sets default text color
        - selection:bg-blue-600: Adds the electric blue highlight color when selecting text
      */}
      <body className="bg-black text-white antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="min-h-screen relative flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
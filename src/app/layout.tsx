import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProfitPeers - Trading Collective',
  description: 'Join the ultimate trading collective. Access live market breakdowns, exclusive resources, and connect with experienced traders.',
  keywords: 'trading, forex, stocks, crypto, market analysis, trading community',
  authors: [{ name: 'ProfitPeers' }],
  openGraph: {
    title: 'ProfitPeers - Trading Collective',
    description: 'Join the ultimate trading collective. Access live market breakdowns, exclusive resources, and connect with experienced traders.',
    type: 'website',
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
        {children}
      </body>
    </html>
  )
}
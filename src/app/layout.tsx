import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import '@/app/fonts/custom_fonts.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Pocket',
    default: 'Pocket - Invest at the perfect time.',
  },
  description:
    'By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.',
}

import Head from 'next/head'
import { BgDotPattern } from '@/components/BgDotPattern'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('antialiased', inter.variable)}>
      <head>
        {/* Custom font preloading removed */}
      </head>
      <body>
        <BgDotPattern>
          {children}
        </BgDotPattern>
      </body>
    </html>
  )
}

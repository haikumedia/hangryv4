'use client'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import FullPageNavigation from '@/components/FullPageNavigation'

// Navigation links for the full page navigation
const navLinks = [
  { label: 'Features', url: '/#features' },
  { label: 'Reviews', url: '/#reviews' },
  { label: 'Pricing', url: '/#pricing' },
  { label: 'FAQs', url: '/#faqs' },
  { label: 'Log in', url: '/login' },
  { label: 'Download', url: '#' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="lg:hidden">
              <FullPageNavigation links={navLinks} />
            </div>
            <div className="flex items-center gap-6 max-lg:hidden">
              <Button href="/login" variant="outline">
                Log in
              </Button>
              <Button href="#">Download</Button>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

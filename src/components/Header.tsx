'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { nav } from '@/lib'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="top">
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Faith Clinic Church home">
          <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
            <circle cx="17" cy="17" r="15.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path d="M17 8v18M11 14h12" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
          </svg>
          <span>Faith Clinic Church</span>
        </Link>
        <button className="menu-btn" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          <span aria-hidden="true">{open ? '✕' : '☰'}</span> Menu
        </button>
        <nav id="site-nav" aria-label="Main" className={open ? 'open' : ''}>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={pathname === n.href ? 'page' : undefined}>
              {n.label}
            </Link>
          ))}
          <Link className="btn gold small" href="/give/">
            Give
          </Link>
        </nav>
      </div>
    </header>
  )
}

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
          <img className="brand-mark" src="/images/logo-mark.webp" alt="" width="53" height="48" />
          <span>Faith Clinic Church</span>
        </Link>
        <button className="menu-btn" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          <span aria-hidden="true">{open ? '✕' : '☰'}</span> Menu
        </button>
        <nav id="site-nav" aria-label="Main" className={open ? 'open' : ''}>
          {nav.map((n) =>
            n.href.startsWith('http') ? (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ) : (
              <Link key={n.href} href={n.href} aria-current={pathname === n.href ? 'page' : undefined}>
                {n.label}
              </Link>
            ),
          )}
          <Link className="btn gold small" href="/give/">
            Give
          </Link>
        </nav>
      </div>
    </header>
  )
}

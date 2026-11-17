import Link from 'next/link'
import { nav } from '@/lib'

export default function Header() {
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
        <nav aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
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

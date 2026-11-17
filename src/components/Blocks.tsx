import Link from 'next/link'
import type { ReactNode } from 'react'

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="page-hero">
      <div className="wrap">
        <p className="eyebrow rise">{eyebrow}</p>
        <h1 className="rise d1">{title}</h1>
        {children ? <div className="lede rise d2">{children}</div> : null}
      </div>
    </div>
  )
}

export function Verse({ text, cite }: { text: string; cite: string }) {
  return (
    <blockquote className="verse reveal">
      &ldquo;{text}&rdquo;
      <cite>{cite}</cite>
    </blockquote>
  )
}

export function NextStep() {
  return (
    <section className="next-step">
      <div className="wrap reveal">
        <p className="eyebrow">Your next step starts here</p>
        <h2>Come as you are. Grow into who God called you to be.</h2>
        <div className="cta">
          <Link className="btn gold" href="/plan-your-visit/">Plan your visit</Link>
          <Link className="btn ghost" href="/request-prayer/">Request prayer</Link>
        </div>
      </div>
    </section>
  )
}

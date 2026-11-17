import Link from 'next/link'
import { PageHero, Verse } from '@/components/Blocks'
import { site, pageMeta } from '@/lib'

export const metadata = pageMeta('Request Prayer', "Send a prayer request to Faith Clinic Church in Amarillo, Texas. You don't have to carry it alone. Bring your needs before the Lord with us.", '/request-prayer/')

const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Prayer Request for Faith Clinic Church')}&body=${encodeURIComponent('Name:\n\nPrayer request:\n')}`

export default function Prayer() {
  return (
    <>
      <PageHero eyebrow="Request prayer" title="You don&rsquo;t have to carry it alone.">
        <p>Our prayer team agrees with you in faith and lifts your request before God.</p>
      </PageHero>
      <section>
        <div className="wrap split flip">
          <div className="prose reveal">
            <h2>Bring your needs before the Lord.</h2>
            <p>Share what is on your heart. Your family. A decision you need direction on. A hard season you are walking through.</p>
            <p>The button opens an email draft. Your request is sent only when you press Send in your email app.</p>
            <div className="cta" style={{ marginTop: 6 }}>
              <a className="btn navy" href={mailto}>Share a prayer request</a>
            </div>
            <p style={{ color: 'var(--muted)' }}>
              Or write to us at <b>{site.email}</b>, or call <b>{site.phone}</b>.
            </p>
            <p>
              Join us for worship and prayer in person on Sundays at 11:00 AM. <Link href="/plan-your-visit/">Plan your visit</Link>.
            </p>
          </div>
          <Verse text="Casting all your care upon him; for he careth for you." cite="1 Peter 5:7, KJV" />
        </div>
      </section>
    </>
  )
}

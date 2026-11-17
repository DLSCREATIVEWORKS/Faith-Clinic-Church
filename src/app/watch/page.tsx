import Link from 'next/link'
import { NextStep, PageHero, Verse } from '@/components/Blocks'
import { site, pageMeta } from '@/lib'

export const metadata = pageMeta('Watch & Grow', 'Watch Faith Clinic Church services live on Sundays at 11:00 AM Central, catch previous messages from Dr. Lee A. Simpson, and listen on Kingdom Keys Network, 88.3 FM in Amarillo.', '/watch/')

export default function Watch() {
  return (
    <>
      <PageHero eyebrow="Watch &amp; grow" title="A message for your walk of faith.">
        <p>Join Faith Clinic online, or come back to the messages that strengthen your faith. Biblical teaching for a purposeful life in Christ.</p>
        <div className="cta">
          <a className="btn gold" href={site.youtube}>Open live &amp; recent services</a>
        </div>
      </PageHero>
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Worship with us. Wherever you are.</h2>
          </div>
          <div className="cards two">
            <div className="card reveal">
              <p className="when">Join the gathering</p>
              <h3>Sunday livestream</h3>
              <p>Sunday services begin at 11:00 AM Central Time. On our YouTube channel, choose the broadcast marked LIVE during the service.</p>
              <a href={site.youtube}>Watch on YouTube</a>
            </div>
            <div className="card reveal">
              <p className="when">Keep growing</p>
              <h3>Previous messages</h3>
              <p>Teaching from Dr. Lee A. Simpson and previous services stay on the channel, so you can browse them all week.</p>
              <a href={site.youtube}>Browse messages</a>
            </div>
            <div className="card reveal">
              <p className="when">On the radio · 88.3 FM</p>
              <h3>Kingdom Keys Network</h3>
              <p>Hear Dr. Lee A. Simpson on the Kingdom Keys Network, broadcasting in Amarillo, Texas, on 88.3 FM.</p>
            </div>
            <div className="card reveal">
              <p className="when">Connect in person</p>
              <h3>You&rsquo;re invited.</h3>
              <p>Come visit Faith Clinic Church in Amarillo. There is a place here for you and your family.</p>
              <Link href="/plan-your-visit/">Plan your visit</Link>
            </div>
          </div>
          <div style={{ marginTop: 40, maxWidth: 720 }}>
            <Verse text="Be ye transformed by the renewing of your mind." cite="Romans 12:2, KJV" />
          </div>
          <p style={{ marginTop: 24, color: 'var(--muted)' }}>
            You can also follow Dr. Simpson on <a href={site.facebook}>Facebook</a>.
          </p>
        </div>
      </section>
      <NextStep />
    </>
  )
}

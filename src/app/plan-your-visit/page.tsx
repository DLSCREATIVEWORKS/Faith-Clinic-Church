import Link from 'next/link'
import { NextStep, PageHero } from '@/components/Blocks'
import { site } from '@/lib'

export const metadata = { title: 'Plan Your Visit' }

export default function Visit() {
  return (
    <>
      <PageHero eyebrow="Plan your visit" title="Your first visit starts with a welcome.">
        <p>Come as you are. Come with an open heart and a desire to grow in your relationship with Christ.</p>
      </PageHero>
      <section>
        <div className="wrap split">
          <div className="prose reveal">
            <p className="eyebrow">What to expect</p>
            <h2>Worship. The Word. A place to grow.</h2>
            <p>Our gatherings center on worship, biblical teaching, and prayer. There is no dress code. We want you to feel welcome and comfortable.</p>
            <dl className="info">
              <dt>Sunday</dt><dd>Worship at 11:00 AM Central, in person and online. Arrive a few minutes early.</dd>
              <dt>Wednesday</dt><dd>Night Bible Study at 7:00 PM Central.</dd>
              <dt>Children</dt><dd>KingdomSpark serves infants through eighth grade. Families worship together on the first Sunday of each month. Ask our team when you arrive.</dd>
              <dt>Español</dt><dd>Spanish translation is available. Let our team know when you arrive.</dd>
              <dt>Parking</dt><dd>At the front, north, and south of the property.</dd>
            </dl>
          </div>
          <div className="card reveal">
            <p className="when">We&rsquo;ll see you here</p>
            <h3>{site.name}</h3>
            <p>{site.address}</p>
            <p>Just off the Dumas Highway (US 287).</p>
            <p>Phone: {site.phone}<br />Email: {site.email}</p>
            <a className="btn navy" href={site.maps}>Get directions</a>
            <p>Want a look first? <Link href="/watch/">Watch a service online</Link>.</p>
          </div>
        </div>
      </section>
      <NextStep />
    </>
  )
}

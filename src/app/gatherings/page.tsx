import Link from 'next/link'
import { NextStep, PageHero } from '@/components/Blocks'
import Countdown from '@/components/Countdown'
import { site, pageMeta } from '@/lib'

export const metadata = pageMeta('Gatherings', 'Sunday worship at 11:00 AM and Wednesday Night Bible Study at 7:00 PM at Faith Clinic Church, 2000 North Polk Street, Amarillo, Texas. Family worship the first Sunday of each month.', '/gatherings/')

export default function Gatherings() {
  return (
    <>
      <PageHero eyebrow="Gather with us" title="A rhythm of worship. A life of growth.">
        <p>Faith is something we share. Make it part of your week.</p>
      </PageHero>
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>See you this week.</h2>
          </div>
          <div className="cards">
            <div className="card reveal">
              <p className="when">Sundays · 11:00 AM Central</p>
              <h3>Worship with us</h3>
              <p>Gather for worship, biblical teaching, and prayer. Sunday worship is also available online.</p>
              <Link href="/watch/">Watch online</Link>
            </div>
            <div className="card reveal">
              <p className="when">Wednesdays · 7:00 PM Central</p>
              <h3>Wednesday Night Bible Study</h3>
              <p>Practical teaching to strengthen your faith for everyday life.</p>
              <Link href="/ministries/">About Bible study</Link>
            </div>
            <div className="card reveal">
              <p className="when">First Sunday of each month · 11:00 AM</p>
              <h3>Family Worship</h3>
              <p>Families come together around worship and the Word.</p>
              <Link href="/plan-your-visit/">Plan a family visit</Link>
            </div>
          </div>
          <div style={{ marginTop: 28 }}><Countdown /></div>
          <p className="center" style={{ color: 'var(--muted)' }}>
            {site.address} · <a href={site.maps}>Get directions</a>
          </p>
        </div>
      </section>
      <NextStep />
    </>
  )
}

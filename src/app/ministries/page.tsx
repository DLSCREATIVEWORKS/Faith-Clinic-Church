import Link from 'next/link'
import { NextStep, PageHero } from '@/components/Blocks'

export const metadata = { title: 'Ministries' }

export default function Ministries() {
  return (
    <>
      <PageHero eyebrow="Ministries" title="Grow in faith. Find your place.">
        <p>Discipleship, prayer, and fellowship for every age. There is a place here for your whole family.</p>
      </PageHero>
      <section>
        <div className="wrap">
          <div className="cards two">
            <div className="card reveal" id="kingdom-spark">
              <p className="when">Children &amp; families · Infancy through eighth grade</p>
              <h3>KingdomSpark</h3>
              <p>Our children&rsquo;s ministry teaches kids God&rsquo;s Word and helps them experience His love. Families worship together on the first Sunday of each month. When you arrive, ask our team and they will help you find the right place for your children.</p>
              <Link href="/plan-your-visit/">Plan a family visit</Link>
            </div>
            <div className="card reveal" id="bible-study">
              <p className="when">Wednesdays · 7:00 PM Central</p>
              <h3>Wednesday Night Bible Study</h3>
              <p>Practical biblical teaching on how to apply Scripture to your thinking, your relationships, and your everyday decisions.</p>
              <Link href="/plan-your-visit/">See service information</Link>
            </div>
            <div className="card reveal" id="young-kingdom-warriors">
              <p className="when">Young people</p>
              <h3>Young Kingdom Warriors</h3>
              <p>We encourage young people to grow in their faith and discover their identity and purpose in Christ. Ask our ministry team during your visit for current gathering details.</p>
              <Link href="/plan-your-visit/">Plan your visit</Link>
            </div>
            <div className="card reveal" id="prayer">
              <p className="when">Any time</p>
              <h3>Prayer &amp; Encouragement</h3>
              <p>Our prayer team joins you in faith and brings your requests before God. You don&rsquo;t have to carry it alone.</p>
              <Link href="/request-prayer/">Request prayer</Link>
            </div>
          </div>
        </div>
      </section>
      <NextStep />
    </>
  )
}

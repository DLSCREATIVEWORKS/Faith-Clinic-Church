import Link from 'next/link'
import { NextStep, PageHero } from '@/components/Blocks'
import { site, pageMeta } from '@/lib'
import VisitForm from '@/components/VisitForm'

export const metadata = pageMeta('Plan Your Visit', "Plan your first visit to Faith Clinic Church in Amarillo, TX. Sunday worship 11:00 AM, Wednesday Bible Study 7:00 PM, children's ministry, Spanish translation, and easy parking.", '/plan-your-visit/')

/* Common questions, written the way people ask them in Google, ChatGPT and Claude.
   The same answers are given to search engines as FAQ data below. */
const faqs = [
  {
    q: 'What time is church at Faith Clinic Church in Amarillo?',
    a: 'Sunday worship is at 11:00 AM Central, and Wednesday Night Bible Study is at 7:00 PM Central. Both meet in person and online.',
  },
  {
    q: 'Where is Faith Clinic Church?',
    a: 'Faith Clinic Church is at 2000 North Polk Street, Amarillo, Texas 79107, just off the Dumas Highway (US 287). Parking is at the front, north, and south of the property.',
  },
  {
    q: 'Is Faith Clinic a medical clinic?',
    a: 'No. Faith Clinic Church, also known as Faith Clinic Christian Center, is a Christian church. The name comes from what we believe: the Word of God is the medicine for every area of life.',
  },
  {
    q: 'Who is the pastor of Faith Clinic Church?',
    a: 'Faith Clinic Church is led by Dr. Lee A. Simpson, Senior Pastor, and Pastor Pat Simpson.',
  },
  {
    q: 'Is there a dress code?',
    a: 'No. There is no dress code. Come as you are.',
  },
  {
    q: 'Do you have a ministry for children?',
    a: 'Yes. KingdomSpark serves infants through eighth grade. Families worship together on the first Sunday of each month.',
  },
  {
    q: 'Is Spanish translation available?',
    a: 'Yes. Spanish translation is available. Let our team know when you arrive.',
  },
  {
    q: 'Can I watch Faith Clinic Church services online?',
    a: 'Yes. Sunday services stream live at 11:00 AM Central on Facebook and YouTube. You can also hear Dr. Simpson on the Kingdom Keys Network, 88.3 FM in Amarillo.',
  },
]

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function Visit() {
  return (
    <>
      <PageHero eyebrow="Plan your visit" title="Your first visit starts with a welcome.">
        <p>Come as you are. Come with an open heart and a desire to grow in your relationship with Christ.</p>
        <div className="cta">
          <a className="btn gold" href="#visit-form">Let us know you&rsquo;re coming</a>
          <a className="btn ghost" href={site.maps}>Get directions</a>
        </div>
      </PageHero>
      <section>
        <div className="wrap split">
          <div className="prose reveal">
            <p className="eyebrow">What to expect</p>
            <h2>Worship. The Word. A place to grow.</h2>
            <p>Our gatherings center on worship, biblical teaching, and prayer. There is no dress code. We want you to feel welcome and comfortable.</p>
            <dl className="info">
              <dt>Sunday</dt><dd>Worship at 11:00 AM Central, in person and online. Arrive a few minutes early.</dd>
              <dt>Wednesday</dt><dd>Night Bible Study at 7:00 PM Central, in person and online.</dd>
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
      <section className="gift" id="visit-form">
        <div className="wrap narrow">
          <div className="prose reveal">
            <p className="eyebrow">Plan your visit</p>
            <h2>Let us know you&rsquo;re coming.</h2>
            <p>Tell us a little about your visit and we&rsquo;ll be ready to greet you. We&rsquo;ll email you service times, directions, and what to expect.</p>
          </div>
          <div className="reveal">
            <VisitForm />
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="wrap narrow">
          <div className="prose reveal">
            <p className="eyebrow">Questions</p>
            <h2>Questions people ask before they visit.</h2>
            {faqs.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      </section>
      <NextStep />
    </>
  )
}

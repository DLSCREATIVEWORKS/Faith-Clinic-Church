import { NextStep, PageHero, Verse } from '@/components/Blocks'
import { site, pageMeta } from '@/lib'

export const metadata = pageMeta('Give', 'Give to Faith Clinic Church in Amarillo, Texas, by PayPal, Cash App, Venmo, or Zelle. Plant seeds that help hope reach others.', '/give/')

export default function Give() {
  return (
    <>
      <PageHero eyebrow="Give" title="Give with purpose. Help hope reach others.">
        <p>Your giving supports the teaching of God&rsquo;s Word, encourages families, and shares the hope of Jesus.</p>
      </PageHero>
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Plant seeds that touch lives.</h2>
            <p>Choose the way that works best for you.</p>
          </div>
          <div className="ways">
            <div className="card reveal">
              <h3>PayPal</h3>
              <p>Give securely through PayPal.</p>
              <a className="btn navy small" href={site.paypal}>Give with PayPal</a>
            </div>
            <div className="card reveal">
              <h3>Cash App</h3>
              <p>Send to:</p>
              <p className="handle">$Faithcc77</p>
            </div>
            <div className="card reveal">
              <h3>Venmo</h3>
              <p>Send to:</p>
              <p className="handle">@faithclinic77</p>
            </div>
            <div className="card reveal">
              <h3>Zelle</h3>
              <p>In your bank&rsquo;s Zelle service, enter this recipient email:</p>
              <p className="handle">theclinic@amaonline.com</p>
            </div>
          </div>
          <div style={{ marginTop: 40, maxWidth: 720 }}>
            <Verse text="For where your treasure is, there will your heart be also." cite="Matthew 6:21, KJV" />
          </div>
          <p style={{ marginTop: 24, color: 'var(--muted)' }}>You can also give in person at any service: {site.address}.</p>
        </div>
      </section>
      <NextStep />
    </>
  )
}

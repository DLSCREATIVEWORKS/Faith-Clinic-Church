import Link from 'next/link'
import { NextStep, PageHero, Verse } from '@/components/Blocks'
import { site, pageMeta } from '@/lib'

export const metadata = pageMeta('Books by Dr. Lee A. Simpson', 'Books by Dr. Lee A. Simpson, pastor of Faith Clinic Church: Lord, Teach Us to Pray; Transformation: Change Begins Within; and a free book for new believers.', '/books/')

export default function Books() {
  return (
    <>
      <PageHero eyebrow="LifeBook Publishing" title="Words that lead you deeper into God.">
        <p>Books by Dr. Lee A. Simpson on prayer and spiritual transformation, written out of his prayer life, his study of Scripture, and more than 40 years of ministry.</p>
      </PageHero>

      <section>
        <div className="wrap split">
          <div className="photo cover-shot reveal" style={{ maxWidth: 340, justifySelf: 'center' }}>
            <img src="/images/cover-lord-teach-us-to-pray.jpg" alt="Book cover: Lord, Teach Us to Pray by Dr. Lee A. Simpson" />
          </div>
          <div className="prose reveal">
            <p className="tag">Prayer · Intimacy · Presence</p>
            <h2>Lord, Teach Us to Pray</h2>
            <p><i>A Journey to the Heart of Intimacy With God</i></p>
            <p>Not a duty. A divine invitation. This book moves you past prayer formulas and into prayer as a living conversation with God. Learn to pray from peace, not pressure.</p>
            <p>Paperback $12.99 · Kindle $7.99</p>
            <div className="cta" style={{ marginTop: 6 }}>
              <a className="btn navy" href={site.ltutp}>Get it on Amazon</a>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>More from Dr. Simpson</h2>
          </div>
          <div className="shelf">
            <a className="book reveal" href={site.transformation}>
              <div className="cover"><img src="/images/cover-transformation.jpg" alt="Book cover: Transformation, Change Begins Within" /></div>
              <p className="tag">Identity · Growth · Renewal</p>
              <h3>Transformation: Change Begins Within</h3>
              <p>The journey to your best self. Spirit-led growth into the person God created you to be. Available on Amazon.</p>
            </a>
            <div className="book reveal">
              <div className="cover"><img src="/images/cover-living-in-agreement.jpg" alt="Book cover: Living in Agreement" /></div>
              <p className="tag">Coming soon</p>
              <h3>Living in Agreement</h3>
              <p>How the power of Amen releases healing, miracles, and the promises of God.</p>
            </div>
            <div className="book reveal">
              <div className="cover text"><b>They Are Not Aliens</b><span>Spiritual warfare</span></div>
              <p className="tag">Coming soon</p>
              <h3>They Are Not Aliens</h3>
              <p>Spiritual warfare prayers and biblical teaching for believers in an era of UFO disclosure.</p>
            </div>
            <a className="book reveal" href={site.newBelievers}>
              <div className="cover"><img src="/images/cover-new-believers.jpg" alt="Book cover: I Gave My Life to Jesus. Now What?" /></div>
              <p className="tag">Free ebook</p>
              <h3>I Gave My Life to Jesus. Now What?</h3>
              <p>A new believer&rsquo;s guide to knowing God, growing in faith, and living the Christian life.</p>
            </a>
          </div>
          <div className="cta">
            <a className="btn line" href={site.books}>Visit LifeBook Publishing</a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <Verse text="One thing I have asked of the Lord, that will I seek after." cite="Psalm 27:4" />
        </div>
      </section>
      <NextStep />
    </>
  )
}

import Link from 'next/link'
import { NextStep, Verse } from '@/components/Blocks'
import BlogFeed from '@/components/BlogFeed'
import Countdown from '@/components/Countdown'
import { site } from '@/lib'

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="hero-photo">
          <img src="/images/hero-worship.jpg" alt="A full sanctuary worshiping with raised hands and open Bibles, beside a pulpit with an open Bible under a brass lamp" />
        </div>
        <div className="lamp" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow rise">Faith Clinic Christian Center · Amarillo, Texas</p>
          <h1 className="rise d1">
            Faith comes by <em>hearing.</em>
          </h1>
          <p className="lede rise d2">
            Come hear the Word of God taught plainly, so you can believe it, live it and win in life. Under the leadership of Dr. Lee A. Simpson and Pastor Pat Simpson.
          </p>
          <div className="cta rise d3">
            <Link className="btn gold" href="/plan-your-visit/">Plan your visit</Link>
            <Link className="btn ghost" href="/watch/">Watch live on Sunday</Link>
          </div>
        </div>
      </div>

      <div className="times">
        <div className="wrap">
          <div className="grid">
            <div>
              <p className="name">Sunday Worship</p>
              <p className="time">11:00 AM</p>
              <p className="note">In person and online · Spanish translation available</p>
            </div>
            <div>
              <p className="name">Wednesday Bible Study</p>
              <p className="time">7:00 PM</p>
              <p className="note">Practical teaching for everyday life</p>
            </div>
          </div>
          <Countdown />
        </div>
      </div>

      <section className="center">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Welcome to Faith Clinic</p>
            <h2>A church where the Word is the medicine.</h2>
            <p>
              Faith. Family. Transformation. Whether you are exploring faith, coming back to church, or looking for a place to grow, there&rsquo;s a place for you here.
            </p>
          </div>
          <div className="cards">
            <div className="card reveal">
              <h3>You are welcome.</h3>
              <p>Come as you are. Dr. Lee and Pastor Pat Simpson and the whole church family are glad you&rsquo;re here.</p>
            </div>
            <div className="card reveal">
              <h3>Faith for everyday life.</h3>
              <p>We help you know Christ, understand His Word, and live it at home, in your relationships, and in your daily life.</p>
            </div>
            <div className="card reveal">
              <h3>Become who He called.</h3>
              <p>Experience God&rsquo;s presence, grow in Scripture, and discover your purpose in Christ.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap split">
          <div className="photo reveal">
            <img src="/images/pastors-lee-pat.jpg" alt="Dr. Lee A. Simpson with Pastor Pat Simpson" />
          </div>
          <div className="prose reveal">
            <p className="eyebrow">Your first Sunday</p>
            <h2>Feel at home before you arrive.</h2>
            <p>
              Sunday worship begins at 11:00 AM. Our gatherings center on worship, biblical teaching, and prayer. There is no dress code. Come comfortable, and come with an open heart.
            </p>
            <p>
              There&rsquo;s room for your family. KingdomSpark serves children from infancy through eighth grade, and families worship together on the first Sunday of each month.
            </p>
            <div className="cta" style={{ marginTop: 6 }}>
              <Link className="btn navy" href="/plan-your-visit/">What to expect</Link>
              <Link className="btn line" href="/about/">Meet our pastors</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="center">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Life together</p>
            <h2>Find a place to grow.</h2>
          </div>
          <div className="cards">
            <div className="card reveal">
              <p className="when">Children &amp; families</p>
              <h3>KingdomSpark</h3>
              <p>Children discover God&rsquo;s love and grow in His Word.</p>
              <Link href="/ministries/">Learn more</Link>
            </div>
            <div className="card reveal">
              <p className="when">Wednesdays · 7:00 PM</p>
              <h3>Bible Study</h3>
              <p>Build a foundation for your faith, one Wednesday at a time.</p>
              <Link href="/ministries/">Learn more</Link>
            </div>
            <div className="card reveal">
              <p className="when">Young people</p>
              <h3>Young Kingdom Warriors</h3>
              <p>Encouraging young people in faith, identity, and purpose.</p>
              <Link href="/ministries/">Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="wrap split flip">
          <div className="prose reveal">
            <p className="eyebrow">The Word for your week</p>
            <h2>Let your faith keep growing.</h2>
            <p>
              Can&rsquo;t be in the building? Be in the service. Sunday worship streams live at 11:00 AM Central, and past messages stay online so you can hear them again. You can also hear Dr. Simpson on the {site.radio}.
            </p>
            <div className="cta" style={{ marginTop: 6 }}>
              <a className="btn gold" href={site.youtube}>Watch messages</a>
              <Link className="btn ghost" href="/watch/">How to watch</Link>
            </div>
          </div>
          <Verse text="For we walk by faith, not by sight." cite="2 Corinthians 5:7, KJV" />
        </div>
      </section>

      <section className="gift">
        <div className="wrap split">
          <div className="cover reveal">
            <img src="/images/cover-new-believers.jpg" alt="Book cover: I Gave My Life to Jesus. Now What? by Dr. Lee A. Simpson" />
          </div>
          <div className="prose reveal">
            <p className="eyebrow">Free book for new believers</p>
            <h2>You gave your life to Jesus. Here is what to do next.</h2>
            <p>
              Dr. Simpson wrote this guide to answer the questions every new believer has. Tell us where to send it and it&rsquo;s yours, free.
            </p>
            <div className="cta">
              <a className="btn gold" href={site.newBelievers}>Get my free book</a>
            </div>
          </div>
        </div>
      </section>

      <section className="center">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Books by Dr. Lee A. Simpson</p>
            <h2>Words that lead you deeper into God.</h2>
          </div>
          <div className="shelf" style={{ textAlign: 'left' }}>
            <a className="book reveal" href={site.ltutp}>
              <div className="cover"><img src="/images/cover-lord-teach-us-to-pray.jpg" alt="Book cover: Lord, Teach Us to Pray" /></div>
              <h3>Lord, Teach Us to Pray</h3>
              <p>Prayer as a living conversation with God.</p>
            </a>
            <a className="book reveal" href={site.transformation}>
              <div className="cover"><img src="/images/cover-transformation.jpg" alt="Book cover: Transformation, Change Begins Within" /></div>
              <h3>Transformation</h3>
              <p>Change begins within. The journey to your best self.</p>
            </a>
            <Link className="book reveal" href="/books/">
              <div className="cover"><img src="/images/cover-living-in-agreement.jpg" alt="Book cover: Living in Agreement" /></div>
              <h3>Living in Agreement</h3>
              <p>Coming soon. The power of Amen.</p>
            </Link>
            <a className="book reveal" href={site.newBelievers}>
              <div className="cover"><img src="/images/cover-new-believers.jpg" alt="Book cover: I Gave My Life to Jesus. Now What?" /></div>
              <h3>I Gave My Life to Jesus. Now What?</h3>
              <p>Free guide for new believers.</p>
            </a>
          </div>
          <div className="cta" style={{ justifyContent: 'center' }}>
            <Link className="btn line" href="/books/">See all books</Link>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">From the blog</p>
            <h2>Latest teachings from Dr. Simpson</h2>
            <p>Read, reflect, and share the Word taught at Faith Clinic.</p>
          </div>
          <BlogFeed limit={3} />
          <div className="cta center-cta">
            <Link className="btn line" href="/blog/">See all teachings</Link>
          </div>
        </div>
      </section>
      <NextStep />
    </>
  )
}

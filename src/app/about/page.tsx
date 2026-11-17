import { pageMeta } from '@/lib'
import { NextStep, PageHero } from '@/components/Blocks'

export const metadata = pageMeta('Our Story', 'Faith Clinic Church in Amarillo, Texas, led by Dr. Lee A. Simpson and Pastor Pat Simpson. Restoring lives and growing in Christ through biblical teaching, prayer, and faith.', '/about/')

export default function About() {
  return (
    <>
      <PageHero eyebrow="Our story" title="Restoring lives. Growing in Christ.">
        <p>Faith Clinic is a church family in Amarillo, Texas, built on biblical teaching, prayer, and lives transformed through Jesus Christ.</p>
      </PageHero>

      <section>
        <div className="wrap split">
          <div className="photo reveal">
            <img src="/images/pastors-lee-pat.jpg" alt="Dr. Lee A. Simpson with Pastor Pat Simpson" />
          </div>
          <div className="prose reveal">
            <p className="eyebrow">Meet our pastors</p>
            <h2>A heart for people. A passion for the Word.</h2>
            <p>
              Dr. Lee A. Simpson is the founder and senior pastor of Faith Clinic. He has served in Christian ministry for more than 40 years, more than 30 of them as a pastor. His teaching puts the weight on faith, spiritual growth, and how to apply the Word in real life.
            </p>
            <p>
              Pastor Pat Simpson is the assistant pastor and serves right alongside him. Together they welcome individuals and families to grow in their relationship with Christ and discover their God-given purpose.
            </p>
            <div className="facts">
              <div><b>40+</b><span>years in ministry</span></div>
              <div><b>30+</b><span>years as a pastor</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap split flip">
          <div className="prose reveal">
            <p className="eyebrow">Our mission</p>
            <h2>Equipping believers for victorious living.</h2>
            <p>Our mission is to equip believers for victorious living and to restore lives through Christ&rsquo;s power.</p>
            <p>We believe spiritual growth should shape how you live, how you love, and how you serve every day.</p>
          </div>
          <div className="photo reveal" style={{ maxWidth: 380, justifySelf: 'center' }}>
            <img src="/images/dr-lee-simpson.jpg" alt="Dr. Lee A. Simpson" />
          </div>
        </div>
      </section>

      <section className="center">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Our ministry heart</p>
            <h2>Rooted in Christ. Lived out every day.</h2>
          </div>
          <div className="cards four">
            <div className="card reveal"><h3>Biblical teaching</h3><p>Learning God&rsquo;s Word and applying it to everyday life.</p></div>
            <div className="card reveal"><h3>Prayer &amp; faith</h3><p>Seeking God together, bringing our needs before Him, and encouraging one another to walk by faith.</p></div>
            <div className="card reveal"><h3>Spiritual growth</h3><p>Deepening our relationship with Jesus and becoming who He has called us to be.</p></div>
            <div className="card reveal"><h3>Family &amp; community</h3><p>Building relationships, strengthening families, and sharing Christ&rsquo;s hope with others.</p></div>
          </div>
        </div>
      </section>

      <NextStep />
    </>
  )
}

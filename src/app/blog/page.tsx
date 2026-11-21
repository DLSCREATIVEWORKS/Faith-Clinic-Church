import { NextStep, PageHero } from '@/components/Blocks'
import BlogFeed from '@/components/BlogFeed'
import { pageMeta, site } from '@/lib'

export const metadata = pageMeta(
  'Blog',
  'Teachings from Dr. Lee A. Simpson, Senior Pastor of Faith Clinic Church in Amarillo, Texas, on prayer, faith, healing, and growing in Christ.',
  '/blog/',
)

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Teachings for your walk of faith.">
        <p>Messages from Dr. Lee A. Simpson on prayer, faith, healing, and growing in Christ. New teachings appear here as they are published.</p>
      </PageHero>
      <section>
        <div className="wrap">
          <BlogFeed limit={24} />
          <div className="cta center-cta">
            <a className="btn line" href={site.blog} target="_blank" rel="noopener">Visit the full blog</a>
          </div>
        </div>
      </section>
      <NextStep />
    </>
  )
}

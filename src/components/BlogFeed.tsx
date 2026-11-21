'use client'

import { useEffect, useState } from 'react'
import { site } from '@/lib'

/* Shows the newest posts from Dr. Simpson's Video To Blog publication.
   Posts appear here automatically when he clicks Publish in Video To Blog.
   The publication's feed blocks direct reads from other websites, so it is
   read through rss2json.com, which returns it with the right permissions.
   That service refreshes the feed about once an hour. */

type Post = { title: string; link: string; date: string; summary: string; image: string }

const FEED = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(site.blogFeed)}`

function clean(text: string) {
  const div = typeof document !== 'undefined' ? document.createElement('div') : null
  if (!div) return text
  div.innerHTML = text
  return (div.textContent || '').replace(/\s+/g, ' ').trim()
}

function shorten(text: string, words: number) {
  const parts = text.split(' ')
  return parts.length <= words ? text : parts.slice(0, words).join(' ') + '…'
}

export default function BlogFeed({ limit = 12, dark = false }: { limit?: number; dark?: boolean }) {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch(FEED)
      .then((r) => r.json())
      .then((j) => {
        if (cancelled) return
        if (j.status !== 'ok' || !Array.isArray(j.items)) throw new Error('feed')
        setPosts(
          j.items.slice(0, limit).map((i: Record<string, unknown>) => ({
            title: clean(String(i.title || '')),
            link: String(i.link || site.blog),
            date: String(i.pubDate || ''),
            summary: shorten(clean(String(i.description || '')), 34),
            image: String(i.thumbnail || (i.enclosure as { link?: string } | undefined)?.link || ''),
          })),
        )
      })
      .catch(() => !cancelled && setFailed(true))
    return () => {
      cancelled = true
    }
  }, [limit])

  if (failed || (posts && posts.length === 0)) {
    return (
      <p className="blog-note">
        Read Dr. Simpson&rsquo;s latest teachings on{' '}
        <a href={site.blog} target="_blank" rel="noopener">his blog</a>.
      </p>
    )
  }

  if (!posts) {
    return (
      <div className={`cards blog-cards${dark ? ' on-dark' : ''}`} aria-busy="true">
        {Array.from({ length: Math.min(limit, 3) }).map((_, n) => (
          <div className="card blog-card loading" key={n} aria-hidden="true">
            <span className="bar w40" />
            <span className="bar w90" />
            <span className="bar w70" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="cards blog-cards">
      {posts.map((p) => {
        const d = p.date ? new Date(p.date.replace(' ', 'T') + (p.date.includes('Z') ? '' : 'Z')) : null
        return (
          <a className="card blog-card" href={p.link} target="_blank" rel="noopener" key={p.link}>
            {p.image ? <img src={p.image} alt="" loading="lazy" /> : null}
            {d && !isNaN(d.getTime()) ? (
              <p className="when">{d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            ) : null}
            <h3>{p.title}</h3>
            {p.summary ? <p>{p.summary}</p> : null}
            <span className="read">Read the teaching &rarr;</span>
          </a>
        )
      })}
    </div>
  )
}

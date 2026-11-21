import Link from 'next/link'
import { site } from '@/lib'

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <img className="foot-logo" src="/images/logo-full.webp" alt="Faith Clinic Christian Center Church" width="240" height="151" />
          <p>Restoring lives through Christ&rsquo;s power. Growing together in faith, purpose, and love.</p>
          <p>
            {site.address}
            <br />
            {site.phone} · {site.email}
          </p>
        </div>
        <div>
          <h3>Make yourself at home</h3>
          <ul>
            <li><Link href="/plan-your-visit/">Plan your visit</Link></li>
            <li><Link href="/about/">Meet our pastors</Link></li>
            <li><Link href="/ministries/">Explore ministries</Link></li>
            <li><Link href="/gatherings/">Weekly gatherings</Link></li>
          </ul>
        </div>
        <div>
          <h3>Stay connected</h3>
          <ul>
            <li><Link href="/watch/">Watch a message</Link></li>
            <li><Link href="/blog/">Read the blog</Link></li>
            <li><Link href="/request-prayer/">Request prayer</Link></li>
            <li><Link href="/give/">Give</Link></li>
            <li><a href={site.maps}>Get directions</a></li>
          </ul>
        </div>
        <div>
          <h3>Gather with us</h3>
          <p>
            Sundays 11:00 AM
            <br />
            Wednesdays 7:00 PM
            <br />
            Central Time
          </p>
          <p>
            <a href={site.youtube}>YouTube</a> · <a href={site.facebook}>Facebook</a>
          </p>
          <p>Radio: Kingdom Keys Network, 88.3 FM</p>
        </div>
      </div>
      <div className="wrap legal">© {new Date().getFullYear()} Faith Clinic Church. All rights reserved.</div>
    </footer>
  )
}

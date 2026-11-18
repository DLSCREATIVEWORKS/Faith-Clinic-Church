'use client'

import { useEffect, useState } from 'react'
import { site, siteUrl } from '@/lib'

const TZ = 'America/Chicago'
const LENGTH_MIN = 90 // matches the "happening right now" window in Countdown

const SERVICES = [
  {
    name: 'Sunday Worship',
    day: 0,
    hour: 11,
    description: 'Sunday worship service at 11:00 AM Central, in person and online.',
    online: true,
  },
  {
    name: 'Wednesday Night Bible Study',
    day: 3,
    hour: 19,
    description: 'Wednesday Night Bible Study at 7:00 PM Central, in person and online.',
    online: true,
  },
]

const DAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }

/* Calendar date, weekday and clock time of an instant, as seen in Amarillo. */
function central(date: Date) {
  const p: Record<string, string> = {}
  new Intl.DateTimeFormat('en-US', {
    timeZone: TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZoneName: 'longOffset',
  })
    .formatToParts(date)
    .forEach((x) => (p[x.type] = x.value))
  const offset = p.timeZoneName === 'GMT' ? '+00:00' : p.timeZoneName.replace('GMT', '')
  return {
    ymd: `${p.year}-${p.month}-${p.day}`,
    weekday: DAYS[p.weekday],
    minutes: (parseInt(p.hour, 10) % 24) * 60 + parseInt(p.minute, 10),
    offset,
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

/* The next (or current) date of a weekly service, with its Central offset (CST or CDT). */
function nextDate(day: number, hour: number, now: Date) {
  for (let i = 0; i <= 7; i++) {
    const c = central(new Date(now.getTime() + i * 86400000))
    if (c.weekday !== day) continue
    if (i === 0 && c.minutes >= hour * 60 + LENGTH_MIN) continue
    const endMin = hour * 60 + LENGTH_MIN
    return {
      start: `${c.ymd}T${pad(hour)}:00:00${c.offset}`,
      end: `${c.ymd}T${pad(Math.floor(endMin / 60))}:${pad(endMin % 60)}:00${c.offset}`,
    }
  }
  return null
}

const place = {
  '@type': 'Place',
  name: site.name,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2000 North Polk Street',
    addressLocality: 'Amarillo',
    addressRegion: 'TX',
    postalCode: '79107',
    addressCountry: 'US',
  },
}

/* Services are always free; this is the date free entry was first listed for Google. */
const FREE_SINCE = '2026-11-18T00:00:00-06:00'

const performers = [
  { '@type': 'Person', name: 'Dr. Lee A. Simpson' },
  { '@type': 'Person', name: 'Pastor Pat Simpson' },
]

/* Google needs a real start date for each Event, so the next service dates are worked out
   when the page opens (Google runs this script when it reads the page). */
export default function ServiceEvents() {
  const [data, setData] = useState<object[] | null>(null)
  useEffect(() => {
    const now = new Date()
    const events = SERVICES.flatMap((s) => {
      const when = nextDate(s.day, s.hour, now)
      if (!when) return []
      return [
        {
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: s.name,
          description: s.description,
          startDate: when.start,
          endDate: when.end,
          eventStatus: 'https://schema.org/EventScheduled',
          eventAttendanceMode: s.online
            ? 'https://schema.org/MixedEventAttendanceMode'
            : 'https://schema.org/OfflineEventAttendanceMode',
          eventSchedule: {
            '@type': 'Schedule',
            byDay: `https://schema.org/${s.day === 0 ? 'Sunday' : 'Wednesday'}`,
            startTime: `${pad(s.hour)}:00`,
            scheduleTimezone: TZ,
            repeatFrequency: 'P1W',
          },
          location: s.online ? [place, { '@type': 'VirtualLocation', url: site.youtube }] : place,
          image: `${siteUrl}/images/share.jpg`,
          isAccessibleForFree: true,
          performer: performers,
          offers: {
            '@type': 'Offer',
            price: 0,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            validFrom: FREE_SINCE,
            url: `${siteUrl}/plan-your-visit/`,
          },
          organizer: { '@type': 'Organization', name: site.name, url: siteUrl },
        },
      ]
    })
    setData(events)
  }, [])
  if (!data) return null
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

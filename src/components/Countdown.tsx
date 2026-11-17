'use client'

import { useEffect, useState } from 'react'

const WEEK = 604800
const DAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }
const SERVICES = [
  { at: 0 * 86400 + 11 * 3600, name: 'Sunday Worship' },
  { at: 3 * 86400 + 19 * 3600, name: 'Wednesday Night Bible Study' },
]

/* Time until the next service, always worked out in Amarillo (Central) time. */
function nextService() {
  const parts: Record<string, string> = {}
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  })
    .formatToParts(new Date())
    .forEach((p) => (parts[p.type] = p.value))
  const now =
    DAYS[parts.weekday] * 86400 + (parseInt(parts.hour, 10) % 24) * 3600 + parseInt(parts.minute, 10) * 60 + parseInt(parts.second, 10)
  let best = { until: WEEK, name: '' }
  let live = ''
  for (const s of SERVICES) {
    if ((now - s.at + WEEK) % WEEK < 5400) live = s.name
    const until = (s.at - now + WEEK) % WEEK
    if (until < best.until) best = { until, name: s.name }
  }
  return { ...best, live }
}

export default function Countdown() {
  const [state, setState] = useState<ReturnType<typeof nextService> | null>(null)
  useEffect(() => {
    const tick = () => setState(nextService())
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])
  if (!state) return <p className="countdown">Sundays 11:00 AM and Wednesdays 7:00 PM, Central Time</p>
  if (state.live) return <p className="countdown"><b>{state.live}</b> is happening right now. Join us in person or online.</p>
  const u = state.until
  const d = Math.floor(u / 86400)
  const h = Math.floor((u % 86400) / 3600)
  const m = Math.floor((u % 3600) / 60)
  const s = u % 60
  const pad = (n: number) => String(n).padStart(2, '0')
  return (
    <p className="countdown">
      {state.name} starts in{' '}
      <b>
        {d > 0 ? `${d}d ` : ''}
        {pad(h)}h {pad(m)}m {pad(s)}s
      </b>
    </p>
  )
}

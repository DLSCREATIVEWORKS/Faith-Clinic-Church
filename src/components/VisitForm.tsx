'use client'

import { useEffect, useRef, useState } from 'react'

/* Plan Your Visit form. Submits to the church's MailerLite form
   "FCC | Website Form | Plan Your Visit", which adds the visitor to the
   "FCC | Plan Your Visit" group. The "FCC | Plan Your Visit | Welcome"
   automation then emails service times and directions. */
const ENDPOINT = 'https://assets.mailerlite.com/jsonp/1690229/forms/204403631667021212/subscribe'

type State = { kind: 'idle' | 'busy' | 'ok' | 'error'; text: string }

export default function VisitForm() {
  const [state, setState] = useState<State>({ kind: 'idle', text: '' })
  const startedAt = useRef(Date.now())
  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const get = (k: string) => String(data.get(k) || '').trim()
    const email = get('email')
    const name = get('name')
    // Bot trap: people never see or fill the "website" field, and nobody
    // fills the whole form in under three seconds.
    if (get('website') || Date.now() - startedAt.current < 3000) {
      form.reset()
      setState({ kind: 'ok', text: "Thank you! We can't wait to meet you." })
      return
    }
    if (!name) {
      setState({ kind: 'error', text: 'Please tell us your name so we can welcome you.' })
      return
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setState({ kind: 'error', text: 'Please enter a valid email address so we can send your visit details.' })
      return
    }
    setState({ kind: 'busy', text: 'Sending…' })
    const body = new FormData()
    body.append('fields[email]', email)
    body.append('fields[name]', name)
    body.append('fields[phone]', get('phone'))
    body.append('fields[visit_service]', get('service'))
    body.append('fields[party_size]', get('party'))
    body.append('fields[children_ages]', get('children'))
    body.append('ml-submit', '1')
    body.append('anticsrf', 'true')
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body })
      const json = await res.json()
      if (json && json.success) {
        form.reset()
        setState({ kind: 'ok', text: `Thank you, ${name}! We can't wait to meet you. Check your email for service times and directions.` })
      } else {
        const first = json?.errors?.fields ? (Object.values(json.errors.fields)[0] as string[])[0] : ''
        setState({ kind: 'error', text: first || 'That did not go through. Please check your details and try again.' })
      }
    } catch {
      setState({ kind: 'error', text: 'We could not send that right now. Please call us at 806-381-7005 or email contact@faithclinicministries.org.' })
    }
  }

  return (
    <>
      <form className="visit-form" noValidate onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="vf-name">Your name</label>
          <input id="vf-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="vf-email">Email address</label>
          <input id="vf-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="vf-phone">Phone <span>(optional)</span></label>
          <input id="vf-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="vf-service">Which service?</label>
          <select id="vf-service" name="service" defaultValue="Sunday 11:00 AM Worship">
            <option>Sunday 11:00 AM Worship</option>
            <option>Wednesday 7:00 PM Bible Study</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="vf-party">How many are coming?</label>
          <select id="vf-party" name="party" defaultValue="1">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((n) => (
              <option key={n} value={n}>{n === '10' ? '10 or more' : n}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="vf-children">Bringing children? <span>(ages, optional)</span></label>
          <input id="vf-children" name="children" type="text" placeholder="e.g. 4 and 9" />
        </div>
        <div className="hp" aria-hidden="true">
          <label htmlFor="vf-website">Leave this empty</label>
          <input id="vf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <button className="btn gold" type="submit" disabled={state.kind === 'busy'}>
          {state.kind === 'busy' ? 'Sending…' : 'Plan my visit'}
        </button>
      </form>
      <p className={`msg ${state.kind}`} role="status">{state.text}</p>
    </>
  )
}

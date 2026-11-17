'use client'

import { useState } from 'react'

/* Free-book request form. Submits to the church's MailerLite form
   ("FCC | Website Form | I Gave My Life to Jesus. Now What? | New Believers").
   MailerLite sends a confirmation email, then the automation delivers the book. */
const ENDPOINT = 'https://assets.mailerlite.com/jsonp/1690229/forms/204210142100587583/subscribe'

type State = { kind: 'idle' | 'busy' | 'ok' | 'error'; text: string }

export default function SignupForm() {
  const [state, setState] = useState<State>({ kind: 'idle', text: '' })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const email = String(data.get('email') || '').trim()
    const name = String(data.get('name') || '').trim()
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setState({ kind: 'error', text: 'Please enter a valid email address so we know where to send the book.' })
      return
    }
    setState({ kind: 'busy', text: 'Sending your request…' })
    const body = new FormData()
    body.append('fields[email]', email)
    body.append('fields[name]', name)
    body.append('ml-submit', '1')
    body.append('anticsrf', 'true')
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body })
      const json = await res.json()
      if (json && json.success) {
        form.reset()
        setState({ kind: 'ok', text: 'Check your email. Confirm your address and the book will be on its way.' })
      } else {
        const first = json?.errors?.fields ? (Object.values(json.errors.fields)[0] as string[])[0] : ''
        setState({ kind: 'error', text: first || 'That did not go through. Please check your email address and try again.' })
      }
    } catch {
      setState({ kind: 'error', text: 'We could not reach the signup service. Please try again, or email contact@faithclinicministries.org.' })
    }
  }

  return (
    <>
      <form className="signup" noValidate onSubmit={onSubmit}>
        <label htmlFor="su-name">First name</label>
        <input id="su-name" name="name" type="text" placeholder="First name" autoComplete="given-name" />
        <label htmlFor="su-email">Email address</label>
        <input id="su-email" name="email" type="email" placeholder="Email address" autoComplete="email" />
        <button className="btn gold" type="submit" disabled={state.kind === 'busy'}>
          {state.kind === 'busy' ? 'Sending…' : 'Send my free book'}
        </button>
      </form>
      <p className="msg" role="status">{state.text}</p>
    </>
  )
}

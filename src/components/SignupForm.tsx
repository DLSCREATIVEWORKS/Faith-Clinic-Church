'use client'

import { useState } from 'react'

/* Free-book request form. Not connected to MailerLite yet: it validates and says so. */
export default function SignupForm() {
  const [msg, setMsg] = useState('')
  return (
    <>
      <form
        className="signup"
        noValidate
        onSubmit={(e) => {
          e.preventDefault()
          const email = String(new FormData(e.currentTarget).get('email') || '').trim()
          if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            setMsg('Please enter a valid email address so we know where to send the book.')
            return
          }
          setMsg('Test site: nothing was sent yet. This form will deliver the book by email once it is connected.')
        }}
      >
        <label htmlFor="su-name">First name</label>
        <input id="su-name" name="name" type="text" placeholder="First name" autoComplete="given-name" />
        <label htmlFor="su-email">Email address</label>
        <input id="su-email" name="email" type="email" placeholder="Email address" autoComplete="email" />
        <button className="btn gold" type="submit">Send my free book</button>
      </form>
      <p className="msg" role="status">{msg}</p>
    </>
  )
}

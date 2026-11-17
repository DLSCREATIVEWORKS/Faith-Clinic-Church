import type { ReactNode } from 'react'
import Effects from '@/components/Effects'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: { default: 'Welcome Home | Faith Clinic Church', template: '%s | Faith Clinic Church' },
  description:
    'Faith Clinic Church in Amarillo, Texas. Sunday worship at 11:00 AM and Wednesday Night Bible Study at 7:00 PM with Dr. Lee A. Simpson and Pastor Pat Simpson.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Figtree:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Effects />
      </body>
    </html>
  )
}

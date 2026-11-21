import type { ReactNode } from 'react'
import Effects from '@/components/Effects'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ServiceEvents from '@/components/ServiceEvents'
import './globals.css'
import { site, siteUrl } from '@/lib'

const description =
  'Faith Clinic Church in Amarillo, Texas. Sunday worship at 11:00 AM and Wednesday Night Bible Study at 7:00 PM with Dr. Lee A. Simpson and Pastor Pat Simpson.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Faith Clinic Church | Amarillo, TX | Welcome Home', template: '%s | Faith Clinic Church' },
  description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Faith Clinic Church',
    locale: 'en_US',
    url: '/',
    title: 'Faith Clinic Church | Amarillo, TX',
    description,
    images: [{ url: '/images/share.jpg', width: 1200, height: 630, alt: 'Faith Clinic Church in Amarillo, Texas' }],
  },
  twitter: { card: 'summary_large_image', images: ['/images/share.jpg'] },
}

/* Tells Google this is a church, where it is, and how to reach it. */
const churchData = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: 'Faith Clinic Church',
  alternateName: ['Faith Clinic Christian Center', 'Faith Clinic Christian Center Church', 'Faith Clinic Ministries'],
  url: siteUrl,
  logo: `${siteUrl}/images/logo-full.webp`,
  image: `${siteUrl}/images/share.jpg`,
  description,
  telephone: '+1-806-381-7005',
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2000 North Polk Street',
    addressLocality: 'Amarillo',
    addressRegion: 'TX',
    postalCode: '79107',
    addressCountry: 'US',
  },
  hasMap: site.maps,
  sameAs: [site.youtube, site.facebook],
}

/* Tells search engines and AI assistants who the pastor is and links his public profiles. */
const pastorData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lee A. Simpson',
  honorificPrefix: 'Dr.',
  jobTitle: 'Senior Pastor',
  description:
    'Dr. Lee A. Simpson is Senior Pastor of Faith Clinic Church (Faith Clinic Christian Center) in Amarillo, Texas, an author, and a Bible teacher heard on the Kingdom Keys Network, 88.3 FM.',
  worksFor: { '@type': 'Organization', name: 'Faith Clinic Church', alternateName: 'Faith Clinic Crusaders Ministries', url: siteUrl },
  url: `${siteUrl}/about/`,
  sameAs: [site.facebook, site.youtube, site.books],
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(churchData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pastorData) }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Effects />
        <ServiceEvents />
      </body>
    </html>
  )
}

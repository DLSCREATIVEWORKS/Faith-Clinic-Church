export const site = {
  name: 'Faith Clinic Church',
  fullName: 'Faith Clinic Christian Center',
  address: '2000 North Polk Street, Amarillo, TX 79107',
  phone: '806-381-7005',
  email: 'contact@faithclinicministries.org',
  maps: 'https://www.google.com/maps/search/?api=1&query=2000+North+Polk+Street+Amarillo+TX',
  youtube: 'https://www.youtube.com/@FAITHCLINICONLINE-DR-SIMPSON/streams',
  facebook: 'https://facebook.com/DrLeeSimpson',
  paypal: 'https://www.paypal.com/donate?hosted_button_id=LVCUSRENLYG8G',
  books: 'https://lifebookpublishing.com/',
  ltutp: 'https://www.amazon.com/dp/B0G3GP6KRM',
  transformation: 'https://www.amazon.com/dp/B0DRYR33HK',
  radio: 'Kingdom Keys Network, 88.3 FM in Amarillo',
  newBelievers: 'https://newbelievers.faithclinicministries.org',
  /* Dr. Simpson's Video To Blog publication. Change these two lines to switch blogs. */
  blog: 'https://prayers-spiritual-warfare.videotoblog.ai',
  blogFeed: 'https://prayers-spiritual-warfare.videotoblog.ai/rss',
}

export const nav = [
  { href: '/about/', label: 'Our Story' },
  { href: '/ministries/', label: 'Ministries' },
  { href: '/watch/', label: 'Watch' },
  { href: '/blog/', label: 'Blog' },
  { href: '/gatherings/', label: 'Gatherings' },
  { href: '/books/', label: 'Books' },
  { href: 'https://newbelievers.faithclinicministries.org', label: 'New Believers' },
  { href: '/plan-your-visit/', label: 'Plan Your Visit' },
]

/* The one address search engines should treat as the site's home.
   faithclinicministries.org and http:// both forward here (see public/.htaccess). */
export const siteUrl = 'https://www.faithclinicministries.org'

/* Title, description, canonical address and social-share tags for one page. */
export function pageMeta(title: string, description: string, path: string) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: 'Faith Clinic Church',
      locale: 'en_US',
      title: `${title} | Faith Clinic Church`,
      description,
      url: path,
      images: [{ url: '/images/share.jpg', width: 1200, height: 630, alt: 'Faith Clinic Church in Amarillo, Texas' }],
    },
    twitter: { card: 'summary_large_image', title: `${title} | Faith Clinic Church`, description, images: ['/images/share.jpg'] },
  }
}

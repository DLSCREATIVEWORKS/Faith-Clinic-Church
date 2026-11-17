import { siteUrl } from '@/lib'

export const dynamic = 'force-static'

const pages = ['/', '/plan-your-visit/', '/about/', '/gatherings/', '/ministries/', '/watch/', '/books/', '/new-believers/', '/request-prayer/', '/give/']

export default function sitemap() {
  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? ('weekly' as const) : ('monthly' as const),
    priority: path === '/' ? 1 : path === '/plan-your-visit/' ? 0.9 : 0.7,
  }))
}

'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/* Eases sections in as they scroll into view. Content stays readable before it animates. */
export default function Effects() {
  const pathname = usePathname()
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('wait')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add('wait')
        el.style.transitionDelay = `${(i % 3) * 90}ms`
        io.observe(el)
      }
    })
    return () => io.disconnect()
  }, [pathname])
  return null
}

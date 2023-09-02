'use client'

import SideScrollImage from '@/components/Home/SideScrollImage'
import { useEffect } from 'react'
import Where from '@/components/Home/Where'
import Gallery from '@/components/Home/Gallery/Gallery'


export default function Home() {

  useEffect( () => {
    (
      //smooth scroll initialising (consider using lenis smooth scroll for this)
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll({
          lenisOptions: {
              wrapper: window,
              content: document.documentElement,
              lerp: 0.1,
              duration: 1.2,
              orientation: 'vertical',
              gestureOrientation: 'vertical',
              smoothWheel: true,
              smoothTouch: true,
              wheelMultiplier: 1,
              touchMultiplier: 2,
              normalizeWheel: true,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
          },
      })
      }
    )()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className = 'overflow-clip bg-pastel-gray-light'>
      <SideScrollImage/>
      <Where/>
      <Gallery/>
    </main>
  )
}

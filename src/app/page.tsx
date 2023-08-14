'use client'

import SideScrollImage from '@/components/SideScrollImage'
import { useEffect } from 'react'
import Images from '@/components/Images'
import Gallery from '@/components/Gallery'
import GalleryLink from '@/components/GalleryLink'


export default function Home() {

  // useEffect(() => {
  //   window.history.scrollRestoration = 'manual'
  // }, []);

  useEffect( () => {
    (
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

  return (
    <main className = 'overflow-clip bg-pastel-gray-light'>
      <SideScrollImage/>
      <Images/>
      <Gallery/>
    </main>
  )
}

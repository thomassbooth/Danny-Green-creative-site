'use client'

import { useEffect } from 'react'



const LocomotiveScrollProvider = ({
    children,
  }: {
    children: React.ReactNode
  }) => {

    useEffect( () => {
        (
          async () => {
          //   const LocomotiveScroll = (await import('locomotive-scroll')).default
          //   const locomotiveScroll = new LocomotiveScroll({
          //     lenisOptions: {
          //         wrapper: window,
          //         content: document.documentElement,
          //         lerp: 0.1,
          //         duration: 1.2,
          //         orientation: 'vertical',
          //         gestureOrientation: 'vertical',
          //         smoothWheel: true,
          //         smoothTouch: true,
          //         wheelMultiplier: 1,
          //         touchMultiplier: 2,
          //         normalizeWheel: true,
          //         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
          //     },
          // })
          }
        )()
      }, [])
  return (
    <>
        {children}
    </>
  )
}

export default LocomotiveScrollProvider
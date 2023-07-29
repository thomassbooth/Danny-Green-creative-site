'use client'

import SideScrollImage from '@/components/SideScrollImage'
import Navlinks from '@/components/Navlinks'
import Text3D from '@/components/Text3D'
import { useEffect } from 'react'
import Images from '@/components/Images'


export default function Home() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll()
      }
    )()
  }, [])

  return (
    <main className = 'overflow-clip bg-pastel-gray-light'>
      
      <SideScrollImage/>
      <Images/>
      <div className = 'h-screen'>

      </div>
      
    </main>
  )
}

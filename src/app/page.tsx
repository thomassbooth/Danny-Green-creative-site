'use client'

import HorizontalImages from '@/components/HorizontalImages'
import Navlinks from '@/components/Navlinks'
import Text3D from '@/components/Text3D'
import { useEffect } from 'react'


export default function Home() {

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll()
      }
    )()
  }, [])

  return (
    <main className = 'overflow-clip'>
      <Navlinks/>
      <HorizontalImages/>
      <div className = 'h-screen'>

      </div>
      
    </main>
  )
}

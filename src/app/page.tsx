'use client'

import HorizontalImages from '@/components/SideScrollImage'
import Navlinks from '@/components/Navlinks'
import Text3D from '@/components/Text3D'
import { useEffect } from 'react'


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
      
      <HorizontalImages/>
      <div className = 'flex justify-center items-center h-[200vh] text-[10vw] font-bold bg-[#171717] text-white w-[100vw]'>
          Imagesss
      </div>
      <div className = 'h-screen'>

      </div>
      
    </main>
  )
}

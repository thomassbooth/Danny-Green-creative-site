import React, { useRef } from 'react'
import Text3D from './Text3D'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

interface navlinksProps {
}

const Navlinks: React.FC<navlinksProps> = () => {

  const targetRef = useRef(null)

  return (
    <div ref = {targetRef} className = 'h-[100vh] relative overflow-hidden'>
      <div 
        data-scroll
        data-scroll-speed = '0.2'
        className = {`sticky top-0 m-auto h-[130vh] w-[130vw]`}>
        <Image 
          src = '/images/18-Grizzlies-at-dawn.jpg' 
          quality = {100} 
          layout='fill' 
          objectFit='cover' 
          objectPosition='center' 
          alt = 'grizzly'/>
      </div>
      <div className = 'pointer-events-none absolute text-[10vw] font-bold z-20 top-0'>
        <div className = 'flex flex-col text-pastel-gray-light tracking-tight items-center leading-none w-screen h-[130vh]'>
            <p className = 'z-20 uppercase font-[800] mt-[30vh]'
            data-scroll
            data-scroll-speed = '0.3'>
              danny
              <br/>
              green
            </p>
            <div className = 'w-screen inline-flex justify-center  ml-[4vw] '>
              <p className = 'z-20 uppercase tracking-tight text-[2vw]'
              data-scroll
              data-scroll-speed = '0.2'>
                Capturing.
                <br/>
                The natural world.
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navlinks

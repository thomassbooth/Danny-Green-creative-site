'use client'

import React, { useRef } from 'react'
import Text3D from './Text3D'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

interface navlinksProps {
}

const Navlinks: React.FC<navlinksProps> = () => {

  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  return (
    <div ref = {targetRef} className = 'h-[100vh]'>
      <div 
        data-scroll
        data-scroll-speed = '0.2'
        className = {`sticky saturate-50 brightness-60 top-0 m-auto h-[130vh] w-[130vw]`}>
        <Image src = '/images/18-Grizzlies-at-dawn.jpg' quality = {100} priority fill = {true} alt = 'grizzly'/>
      </div>
      <div className = 'pointer-events-none absolute text-[10vw] font-bold z-20 top-0'>
        <div className = 'flex flex-col text-pastel-gray-light items-center justify-center w-screen h-[130vh]'>
            <p className = 'z-20 mt-[30vh]'
            data-scroll
            data-scroll-speed = '0.6'>
              danny
              <br/>
              green
            </p>
            <p className = 'z-20 ml-[5vw] mt-[30vh]'
            data-scroll
            data-scroll-speed = '0.8'>
              Uk based photographer
            </p>
        </div>
      </div>
    </div>
  )
}

export default Navlinks



{/* <div className = 'transform ml-[5vw] mt-[30vh] rotate-x-[-5deg] rotate-z-[-5deg] h-[130vh] flex flex-col items-start'>
                <Text3D primary = {"Magestic"} secondary = {"Tigers"}/>
                <Text3D primary = {"Wild"} secondary = {"Alaska"}/> 
                <Text3D primary = {"Elusive"} secondary = {"Wolves"}/>
                <Text3D primary = {"British"} secondary = {"Coasts"}/>
            </div> */}
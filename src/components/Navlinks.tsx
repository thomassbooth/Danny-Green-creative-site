'use client'

import React, { useRef } from 'react'
import Text3D from './Text3D'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

const Navlinks = () => {

  

  return (
    <div >
      <div 
        data-scroll
        data-scroll-speed = '-1'
        className = 'relative saturate-10 top-0 m-auto h-[130vh] w-[130vw]'>
        <Image src = '/images/18-Grizzlies-at-dawn.jpg' quality = {100} priority fill = {true} alt = 'grizzly'/>
      </div>
      <div>
        <div className = 'pointer-events-none absolute text-[10vw] font-bold z-20 top-0 h-[200vh]'>
          <motion.div 
            data-scroll
            data-scroll-speed = '-0.5'
            className = 'flex text-pastel-gray-light justify-center tex items-center w-screen h-screen'>
              <p>
                danny
                <br/>
                green
              </p>
          </motion.div>
        </div>
      </div>
      <motion.div 
        data-scroll
        data-scroll-speed = '0.3'
        className = 'transform ml-[10vw] rotate-x-[-5deg] rotate-z-[-5deg] h-screen flex flex-col items-start  z-20'>
          <Text3D primary = {"Polar"} secondary = {"Arctic"}/>
          <Text3D primary = {"Magestic"} secondary = {"Tigers"}/>
          <Text3D primary = {"Wild"} secondary = {"Alaska"}/> 
          <Text3D primary = {"Elusive"} secondary = {"Wolves"}/>
          <Text3D primary = {"British"} secondary = {"Coasts"}/>
      </motion.div>
    </div>
  )
}

export default Navlinks
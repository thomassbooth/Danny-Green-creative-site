'use client'

import React, { useRef } from 'react'
import Text3D from './Text3D'
import { useScroll, useTransform, motion } from 'framer-motion'

const Navlinks = () => {

  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const y = useTransform(scrollYProgress, [0, 0.8], ['0vh', '100vh'])
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.6])
  const opacity = useTransform(scrollYProgress, [0.9999, 1], [1, 0])
  return (
    <div>
      <div>
        <div ref = {targetRef} className = 'pointer-events-none absolute text-[10vw] text-white font-bold z-20 top-0 h-[200vh]'>
          <motion.div 
            style = {{y, scale, opacity}}
            className = 'flex justify-center items-center w-screen h-screen'>
            DANNY GREEN
          </motion.div>
        </div>
      </div>
      <div className = 'flex h-screen flex-col top-0 items-start w-screen '>
          <Text3D primary = {"Polar"} secondary = {"Arctic"}/>
          <Text3D primary = {"Magestic"} secondary = {"Tigers"}/>
          <Text3D primary = {"Wild"} secondary = {"Alaska"}/>
          <Text3D primary = {"Elusive"} secondary = {"Wolves"}/>
          <Text3D primary = {"British"} secondary = {"Coasts"}/>
      </div>
    </div>
  )
}

export default Navlinks
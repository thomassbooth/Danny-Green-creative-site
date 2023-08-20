import React, { useRef } from 'react'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import Image from 'next/image'

interface navlinksProps {
  slideImageY: MotionValue<string>
  slideText1: MotionValue<string>
  slideText2: MotionValue<string>
}

const Navlinks: React.FC<navlinksProps> = ({slideImageY, slideText1, slideText2}) => {

  return (
    <div  className = 'h-[100vh] relative overflow-hidden'>
      <motion.div 
        // data-scroll
        // data-scroll-speed = '0.2'
        style = {{y: slideImageY}}
        className = {`sticky top-0 m-auto h-[130vh] w-[100vw]`}>
        <Image 
          src = '/images/18-Grizzlies-at-dawn.jpg' 
          quality = {100} 
          layout='fill' 
          objectFit='cover' 
          objectPosition='center' 
          alt = 'grizzly'/>
      </motion.div>
      <div className = 'pointer-events-none absolute text-[10vw] font-bold z-20 top-0'>
        <motion.div
          style = {{y: slideText1}}
          className = 'flex flex-col text-pastel-gray-light tracking-tight items-center leading-none w-screen h-[130vh]'>
            <p
              className = 'z-20 uppercase font-[800] mt-[30vh]'>
              danny
              <br/>
              green
            </p>
            <motion.div
              style = {{x: slideText2}}
              className = 'w-screen inline-flex justify-center  ml-[4vw] '>
              <p className = 'z-20 uppercase tracking-tight text-[2vw]'>
                Capturing.
                <br/>
                The natural world.
              </p>
            </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Navlinks

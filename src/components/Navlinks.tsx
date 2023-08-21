import React, { useRef } from 'react'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import Image from 'next/image'
import Title from './Title'

interface navlinksProps {
  slideImageY: MotionValue<string>
  slideText1: MotionValue<string>
  slideText2: MotionValue<string>
}

const underTextVar = {
  initial: {
    x: '100%'
  },
  enter: {
    x: '0%',
    transition: {duration: 0.5, delay: 1}
  }
}

const Navlinks: React.FC<navlinksProps> = ({slideImageY, slideText1, slideText2}) => {

  return (
    <div  className = 'h-[100vh] relative overflow-hidden'>
      <motion.div 
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
          className = 'flex flex-col mt-[30vh] text-pastel-gray-light tracking-tight items-center leading-none w-screen h-[130vh]'>
            <Title className = 'leading-[9vw] font-[700] text-[10vw]' text = {'danny'} />
            <Title className = 'leading-[9vw] font-[700] text-[10vw]' text = {'green'} />
            <motion.div
              style = {{x: slideText2}}
              className = 'overflow-hidden block ml-[4vw] '>
              <motion.p
                 whileInView="enter"
                 viewport={{ once: true }}
                 initial={'initial'}
                 variants = {underTextVar}
                className = 'z-20 font-[500] uppercase tracking-tight text-[2vw]'>
                Capturing.
                <br/>
                The natural world
              </motion.p>
            </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Navlinks

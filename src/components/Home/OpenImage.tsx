import React, { useRef } from 'react'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import Image from 'next/image'
import Title from '../Title'

interface navlinksProps {
  imageScale: MotionValue<number>
  slideImageY: MotionValue<string>
  slideText1: MotionValue<string>
  slideText2X: MotionValue<string>
  slideText2Y: MotionValue<string>
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

const OpenImage: React.FC<navlinksProps> = ({imageScale, slideImageY, slideText1, slideText2X, slideText2Y}) => {

  
  return (
    <div  className = 'h-[100vh] relative overflow-hidden'>
      {/* The div will translate up as you scroll and will also zoom out*/}
      <motion.div
        whileInView={{opacity: 1}}
        viewport={{ once: true }}
        initial={{opacity: 0}}
        transition={{delay: 0.5, duration: 0.8}}
        style = {{y: slideImageY, scale: imageScale}}
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
        <div
          className = 'flex flex-col mt-[20vh] text-pastel-gray-light tracking-tight items-center leading-none w-screen h-[130vh]'>
            {/* This moves the text as you scroll for a nice parallax effect */}
            <motion.div
              style = {{y: slideText1}}
              className = 'flex flex-col w-screen items-center '>
              <Title className = 'leading-[12vw] font-[700] text-[15vw]' text = {'danny'} />
              <Title className = 'leading-[12vw] font-[700] text-[15vw]' text = {'green'} />
            </motion.div>
            {/* slides the text when you scroll, moves it on the x and y axis */}
            <motion.div
              style = {{x: slideText2X, y: slideText2Y}}
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
        </div>
      </div>
    </div>
  )
}

export default OpenImage

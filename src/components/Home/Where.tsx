import { Libre_Baskerville } from 'next/font/google'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatePhrase from '../AnimatePhrase'
import Title from '../Title'

const libre = Libre_Baskerville({ weight: ['400', '700'], style: ['italic', 'normal'], subsets: ['latin'] })

const phrase = [
  "I'm an award-winning photographer with my work featured in major",
  "wildlife events and represented by leading agencies. I co-run Natures Images,",
  "a top UK-based photography tour business. We're considered one of",
  "Europe's premier photo tour companies."
]

const imageOpen = {
  initial: {
    y: '50%',
    opacity: 1,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

const Where = () => {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  }) 

  const imageWrapperY = useTransform(scrollYProgress, [0.3, 1], ['0vh', '15vh'])
  const titlesY = useTransform(scrollYProgress, [0, 1], ['0vh', '-13vh'])
  const imageY = useTransform(scrollYProgress, [0.3, 1], ['0vh', '10vh'])

  return (
      <div ref = {container}
        className = 'flex flex-col items-center min-h-screen py-[20vh] text-[10vw] font-bold bg-background-gray text-pastel-gray-light w-[100vw]'>
        <div 
          className = 'flex flex-col justify-center leading-none tracking-[-0.01em] items-center w-screen'>
          <motion.span
            style = {{y: titlesY}}
            initial = 'hidden'
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: {opacity: 0, y: '-100%'},
                visible: {opacity: 1, y: '0%'}
            }}
            transition = {{delay: 0.5, duration: 0.5}}
            className = {`${libre.className} italic font-extralight text-[2.5vw]`}>
            Where?
          </motion.span>
          <div className = 'flex flex-col items-center'>
            <Title className = 'leading-[11vw] font-[900] tracking-[-.055em] text-[13vw] ' text = {'Widely'} />
            <Title className = 'leading-[11vw] font-[900] tracking-[-.055em] text-[13vw] ' text = {'Published'} />
          </div>
        </div>
        <AnimatePhrase phrase = {phrase} className = {`${libre.className} text-center font-light text-[2vw] flex flex-col leading-[5vh] justify-center tracking-[-0.01em] items-center`}/>
        {/* Parallax image, the wrapper of the image will move down
            has overflow hidden so we can translate the image inside to move as we scroll
            creating a parallax effect*/}
        <motion.div
          style = {{y: imageWrapperY}} 
          className = 'mt-[3vh] overflow-hidden'>
          <motion.div
            whileInView="open"
            viewport={{ once: true }}
            initial={'initial'}
            variants={imageOpen}
            className = 'flex justify-start items-end w-[30vw] h-[40vh] saturate-0 mr-[5vw] relative overflow-hidden'>
            {/* Moves up as we scroll giving us a nice parallax effect */}
            <motion.div 
              style = {{y: imageY}}
              className = 'w-[40vw] h-[60vh] relative'>
                <Image
                  className = 'object-cover'
                  src = '/images/Common-Frog-22.jpg' alt = 'froggy' fill/>
            </motion.div>
          </motion.div>
        </motion.div>
    </div>
  )
}

export default Where
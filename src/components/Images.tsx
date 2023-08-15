import { Libre_Baskerville } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import AnimatePhrase from './AnimatePhrase'

const libre = Libre_Baskerville({ weight: ['400', '700'], style: ['italic', 'normal'], subsets: ['latin'] })

const phrase = [
  "I'm an award-winning photographer with my work featured in major",
  "wildlife events and represented by leading agencies. I co-run Natures Images,",
  "a top UK-based photography tour business. We're considered one of",
  "Europe&apos;s premier photo tour companies."
]

const Images = () => {

  return (
      <div className = 'flex flex-col items-center min-h-screen py-[20vh] text-[10vw] font-bold bg-background-gray text-pastel-gray-light w-[100vw]'>
        <div 
          data-scroll
          className = 'flex flex-col mb-[8vh] justify-center leading-none tracking-[-0.01em] items-center w-screen'>
          <motion.span
            initial = 'hidden'
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: {opacity: 0, y: '-100%'},
                visible: {opacity: 1, y: '0%'}
            }}
            transition = {{delay: 0.5, duration: 0.5}}
            className = {`${libre.className} italic font-extralight text-[2.5vw]`}>Where?</motion.span>
          <span className = ' z-20 text-center font-[900] tracking-[-.055em] text-[13vw] uppercase'>WIDELY</span>
          <motion.span
            initial = 'hidden'
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: {opacity: 0, x: '100%'},
                visible: {opacity: 1, x: '0%'}
            }}
            transition = {{delay: 0.5, duration: 0.7}}
            className = 'z-20 text-center font-[900] leading-[13vh] tracking-[-.055em] text-[13vw] uppercase'>
              PUBLISHED
          </motion.span>
        </div>
        <AnimatePhrase phrase = {phrase} className = {`${libre.className} text-center font-light text-[2vw] flex flex-col leading-[5vh] justify-center tracking-[-0.01em] items-center`}/>
      <motion.div 
        initial = 'hidden'
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
            hidden: {opacity: 0, scale: 0},
            visible: {opacity: 1, scale: 1}
        }}
        transition = {{delay: 0.5, duration: 1, type: "spring"}}
        className = 'mt-[10vh] relative w-[30vw] h-[40vh] saturate-0'>
        <Image src = '/images/Common-Frog-22.jpg' alt = 'froggy' fill/>
      </motion.div>
    </div>
  )
}

export default Images
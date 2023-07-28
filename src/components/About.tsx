'use client'

import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Libre_Baskerville } from 'next/font/google'
import { motion } from 'framer-motion'

const libre = Libre_Baskerville({ weight: ['400', '700'], style: ['italic', 'normal'], subsets: ['latin'] })

const About = () => {

  return (
    <div 
      data-scroll
      className = 'flex flex-col justify-center leading-none tracking-[-0.01em] items-center text-[#171717] h-screen w-screen'>
        <motion.span
          initial = 'hidden'
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
              hidden: {opacity: 0, y: '-100%'},
              visible: {opacity: 1, y: '0%'}
          }}
          transition = {{delay: 0.5, duration: 0.5}}
          className = {`${libre.className} italic font-extralight text-[2.5vw]`}>Danny Who?</motion.span>
        <span className = ' z-20 text-center font-[900] tracking-[-.055em] text-[13vw] uppercase'>HE TAKES</span>
        <motion.span
          initial = 'hidden'
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
              hidden: {opacity: 0, x: '100%'},
              visible: {opacity: 1, x: '0%'}
          }}
          transition = {{delay: 0.5, duration: 0.5}}
          className = 'mb-20 z-20 text-center font-[900] leading-[13vh] tracking-[-.055em] text-[13vw] uppercase'>PHOTOS</motion.span>
        <span className = 'h-[20vh] overflow-hidden '>
        <motion.div 
          initial = 'hidden'
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
              hidden: {opacity: 0, y: '100%'},
              visible: {opacity: 1, y: '0%'}
          }}
          transition = {{delay: 1, duration: 0.7}}
          className = {`${libre.className} font-light text-[2vw] flex flex-col leading-[4.5vh] justify-center tracking-[-0.01em] items-center`}>
          <span>Growing up in Leicestershire, UK, my grandfather sparked my</span>
          <span>passion for nature and wildlife. Today, I relish photographing the</span>
          <span>Shetland Isles wildlife and exploring the challenging Arctic.</span>
          <span>This journey deepens my lifelong connection to the natural world.</span>
        </motion.div>
        </span>
        {/*<span className = {`${libre.className} font-light text-[2vw]`}>Widely published around the world</span>
        <span className = {`${libre.className} font-light text-[2vw]`}>Based in Leicestershire, UK</span> */}
    </div>
  )
}

export default About
'use client'

import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Libre_Baskerville } from 'next/font/google'
import { motion } from 'framer-motion'
import Title from './Title'

const libre = Libre_Baskerville({ weight: ['400', '700'], style: ['italic', 'normal'], subsets: ['latin'] })

const About = () => {

  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  }) 

  const questionY = useTransform(scrollYProgress, [0, 1], ['0vh', '-5vh'])
  const titlesY = useTransform(scrollYProgress, [0, 1], ['0vh', '-10vh'])
  const title2X = useTransform(scrollYProgress, [0, 1], ['0vh', '10vh'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0vh', '5vh'])

  return (
    <div ref = {container}
      className = 'flex flex-col justify-center leading-none tracking-[-0.01em] items-center text-[#171717] h-screen w-screen'>
        <motion.span
          style = {{y: questionY}}
          className = {`${libre.className} italic font-extralight text-[2.5vw]`}>Danny Who?</motion.span>
        <motion.div
          className = 'flex flex-col items-center'
          style = {{y: titlesY}}
          >
          <Title className = 'leading-[11vw] font-[700] tracking-[-.055em] text-[13vw] ' text = {'He takes'} />
          <motion.div
            style = {{x: title2X}}
            >
            <Title className = 'leading-[11vw] font-[700] tracking-[-.055em] text-[13vw] ' text = {'Photos'} />
          </motion.div>
        </motion.div>
        <motion.span
          style = {{y: textY}}
          className = 'h-[20vh] overflow-hidden '>
          <motion.div
            initial = 'hidden'
            whileInView="visible"
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
        </motion.span>
    </div>
  )
}

export default About
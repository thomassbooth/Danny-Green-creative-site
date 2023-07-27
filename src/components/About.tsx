'use client'

import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Libre_Baskerville } from 'next/font/google'
import { motion } from 'framer-motion'

const libre = Libre_Baskerville({ weight: ['400', '700'], style: ['italic', 'normal'], subsets: ['latin'] })

const About = () => {

  return (
    <div className = 'flex flex-col justify-center leading-none tracking-tight items-center text-[#171717] h-screen w-screen'>
        <span className = {`${libre.className} italic font-extralight text-[2.5vw]`}>Danny Who?</span>
        <span className = ' z-20 text-center font-[800] tracking-[-.075em] text-[10vw] uppercase'>HE TAKES</span>
        <span className = 'mb-10 z-20 text-center font-[800] leading-[4.5rem] tracking-[-.075em] text-[10vw] uppercase'>PHOTOS</span>
        <span className = {`${libre.className} font-light text-[3vw]`}>30 years + of experience</span>
        <span className = {`${libre.className} font-light text-[3vw]`}>Widely published around the world</span>
        <span className = {`${libre.className} font-light text-[3vw]`}>Base in Leicestershire, UK</span>
    </div>
  )
}

export default About
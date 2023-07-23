'use client'

import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Libre_Baskerville } from 'next/font/google'
import { motion } from 'framer-motion'

const libre = Libre_Baskerville({ weight: ['400', '700'], style: ['italic', 'normal'], subsets: ['latin'] })

const About = () => {

  return (
    <div className = 'flex flex-col justify-center tracking-tight items-center text-[6vw] text-pastel-gray-light h-screen w-screen'>
        <h1 className = {`${libre.className} italic font-extralight text-[3vw] leading-3`}>Danny Who?</h1>
        <h2 className = 'z-20 text-center'>Photographer based in Leicestershire.</h2>
        <p className = 'text-[4vw]'>Over 30 years of experience</p>
        <p className = 'text-[4vw]'>Widely published around the world</p>
    </div>
  )
}

export default About
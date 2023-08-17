'use client'

import React, { useEffect, useRef } from 'react'
import Title from '@/components/Title';
import { motion, useTransform } from 'framer-motion'
import { useScroll } from 'framer-motion';
import Image from 'next/image';


const ContactPage = () => {

  const container = useRef(null)
  const title = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  }) 

  const x = useTransform(scrollYProgress, [0, 1], ['0vw', '5vw'])
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '-15vh'])
  
  const imageWrapperY = useTransform(scrollYProgress, [0, 1], ['0vh', '25vh'])
  const imageY = useTransform(scrollYProgress, [0, 1], ['0vh', '-5vh'])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className = 'px-[2vw] w-screen flex flex-col justify-center bg-pastel-gray-light'>
      <header ref = {container} className = 'flex flex-col h-screen mt-[12vh] justify-center text-background-gray'>
        <div className = 'flex w-full justify-between '>
          <motion.div
            className ='inline-flex flex-col'
            ref = {title}
            style = {{y}}>
            <Title className = 'leading-[9vw] font-[300] text-[10vw]' text = {'Lets'} />
            <motion.div 
              className = 'inline-block'
              style = {{x}}
              ref = {container}>
              <Title className = 'leading-[9vw] font-[700] text-[10vw]' text = {'Work'} />
            </motion.div>
            <Title className = 'leading-[9vw] font-[700] text-[10vw]' text = {'Together'} />
          </motion.div>

        <motion.div 
          style = {{y: imageWrapperY}}
          className = 'w-[16vw] h-[22vw] relative overflow-hidden'>
          <motion.div 
            style = {{y: imageY}}
            className = 'w-[20vw] h-[30vw] relative'>
            <Image 
              src = '/images/Polar-Bear-2-2.jpg'
              alt = 'polar bear'
              layout='fill' 
              objectFit='cover' 
              objectPosition='center' />
          </motion.div>
        </motion.div>
        </div>
        <p className = 'p-10 font-[300] text-[1.5vw]'>Have a few questions? Let me know.</p>
      </header>
      <div className = 'h-screen'>

      </div>
    </div>
  )
}

export default ContactPage
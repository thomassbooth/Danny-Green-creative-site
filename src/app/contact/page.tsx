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
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '-10vh'])
  
  const imageWrapperY = useTransform(scrollYProgress, [0, 1], ['0px', '100px'])
  const imageY = useTransform(scrollYProgress, [0, 1], ['0px', '50px'])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className = 'px-[4vw] w-screen flex flex-col justify-center bg-background-gray'>
      <header ref = {container} className = 'flex h-screen mt-[10vh] justify-between items-center text-pastel-gray-light'>
        <div>
          <motion.div
            className ='inline-flex flex-col'
            ref = {title}
            style = {{y}}>
            <Title className = 'leading-[9vw] font-[300] text-[10vw]' titleRef = {title} text = {'Lets'} />
            <motion.div 
              className = 'inline-block'
              style = {{x}}
              ref = {container}>
              <Title className = 'leading-[9vw] font-[700] text-[10vw]' titleRef = {title} text = {'Work'} />
            </motion.div>
            <Title className = 'leading-[9vw] font-[700] text-[10vw]' titleRef = {title} text = {'Together'} />
          </motion.div>
          <p className = 'p-5 font-[300] text-[1.5vw]'>Have a few questions? Let me know.</p>
        </div>

        <motion.div 
          style = {{y: imageWrapperY}}
          className = 'w-[15vw] h-[23vw] relative overflow-hidden'>
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
      </header>
      <div className = 'h-screen'>

      </div>
    </div>
  )
}

export default ContactPage
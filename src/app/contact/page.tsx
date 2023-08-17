'use client'

import React, { useEffect, useRef } from 'react'
import Title from '@/components/Title';
import { cubicBezier, motion, useTransform } from 'framer-motion'
import { useScroll } from 'framer-motion';


const ContactPage = () => {

  const title = useRef(null);
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['end end', 'end start']
  }) 

  const x = useTransform(scrollYProgress, [0, 1], ['15vh', '0vh'], { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) })
  const y = useTransform(scrollYProgress, [0, 1], ['0px', '-200px'])
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div ref = {title} className = ' py-[20vh] px-[5vw] w-screen flex flex-col justify-center bg-background-gray'>
      <header ref = {container} className = 'flex flex-col text-pastel-gray-light'>
        <motion.div
          style = {{y}}>
          <Title className = 'font-[300] text-[11vw]' titleRef = {title} text = {'Lets'} />
          <motion.div 
            style = {{x}}
            ref = {container}>
            <Title className = 'font-[700] text-[11vw]' titleRef = {title} text = {'Work'} />
          </motion.div>
          <Title className = 'font-[700] text-[11vw]' titleRef = {title} text = {'Together'} />
        </motion.div>
      </header>
      <div className = 'h-screen'>

      </div>
    </div>
  )
}

export default ContactPage
'use client'

import React, { useEffect, useRef } from 'react'
import Title from '@/components/Title';
import { motion, useTransform } from 'framer-motion'
import { useScroll } from 'framer-motion';


const ContactPage = () => {

  const title = useRef(null);
  const container = useRef(null)

  const { scrollYProgress } = useScroll({target: container}) 

  const x = useTransform(scrollYProgress, [0, 1], ['0px', '100px'])
  const y = useTransform(scrollYProgress, [0, 1], ['0px', '100px'])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className = 'min-h-screen py-[20vh] px-[5vw] w-screen flex flex-col bg-background-gray'>
      <header ref = {title} className = 'relative flex flex-col text-pastel-gray-light'>
        <motion.div
          style = {{y}}>
          <Title className = 'font-[500]' titleRef = {title} text = {'Lets'} />
          <motion.div 
            style = {{x}}
            ref = {container} className = ''>
            <Title className = 'font-[700]' titleRef = {title} text = {'Work'} />
          </motion.div>
          <Title className = 'font-[900]' titleRef = {title} text = {'Together'} />
        </motion.div>
      </header>
      
    </div>
  )
}

export default ContactPage
'use client'

import React, { useEffect, useRef } from 'react'
import Title from '@/components/Title';
import { motion, useTransform } from 'framer-motion'
import { useScroll } from 'framer-motion';
import Image from 'next/image';
import Form from '@/components/Contact/FormElement';
import FormElement from '@/components/Contact/FormElement';
import FallingText from '@/components/FallingText';

const imageOpen = {
  initial: {
    y: '50%',
    opacity: 1,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7
    }
  }
}


const ContactPage = () => {

  const container = useRef(null)
  const title = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  }) 

  const x = useTransform(scrollYProgress, [0, 1], ['0vw', '5vw'])
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '-15vh'])
  
  const imageWrapperY = useTransform(scrollYProgress, [0, 1], ['0vh', '21vh'])
  const imageY = useTransform(scrollYProgress, [0, 1], ['0vh', '10vh'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0vh', '-4vh'])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className = 'px-[5vw] w-screen flex flex-col justify-center bg-pastel-gray-light'>
      <header ref = {container} className = 'flex flex-col h-screen justify-end text-background-gray'>
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
            className = 'overflow-hidden'>
            <motion.div
              whileInView="open"
              viewport={{ once: true }}
              initial={'initial'}
              variants={imageOpen}
              className = 'flex justify-start items-end w-[16vw] h-[22vw] relative overflow-hidden'>
              <motion.div 
                style = {{y: imageY}}
                className = 'w-[20vw] h-[28vw] relative'>
                <Image
                  className = 'object-cover'
                  src = '/images/21-Grizzly-fishing-2.jpg'
                  alt = 'polar bear'
                  fill
                  />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className = 'overflow-hidden'>
          <motion.p
            style = {{y: textY}}
            whileInView="open"
            viewport={{ once: true }}
            initial={'initial'}
            variants={imageOpen}
            className = 'py-10 font-[300] text-[1.3vw]'>
            Have a few questions? Let me know.
          </motion.p>
        </div>
      </header>
      <form className = 'min-h-screen mt-[7vh] mb-[7vh] w-3/4'>
        <FormElement no = {'01'} title = {'WHATS YOUR NAME?'} placeholder = {'John Doe *'} input = {true} />
        <FormElement no = {'02'} title = {'WHATS YOUR EMAIL?'} placeholder = {'John@doe.com *'} input = {true} />
        <FormElement no = {'03'} title = {'WHAT SERVICE ARE YOU LOOKING FOR?'} placeholder = {'Purchasing, workshop or trips...'} input = {true} />
        <FormElement no = {'04'} title = {'YOUR MESSAGE'} placeholder = {'Hey Danny, your trips are booked out...'} input = {false} />
        <section className = 'w-full flex justify-end py-10'>
          <button className = 'text-[1.4vw]'>
            <FallingText text = {'SEND MESSAGE'} />
            <div className = '-translate-y-1 p-0 m-0 w-full h-[1px] bg-black'></div>
          </button>
        </section>
      </form>
    </div>
  )
}

export default ContactPage
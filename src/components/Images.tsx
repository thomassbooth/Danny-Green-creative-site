import { Libre_Baskerville } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const libre = Libre_Baskerville({ weight: ['400', '700'], style: ['italic', 'normal'], subsets: ['latin'] })

const Images = () => {

  return (
      <div className = 'flex flex-col items-center h-[200vh] text-[10vw] font-bold bg-background-gray text-white w-[100vw]'>
        <div 
          data-scroll
          className = 'flex flex-col justify-center leading-none tracking-[-0.01em] items-center w-screen'>
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
        <div>
          <p>
            HELLO THERE
          </p>
        </div>
        
      <div className = 'relative w-[30vw] h-[40vh] saturate-[0.75]'>
        <Image src = '/images/Common-Frog-22.jpg' alt = 'froggy' fill/>
      </div>
    </div>
  )
}

export default Images
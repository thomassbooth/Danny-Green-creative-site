'use client'

import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const slideDown = {
  initial: {
    y: '-100%',
    opacity: 0.7
  },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4 + (i) * 0.02,
      duration: 0.5
    }
  })
}

const ContactPage = () => {

  const title = useRef(null);
  const isInView = useInView(title)

  useEffect(() => {

    window.scrollTo({top: 0, left: 0, behavior: 'auto' })

  }, [])

  return (
    <div className = 'min-h-screen py-[20vh] w-screen flex flex-col items-center  bg-background-gray'>
      <header ref = {title} className = 'relative flex text-pastel-gray-light'>
        <p className = 'm-0'>
          {'CONTACT'.split('').map((str, i) => {
            return (
            <span className = 'relative inline-flex overflow-hidden' key = {i}>
              <motion.span
                className = 'leading-[13vw] text-[13vw] text-center tracking-tight uppercase font-[900]'
                animate={isInView ? "open" : "inital"}
                custom = {i}
                viewport={{ once: true }}
                initial={'initial'}
                variants={slideDown}>
                  {str}
              </motion.span>
            </span>
          )})}
        </p>
      </header>
      
    </div>
  )
}

export default ContactPage
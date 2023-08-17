'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion';

const slideDown = {
  initial: {
    y: '100%',
    opacity: 0.7,
    rotate: 10
  },
  open: (i: number) => ({
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      delay: 0.4 + (i) * 0.02,
      duration: 0.5
    }
  })
}

interface titleProps {
  text: string
  titleRef: React.MutableRefObject<null>
  className?: string
}

const Title: React.FC<titleProps> = ({text, titleRef, className}) => {

  const isInView = useInView(titleRef)

  return (
    <p className = 'm-0'>
      {text.split('').map((str, i) => {
        return (
        <span className = 'relative inline-flex overflow-hidden' key = {i}>
          <motion.span
            className = {`${className} leading-[11vw] text-center tracking-tight uppercase`}
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
  )
}

export default Title
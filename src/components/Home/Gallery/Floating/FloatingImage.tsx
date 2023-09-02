import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface floatingImageProps {
    src: string
    top: string | number
    left: string | number
    size: string
    custom: number
}

const slideIn = {
  initial: {
    opacity: 0, 
    transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
  },
  open: (i: number) => ({
    opacity: 1, 
    transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: i * 0.01 + 0.5}
  })
}
const FloatingImage: React.FC<floatingImageProps> = ({src, top, left, size, custom}) => {
  return (
      <motion.div 
          variants = {slideIn}
          initial = 'initial'
          whileInView="open"
          custom = {custom}
          viewport={{ once: true }}
          style = {{top: top, left: left}}
          className = {` ${size} absolute cursor-crosshair block transition-all duration-300`}>
          <Image
              className = 'object-cover'
              src = {`/images/gallery/${src}`}
              alt = 'polar bear'
              fill
              />
      </motion.div>
  )
}

export default FloatingImage
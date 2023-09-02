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


const FloatingImage: React.FC<floatingImageProps> = ({src, top, left, size, custom}) => {
  return (
      <motion.div
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
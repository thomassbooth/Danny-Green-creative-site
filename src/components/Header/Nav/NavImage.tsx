import React from 'react'
import { opacity, opacityImage } from '../anim'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

interface imageProps {
    src: string
    isActive: boolean
}

const NavImage: React.FC<imageProps> = ({src}) => {
  return (
    <motion.div 
      className = 'w-1/2 flex justify-center'
      variants={opacity}
      initial = {'initial'}
      animate = {'open'}  
      exit = {'closed'}>
      <AnimatePresence mode = 'popLayout'>
        <motion.div
            key = {`${src}`}
            variants={opacityImage}
            initial = {'initial'}
            animate = {'open'}  
            exit = {'closed'}
            className = {`relative h-[60vh] w-[30vw] `}>
            <Image 
              key = {`L_${src}`}
              src = {src}
              quality = {100} 
              layout='fill' 
              priority={true}
              objectFit='cover' 
              objectPosition='center' 
              alt = 'grizzly'/>
          </motion.div>
        </AnimatePresence>
    </motion.div>
  )
}

export default NavImage
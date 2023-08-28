import React from 'react'
import { opacity } from '../anim'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface imageProps {
    src: string
    isActive: boolean
}

const NavImage: React.FC<imageProps> = ({src}) => {
  return (
    <>
      <motion.div
          variants={opacity}
          initial = {'initial'}
          animate = {'open'}  
          exit = {'closed'}
          className = {`relative h-[60vh] w-[30vw]`}>
          <Image
            src = {src}
            quality = {100} 
            layout='fill' 
            objectFit='cover' 
            objectPosition='center' 
            alt = 'grizzly'/>
        </motion.div>
    </>
  )
}

export default NavImage
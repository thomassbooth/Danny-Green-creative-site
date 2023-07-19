'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import Text3D from './Text3D'
import Navlinks from './Navlinks'

const HorizontalImages = () => {

    const containerRef = useRef<HTMLDivElement | null>(null)
  
    const { scrollYProgress } = useScroll({
      target: containerRef,
    })

    const x = useTransform(scrollYProgress, [0.25, 0.8], ['0vw', '-330vw'])
    const position = useTransform(scrollYProgress, (pos) => {
        return pos <= 0.5 ? 'relative': 'sticky'
    }) 
    const scale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.6])
    
  return (
    <>
    <section ref = {containerRef} >
        <div className = 'h-[1000vh]'>
            <div className = 'sticky top-0 w-[600vw] text-[10vw] font-bold text-white'>
                <motion.div
                style = {{position, x}}
                className = 'flex'>
                    <Navlinks/>

                    <div className = 'flex justify-center items-center h-screen bg-red-500 w-[100vw]'>
                        
                    </div>
                    
                    <div className = 'flex justify-center items-center h-screen bg-red-500 w-[100vw]'>
                        IMAGE 3
                    </div>
                    <motion.div 
                    style = {{scale}}
                    className = 'flex justify-center items-center h-screen bg-blue-700 w-[100vw]' >
                        IMAGE 4
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HorizontalImages
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

    const x = useTransform(scrollYProgress, [0.45, 0.86], ['0vw', '-130vw'])
    
    const scale = useTransform(scrollYProgress, [0.55, 0.8], [1, 0.4])
    
    const rounded = useTransform(scrollYProgress, [0, 0.45, 0.551, 0.8], [0, 0, 100, 1000])
    

  return (
    <>
    <section ref = {containerRef} >
        <div className = 'h-[450vh]'>
            <div className = 'sticky rounded-sm top-0 w-[230vw] text-[10vw] font-bold text-white'>
                <motion.div
                style = {{x}}
                className = 'flex'>
                    <motion.div
                        style = {{scale, borderRadius: rounded,
                        overflow: 'hidden',}}>
                        <Navlinks/>
                    </motion.div>
                    <div className = 'flex justify-center items-center h-screen bg-white text-black w-[100vw]'>
                        Image
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HorizontalImages
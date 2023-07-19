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

    const x = useTransform(scrollYProgress, [0.22, 0.86], ['0vw', '-130vw'])

    const scale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.6])
    
  return (
    <>
    <section ref = {containerRef} >
        <div className = 'h-[850vh]'>
            <div className = 'sticky top-0 w-[230vw] text-[10vw] font-bold text-white'>
                <motion.div
                style = {{x}}
                className = 'flex'>
                    <Navlinks/>
                    <div className = 'flex justify-center items-center h-screen bg-red-500 w-[100vw]'>
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
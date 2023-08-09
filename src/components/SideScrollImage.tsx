'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import Text3D from './Text3D'
import Navlinks from './Navlinks'
import About from './About'

const SideScrollImage = () => {

    const hasWindow = typeof window !== "undefined"

    const containerRef = useRef<HTMLDivElement | null>(null)
  
    const { scrollYProgress } = useScroll({
      target: containerRef,
    })

    const x = useTransform(scrollYProgress, [0.3, 0.98], ['0vw', '-100vw'])
    
    const scale = useTransform(scrollYProgress, [0.3, 0.95], [1, 0.1])
    const opacity = useTransform(scrollYProgress, [0.3, 0.9], [1, 0.8])
    const rounded = useTransform(scrollYProgress, [0, 0.3, 0.35, 0.9], [0, 0, 100, (hasWindow ? window.screen.width/2 : '900')])
    const slideInX = useTransform(scrollYProgress, [0.8, 0.98], ['30vw', '0vw'])

  return (
    <>
        <section ref = {containerRef} >
            <div className = 'h-[400vh]'>
                <div className = 'sticky rounded-sm top-0 w-[200vw] text-[10vw] font-bold'>
                    <motion.div
                    style = {{x}}
                    className = 'flex'>
                        <motion.div
                            style = {{scale, 
                            borderRadius: rounded,
                            opacity,
                            overflow: 'hidden'
                            }}>
                            <Navlinks/>
                        </motion.div>
                        <motion.div 
                            style = {{x: slideInX}}
                            className = 'w-screen h-screen'>
                            <About/>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SideScrollImage
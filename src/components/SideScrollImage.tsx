'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Navlinks from './Navlinks'
import About from './About'

const SideScrollImage = () => {

    const hasWindow = typeof window !== "undefined"

    const containerRef = useRef<HTMLDivElement | null>(null)
  
    const { scrollYProgress } = useScroll({
      target: containerRef,
    })

    const x = useTransform(scrollYProgress, [0.4, 0.98], ['0vw', '-100vw'])
    
    const scale = useTransform(scrollYProgress, [0.4, 0.95], [1, 0.1])
    const imageScale = useTransform(scrollYProgress, [0, 0.3], [1.2, 1])

    const opacity = useTransform(scrollYProgress, [0.4, 0.9], [1, 0.8])
    const rounded = useTransform(scrollYProgress, [0, 0.4, 0.45, 0.9], [0, 0, 100, (hasWindow ? window.screen.width/2 : '900')])
    const slideInX = useTransform(scrollYProgress, [0.6, 0.98], ['20vw', '0vw'])

    const slideImageY = useTransform(scrollYProgress, [0, 0.4], ['0vh', '-30vh'])
    const slideText1 = useTransform(scrollYProgress, [0, 0.4], ['0vh', '-45vh'])
    const slideText2X = useTransform(scrollYProgress, [0, 0.4], ['0vh', '-4vw'])
    const slideText2Y = useTransform(scrollYProgress, [0, 0.4], ['0vh', '-35vh'])
    
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
                            <Navlinks imageScale = {imageScale} slideImageY={slideImageY} slideText1 = {slideText1} slideText2X = {slideText2X} slideText2Y = {slideText2Y} />
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
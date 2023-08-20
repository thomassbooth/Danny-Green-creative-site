'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
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

    const slideImageY = useTransform(scrollYProgress, [0, 0.3], ['0vh', '-30vh'])
    const slideText1 = useTransform(scrollYProgress, [0, 0.3], ['0vh', '-25vh'])
    const slideText2 = useTransform(scrollYProgress, [0, 0.3], ['0vh', '-15vh'])

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
                            <Navlinks slideImageY={slideImageY} slideText1 = {slideText1} slideText2 = {slideText2} />
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
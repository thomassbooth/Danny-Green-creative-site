'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const HorizontalImages = () => {

    const containerRef = useRef<HTMLDivElement | null>(null)
  
    const { scrollYProgress } = useScroll({
      target: containerRef,
    })

    const x = useTransform(scrollYProgress, [0.2, 0.8], ['0vw', '-330vw'])

    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6])
    const opacity = useTransform(scrollYProgress, [0, 0.000001], [0, 1])
    
  return (
    <section ref = {containerRef} >
        <div className = 'relative h-[600vh]'>
            <div className = 'sticky top-0 w-[600vw] text-[10vw] font-bold text-gray-100'>
                <motion.div
                style = {{x}}
                className = 'flex'>
                    <motion.div style = {{scale}}
                        className = 'flex justify-center items-center h-screen bg-otter-back bg-cover bg-center w-[100vw]'>
                        <motion.div style = {{opacity}}>
                            Danny Green
                        </motion.div>
                        
                    </motion.div>
                    <div className = 'w-[10vw]'>

                    </div>
                    <div className = 'flex justify-center items-center h-screen bg-otter-back bg-cover bg-center w-[100vw]'>
                        IMAGE 2
                    </div>
                    <div className = 'w-[10vw]'>

                    </div>
                    <div className = 'flex justify-center items-center h-screen bg-otter-back bg-cover bg-center w-[100vw]'>
                        IMAGE 3
                    </div>
                    <div className = 'w-[10vw]'>

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
  )
}

export default HorizontalImages
import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef } from 'react'

const Gallery = () => {

    const containerRef = useRef<HTMLDivElement | null>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
      })

    const height = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh'])
    
    const y = useTransform(scrollYProgress, [0, 1], ['0vh', '20vh'])
    const negativey = useTransform(scrollYProgress, [0, 1], ['0vh', '-20vh'])

  return (
    <section ref = {containerRef}>
        <div className = 'h-[200vh] w-screen'>
            <div className = 'text-background-gray w-screen h-screen sticky top-0 flex flex-col items-center justify-center'>
                <div className = 'absolute top-1/2 z-20 h-screen w-screen'>
                    <motion.div
                        style = {{ height }}
                        className = 'w-screen bg-background-gray'>
                    </motion.div>
                </div>
                <div className = 'absolute rotate-180 bottom-1/2 z-20 h-screen w-screen'>
                    <motion.div
                        style = {{ height }}
                        className = 'w-screen bg-background-gray'>
                    </motion.div>
                </div>
                <motion.h1
                    style = {{y}}
                    className = 'absolute text-center font-[900] tracking-[-.055em] text-[22vw] uppercase'>
                        GALLERY
                </motion.h1>
                <div className = 'absolute top-1/2 overflow-hidden'>
                    <motion.h1
                        style = {{y: negativey}}
                        className = 'absolute text-center font-[900] tracking-[-.055em] text-[22vw] uppercase'>
                            GALLERY
                    </motion.h1>
                </div>
            </div>
        </div>
    </section>
  )
}


const SplitText = () => {
  return (
    <div>Gallery</div>
  )
}


export default Gallery
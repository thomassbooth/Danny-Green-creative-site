import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import React, { useRef } from 'react'

const Gallery = () => {

    const containerRef = useRef<HTMLDivElement | null>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
      })

    const height = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh'])
    
    const y = useTransform(scrollYProgress, [0, 1], ['0vh', '32vh'])
    const negativey = useTransform(scrollYProgress, [0, 1], ['0vh', '-32vh'])

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
                <SplitText y = {y} negativey = {negativey} text = {'Gallery'}/>
            </div>
        </div>
    </section>
  )
}

interface splitTextProps {
    y: MotionValue<string>
    negativey: MotionValue<string>
    text: string
}

const SplitText: React.FC<splitTextProps> = ({y, negativey, text}) => {
    return (
      <>
          <motion.div
              style = {{y: negativey}}
              className="w-full flex justify-center items-center h-[13vw] overflow-hidden">
              <span className="text-[22vw] font-[900] tracking-[-.055em] uppercase transform translate-y-[6.5vw]">{text}</span>
          </motion.div>
          <motion.div 
              style = {{y}}
              className="w-full flex justify-center items-center h-[13vw] overflow-hidden">
              <span className="text-[22vw] transform -translate-y-[6.5vw] font-[900] tracking-[-.055em] uppercase">{text}</span>
          </motion.div>
      </>
    )
  }


export default Gallery
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import React, { useRef } from 'react'

const Gallery = () => {

    const containerRef = useRef<HTMLDivElement | null>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
      })

    const height = useTransform(scrollYProgress, [0.05, 0.5], ['0vh', '50vh'])
    
    const y = useTransform(scrollYProgress, [0.05, 0.5], ['0vh', '32vh'])
    const negativey = useTransform(scrollYProgress, [0.05, 0.5], ['0vh', '-32vh'])

    const x = useTransform(scrollYProgress, [0.05, 0.5], ['0vw', '-100vw'])

    
  return (
    <section ref = {containerRef}>
        <div className = 'h-[200vh] w-screen'>
            <div className = 'text-background-gray w-[200vw] h-screen sticky top-0 flex flex-col justify-center'>
                <div className = 'absolute z-30 flex h-screen w-[200vw]'>
                    <div className = 'w-screen h-screen'/>
                    <motion.div 
                        style = {{x}}
                        className = 'text-red-500 z-50 flex items-center justify-center w-screen h-screen'>
                        <p className = 'font-black text-[22vh]'>DAVE</p>
                    </motion.div>
                </div>
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
                <div className = 'absolute z-50'>
                    <SplitText y = {y} negativey = {negativey} text = {'Gallery'}/>
                </div>
                
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
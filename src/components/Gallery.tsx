import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import React, { useRef } from 'react'
import { Libre_Baskerville } from 'next/font/google'
import GalleryLink from './GalleryLink'
import FloatingGallery from './FloatingGallery'

const libre = Libre_Baskerville({ weight: ['400', '700'], style: ['italic', 'normal'], subsets: ['latin'] })

const Gallery = () => {

    const containerRef = useRef<HTMLDivElement | null>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
      })

    const height = useTransform(scrollYProgress, [0.05, 0.95], ['0vh', '50vh'])
    
    const y = useTransform(scrollYProgress, [0.05, 0.95], ['0vh', '32vh'])
    const negativey = useTransform(scrollYProgress, [0.05, 0.95], ['0vh', '-32vh'])

    const x = useTransform(scrollYProgress, [0.05, 0.95], ['0vw', '-100vw'])

    
  return (
    <>
        <section ref = {containerRef}>
            <div className = 'h-[200vh] w-screen'>
                <div className = 'text-background-gray w-[200vw] h-screen sticky top-0 flex flex-col justify-center'>
                    <div className = 'absolute z-50 flex h-screen w-[200vw]'>
                        <div className = 'w-screen h-screen'/>
                        <motion.div 
                            style = {{x}}
                            className = 'text-pastel-gray-light z-50 flex items-center justify-center w-screen h-screen'>
                            <div className = 'text-center w-[35vw]'>
                                <h1 className = 'uppercase font-bold mb-10 text-[1vw]'>gallery</h1>
                                <p className = {`${libre.className} font-extralight text-[3.5vw]`}>
                                    <span className = 'italic'>Browse </span>some of my favorite images ive <span className = 'italic'>taken.</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    <div className = 'absolute top-1/2 h-screen w-screen'>
                        <motion.div
                            style = {{ height }}
                            className = 'w-screen bg-background-gray'>
                        </motion.div>
                    </div>
                    <div className = 'absolute rotate-180 bottom-1/2  h-screen w-screen'>
                        <motion.div
                            style = {{ height }}
                            className = 'w-screen bg-background-gray'>
                        </motion.div>
                    </div>
                    <div className = 'absolute'>
                        <SplitText y = {y} negativey = {negativey} text = {'Gallery'}/>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* <div className = 'bg-background-gray py-[3vh]'>
            <div className = 'mx-[2vw] relative grid grid-cols-3 gap-[2vw]'>
                <GalleryLink imgSrc='Wolves-play-fighting.jpeg' link = 'wolves' name = 'Elusive Wolves'/>
                <GalleryLink imgSrc='Arctic-1.jpeg' link = 'arctic' name = 'Arctic'/>
                <GalleryLink imgSrc= link = 'coasts' name = 'British Coasts'/>
                <GalleryLink imgSrc='1-Arctic-Fox-in-the-snow.jpeg' link = 'coasts' name = 'British Coasts'/>
            </div>
        </div> */}

        <FloatingGallery />
    </>
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
              className="w-screen flex justify-center items-center h-[13vw] overflow-hidden">
              <span className="text-[22vw] font-[900] tracking-[-.055em] uppercase transform translate-y-[6.5vw]">{text}</span>
          </motion.div>
          <motion.div 
              style = {{y}}
              className="w-screen flex justify-center items-center h-[13vw] overflow-hidden">
              <span className="text-[22vw] transform -translate-y-[6.5vw] font-[900] tracking-[-.055em] uppercase">{text}</span>
          </motion.div>
      </>
    )
  }


export default Gallery
import { useScroll, useTransform, motion, useMotionValueEvent, MotionValue, cubicBezier } from 'framer-motion'
import React, { useRef } from 'react'
import { Libre_Baskerville } from 'next/font/google'
import Floating from './Floating'

const libre = Libre_Baskerville({ weight: ['400', '700'], style: ['italic', 'normal'], subsets: ['latin'] })

const Gallery = () => {

    const containerRef = useRef<HTMLDivElement | null>(null)
    const containerRef2 = useRef(null)

    const scrollYProgress2 = useScroll({target: containerRef2}).scrollYProgress

    const { scrollYProgress } = useScroll({
        target: containerRef,
      })

    
    const height = useTransform(scrollYProgress, [0.05, 0.95], ['0vh', '50vh'])
    //when animating the colour of the back, it would chang ethe opacity 
    //so I could see the split gallery letters, once the page is open it hides the gallery text
    const display = useTransform(scrollYProgress2, (e) => {
        if(e > 0.5)
            return 'none'
        else return 'block'
    })

    const colour = useTransform(scrollYProgress2, [0.5, 1], ['#171717', '#FAF3F0'], { ease: cubicBezier(.64,.26,.83,.67)})
    const y = useTransform(scrollYProgress, [0.05, 0.95], ['0vh', '32vh'])
    const negativey = useTransform(scrollYProgress, [0.05, 0.95], ['0vh', '-32vh'])
    
    const x = useTransform(scrollYProgress, [0.05, 0.95], ['0vw', '-100vw'])

    
  return (
    <>  
        {/* two seperate refs, one for the entire gallery + bottom so gallery text can be hidden! */}
        <div ref = {containerRef2}>
        <section ref = {containerRef}>
            <div className = 'h-[200vh] w-screen'>
                <div className = 'text-background-gray w-[200vw] h-screen sticky top-0 flex flex-col justify-center'>
                    <div className = 'absolute z-50 flex h-screen w-[200vw]'>
                        {/* Move the text to the left by a screen */}
                        <div className = 'w-screen h-screen'/>
                        {/* Slide this in as we scroll and the page splits in two */}
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
                        {/* Top opening, this changes colour when fully opened  */}
                        <motion.div
                            style = {{ height, backgroundColor: colour}}
                            className = 'w-screen bg-background-gray'>
                        </motion.div>
                    </div>
                        {/* Bottom opening, this changes colour when fully opened */}
                    <div className = 'absolute rotate-180 bottom-1/2  h-screen w-screen'>
                        <motion.div
                            style = {{ height, background: colour }}
                            className = 'w-screen'>
                        </motion.div>
                    </div>
                    <SplitPage height = {height} colour={colour}/>
                    {/* we need to change the display of the text so lets wrap in a div */}
                    <motion.div className = 'absolute' style = {{display: display}}>
                        <SplitText y = {y} negativey = {negativey} text = {'Gallery'}/>
                    </motion.div>
                    
                </div>
            </div>
        </section>
        <Floating backgroundColor = {colour}/>
        </div>
    </>
  )
}


interface splitPageProps {
    height: MotionValue<string>
    colour: MotionValue<string>
}

const SplitPage: React.FC<splitPageProps> = ({height, colour}) => {

    return (
        <>
            <div className = 'absolute top-1/2 h-screen w-screen'>
                {/* Top opening, this changes colour when fully opened  */}
                <motion.div
                    style = {{ height, backgroundColor: colour}}
                    className = 'w-screen bg-background-gray'>
                </motion.div>
            </div>
                {/* Bottom opening, this changes colour when fully opened */}
            <div className = 'absolute rotate-180 bottom-1/2  h-screen w-screen'>
                <motion.div
                    style = {{ height, background: colour }}
                    className = 'w-screen'>
                </motion.div>
            </div>
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
import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface modalProps {
    modal: { active: boolean, index: number}
    awards: Array<any>
}

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

const Modal: React.FC<modalProps> = ({modal, awards}) => {

  const { active, index } = modal;
  const modalContainer = useRef(null);
  useEffect( () => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX)
      yMoveContainer(pageY)
    })
  }, [])

  return (
    <>
    <motion.div className = 'h-[350px] w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center' 
        ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>
        <div className = 'h-full w-full absolute transition-all duration-500'
            style={{top: index * -100 + "%"}}>
            {
                awards.map((project, index) => {
                const { src, color } = project
                return <div className='h-full w-full flex justify-center items-center' style={{backgroundColor: color}} key={`modal_${index}`}>
                    <Image 
                    className = 'h-auto'
                    src={`/images/awards/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                    />
                </div>
                })
            }
        </div>
    </motion.div>
    </>
  )
}

export default Modal
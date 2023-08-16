'use client'


import React, { useEffect, useLayoutEffect, useState } from 'react'
import { animate, motion } from 'framer-motion'

interface curveProps {
  animate: string
}

const Curve: React.FC<curveProps> = ({animate}) => {

    const [dimension, setDimension] = useState({width:0, height:0});

    const [setup, setSetup] = useState(false)
    useLayoutEffect( () => {
        const resize = () => {
            setDimension({width: window.innerWidth, height: window.innerHeight})
        }
    
        window.addEventListener("resize", resize)
        resize();

        setSetup(true)

        return () => {
          window.removeEventListener("resize", resize);
        }

      }, [])

    

      console.log(dimension)
      const initialPath = `M0 ${dimension.height}
      L${dimension.width} ${dimension.height}
      Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}
      `

      const firstCurve = `M0 ${dimension.height}
      L${dimension.width} ${dimension.height}
      Q${dimension.width/2} 0 0 ${dimension.height}
      `

    const curveVariant = {
        initial: {
            d: initialPath
        },
        enter: {
            d: firstCurve,  
            y: '-50%',
            transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: initialPath,
            y: '-100%',
            transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}
        },
        reset: {
          y: '0%',
          transition: {duration: 0}
        }
    }

  return (
    
      <> {setup && (
        <svg className ='fixed top-0 w-screen h-screen z-50 fill-black pointer-events-none'>
          <motion.path 
            variants={curveVariant} 
            animate = {animate}>
          </motion.path>
        </svg> )}
      </>
  )
}

export default Curve
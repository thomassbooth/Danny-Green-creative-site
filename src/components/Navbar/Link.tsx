'use client'

import { motion } from 'framer-motion'
import { useState } from 'react';

const underlineVariants = {
    idle: {
        x: '-3.2vw'
    },
    enter: {
        x: '3.2vw'
    },
    exit: {
        x: '-3.2vw'
    }
}

interface linkProps {
    title: string
}

const Link: React.FC<linkProps> = ({ title }) => {

    const [hoverState, setHoverState] = useState('idle')

    console.log(hoverState)
    return (
      <motion.div 
        onHoverStart={(e) => {setHoverState('enter')}}
        onHoverEnd={(e) => {
            setHoverState('exit')
        }}
        className="relative cursor-pointer inline-block overflow-hidden">
        <h2>{title}</h2>
        <motion.div
          className="absolute left-0 w-full h-[1.5px] bg-pastel-gray-light bottom-0"
          animate={hoverState}
          variants={underlineVariants}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    );
  };

export default Link
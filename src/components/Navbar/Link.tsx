'use client'

import { motion } from 'framer-motion'
import { useState } from 'react';
import { useRouter } from 'next/navigation'

const underlineVariants = {
    idle: {
        x: '-3vw'
    },
    enter: {
        x: '3vw'
    },
    exit: {
        x: '-3vw'
    }
}

interface linkProps {
    title: string
}

const Link: React.FC<linkProps> = ({ title }) => {

    const [hoverState, setHoverState] = useState('idle')

    const router = useRouter()

    console.log(hoverState)
    return (
      <motion.div 
        onHoverStart={(e) => {setHoverState('enter')}}
        onHoverEnd={(e) => {
            setHoverState('exit')
        }}
        onClick = {() => router.push('/')}
        className="relative cursor-pointer inline-block overflow-hidden">
        <h2>{title}</h2>
        <motion.div
          className="absolute left-0 w-full h-[0.2vh] bg-pastel-gray-light bottom-0"
          animate={hoverState}
          variants={underlineVariants}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    );
  };

export default Link
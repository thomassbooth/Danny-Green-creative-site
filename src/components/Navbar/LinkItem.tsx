'use client'

import { motion } from 'framer-motion'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

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
    url: string
}

const LinkItem: React.FC<linkProps> = ({ title, url }) => {

    const [hoverState, setHoverState] = useState('idle')

    const router = useRouter()
    return (
    <>
        <motion.div 
            onHoverStart={(e) => {setHoverState('enter')}}
            onHoverEnd={(e) => {
                setHoverState('exit')
            }}
            className="relative cursor-pointer inline-block overflow-hidden">
                <Link href = {url}>
                    {title}
                </Link>
            <motion.div
            className="absolute left-0 w-full h-[2px] bg-pastel-gray-light bottom-0"
            animate={hoverState}
            variants={underlineVariants}
            transition={{ duration: 0.4 }}
            />
        </motion.div>
      </>
    );
  };

export default LinkItem
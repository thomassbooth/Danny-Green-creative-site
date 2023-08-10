'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface projectProps {
    setModal: React.Dispatch<React.SetStateAction<any>>
    index: number
    title: string
    place: string
    year: string
    type: string
}

const slideIn = {
  initial: (i: number) => ({
    x: ((-1)**i) * 120 + '%'
  }),
  open: (i: number) => ({
    x: '0%',
    transition: {duration: 0.5, delay: 0.15 * i}
  })
}

const Project: React.FC<projectProps> = ({setModal, index, title, place, year, type}) => {
  return (
    <motion.li 
        custom = {index}
        variants = {slideIn}
        initial = 'initial'
        animate = 'open'
        className = 'group hover:opacity-50 flex w-full justify-between items-center py-[4vh] px-[50px] border-t border-[#C9C9C9] transition-all duration-200 cursor-pointer last-of-type:border-b'
        onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}}>
        <div className = 'flex items-end'>
          <div className = 'group-hover:translate-x-[-10px] transition-all duration-[0.4] flex flex-col gap-2'>
            <p className = ' opacity-40 h-full font-medium text-[1.2vw]'>{type}</p>
            <h2 className = ' m-0 mr-2 font-normal text-[1.8vw]'>{title}</h2>
            <p className = 'text-left opacity-40 font-light text-[1.2vw]'>{year}</p>
          </div>
          
        </div>
        
        <p className = 'group-hover:translate-x-[10px] transition-all duration-[0.4] text-[1vw]'>{place}</p>
    </motion.li>
  )
}

export default Project
'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface projectProps {
    setModal: React.Dispatch<React.SetStateAction<any>>
    index: number
    title: string
    place: string
    year: string
}

const Project: React.FC<projectProps> = ({setModal, index, title, place, year}) => {
  return (
    <motion.li className = 'group hover:opacity-50 flex w-full justify-between items-center py-[4vh] px-[50px] border-t border-[#C9C9C9] transition-all duration-200 cursor-pointer last-of-type:border-b'
        onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}}>
        <div className = 'flex items-end'>
          <h2 className = 'group-hover:translate-x-[-10px] m-0 mr-2 transition-all duration-[0.4] font-normal text-[1.8vw]'>{title}</h2>
          <p className = 'opacity-20 font-light'>{year}</p>
        </div>
        
        <p className = 'group-hover:translate-x-[10px] transition-all duration-[0.4] text-[1vw]'>{place}</p>
    </motion.li>
  )
}

export default Project
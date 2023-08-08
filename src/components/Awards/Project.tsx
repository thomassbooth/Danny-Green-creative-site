'use client'
import React from 'react'

interface projectProps {
    setModal: React.Dispatch<React.SetStateAction<any>>
    index: number
    title: string
    place: string
    year: string
}

const Project: React.FC<projectProps> = ({setModal, index, title, place, year}) => {
  return (
    <div className = 'group hover:opacity-50 flex w-full justify-between items-center py-[50px] px-[50px] border-t border-[#C9C9C9] transition-all duration-200 cursor-pointer last-of-type:border-b'
        onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}}>
        <div className = 'flex items-end'>
          <h2 className = 'group-hover:translate-x-[-10px] m-0 mr-2 transition-all duration-[0.4] font-normal text-[4vh]'>{title}</h2>
          <p className = 'opacity-20 font-light'>{year}</p>
        </div>
        
        <p className = 'group-hover:translate-x-[10px] transition-all duration-[0.4] text-[2vh]'>{place}</p>
    </div>
  )
}

export default Project
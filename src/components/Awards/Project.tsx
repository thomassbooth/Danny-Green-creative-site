'use client'
import React from 'react'

interface projectProps {
    setModal: React.Dispatch<React.SetStateAction<any>>
    index: number
    title: string
    place: string
}

const Project: React.FC<projectProps> = ({setModal, index, title, place}) => {
  return (
    <div className = 'group hover:opacity-50 flex w-full justify-between items-center py-[50px] px-[50px] border-t border-[#C9C9C9] transition-all duration-200 cursor-pointer last-of-type:border-b'
        onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}}>
        <h2 className = 'group-hover:translate-x-[-10px] m-0 mr-5 transition-all duration-[0.4] font-normal text-6xl'>{title}</h2>
        <p className = 'group-hover:translate-x-[10px] transition-all duration-[0.4]'>{place}</p>
    </div>
  )
}

export default Project
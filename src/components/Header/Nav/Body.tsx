'use client'

import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { motion } from 'framer-motion'
import { translate } from '../anim'

type link = {
    title: string,
    href: string,
    src: string
}

type hoveredLink = {
    isActive: boolean;
    index: number;
}

interface bodyProps {
    links: Array<link>
    setHoveredLink: React.Dispatch<React.SetStateAction<hoveredLink>>
    hoveredLink: hoveredLink
}

const Body: React.FC<bodyProps> = ({ links, hoveredLink, setHoveredLink }) => {


    const getChars = (title: string) => {
        return title.split('').map((char: string, indx: number) => {
            return (
                <motion.span
                    variants={translate}
                    custom = {[indx, title.length-indx]}
                    initial = {'initial'}
                    animate = {'enter'}  
                    exit = {'exit'}
                    key = {indx}>
                    {char}
                </motion.span>
            )
        })
    }
    
  return (
    <div className = 'flex flex-wrap mt-10'>
        {
            links.map((link, indx) => {
                return (
                    <Link className = 'max-w-[1000px] overflow-hidden text-black text-[10vw] pr-[5vw] pt-8 uppercase font-light'
                        onMouseOver = {() => setHoveredLink({isActive: true, index: indx})} 
                        onMouseLeave = {() => setHoveredLink({isActive: false, index: indx})} 
                        href = {link.href}
                        key = {indx}>
                        <p className = 'flex'>
                            {getChars(link.title)}
                        </p>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Body
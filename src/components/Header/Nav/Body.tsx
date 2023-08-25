'use client'

import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { motion } from 'framer-motion'
import { translate } from '../anim'
import { usePathname } from 'next/navigation'

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

    const pathname = usePathname()

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
    <div className = 'inline-flex flex-col flex-wrap mt-10'>
        {
            links.map((link, indx) => {
                return (
                    <Link className = 'overflow-hidden text-black text-[10vw] leading-[10vw] pt-[5vh] uppercase font-light'
                        onMouseOver = {() => setHoveredLink({isActive: true, index: indx})} 
                        onMouseLeave = {() => setHoveredLink({isActive: false, index: indx})} 
                        href = {link.href}
                        key = {indx}>
                        <p className = {`${pathname === link.href ? 'font-medium' : ''} hover:text-[#65647C] flex transition-all duration-500`}>
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
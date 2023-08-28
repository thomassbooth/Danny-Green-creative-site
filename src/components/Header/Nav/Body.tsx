'use client'

import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { motion } from 'framer-motion'
import { iconTranslate, textOpacity, translate } from '../anim'
import { usePathname } from 'next/navigation'
import { GoDotFill } from 'react-icons/go'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'

const icons = [
    {
        icon: BiLogoFacebook
    },
    {
        icon: BiLogoLinkedin
    },
    {
        icon: BiLogoInstagram
    }

]

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
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const Body: React.FC<bodyProps> = ({ setIsOpen, links, hoveredLink, setHoveredLink }) => {

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
    <div className = 'h-full inline-flex flex-col ml-[5vw] justify-center'>
        <div className = 'h-full flex flex-col gap-[3vh] justify-center'>        
        {
            links.map((link, indx) => {
                return (
                    <div className = 'flex items-center'
                        key = {indx}>
                        <Link className = 'group overflow-hidden text-background-gray text-[6vw] leading-[8vw] uppercase font-light'
                            onMouseOver = {() => setHoveredLink({isActive: true, index: indx})} 
                            onMouseLeave = {() => setHoveredLink({isActive: false, index: indx})} 
                            onClick = {() => {
                                if (pathname === link.href) {
                                    setIsOpen(false)}
                            }}
                            href = {link.href}>
                            <div>
                                <motion.p 
                                    variants={textOpacity}
                                    initial={'initial'}
                                    animate={hoveredLink.isActive && hoveredLink.index != indx ? 'open' : 'closed'}
                                    className = {` tracking-tighter flex items-center transition-all duration-500`}>
                                    {getChars(link.title)}
                                </motion.p>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
        
        </div>
    </div>
  )
}

export default Body
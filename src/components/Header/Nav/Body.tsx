'use client'

import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { motion } from 'framer-motion'
import { iconTranslate, textHoverImage, textHoverOverlay, textOpacity, translate } from '../anim'
import { usePathname } from 'next/navigation'
import { GoDotFill } from 'react-icons/go'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'
import Image from 'next/image'

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
                const { title, src } = link
                return (
                    <div className = 'flex items-center'
                        key = {indx}>
                        <Link className = 'group tracking-tighter z-30 overflow-hidden text-background-gray text-[6.5vw] leading-[8vw] font-normal'
                            onMouseOver = {() => setHoveredLink({isActive: true, index: indx})} 
                            onMouseLeave = {() => setHoveredLink({isActive: false, index: indx})} 
                            onClick = {() => {
                                if (pathname === link.href) {
                                    setIsOpen(false)}
                            }}
                            href = {link.href}>
                            <div className = 'relavtive'>
                                <motion.div
                                    variants = {textHoverOverlay}
                                    initial = {'initial'}
                                    animate = {hoveredLink.isActive && hoveredLink.index == indx ? 'hover' : 'off'}
                                    className = 'tracking-tighter absolute w-full overflow-hidden'
                                    onMouseEnter = {() => {

                                }}>
                                    <span className = 'italic opacity-10 font-medium truncate'>{`${title} - ${title} - ${title} - ${title} - ${title}`}</span>
                                </motion.div>
                                <motion.div 
                                    variants = {textHoverImage}
                                    initial = 'initial'
                                    animate = {hoveredLink.isActive && hoveredLink.index == indx ? 'hover' : 'off'}
                                    className = {`ml-10 w-[15vw] h-[8vw] absolute z-20 saturate-150 block`}>
                                    <Image
                                        className = 'object-cover'
                                        src = {src}
                                        alt = 'polar bear'
                                        fill
                                        />
                                </motion.div>
                                <motion.p 
                                    className = {`group-hover:opacity-0 flex items-center transition-all duration-500`}>
                                    {getChars(title)}
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
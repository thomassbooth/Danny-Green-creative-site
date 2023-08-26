'use client'

import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { motion } from 'framer-motion'
import { iconTranslate, translate } from '../anim'
import { usePathname } from 'next/navigation'
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
}

const Body: React.FC<bodyProps> = ({ links, setHoveredLink }) => {

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

    const getLinks = () => {
        return icons.map((link, indx) => {

            const { icon: Icon } = link

            return (
                <motion.div
                    key = {indx}
                    variants={iconTranslate}
                    custom = {indx}
                    initial = {'initial'}
                    animate = {'enter'}  
                    exit = {'exit'}
                    >
                    <Icon 
                        className = 'hover:scale-110 cursor-pointer transition-all' size = {25} 
                    />
                </motion.div>
            )
        })
    }
    
  return (
    <div className = 'h-full inline-flex flex-col ml-[5vw] justify-end'>
        <div className = 'h-full flex flex-col gap-[5vh] justify-center'>        
        {
            links.map((link, indx) => {
                return (
                    <Link className = 'group overflow-hidden text-black text-[8vw] leading-[8vw] uppercase font-medium'
                        onMouseOver = {() => setHoveredLink({isActive: true, index: indx})} 
                        onMouseLeave = {() => setHoveredLink({isActive: false, index: indx})} 
                        href = {link.href}
                        key = {indx}>
                        <div>
                            <p className = {` group-hover:text-[#65647C] tracking-tighter flex transition-all duration-500`}>
                                {getChars(link.title)}
                            </p>
                        </div>
                    </Link>
                )
            })
        }
        </div>
        <footer className = 'w-full px-[5vh] pb-[10vh] '>
            <section className = 'flex gap-5 overflow-hidden'>
                {getLinks()}
            </section>
        </footer>
    </div>
  )
}

export default Body
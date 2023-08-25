'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { background, opacity } from './anim';
import { usePathname } from 'next/navigation'
import Nav from './Nav';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        
        console.log('change route')
        setIsOpen(false)

    }, [pathname])

  return (
    <>
    <div className = 'mix-blend-difference fixed z-50 p-5'>
        <div onClick = {() => setIsOpen(!isOpen)} className = 'flex items-center justify-center relative gap-2 cursor-pointer'>
            <div className = {`${isOpen ? 'after:mix-blend-difference before:mix-blend-difference after:rotate-45 before:-rotate-45 after:top-[-1px] before:top-[1px]' : ''} w-6 after:-top-1 before:top-1 after:block after:w-full after:h-[1px] after:bg-pastel-gray-light after:relative before:block before:w-full before:h-[1px] before:bg-pastel-gray-light before:relative after:transition-all after:duration-1000 before:transition-all before:duration-1000`}/>
            <div className = 'mix-blend-difference text-pastel-gray-light flex relative'>
                <motion.p variants = {opacity} animate = {isOpen ? 'closed' : 'open'}>Menu</motion.p>
                <motion.p className = 'absolute opacity-0' variants = {opacity} animate = {!isOpen ? 'closed' : 'open'}>Close</motion.p>
            </div>
        </div>
    </div>
    <div className = 'fixed w-full bg-[#f4f0ea] z-40'>
        <AnimatePresence mode = 'wait'>
            {isOpen && <Nav/>}
        </AnimatePresence>
        <motion.div variants = {background} animate = {isOpen ? 'open' : 'closed'} className = 'h-full w-full absolute bg-background-gray' ></motion.div>
    </div>
    </>
    )
}

export default Header
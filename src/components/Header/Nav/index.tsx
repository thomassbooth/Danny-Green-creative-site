import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { height } from '../anim'
import Body from './Body'


const Nav = () => {

    const [hoveredLink, setHoveredLink] = useState({isActive: false, index: 0})

    const links = [
        {
            title: "Home",
            href: '/',
            src: ''
        },
        {
            title: 'Awards',
            href: '/awards',
            src: ''
        },
        {
            title: 'Contact',
            href: '/contact',
            src: ''
        },
        
    ]

  return (
    <motion.div className = 'overflow-hidden'
        variants = {height} initial = 'initial' animate = 'enter' exit = 'exit'>
            <Body links = {links} hoveredLink={hoveredLink} setHoveredLink={setHoveredLink}/>
    </motion.div>
  )
}

export default Nav
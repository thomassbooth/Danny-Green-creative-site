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
            {/* <motion.div className = 'bg-gray-200 absolute right-0 top-0 w-[115px]' variants = {height} initial = 'initial' animate = 'enter' exit = 'exit'>

            </motion.div> */}
    </motion.div>
  )
}

export default Nav
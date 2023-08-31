import React, { SetStateAction, useState } from 'react'
import { motion } from 'framer-motion'
import { height, iconTranslate, opacity } from '../anim'
import Body from './Body'
import NavImage from './NavImage'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'

interface navProps {
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const links = [
    {
        title: "Home",
        href: '/',
        src: '/images/link/98-Sea-Otter-resting.jpg'
    },
    {
        title: 'Awards',
        href: '/awards',
        src: '/images/link/107-Red-Fox-in-the-snow-16.jpg'
    },
    {
        title: 'Contact',
        href: '/contact',
        src: '/images/link/30-Red-Grouse-amongst-the-heather.jpg'
    },
    
]

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

const endLinks = [
    {
        title: '01509 269209',
        icon: BsFillTelephoneFill
    },
    {
        title: 'danny@dannygreenphotography.com',
    },
    {
        title: 'Privacy Policy'
    }
]

const Nav: React.FC<navProps> = ({setIsOpen}) => {

    const [hoveredLink, setHoveredLink] = useState({isActive: false, index: 0})

    const getEndLinks = () => {
        return endLinks.map((link, indx) => {

            const { icon: Icon } = link

            return (
                <motion.div
                    className = 'flex items-center gap-2 text-sm text-[#8E8E8E] cursor-pointer font-medium'
                    key = {indx}
                    variants={iconTranslate}
                    custom = {indx}
                    initial = {'initial'}
                    animate = {'enter'}  
                    exit = {'exit'} 
                    >
                    {Icon && <Icon/>}
                    <p className = 'hover:underline transition-all duration-300'>{link.title}</p>
                </motion.div>
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

    <motion.div className = 'overflow-hidden flex flex-col justify-end'
        variants = {height} initial = 'initial' animate = 'enter' exit = 'exit'>
        <div className = 'flex items-center'>
            <Body setIsOpen = {setIsOpen} links = {links} hoveredLink={hoveredLink} setHoveredLink={setHoveredLink}/>
        </div>
        <footer className = 'relative w-full flex justify-between p-[10vh]'>
            <section className = 'flex gap-5 overflow-hidden text-background-gray'>
                {getLinks()}
            </section>
            <section className = 'flex gap-5 overflow-hidden text-background-gray'>
                {getEndLinks()}
            </section>
        </footer>
    </motion.div>
  )
}

export default Nav
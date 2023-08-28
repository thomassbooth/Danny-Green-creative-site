import React, { SetStateAction, useState } from 'react'
import { motion } from 'framer-motion'
import { height, iconTranslate, opacity } from '../anim'
import Body from './Body'
import NavImage from './NavImage'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'

interface navProps {
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const links = [
    {
        title: "Home",
        href: '/',
        src: '/images/18-Grizzlies-at-dawn.jpg'
    },
    {
        title: 'Awards',
        href: '/awards',
        src: '/images/1-Arctic-Fox-in-the-snow.jpeg'
    },
    {
        title: 'Contact',
        href: '/contact',
        src: '/images/21-Grizzly-fishing-2.jpg'
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
        title: '01509 269209'
    },
    {
        title: 'danny@dannygreenphotography.com'
    },
    {
        title: 'Privacy Policy'
    }
]

const Nav: React.FC<navProps> = ({setIsOpen}) => {

    const [hoveredLink, setHoveredLink] = useState({isActive: false, index: 0})

    const getEndLinks = () => {
        return endLinks.map((link, indx) => {


            return (
                <motion.div
                    key = {indx}
                    variants={iconTranslate}
                    custom = {indx}
                    initial = {'initial'}
                    animate = {'enter'}  
                    exit = {'exit'}
                    >
                    <p>{link.title}</p>
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
        <div className = 'flex justify-evenly items-center'>
            <NavImage src = {links[hoveredLink.index].src} isActive = {hoveredLink.isActive}/>
            <Body setIsOpen = {setIsOpen} links = {links} hoveredLink={hoveredLink} setHoveredLink={setHoveredLink}/>
        </div>
        <footer className = 'relative w-full flex justify-between p-[10vh]'>
            <section className = 'flex gap-5 overflow-hidden text-background-gray'>
                {getLinks()}
            </section>
            <section className = 'flex gap-5 overflow-hidden'>
                {getEndLinks()}
            </section>
        </footer>
    </motion.div>
  )
}

export default Nav
'use client'

import React, {useState, useEffect, useRef, useLayoutEffect} from 'react'
import { motion } from 'framer-motion'
import Link from './Link';
import { usePathname, useRouter } from 'next/navigation';

const layoutTransitions = {
  in: {
    x: '0',
    width: '100vw',
    
  },
  out: {
    x: '100vw'
  },
  reset: {
    x: '0',
    width: 0,
    transition: {
      duration: 0
    }
  }
}

const Navbar = () => {

  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const [layout, setLayout] = useState<string>('reset')

  const firstUpdate = useRef(true);

  const router = useRouter()


  const changeRoute = async (url: string) => {

    if (url === pathname) {
      //maybe add a scroll to top of page here
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
      return
    }

    setLayout('in')
    setTimeout(() => {
      router.push(url)}, 300);
  }

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    setLayout('out')
    setTimeout(() => setLayout('reset'), 400);

  }, [pathname]);





  useEffect(() => {
      let previousScrollPosition = 0;
      let currentScrollPosition = 0;

      window.addEventListener('scroll', function (e) {
        // Get the new Value
        currentScrollPosition = window.pageYOffset;
        //Subtract the two and conclude
        if (currentScrollPosition < 2) {
          setVisible(true);
        } else if (currentScrollPosition < window.screen.height) {
          setVisible(false);
        } else if (previousScrollPosition - currentScrollPosition < 0) {
          setVisible(false);
        } else if (previousScrollPosition - currentScrollPosition > 0) {
          setVisible(true);
        }
        // Update the previous value
        previousScrollPosition = currentScrollPosition;
      });
    }, []);

  return (
    <>
    {<motion.div 
      animate = {layout}
      variants = {layoutTransitions}
      transition={{ ease: "easeOut", duration: 0.3}}
      className = 'fixed top-0 z-[60] h-screen bg-pastel-blue'>
    </motion.div>}
    <nav className={`mix-blend-difference text-pastel-gray-light w-full overflow-hidden transition-all duration-500 fixed z-50 ${visible ? 'translate-y-0' : '-translate-y-[9vh]'} `}>
        <ul className = 'mx-5 mt-5 flex justify-end gap-4 items-center'>
          <li className = 'flex gap-10 uppercase text-[1vw] font-normal'>
            <Link title = 'Home' url = '/' changeRoute = {changeRoute}/>
            <Link title = 'Awards' url = '/awards' changeRoute = {changeRoute}/>
            <Link title = 'Contact' url = '/contact' changeRoute = {changeRoute}/>
          </li>
        </ul>
    </nav>
    </>
)
}

export default Navbar
'use client'

import React, {useState, useEffect, useRef, useLayoutEffect} from 'react'
import { motion } from 'framer-motion'
import Link from './Link';
import { usePathname, useRouter } from 'next/navigation';

const layoutTransitionsUp = {
  in: {
    y: '0',
    height: '100vh',
    
  },
  out: {
    x: '50vw',
  },
  reset: {
    y: '0',
    height: 0,
    transition: {
      duration: 0
    }
  }
}

const layoutTransitionsDown = {
  in: {
    y: '0',
  },
  out: {
    x: '-50vw',
  },
  reset: {
    y: '100vh',
    height: 0,
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

    setTimeout(() => setLayout('out'), 100)
    setTimeout(() => setLayout('reset'), 500);

  }, [pathname]);





  useEffect(() => {
      let previousScrollPosition = 0;
      let currentScrollPosition = 0;
      console.log('add: ', pathname)
      function navbarListener() {
        // Get the new Value
        currentScrollPosition = window.pageYOffset;
        //Subtract the two and conclude
        if (currentScrollPosition < 2) {
          setVisible(true);
        } else if (currentScrollPosition < window.screen.height && pathname === '/') {
          setVisible(false);
        } else if (previousScrollPosition - currentScrollPosition < 0) {
          setVisible(false);
        } else if (previousScrollPosition - currentScrollPosition > 0) {
          setVisible(true);
        }
        // Update the previous value
        previousScrollPosition = currentScrollPosition;
      };
      window.addEventListener('scroll', navbarListener)

      return () => {
        console.log('remove: ', pathname)
        window.removeEventListener('scroll', navbarListener)
      }
    }, [pathname]);

  return (
    <>
    {<>
      <motion.div 
        animate = {layout}
        variants = {layoutTransitionsDown}
        transition={{ ease: "easeOut", duration: 0.3}}
        className = 'fixed top-0 z-[60] h-screen w-1/2 bg-pastel-gray-light'>
      </motion.div>
      <motion.div 
        animate = {layout}
        variants = {layoutTransitionsUp}
        transition={{ ease: "easeOut", duration: 0.3}}
        className = 'fixed top-0 left-1/2 z-[60] h-screen w-1/2 bg-pastel-gray-light'>
      </motion.div>
    </>}
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
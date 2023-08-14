'use client'

import React, {useState, useEffect, useRef, useLayoutEffect} from 'react'
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
  const router = useRouter()

  const changeRoute = async (url: string) => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'auto' 
    });

    router.push(url)
  }

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
      <nav className={`mix-blend-difference text-pastel-gray-light w-full overflow-hidden transition-all duration-500 fixed z-50 ${visible ? 'translate-y-0' : '-translate-y-[9vh]'} `}>
        <ul className = 'mx-5 mt-5 flex justify-end gap-4 items-center'>
          <li className = 'flex gap-10 uppercase text-xl font-normal'>
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
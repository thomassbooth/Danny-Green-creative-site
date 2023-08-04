'use client'

import React, {useState, useEffect} from 'react'
import Link from './Link';

const Navbar = () => {

const [visible, setVisible] = useState(false)

useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener('scroll', function (e) {
      // Get the new Value
      currentScrollPosition = window.pageYOffset;
      //Subtract the two and conclude
      if (currentScrollPosition <= window.screen.height) {
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
    <nav className={`mix-blend-difference text-pastel-gray-light w-full overflow-hidden transition-all duration-500 fixed z-50 ${visible ? 'translate-y-0' : '-translate-y-[9vh]'} `}>
        <ul className = 'mx-5 mt-5 flex justify-between gap-4 items-center'>
          <li className = 'text-[1.2vw] uppercase font-light'>
            <h2>DG</h2>
          </li>
          <li className = 'flex gap-10 uppercase text-lg font-light'>
            <Link title = 'Home'/>
            <Link title = 'About'/>
            <Link title = 'Gallery'/>
            <Link title = 'Contact'/>
          </li>
        </ul>
    </nav>
)
}

export default Navbar
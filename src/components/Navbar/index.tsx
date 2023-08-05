'use client'

import React, {useState, useEffect} from 'react'
import Link from './Link';

const Navbar = () => {

const [visible, setVisible] = useState(true)
const [start, setStart] = useState(true)


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
        <ul className = 'mx-5 mt-5 flex justify-end gap-4 items-center'>
          <li className = 'flex gap-10 uppercase text-[1vw] font-normal'>
            <Link title = 'Home'/>
            <Link title = 'Awards'/>
            <Link title = 'Contact'/>
          </li>
        </ul>
    </nav>
)
}

export default Navbar
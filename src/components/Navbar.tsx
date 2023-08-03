'use client'

import React, {useState, useEffect} from 'react'

const Navbar = () => {

const [visible, setVisible] = useState(true)

useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener('scroll', function (e) {
      // Get the new Value
      currentScrollPosition = window.pageYOffset;
      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setVisible(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setVisible(true);
      }
      console.log (currentScrollPosition)
      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);

return (
    <div className={`text-pastel-gray-light w-full h-14 overflow-hidden transition-all duration-500 fixed z-50 ${visible ? 'translate-y-0' : '-translate-y-20'} `}>
        Danny Green
    </div>
)
}

export default Navbar
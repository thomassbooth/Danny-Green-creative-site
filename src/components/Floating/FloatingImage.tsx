import Image from 'next/image'
import React, { useState } from 'react'

interface floatingImageProps {
    src: string
    top: string | number
    left: string | number
    size: string
}

const FloatingImage: React.FC<floatingImageProps> = ({src, top, left, size}) => {
  return (
    <div 
        style = {{top: top, left: left}}
        className = {` ${size} absolute block transition-all duration-300`}>
        <Image
            className = 'object-cover'
            src = {`/images/gallery/${src}`}
            alt = 'polar bear'
            fill
            />
    </div>
  )
}

export default FloatingImage
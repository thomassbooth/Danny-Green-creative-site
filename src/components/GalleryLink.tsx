import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface galleryLinkProps {
  imgSrc: string
  link: string
  name: string
}

const GalleryLink: React.FC<galleryLinkProps> = ({imgSrc, link, name}) => {
  return (
    <Link href = {link} className = 'duration-300 group relative h-[45vh] grayscale hover:grayscale-0 transition-all '>
        <div className = 'flex z-50 overflow-hidden opacity-80 text-pastel-gray-light transition-all duration-500  justify-center items-end w-full h-full absolute'>
          <div className = 'px-3 pt-1 translate-y-20 group-hover:translate-y-0 transition-all duration-500 text-center bg-background-gray'>
            <h1 className = 'uppercase font-bold tracking-wider'>{name}</h1>
          </div>
        </div>
        <Image src = {`/images/${imgSrc}`} alt = 'froggy' fill/>
    </Link>
  )
}

export default GalleryLink
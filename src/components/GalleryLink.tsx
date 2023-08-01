import Image from 'next/image'
import React from 'react'

interface galleryLinkProps {

}

const GalleryLink: React.FC<galleryLinkProps> = () => {
  return (
    <div className = 'mt-[20vh] relative h-[40vh] saturate-[0.5]'>
        <Image src = '/images/Common-Frog-22.jpg' alt = 'froggy' fill/>
    </div>
  )
}

export default GalleryLink
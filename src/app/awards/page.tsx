'use client'

import Modal from '@/components/Awards/Modal'
import Project from '@/components/Awards/Project'
import React from 'react'
import { useState } from 'react'

const awards = [
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Mountain-Hare-BWPA.jpeg',
    year: '2023',
    color: '#FDF4F5'
  },
  {
    title: 'Bird Photographer of the Year',
    place: 'Commended',
    year: '2023',
    src: 'Angel-of-the-North-BPOTY.jpeg'
  },
  {
    title: 'European Wildlife Photographer of the Year',
    place: 'Highly Commended',
    src: 'Arctic_Fox_with_a_Ringed_Seal_Pup_GDT.jpeg',
    year: '2023',
    color: '#AEE2FF'
  },
  {
    title: 'European Wildlife Photographer of the Year',
    place: 'Category Winner',
    src: 'Red_Deer_Stag_shaking_water_of_itself.jpeg',
    year: '2021',
    color: '#AAC8A7'
  },
  {
    title: 'Natures Best',
    place: 'Highly Honoured',
    src: 'Grizzly-at-Dawn.jpeg',
    year: '2016',
    color: '#AAC8A7'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Pine-Marten-portrait.jpeg',
    year: '2016',
    color: '#AAC8A7'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Pine-martens-play-fighting.jpeg',
    year: '2015',
    color: '#AAC8A7'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Common-Seal-pup-in-a-sandstorm.jpeg',
    year: '2015',
    color: '#AAC8A7'
  },

]

const AwardsPage = () => {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <div className = 'min-h-screen py-[15vh] flex items-center justify-center bg-pastel-gray-light'>
      <ul className = 'w-[70vw] flex flex-col items-center justify-center'>
        {
          awards.map((award, index) => {
            return <Project key = {index} index = {index} title = {award.title} place = {award.place} setModal = {setModal} year = {award.year}/>
          })
        }
      </ul>
      <Modal modal = {modal} awards = {awards}/>
    </div>
  )
}

export default AwardsPage
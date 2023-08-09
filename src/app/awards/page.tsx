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
    color: '#EDF1F5'
  },
  {
    title: 'Bird Photographer of the Year',
    place: 'Commended',
    year: '2023',
    src: 'Angel-of-the-North-BPOTY.jpeg',
    color: '#ECF2F4'
  },
  {
    title: 'European Wildlife Photographer of the Year',
    place: 'Highly Commended',
    src: 'Arctic_Fox_with_a_Ringed_Seal_Pup_GDT.jpeg',
    year: '2023',
    color: '#A0CDF1'
  },
  {
    title: 'European Wildlife Photographer of the Year',
    place: 'Category Winner',
    src: 'Red_Deer_Stag_shaking_water_of_itself.jpeg',
    year: '2021',
    color: '#424402'
  },
  {
    title: 'Natures Best',
    place: 'Highly Honoured',
    src: 'Grizzly-at-Dawn.jpeg',
    year: '2016',
    color: '#ED9033'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Pine-Marten-portrait.jpeg',
    year: '2016',
    color: '#839439'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Pine-martens-play-fighting.jpeg',
    year: '2015',
    color: '#B9935E'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Pine-Marten-jumping-towards-me.jpeg',
    year: '2015',
    color: '#C8D080'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Pine-Marten.jpeg',
    year: '2015',
    color: '#596755'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Mountain-Hare.jpeg',
    year: '2015',
    color: '#BEBFC4'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Common-Seal-pup-in-a-sandstorm.jpeg',
    year: '2015',
    color: '#B3937D'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Puffins-courtship-displaying.jpeg',
    year: '2015',
    color: '#06050B'
  },
  {
    title: 'GDT - European Nature Photographer',
    place: 'Highly Commended',
    src: 'Litle-Auks-in-flight-and-blue-Iceberg.jpeg',
    year: '2011',
    color: '#96C2D1'
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
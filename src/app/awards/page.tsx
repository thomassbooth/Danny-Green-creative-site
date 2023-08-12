'use client'

import Modal from '@/components/Awards/Modal'
import Project from '@/components/Awards/Project'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Libre_Baskerville } from 'next/font/google'
import { useState } from 'react'

const libre = Libre_Baskerville({ weight: ['400', '700'], style: ['italic', 'normal'], subsets: ['latin'] })

const awards = [
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Mountain-Hare-BWPA.jpeg',
    year: '2023',
    color: '#EDF1F5',
    type: 'Animal Portraits'
  },
  {
    title: 'Bird Photographer of the Year',
    place: 'Commended',
    year: '2023',
    src: 'Angel-of-the-North-BPOTY.jpeg',
    color: '#ECF2F4',
    type: 'Birds'
  },
  {
    title: 'European Wildlife Photographer of the Year',
    place: 'Highly Commended',
    src: 'Arctic_Fox_with_a_Ringed_Seal_Pup_GDT.jpeg',
    year: '2023',
    color: '#A0CDF1',
    type: 'Mammals'
  },
  {
    title: 'European Wildlife Photographer of the Year',
    place: 'Category Winner',
    src: 'Red_Deer_Stag_shaking_water_of_itself.jpeg',
    year: '2021',
    color: '#424402',
    type: 'Mammals'
  },
  {
    title: 'Natures Best',
    place: 'Highly Honoured',
    src: 'Grizzly-at-Dawn.jpeg',
    year: '2016',
    color: '#ED9033',
    type: 'Mammals Behaviour'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Pine-Marten-portrait.jpeg',
    year: '2016',
    color: '#839439',
    type: 'Mammals Behaviour'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Pine-martens-play-fighting.jpeg',
    year: '2015',
    color: '#B9935E',
    type: 'Mammals Behaviour'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Pine-Marten-jumping-towards-me.jpeg',
    year: '2015',
    color: '#C8D080',
    type: 'Mammals Behaviour'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Pine-Marten.jpeg',
    year: '2015',
    color: '#596755',
    type: 'Habitat'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Mountain-Hare.jpeg',
    year: '2015',
    color: '#BEBFC4',
    type: 'Animal Portraits'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Common-Seal-pup-in-a-sandstorm.jpeg',
    year: '2015',
    color: '#B3937D',
    type: 'Habitat'
  },
  {
    title: 'British Wildlife Photography Awards',
    place: 'Highly Commended',
    src: 'Puffins-courtship-displaying.jpeg',
    year: '2015',
    color: '#06050B',
    type: 'Animal Behaviour'
  },
  {
    title: 'GDT - European Nature Photographer',
    place: 'Highly Commended',
    src: 'Litle-Auks-in-flight-and-blue-Iceberg.jpeg',
    year: '2011',
    color: '#96C2D1',
    type: 'Bird Category'
  },

]

const slideDown = {
  initial: {
    y: '-100%',
    opacity: 0.7
  },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3 + (i) * 0.02,
      duration: 0.5
    }
  })
}

const AwardsPage = () => {

  const [modal, setModal] = useState({active: false, index: 0})
  const title = useRef(null);
  const isInView = useInView(title)

  return (
    <div className = 'min-h-screen py-[20vh] flex flex-col items-center justify-center bg-pastel-gray-light'>
      <header ref = {title} className = 'relative flex'>
        <p className = 'm-0'>
          {'AWARDS'.split('').map((str, i) => {
            return (
            <span className = 'relative inline-flex overflow-hidden' key = {i}>
              <motion.span
                className = 'leading-[13vw] text-[13vw] text-[#171717] text-center tracking-tight uppercase font-[900]'
                animate={isInView ? "open" : "inital"}
                custom = {i}
                viewport={{ once: true }}
                initial={'initial'}
                variants={slideDown}>
                  {str}
              </motion.span>
            </span>
          )})}
        </p>
      </header>
      <div
        className = {`${libre.className} w-[70vw] text-center mb-6 font-light text-[2vw] flex flex-col leading-[4.5vh] justify-center tracking-[-0.01em] items-center`}>
        <p>
        My pics won big in top-notch Natural History photo contests. 15 years of consistent entries paid off, despite the frustrations. Now, with multiple awards and my work published.
        </p>
      </div>
      
      
      <ul className = 'w-[70vw] flex flex-col items-center justify-center'>
      <p className = 'opacity-10  mb-4 w-full'>HOVER ME</p>
        { 
          awards.map((award, index) => {
            return <Project key = {index} index = {index} title = {award.title} place = {award.place} setModal = {setModal} year = {award.year} type = {award.type}/>
          })
        }
      </ul>
      <Modal modal = {modal} awards = {awards}/>
    </div>
  )
}

export default AwardsPage
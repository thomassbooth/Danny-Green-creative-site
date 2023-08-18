'use client'

import Modal from '@/components/Awards/Modal'
import Project from '@/components/Awards/Project'
import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Libre_Baskerville } from 'next/font/google'
import { useState } from 'react'
import Title from '@/components/Title'

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


const AwardsPage = () => {

    const [modal, setModal] = useState({active: false, index: 0})
    const title = useRef(null)
    const container = useRef(null)

    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    }) 

    const titleY = useTransform(scrollYProgress, [0, 0.5], ['0vh', '-15vh'])
    const textY = useTransform(scrollYProgress, [0, 0.5], ['0vh', '-5vh'])
    const hoverX = useTransform(scrollYProgress, [0, 0.5], ['0vh', '-10vh'])
    const awardsY = useTransform(scrollYProgress, [0, 1], ['0vh', '15vh'])
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <div ref = {container} className = 'min-h-screen w-screen py-[20vh] flex flex-col items-center justify-center bg-pastel-gray-light'>
      <motion.header
        style={{y: titleY}}
        ref = {title}>
        <Title className = 'leading-[11vw] font-[700] text-[13vw]' text = {'Awards'} />
      </motion.header>
      <motion.div
        style = {{y: textY}}
        className = {`${libre.className} w-[70vw] text-center mb-6 font-light text-[2vw] flex flex-col leading-[4.5vh] justify-center tracking-[-0.01em] items-center`}>
        <p>
        My pics won big in top-notch Natural History photo contests. 15 years of consistent entries paid off, despite the frustrations. Now, with multiple awards and my work published.
        </p>
      </motion.div>
      
      <motion.p
        style = {{x: hoverX}}
        className = 'opacity-20 mb-4 ml-[30vw] w-full'>
        HOVER ME
      </motion.p>
      <motion.ul 
        style = {{y: awardsY}}
        className = 'w-[70vw] flex flex-col items-center justify-center'>
        { 
          awards.map((award, index) => {
            return <Project key = {index} index = {index} title = {award.title} place = {award.place} setModal = {setModal} year = {award.year} type = {award.type}/>
          })
        }
      </motion.ul>
      <Modal modal = {modal} awards = {awards}/>
    </div>
  )
}

export default AwardsPage
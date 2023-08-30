import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap';

const FloatingGallery = () => {

    const plane1 = useRef(null)
    const plane2 = useRef(null)
    const plane3 = useRef (null)
    let requestAnimationFrameId: number | null = null;
    let xForce = 0;
    let yForce = 0;
    const easing = 0.1;
    const speed = 0.02;

    const manageMouseMove = (e: any) => {
        const { movementX, movementY } = e
        xForce += movementX * speed;
        yForce += movementY * speed;

        if(requestAnimationFrameId == null){
            requestAnimationFrameId = requestAnimationFrame(animate);
        }
    }

    const lerp = (start: number, target: number, amount: number ) => start * (1 - amount) +target * amount;

    const animate = () => {
        xForce = lerp(xForce, 0, easing);
        yForce = lerp(yForce, 0, easing);
        gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})
        gsap.set(plane2.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
        gsap.set(plane3.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})

        if(Math.abs(xForce) < 0.01) xForce = 0;
        if(Math.abs(yForce) < 0.01) yForce = 0;
        
        if(xForce != 0 || yForce != 0){
            requestAnimationFrame(animate);
        }
        else{
            cancelAnimationFrame(requestAnimationFrameId as number)
            requestAnimationFrameId = null;
        }
  }


  return (
    <div onMouseMove={(e) => {manageMouseMove(e)}} className = 'h-screen relative bg-background-gray'>
        <div className = 'w-screen font-bold h-screen absolute flex flex-col z-10 justify-center items-center '>
            <h1 className = 'block leading-[15vw] text-[15vw] text-pastel-gray-light z-10'>
                DANNY
            </h1>
            <h1 className = 'block leading-[10vw] text-[15vw] text-pastel-gray-light z-10'>
                GREEN
            </h1>
        </div>
        
        <div ref = {plane1} className = 'absolute h-full w-full brightness-[0.9] z-20'>
            <Image className = 'aspect-auto absolute left-[90%] top-[70%]'
                src = {'/images/Wolves-play-fighting.jpeg'} alt = {'wolves'}  width = {400} height = {1000}/>
            <Image className = 'aspect-auto absolute left-[5%] top-[65%]'
                src = {'/images/Arctic-1.jpeg'} alt = {'arctic'}  width = {400} height = {300}/>
            <Image className = 'aspect-auto absolute left-[35%] top-[0%]'
                src = {'/images/Wild-Britain-coasts.jpeg'} alt = {'Brit'} width = {325} height = {1000}/>
        </div>
        <div ref = {plane2} className = 'absolute h-full w-full brightness-[0.8] z-0'>
            <Image className = 'aspect-auto absolute left-[5%] top-[10%] '
                src = {'/images/Wolves-play-fighting.jpeg'} alt = {'wolves'}  width = {350} height = {1000}/>
            <Image className = 'aspect-auto absolute left-[80%] top-[5%]'
                src = {'/images/Arctic-1.jpeg'} alt = {'arctic'}  width = {300} height = {1000}/>
            <Image className = 'aspect-auto absolute left-[60%] top-[60%]'
                src = {'/images/Wild-Britain-coasts.jpeg'} alt = {'Brit'} width = {325} height = {1000}/>
        </div>
        <div ref = {plane3} className = 'absolute h-full w-full brightness-[0.7]'>
            <Image className = 'aspect-auto absolute left-[65%] top-[2.5%]'
                src = {'/images/Wolves-play-fighting.jpeg'} alt = {'wolves'}  width = {250} height = {1000}/>
            <Image className = 'aspect-auto absolute left-[40%] top-[75%]'
                src = {'/images/Arctic-1.jpeg'} alt = {'arctic'}  width = {300} height = {1000}/>
        </div>
    </div>
  )
}

export default FloatingGallery
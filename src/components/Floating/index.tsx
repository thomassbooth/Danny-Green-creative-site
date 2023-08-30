import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap';
import FloatingImage from './FloatingImage';

const Floating = () => {

    const plane1 = useRef(null)
    const plane2 = useRef(null)
    const plane3 = useRef (null)
    const plane4 = useRef (null)
    const plane5 = useRef (null)
    let requestAnimationFrameId: number | null = null;
    let xForce = 0;
    let yForce = 0;
    const easing = 0.1;
    const speed = 0.01;

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
        gsap.set(plane4.current, {x: `+=${xForce * 0.6}`, y: `+=${yForce * 0.3}`})
        gsap.set(plane5.current, {x: `+=${xForce * -0.1}`, y: `+=${yForce * -0.4}`})

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
    <div onMouseMove={(e) => {manageMouseMove(e)}} className = 'h-screen relative bg-pastel-gray-light'>    
        <div className = 'text-background-gray flex flex-col z-20 justify-center text-[10vw] leading-[10vw] font-bold items-center absolute w-screen h-screen '>
            <p ref = {plane4}>Danny</p>
            <p ref = {plane5}>Green</p>
        
        </div>    
        <div ref = {plane1} className = 'absolute h-full w-full brightness-[0.9] z-20'>
            <FloatingImage src = '7-Capercaillie-Male-Displaying-in-the-snow-2.jpg' top = {'0%'} left = {'10%'} size = {'w-[15vw] h-[35vh]'} custom = {1}/>
            <FloatingImage src = '38-Red-Squirrel-Jumping-5-1.jpg' top = {'35%'} left = {'70%'} size = {'w-[15vw] h-[30vh]'} custom = {2}/>
            <FloatingImage src = '101-Black-Bear-Cubs.jpg' top = {'65%'} left = {'30%'} size = {'w-[15vw] h-[35vh]'} custom = {3}/>
            <FloatingImage src = '49-Grizzly-Bear-with-a-fish-2.jpg' top = {'70%'} left = {'80%'} size = {'w-[15vw] h-[30vh]'} custom = {4}/>
        </div>
        <div ref = {plane2} className = 'absolute h-full w-full brightness-[0.8] z-0'>
            <FloatingImage src = '16-Sparrowhawk-5.jpg' top = {'5%'} left = {0} size = {'w-[10vw] h-[40vh]'} custom = {5}/>
            <FloatingImage src = '41-Pine-Marten-1.jpg' top = {'15%'} left = {'40%'} size = {'w-[15vw] h-[40vh]'} custom = {6} />
            <FloatingImage src = '31-European-Brown-Bear-cubs-play-fighting-2.jpg' top = {'2%'} left = {'85%'} size = {'w-[10vw] h-[40vh]'} custom = {7}/>
            <FloatingImage src = '96-Sea-Otter-resting-1.jpg' top = {'70%'} left = {'55%'} size = {'w-[20vw] h-[25vh]'} custom = {8}/>
        </div>
        <div ref = {plane3} className = 'absolute h-full z-30 w-full brightness-[0.7]'>
            <FloatingImage src = '10-Puffin-20.jpg' top = {'25%'} left = {'20%'} size = {'w-[15vw] h-[40vh]'} custom = {9} />
            <FloatingImage src = '124-Tawny-Owl-amongst-Oak-leaves-6.jpg' top = {'5%'} left = {'55%'} size = {'w-[15vw] h-[40vh]'} custom = {10}/>
            <FloatingImage src = '31-Red-Squirrel-7.jpg' top = {'55%'} left = {'2%'} size = {'w-[15vw] h-[40vh]'} custom = {11}/>
        </div>
    </div>
  )
}

export default Floating
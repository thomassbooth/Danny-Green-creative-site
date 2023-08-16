import React, { useEffect, useRef } from 'react'

const LoadingOverlay = () => {
    let start: number;
    const duration: number = 600;
    const loader = useRef<any>(null);
    const path = useRef<any>(null);
    const initialCurve = 200
  
    useEffect(() => {
        setPath(initialCurve)
        setTimeout( () => {
            requestAnimationFrame(animate)
        }, 500)
        
    }, [])
  
    const animate = (timestamp: number) => {
      if(start === undefined){
        start = timestamp
      }
      
      const elapsed: number = timestamp - start;
  
      loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + 'px';
  
      if(elapsed < duration) {
        requestAnimationFrame(animate)
      }
  
      const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration)
      setPath(newCurve)
    }
  
    const easeOutQuad = (time: number, start: number, end: number, duration: number) => {
      return -end * (time /= duration) * (time - 2) + start;
    }
  
    const loaderHeight = () => {
      if (!loader.current) return
  
      const loaderBounds = loader.current.getBoundingClientRect();
      return loaderBounds.height
    }
  
    const setPath = (curve: number) => {
      if (!path.current) return
      const width = dimension.widthdth
      const height = loaderHeight();
      path.current.setAttributeNS(null, "d",
      `M0 0
      L${width} 0
      L${width} ${height}
      Q${width/2} ${height - curve} 0 ${height}
      L0 0`
      )
    }

  return (
    <div ref={loader} className='h-[calc(120vh+200px)] z-50 w-screen fixed'>
        <svg className = 'h-full w-full stroke-black stroke-1'>
          <path ref={path}></path>
        </svg>
    </div>
  )
}

export default LoadingOverlay
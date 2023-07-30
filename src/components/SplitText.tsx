import React from 'react'

const SplitText = () => {
  return (
    <div className = 'text-white z-20' style={{ position: 'relative', height: '50vh', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: '50%', overflow: 'hidden' }}>
    <h1
      className='absolute text-center font-[900] tracking-[-.055em] text-[22vw] uppercase'
    >
      GALLERY
    </h1>
  </div>
  <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
    <h1
      className='absolute text-center font-[900] tracking-[-.055em] text-[22vw] uppercase'
    >
      GALLERY
    </h1>
  </div>
</div>
  )
}

export default SplitText
"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const BGAnimation = () => {
  const [orientation, setOrientation] = useState(20);
  const [sequence, setSequence] = useState(10);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setOrientation(window.innerWidth < 728 ? 10 : 20);
        setSequence(window.innerWidth < 728 ? 5 : 10);
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
      <AnimatePresence>
        <div id='squareCont' className='h-full w-full grid lg:grid-cols-20 grid-cols-10 items-center absolute -top-3'>
          { Array.from({length: 250}).map((_, i) => (
              <motion.span 
                animate={{
                    scale: [1, 1.5, 1],
                    background: [
                        'linear-gradient(135deg, #010b13, #010b13, #010b13)', 
                        'linear-gradient(135deg, #010b13, #002147, #010b13)', 
                        'linear-gradient(135deg, #010b13, #010b13, #010b13)']
                }}
                transition={{
                    duration: 2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop',
                    delay: ((i% window.innerWidth < 728 ? 10 : 20) / window.innerWidth < 728 ? 5 : 10) + i/75,
                    repeatDelay: 10
                }}
                key={i} 
                className='col-span-1 aspect-square rounded-full'
              ></motion.span>
          )) }
        </div>
      </AnimatePresence>
  )
}

export default BGAnimation

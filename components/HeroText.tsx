"use client";

import { motion } from 'framer-motion'
import React from 'react'

interface HeroTextProps {
    text1: string;
    underlineText: string;
    text2: string;
    boxText: string;
}
const HeroText: React.FC<HeroTextProps> = ({ text1, underlineText, text2, boxText }) => {
  return (
    <div className='md:text-7xl text-4xl md:leading-20 leading-9 flex flex-wrap gap-3 justify-center tracking-tighter'>
            { text1 }
            <div className='h-min min-w-max overflow-hidden relative'>{ underlineText }
              <motion.span
                className='md:h-1 h-0.5 w-full absolute bottom-0 left-1/2 -translate-x-1/2 bg-blackish'
                initial={{x: -200}}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.3 }}
              ></motion.span>
            </div>
            { text2 }
            <motion.div 
              className='h-min min-w-max overflow-hidden relative px-5 text-[#fdfffc]'
              initial={{color: '#161a1d'}}
              animate={{color: '#fdfffc'}}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              { boxText }
              <motion.span
                className='h-full w-[110%] bg-gradient-to-r from-blackish via-font-color to-nav-hover absolute top-1/2 left-1/2 -translate-1/2 -z-10'
                initial={{x: 999}}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, duration: 1, delay: 1 }}
              ></motion.span>
            </motion.div>
          </div>
  )
}

export default HeroText

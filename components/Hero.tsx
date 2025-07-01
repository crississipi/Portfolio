"use client";

import React, { useEffect, useState } from 'react'
import NavBtn from './NavBtn'
import HeroText from './HeroText'
import { AnimatePresence, motion } from 'framer-motion'
import { HiArrowSmallDown } from 'react-icons/hi2';

const textData = [
  {
    text1: "Turning",
    underlineText: "Ideas",
    text2: "into Seamless",
    boxText: "Digital Experiences",
  },
  {
    text1: "Producing",
    underlineText: "Tailored Solutions",
    text2: "for",
    boxText: "Complex Problems",
  },
  {
    text1: "Maximizing",
    underlineText: "Effort",
    text2: "through Seamless",
    boxText: "Digital Approach",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='home' className='h-full w-full relative overflow-hidden flex items-center justify-center text-nav-hover'>
      <div className='w-full h-full z-50 flex flex-col items-center justify-between px-5'>
        <div className='md:w-4/5 w-full flex flex-col h-full justify-center relative'>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <HeroText
                text1={textData[index].text1}
                underlineText={textData[index].underlineText}
                text2={textData[index].text2}
                boxText={textData[index].boxText}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='flex flex-col items-center text-sm gap-3 md:gap-1'>
          Explore my Works!
          <a href='#crafts' className='h-14 w-14 rounded-full border border-blackish flex items-center justify-center text-4xl text-blackish hover:text-nav-hover hover:border-nav-hover ease-in-out duration-150 cursor-pointer'>
            <HiArrowSmallDown className='mt-2 animate-bounce duration-300'/>
          </a>
        </div>
        <div className='w-full flex flex-col md:mb-5 mb-24 gap-2'>
          <NavBtn 
            icon={0} 
            link='https://www.linkedin.com/in/crismalipico12/'
            label='in/crismalipico12/'
          />
          <NavBtn 
            icon={1} 
            link='https://github.com/crississipi'
            label='github.com/crississipi'
          />
          <NavBtn 
            icon={2} 
            link='https://mail.google.com/mail/?view=cm&fs=1&to=crismalipico12@gmail.com'
            label='crismalipico12@gmail.com'  
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

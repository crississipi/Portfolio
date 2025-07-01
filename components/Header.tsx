"use client"

import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { TbMoonFilled, TbSunFilled } from 'react-icons/tb'
import NavLink from './NavLink'

const Header = () => {
  const [lightSwitch, setLightSwitch] = useState(false);
  const sunControl = useAnimation();
  const moonControl = useAnimation();
  const sunDivControl = useAnimation();
  const moonDivControl = useAnimation();

  const toggleSwitch = () => {
    setLightSwitch(!lightSwitch);
    if(!lightSwitch) {
      sunDivControl.start({
        x: [0, -92],
        opacity: [1, 0],
        scale: [1, 0.8],
        transition: { duration: 0.3, delay: 0.3 }
      });
      moonDivControl.start({
        x: [0, -92],
        opacity: [0, 1],
        scale: [0.8, 1],
        transition: { duration: 0.3, delay: 0.3 }
      })
      sunControl.start({
        y: [0, -50],
        transition: { type: "spring", stiffness: 300, damping: 20 }
      });
      moonControl.start({
        y: [50, 0],
        transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.5 }
      });

      document.querySelectorAll('.bg-whitish').forEach((square) => {
        square.classList.replace('bg-whitish', 'bg-nav-hover');
      });

      document.querySelectorAll('.text-nav-hover').forEach((font) => {
        font.classList.replace('text-nav-hover', 'text-whitish');
      });

      document.querySelectorAll('.nav').forEach((font) => {
        font.classList.replace('bg-nav-hover', 'bg-whitish');
        font.classList.replace('text-whitish', 'text-nav-hover');
      });
      
      document.querySelectorAll('.navbtn').forEach((hover) => {
        hover.classList.replace('before:bg-nav-hover', 'before:bg-whitish');
        hover.classList.replace('hover:text-font-color', 'hover:text-whitish')
      });

      document.querySelectorAll('.product-card').forEach((card) => {
        card.classList.replace('from-font-color', 'from-blackish');
        card.classList.replace('via-nav-hover', 'via-font-color');
        card.classList.replace('to-black', 'to-nav-hover');
      });

      document.querySelectorAll('.icon-holder').forEach((icon) => {
        icon.classList.replace('via-font-color/70', 'via-blackish/70');
        icon.classList.replace('to-nav-hover', 'to-font-color');
      });
    }
    else {
      moonDivControl.start({
        x: [-92, 0],
        opacity: [1, 0],
        scale: [1, 0.8],
        transition: { duration: 0.3, delay: 0.2 }
      });
      sunDivControl.start({
        x: [-92, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        transition: { duration: 0.3, delay: 0.2 }
      })
      sunControl.start({
        y: [-50, 0],
        transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.5 }
      });
      moonControl.start({
        y: [0, 50],
        transition: { type: "spring", stiffness: 300, damping: 20 }
      });

      document.querySelectorAll('.bg-nav-hover').forEach((square) => {
        square.classList.replace('bg-nav-hover', 'bg-whitish');
      });

      document.querySelectorAll('.underNav').forEach((square) => {
        square.classList.replace('bg-whitish', 'bg-nav-hover');
      });

      document.querySelectorAll('.text-whitish').forEach((font) => {
        font.classList.replace('text-whitish', 'text-nav-hover');
      })

      document.querySelectorAll('.nav').forEach((font) => {
        font.classList.replace('bg-whitish', 'bg-nav-hover');
        font.classList.replace('text-nav-hover', 'text-whitish');
      });

      document.querySelectorAll('.navbtn').forEach((hover) => {
        hover.classList.replace('before:bg-whitish', 'before:bg-nav-hover');
        hover.classList.replace('hover:text-whitish', 'hover:text-font-color')
      });

      document.querySelectorAll('.product-card').forEach((card) => {
        card.classList.replace('from-blackish', 'from-font-color');
        card.classList.replace('via-font-color', 'via-nav-hover');
        card.classList.replace('to-nav-hover', 'to-black');
      });

      document.querySelectorAll('.icon-holder').forEach((icon) => {
        icon.classList.replace('via-blackish/70', 'via-font-color/70');
        icon.classList.replace('to-font-color', 'to-nav-hover');
      });
    }
  };

  return (
    <div className='h-20 w-full md:grid md:grid-cols-5 lg:grid-cols-3 flex md:items-end items-center justify-between text-lg z-50 md:px-10 px-5 pb-2'>
        <h1 className='md:col-span-2 lg:col-span-1 uppercase md:text-2xl text-xl text-nav-hover tracking-tighter'>Cris Julius Malipico</h1>
        <div className='md:flex md:col-span-2 md:justify-center hidden'>
          <NavLink refer='#home' section='Home'/>
          <NavLink refer='#crafts' section='Crafts'/>
        </div>
        <div className='col-span-1 flex justify-end'>
          <button 
          className='flex items-center h-9 w-23 gap-[0.5px] rounded-lg right-10 text-2xl cursor-pointer overflow-hidden z-30'
          onClick={toggleSwitch}
          >
            <motion.div 
              className='h-full min-w-23 px-2 flex items-center gap-2 bg-[#dddddd] rounded-md text-[#161a1d] relative -z-50'
              animate={sunDivControl}
            >
              <motion.div 
                initial={{ y: 0 }} 
                animate={sunControl}
                className='absolute z-50'
              >
                <TbSunFilled />
              </motion.div>
              <motion.span className='text-base ml-auto'>Light</motion.span>
            </motion.div>
            <motion.div 
              className='h-full min-w-23 px-2 flex flex-row-reverse items-center gap-2 bg-blackish rounded-md text-[#fdfffc] relative'
              animate={moonDivControl}
            >
              <motion.div 
                initial={{ y: 0 }} 
                animate={moonControl}
                className='absolute z-50'
              >
                <TbMoonFilled />
              </motion.div>
              <motion.span className='text-base text-[#fdfffc] mr-auto'>Dark</motion.span>
            </motion.div>
          </button>
        </div>
    </div>
  )
}

export default Header

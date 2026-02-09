"use client";

import React, { useEffect, useState } from 'react'
import { PiFolderOpenThin, PiHandWavingThin, PiHouseThin, PiUserThin } from 'react-icons/pi'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero')?.clientHeight || 0
      if (window.scrollY > heroHeight / 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 flex transition-all duration-300 pointer-events-none ${
        isScrolled 
          ? 'justify-center md:justify-end pt-2 md:pt-4 md:pr-12' 
          : 'justify-center pt-4 md:pt-8'
      }`}
    >
      <div
        className={`pointer-events-auto w-max rounded-full flex items-center gap-1 md:gap-2 p-1.5 border transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0B0D10]/80 backdrop-blur-md border-white/10 shadow-lg shadow-black/20 scale-90 md:scale-90' 
            : 'bg-transparent border-transparent scale-100'
        }`}
      >
        <a
          href="#hero"
          className={`p-2 md:p-3 rounded-full outline-0 overflow-hidden transition-all duration-300 ${isScrolled ? 'hover:bg-white/10' : 'bg-[#0B0D10]/50 hover:bg-[#0B0D10] border border-white/5'} text-white/80 hover:text-white group`}>
          <PiHouseThin className="text-lg md:text-xl group-hover:text-[#2ED3FF] transition-colors" />
        </a>
        <a
          href="#projects"
          className={`p-2 md:p-3 rounded-full outline-0 overflow-hidden transition-all duration-300 ${isScrolled ? 'hover:bg-white/10' : 'bg-[#0B0D10]/50 hover:bg-[#0B0D10] border border-white/5'} text-white/80 hover:text-white group`}>
          <PiFolderOpenThin className="text-lg md:text-xl group-hover:text-[#8B5CF6] transition-colors" />
        </a>
        <a
          href="#about"
          className={`p-2 md:p-3 rounded-full outline-0 overflow-hidden transition-all duration-300 ${isScrolled ? 'hover:bg-white/10' : 'bg-[#0B0D10]/50 hover:bg-[#0B0D10] border border-white/5'} text-white/80 hover:text-white group`}>
          <PiUserThin className="text-lg md:text-xl group-hover:text-[#FF4FA3] transition-colors" />
        </a>
        <a
          href="#about"
          className={`px-3 py-2 md:px-4 md:py-3 flex items-center gap-2 text-sm font-medium rounded-full outline-0 overflow-hidden transition-all duration-300 ${
            isScrolled 
              ? 'bg-linear-to-r from-[#2ED3FF]/10 to-[#8B5CF6]/10 hover:from-[#2ED3FF]/20 hover:to-[#8B5CF6]/20 border border-white/5 text-white' 
              : 'bg-[#0B0D10] border border-white/10 text-white'
          }`}>
          <PiHandWavingThin className="text-lg" />
          <span className="hidden md:inline">Get in Touch</span>
        </a>
      </div>
    </header>
  )
}

export default Header

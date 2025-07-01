"use client";

import { motion } from 'framer-motion';
import React, { JSX } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { MdAlternateEmail } from 'react-icons/md';

interface NavBtnProps {
    icon: number;
    link: string;
    label: string;
}
const NavBtn: React.FC<NavBtnProps> = ({ icon, link, label }) => {
  const icons: Record<number, JSX.Element> = {
    0: <FaLinkedinIn/>,
    1: <IoLogoGithub/>,
    2: <MdAlternateEmail/>,
  }
  
  return (
    <button className='w-72 pr-5 flex items-center text-lg ease-in-out duration-300 tracking-tight overflow-hidden group relative text-nav-hover'>
        <div className='cursor-pointer h-8 w-8 rounded-sm bg-nav-hover text-whitish flex items-center justify-center nav z-30 group-focus:text-2xl group-hover:text-xl ease-in-out duration-150'>
            {icons[icon] || null}
        </div>
        <a 
          href={link} 
          className='text-nowrap hover:underline gap-3 text-base absolute -left-64 rounded-r-2xl bg-blackish py-0.5 pl-3 pr-5 group-focus:left-7 ease-in-out duration-300'
        >{label}</a>
    </button>
  )
}

export default NavBtn

import React, { JSX } from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io';
import { MdAlternateEmail } from 'react-icons/md';

interface NavBtnProps {
    icon: number;
    link: string;
    label: string;
}
const NavBtn: React.FC<NavBtnProps> = ({ icon, link, label }) => {
  const icons: Record<number, JSX.Element> = {
    0: <FaLinkedinIn className='text-xl'/>,
    1: <IoLogoGithub className='text-xl'/>,
    2: <MdAlternateEmail className='text-xl'/>,
  }
  return (
    <div className='flex items-center gap-3 text-lg ease-in-out duration-200'>
        <button className='cursor-pointer h-8 w-8 rounded-sm bg-nav-hover text-whitish flex items-center justify-center'>
            {icons[icon] || null}
        </button>
        <a href={link} className='text-nowrap hover:underline'>{label}</a>
    </div>
  )
}

export default NavBtn

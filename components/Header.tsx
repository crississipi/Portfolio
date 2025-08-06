"use client"

import React  from 'react'
import NavLink from './NavLink'

const Header = () => {
  return (
    <div className='h-24 w-full flex items-center justify-between text-lg z-50 md:px-10 px-5 pb-2 leading-0'>
        <h1 className='md:col-span-2 lg:col-span-1 uppercase md:text-2xl text-xl text-nav-hover tracking-tighter'>Cris Julius Malipico</h1>
        <div className='md:flex md:col-span-2 lg:col-span-1 md:justify-center hidden ml-auto'>
          <NavLink refer='#home' section='Tech Stack'/>
          <NavLink refer='#crafts' section='Crafts'/>
        </div>
    </div>
  )
}

export default Header

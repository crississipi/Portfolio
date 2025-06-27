import React from 'react'

const Header = () => {
  const navStyle = 'px-5 outline-none flex justify-center relative text-blackish hover:text-font-color before:h-0.5 before:w-0 before:absolute before:bg-nav-hover before:top-7 hover:before:w-3/4 ease-in-out duration-300 before:ease-in-out before:duration-300'
  return (
    <div className='h-auto w-full flex text-lg '>
        <a href="#" className={navStyle}>Home</a>
        <a href="#" className={navStyle}>Crafts</a>
        <a href="#" className={navStyle}>Journey</a>
        <a href="#" className={navStyle}>Inquire</a>
    </div>
  )
}

export default Header

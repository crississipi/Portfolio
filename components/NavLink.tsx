import React from 'react'

interface NavLinkProps {
    refer: string;
    section: string;
}
const NavLink: React.FC<NavLinkProps> = ({ refer, section }) => {
  return (
    <a href={refer} className={'navbtn px-5 outline-none flex justify-center relative text-blackish hover:text-font-color before:h-0.5 before:w-0 before:absolute before:bg-nav-hover before:top-7 hover:before:w-3/4 ease-in-out duration-300 before:ease-in-out before:duration-300'}>{section}</a>
  )
}
export default NavLink

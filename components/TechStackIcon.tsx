
import React, { JSX } from 'react'
import { SiCss3, SiExpress, SiHtml5, SiJavascript, SiLaravel, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPhp, SiReact, SiTailwindcss, SiThreedotjs, SiTypescript, SiVuedotjs } from 'react-icons/si'

interface TechStackProps {
    name: string;
    fontSize: string;
}
const TechStackIcon: React.FC<TechStackProps> = ({ name, fontSize }) => {
  const icons: Record<string, JSX.Element> = {
    'reactjs': <SiReact className='text-blue-400'/>,
    'nextjs': <div className='rounded-full bg-white'><SiNextdotjs className='text-black'/></div>,
    'threejs': <SiThreedotjs className='text-blackish'/>,
    'expressjs': <SiExpress className='text-nav-hover'/>,
    'nestjs': <SiNestjs className='text-rose-600'/>,
    'php': <SiPhp className='text-purple-700'/>,
    'vuejs': <SiVuedotjs className='text-emerald-600'/>,
    'html': <SiHtml5 className='text-amber-600'/>,
    'css': <SiCss3 className='text-sky-500'/>,
    'tailwind': <SiTailwindcss className='text-sky-400'/>,
    'javascript': <SiJavascript className='text-yellow-500'/>,
    'typescript': <SiTypescript className='text-yellow-500'/>,
    'laravel': <SiLaravel className='text-rose-500'/>,
    'mysql': <SiMysql className='text-cyan-600'/>,
    'nodejs': <SiNodedotjs className='text-emerald-600'/>,
  }
  return (
    <div className={`${fontSize ?? 'text-lg'}`}>
      { icons[name] || null }
    </div>
  )
}

export default TechStackIcon

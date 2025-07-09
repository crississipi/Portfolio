import React from 'react'
import Image from 'next/image'
import TechStackIcon from './TechStackIcon';
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc';

interface FeaturedWorkProps {
    srcImage: string;
    icons: string[];
    projName: string;
    docuLink: string;
    liveLink: string;
    projDesc: string;
    start: string;
    end: string;
    isLive: boolean;
}

const FeaturedWork: React.FC<FeaturedWorkProps> = ({ srcImage, icons, projName, projDesc, docuLink, liveLink, start, end, isLive }) => {
  return (
    <button className='md:col-span-1 col-span-full h-auto min-h-3/4 w-full flex flex-col px-2 py-1 rounded-md bg-gradient-to-br from-5% from-font-color via-35% via-nav-hover to-75% to-black shadow-md ease-in-out duration-150 hover:shadow-md cursor-pointer product-card text-blackish'>
        <div className='flex items-center text-[#fdfffc] pb-1'>
          <span className={`md:h-4 md:w-4 h-3 w-3 rounded-full ${isLive ? 'bg-emerald-500' : 'bg-red-500'} mr-2`}></span>
          <h3 className='text-base'>{projName}</h3>
          <span className='text-xs tracking-tighter ml-auto'>{start} - {end}</span>
        </div>
        <div className='relative h-auto min-h-2/5 w-full flex overflow-hidden items-center justify-center'>
          <Image priority src={srcImage} alt='image' width={1000} height={1000} className={`${projName === 'Landlord Web App' ? 'w-1/2' : 'w-full'} object-contain object-center`}></Image>
          <div className='py-2 px-3 gap-1 w-full absolute bg-gradient-to-r from-whitish/30 via-45% via-font-color/70 to-70% to-nav-hover backdrop-blur-md bottom-0 left-1/2 -translate-x-1/2 flex justify-end icon-holder'>
            {icons.map((icon, i) => (
              <TechStackIcon key={i} name={icon} fontSize={'md:text-lg text-xl'}/>
            ))}
          </div>
        </div>
        <div className='w-full h-full flex flex-col items-center'>
          <p className='text-base text-left py-3 leading-4'>{projDesc}</p>
          <div className='text-sm w-full flex justify-between mt-auto'>
            <a href={docuLink} className='flex gap-1 items-center hover:underline'><VscArrowLeft/>see documentation</a>
            { isLive && (<a href={liveLink} className='flex gap-1 items-center hover:underline'>visit live<VscArrowRight/></a>)}
          </div>
        </div>
    </button>
  )
}

export default FeaturedWork

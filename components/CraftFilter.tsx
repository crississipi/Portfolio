"use client";

import React from 'react'
import { HiArrowSmallLeft } from 'react-icons/hi2'
import TechStackIcon from './TechStackIcon';
import FilterButton from './FilterButton';

interface CraftFilterProps {
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
  filterItems: string[];
  setShowFilter: (filter: boolean) => void;
  showFilter: boolean;
}

const CraftFilter: React.FC<CraftFilterProps> = ({ setShowFilter, showFilter, setFilters, filterItems }) => {
  
  const toggleFilter = () => {
    setShowFilter(false);
  }
  
  const tech = ['html', 'css', 'javascript', 'php', 'reactjs', 'nextjs', 'threejs', 'vuejs', 'tailwind', 'typescript', 'laravel', 'nodejs', 'nestjs', 'expressjs', 'mysql'];

  return (
    <div className={`h-[90vh] md:w-64 w-2/3 bg-whitish absolute ${ showFilter ? 'left-0' : '-left-full' } z-50 shadow-lg gap-5 flex flex-col p-3 ease-in-out duration-300 text-nav-hover`}>
      <button className={`absolute -right-6 top-1/2 -translate-y-1/2 bg-whitish z-50 h-12 w-12 rounded-full flex items-center justify-center text-3xl text-blackish border-2 border-blackish shadow-lg hover:border-nav-hover hover:text-nav-hover pl-0 ease-in-out duration-300`} onClick={toggleFilter}>
        <HiArrowSmallLeft />
      </button>
      <div className='flex flex-col'>
        <h3 className='w-full pl-3'>Filter &gt; Tech Stack</h3>
        <div className='w-full grid grid-cols-3 gap-1 pt-3'>
            { tech.map((val, i) => (
                <FilterButton key={i} name={val} icon={<TechStackIcon name={val} fontSize='md:text-2xl text-4xl'/>} setFilters={setFilters} filterItems={filterItems}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CraftFilter

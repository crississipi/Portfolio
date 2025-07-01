"use client";

import React, { JSX } from 'react';

interface FilterButtonProps {
    name: string;
    icon: JSX.Element;
    setFilters: React.Dispatch<React.SetStateAction<string[]>>;
    filterItems: string[];
}

const FilterButton: React.FC<FilterButtonProps> = ({ name, icon, setFilters, filterItems }) => {
  const isActive = filterItems.includes(name);

  const toggleFilter = () => {
    if (isActive) {
      setFilters(prevItems => prevItems.filter(item => item !== name));
    } else {
      setFilters(prevItems => [...prevItems, name]);
    }
  }

  return (
    <button 
      id={name} 
      className={`col-span-1 md:py-1 py-4 px-3 flex justify-center items-center gap-2 rounded-sm border border-blackish flex-col text-xs hover:border-[#555555] ${isActive ? 'bg-blackish' : 'bg-transparent'} ease-in-out duration-150`} 
      onClick={toggleFilter}
    >
      {icon}
      {name}
    </button>
  );
}

export default FilterButton;

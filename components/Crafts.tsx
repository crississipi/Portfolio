"use client";

import React, { useState } from 'react';
import FeaturedWork from './FeaturedWork';
import CraftFilter from './CraftFilter';
import { MdFilterList } from 'react-icons/md';

const Crafts = () => {
  const projects = [
    {
      srcImage: '/museum-app-img.jpeg',
      icons: ['threejs', 'nextjs', 'nodejs', 'typescript', 'tailwind'],
      projName: 'Interactive Museum App',
      docuLink: 'https://github.com/crississipi/Museum-Interactive-App',
      liveLink: 'https://museum-interactive-app.vercel.app/',
      projDesc: 'An interactive 3D museum simulating a realistic classical environment using Next.js and Three.js.',
      start: 'May 2025',
      end: 'Jun 2025',
      isLive: true
    },
    {
      srcImage: '/landlord-app-img.png',
      icons: ['nextjs', 'nodejs', 'typescript', 'tailwind'],
      projName: 'Landlord Web App',
      docuLink: 'https://github.com/crississipi/Landlord-App',
      liveLink: 'https://landlord-app-tau.vercel.app/',
      projDesc: 'A responsive web application for landlords using Next.js and Material UI. Features tenant management, profit tracking, instant messaging, and maintenance request handling.',
      start: 'Jan 2025',
      end: 'Apr 2025',
      isLive: true
    },
    {
      srcImage: '/pastry-shop.jpeg',
      icons: ['html', 'css', 'javascript', 'php', 'mysql'],
      projName: 'Landlord Web App',
      docuLink: 'https://github.com/crississipi/Pastry-Shop-Website',
      liveLink: '#',
      projDesc: 'Connaisseur de Patisserie is an e-commerce pastry shop website featuring seamless online ordering, interactive shop location maps, admin monitoring, and order processing.',
      start: 'Sep 2024',
      end: 'Dec 2024',
      isLive: false
    },
  ];

  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(true);
  }

  const [filterItems, setFilters] = useState<string[]>([]);

  const filteredProjects = filterItems.length === 0 
    ? projects 
    : projects.filter(project => 
        project.icons.some(icon => filterItems.includes(icon))
      );

  return (
    <section id='crafts' className='pb-5 h-full w-full flex flex-col pt-5 lg:px-20 px-5 relative gap-3'>
      <CraftFilter setShowFilter={setShowFilter} showFilter={showFilter} setFilters={setFilters} filterItems={filterItems} />
      <button className='px-3 py-2 flex items-center gap-2 rounded-md border border-blackish w-min bg-whitish hover:border-nav-hover focus:bg-nav-hover focus:text-whitish ease-in-out duration-150' onClick={toggleFilter}>
        <MdFilterList className='text-2xl'/>
        Filter
      </button>
      <div className='h-full w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none]'>
        {filteredProjects.map((proj, i) => (
          <div key={i} className='md:col-span-1 col-span-full h-full flex flex-col gap-5'>
            <FeaturedWork 
              srcImage={proj.srcImage}
              icons={proj.icons}
              projName={proj.projName}
              docuLink={proj.docuLink}
              liveLink={proj.liveLink}
              projDesc={proj.projDesc}
              start={proj.start}
              end={proj.end}
              isLive={proj.isLive}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Crafts;

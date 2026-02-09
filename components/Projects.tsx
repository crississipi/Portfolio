"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVercel, SiNodedotjs, SiPrisma, SiMysql, SiHostinger } from 'react-icons/si'
import { PiArrowRight, PiCaretLeftBold, PiCaretRightBold, PiGithubLogo, PiGlobe, PiCircleNotch } from 'react-icons/pi'
import Image from 'next/image'

// Mock Data Structure
const projectsData = [
  {
    id: 1,
    title: "OnTap Creatives",
    category: "NFC Technology Platform",
    description: "OnTap.ph is a modern digital business card platform that helps businesses, HR teams, and employers share professional profiles, contact details, and company information instantly through a tap or scan. It eliminates paper cards, supports real-time profile updates, and enables consistent branding across teams. Designed for efficiency and sustainability, OnTap.ph makes networking, recruitment, and client engagement faster, cleaner, and more professional.",
    tech: [
      { icon: <SiNextdotjs className="text-white"/>, name: "Next.js" },
      { icon: <SiTypescript className="text-[#3178C6]"/>, name: "TypeScript" },
      { icon: <SiTailwindcss className="text-[#38B2AC]"/>, name: "Tailwind" },
      { icon: <svg height="1em" viewBox="3.7 3.7 43.6 43.6" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d"/><path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4"/><path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96"/></svg>, name: "Framer Motion" },
      { icon: <SiNodedotjs className="text-[#339933]"/>, name: "Node.js" },
      { icon: <SiPrisma className="text-[#0C344B]"/>, name: "Prisma" },
      { icon: <SiMysql className="text-[#4479A1]"/>, name: "MySQL" },
      { icon: <SiHostinger className="text-[#FF6F61]"/>, name: "Hostinger" },
    ],
    links: { live: "https://www.ontap.ph", repo: "" },
    snapshots: ['/ontap-1.png', '/ontap-2.png', '/ontap-3.png', '/ontap-4.png', '/ontap-5.png'] // Placeholders count
  },
  {
    id: 2,
    title: "Co-Living Landlord Platform",
    category: "collaborative web platform",
    description: "A web-based platform designed to help landlords efficiently manage co-living properties and tenants in one system. It provides tools for property and tenant management, rent and utility billing, maintenance scheduling, documentation, and real-time communication. AI-powered image analysis supports maintenance records, while dashboards and notifications help landlords stay organized and responsive.",
    tech: [
      { icon: <SiNextdotjs className="text-white"/>, name: "Next.js" },
      { icon: <SiTypescript className="text-[#3178C6]"/>, name: "TypeScript" },
      { icon: <SiTailwindcss className="text-[#38B2AC]"/>, name: "Tailwind" },
      { icon: <svg height="1em" viewBox="3.7 3.7 43.6 43.6" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d"/><path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4"/><path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96"/></svg>, name: "Framer Motion" },
      { icon: <SiNodedotjs className="text-[#339933]"/>, name: "Node.js" },
      { icon: <SiPrisma className="text-[#0C344B]"/>, name: "Prisma" },
      { icon: <SiMysql className="text-[#4479A1]"/>, name: "MySQL" },
      { icon: <SiVercel className="text-white"/>, name: "Vercel" },
      { icon: <svg fill="currentColor" fillRule="evenodd" height="1em" style={{ flex: "none", lineHeight: "1" }} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><title>OpenRouter</title><path d="M16.804 1.957l7.22 4.105v.087L16.73 10.21l.017-2.117-.821-.03c-1.059-.028-1.611.002-2.268.11-1.064.175-2.038.577-3.147 1.352L8.345 11.03c-.284.195-.495.336-.68.455l-.515.322-.397.234.385.23.53.338c.476.314 1.17.796 2.701 1.866 1.11.775 2.083 1.177 3.147 1.352l.3.045c.694.091 1.375.094 2.825.033l.022-2.159 7.22 4.105v.087L16.589 22l.014-1.862-.635.022c-1.386.042-2.137.002-3.138-.162-1.694-.28-3.26-.926-4.881-2.059l-2.158-1.5a21.997 21.997 0 00-.755-.498l-.467-.28a55.927 55.927 0 00-.76-.43C2.908 14.73.563 14.116 0 14.116V9.888l.14.004c.564-.007 2.91-.622 3.809-1.124l1.016-.58.438-.274c.428-.28 1.072-.726 2.686-1.853 1.621-1.133 3.186-1.78 4.881-2.059 1.152-.19 1.974-.213 3.814-.138l.02-1.907z"></path></svg>, name: "OpenRouter" },
    ],
    links: { live: "", repo: "https://github.com/crississipi/Landlord-App" },
    snapshots: ['/landlord-1.png', '/landlord-2.png', '/landlord-3.png', '/landlord-4.png', '/landlord-5.png'] // Placeholders count
  },
  {
    id: 3,
    title: "Co-Living Tenant Platform",
    category: "collaborative web platform",
    description: "A companion platform built for tenants to easily interact with landlords and manage their living experience. Tenants can submit maintenance requests, view bills, access documents, and communicate instantly through the system. AI automation allows maintenance issues to be reported using just a few images, making the process faster and more convenient.",
    tech: [
      { icon: <SiNextdotjs className="text-white"/>, name: "Next.js" },
      { icon: <SiTypescript className="text-[#3178C6]"/>, name: "TypeScript" },
      { icon: <SiTailwindcss className="text-[#38B2AC]"/>, name: "Tailwind" },
      { icon: <svg height="1em" viewBox="3.7 3.7 43.6 43.6" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d"/><path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4"/><path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96"/></svg>, name: "Framer Motion" },
      { icon: <SiNodedotjs className="text-[#339933]"/>, name: "Node.js" },
      { icon: <SiPrisma className="text-[#0C344B]"/>, name: "Prisma" },
      { icon: <SiMysql className="text-[#4479A1]"/>, name: "MySQL" },
      { icon: <SiVercel className="text-white"/>, name: "Vercel" },
      { icon: <svg fill="currentColor" fillRule="evenodd" height="1em" style={{ flex: "none", lineHeight: "1" }} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><title>OpenRouter</title><path d="M16.804 1.957l7.22 4.105v.087L16.73 10.21l.017-2.117-.821-.03c-1.059-.028-1.611.002-2.268.11-1.064.175-2.038.577-3.147 1.352L8.345 11.03c-.284.195-.495.336-.68.455l-.515.322-.397.234.385.23.53.338c.476.314 1.17.796 2.701 1.866 1.11.775 2.083 1.177 3.147 1.352l.3.045c.694.091 1.375.094 2.825.033l.022-2.159 7.22 4.105v.087L16.589 22l.014-1.862-.635.022c-1.386.042-2.137.002-3.138-.162-1.694-.28-3.26-.926-4.881-2.059l-2.158-1.5a21.997 21.997 0 00-.755-.498l-.467-.28a55.927 55.927 0 00-.76-.43C2.908 14.73.563 14.116 0 14.116V9.888l.14.004c.564-.007 2.91-.622 3.809-1.124l1.016-.58.438-.274c.428-.28 1.072-.726 2.686-1.853 1.621-1.133 3.186-1.78 4.881-2.059 1.152-.19 1.974-.213 3.814-.138l.02-1.907z"></path></svg>, name: "OpenRouter" },
    ],
    links: { live: "", repo: "https://github.com/crississipi/Tenant-App" },
    snapshots: ['/tenant-1.png', '/tenant-2.png', '/tenant-3.png', '/tenant-4.png', '/tenant-5.png'] // Placeholders count
  },
  {
    id: 4,
    title: "The Great War: Apocalypto",
    category: "MMORPG Interactive Landing Page",
    description: "A professionally designed landing page created to introduce an MMORPG game to potential players. It presents the game's world, characters, and core features in a clear and visually engaging manner. The layout is focused on creating strong first impressions and guiding visitors to explore or sign up.",
    tech: [
      { icon: <SiNextdotjs className="text-white"/>, name: "Next.js" },
      { icon: <SiTypescript className="text-[#3178C6]"/>, name: "TypeScript" },
      { icon: <SiTailwindcss className="text-[#38B2AC]"/>, name: "Tailwind" },
      { icon: <svg height="1em" viewBox="3.7 3.7 43.6 43.6" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d"/><path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4"/><path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96"/></svg>, name: "Framer Motion" },
      { icon: <SiNodedotjs className="text-[#339933]"/>, name: "Node.js" },
      { icon: <SiVercel className="text-white"/>, name: "Vercel" },
    ],
    links: { live: "https://mmorpg-landing-page.vercel.app/", repo: "https://github.com/crississipi/MMORPG-Landing-Page" },
    snapshots: ['/mmorpg-1.png', '/mmorpg-2.png', '/mmorpg-3.png', '/mmorpg-4.png', '/mmorpg-5.png'] // Placeholders count
  }
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(projectsData[0].id);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const selectedProject = projectsData.find(p => p.id === selectedId) || projectsData[0];

  const handleNextSlide = () => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentSlide((prev) => (prev + 1) % selectedProject.snapshots.length);
  };

  const handlePrevSlide = () => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentSlide((prev) => (prev - 1 + selectedProject.snapshots.length) % selectedProject.snapshots.length);
  };

  const changeProject = (id: number) => {
    setIsLoading(true);
    setSelectedId(id);
    setCurrentSlide(0);
  };

  return (
    <motion.div 
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className='min-h-screen w-full bg-[#0B0D10] text-zinc-100 py-24 px-4 md:px-12 lg:px-20 relative z-40'
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col gap-10">
        <motion.div 
           initial={{ y: -20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           className="flex flex-col gap-2"
        >
          <h2 className='font-shippori text-5xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-600 w-max'>
            Selected Works
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-[#2ED3FF] via-[#8B5CF6] to-[#FF4FA3] rounded-full"></div>
        </motion.div>

        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 h-full'>
          
          {/* Projects List - Navigation */}
          <div className='w-full lg:w-1/3 flex flex-col gap-4'>
            {projectsData.map((project) => (
              <button
                key={project.id}
                onClick={() => changeProject(project.id)}
                className={`group w-full text-left p-6 rounded-2xl transition-all duration-300 border relative overflow-hidden ${
                  selectedId === project.id 
                    ? 'bg-white/5 border-[#2ED3FF]/50 shadow-lg shadow-[#2ED3FF]/10' 
                    : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/20'
                }`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${selectedId === project.id ? 'bg-[#2ED3FF]' : 'bg-transparent group-hover:bg-white/20'}`} />
                
                <h3 className={`text-xl font-bold mb-1 transition-colors ${selectedId === project.id ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
                  {project.title}
                </h3>
                <p className='text-sm text-zinc-500 font-medium mb-3 uppercase tracking-wider'>{project.category}</p>
                
                <div className='flex items-center gap-2 text-zinc-600 group-hover:text-[#2ED3FF] transition-colors text-sm font-semibold'>
                  <span>View Details</span>
                  <PiArrowRight className={`transition-transform duration-300 ${selectedId === project.id ? 'translate-x-2' : 'group-hover:translate-x-2'}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Project Details View */}
          <div className='w-full lg:w-2/3 relative'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className='flex flex-col gap-6'
              >
                {/* Image Slider Container */}
                <div className='relative w-full aspect-17/8 bg-[#141820] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl'>
                  
                  {/* Loading Spinner */}
                  <AnimatePresence>
                    {isLoading && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-20 flex items-center justify-center bg-[#141820]"
                        >
                            <PiCircleNotch className="text-4xl text-[#2ED3FF] animate-spin" />
                        </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Slide Content */}
                  <div className='absolute inset-0 flex items-center justify-center bg-linear-to-br from-[#1C2230] to-[#0B0D10]'>
                     <Image 
                        src={selectedProject.snapshots[currentSlide]} 
                        alt="Project Snapshot" 
                        fill 
                        className="object-cover object-center" 
                        onLoad={() => setIsLoading(false)}
                        onLoadingComplete={() => setIsLoading(false)}
                     /> 
                  </div>

                  {/* Slider Controls */}
                  <div className='absolute inset-x-0 bottom-0 p-4 flex justify-between items-end bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30'>
                    <div className='flex gap-2'>
                        {selectedProject.snapshots.map((_, idx) => (
                           <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-[#2ED3FF]' : 'w-2 bg-white/30'}`} />
                        ))}
                    </div>
                    
                    <div className='flex gap-2 text-white'>
                      <button 
                        onClick={handlePrevSlide} 
                        disabled={isLoading}
                        className='p-2 rounded-full bg-white/10 hover:bg-[#2ED3FF] hover:text-black backdrop-blur-md transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/10 disabled:hover:text-white'
                      >
                         <PiCaretLeftBold />
                      </button>
                      <button 
                        onClick={handleNextSlide} 
                        disabled={isLoading}
                        className='p-2 rounded-full bg-white/10 hover:bg-[#2ED3FF] hover:text-black backdrop-blur-md transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/10 disabled:hover:text-white'
                      >
                         <PiCaretRightBold />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className='p-1'>
                  <div className='flex flex-col mb-6 gap-4'>
                    <div className='flex justify-between items-start'>
                        <div>
                           <h2 className='text-3xl font-bold text-white mb-2'>{selectedProject.title}</h2>
                           <div className='flex gap-6 text-sm font-medium items-center'>
                              {selectedProject.links.repo && (
                                <a href={selectedProject.links.repo} className='flex items-center gap-1 hover:text-[#2ED3FF] transition-colors mt-1'><PiGithubLogo className='text-lg -mt-1'/> Source Code</a>
                              )}
                              {selectedProject.links.live && (
                                <a href={selectedProject.links.live} className='flex items-center gap-1 hover:text-[#2ED3FF] transition-colors mt-1'><PiGlobe className='text-lg -mt-1'/> Live Demo</a>
                              )}
                           </div>
                        </div>
                    </div>
                    <p className='text-zinc-400 leading-relaxed text-lg'>
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className='flex flex-wrap gap-2.5'>
                    {selectedProject.tech.map((t, idx) => (
                      <div key={idx} className='flex items-center gap-2 px-3 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300'>
                        <span className="text-lg">{t.icon}</span>
                        <span className="text-sm mt-1">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects

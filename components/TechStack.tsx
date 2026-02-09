"use client"

import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiNodedotjs, 
  SiGit, SiGithub, SiVercel, 
  SiMysql,
  SiHostinger,
  SiPhp,
  SiHuggingface,
  SiPrisma
} from 'react-icons/si'

const TechStack = () => {
  const categories = [
    {
      title: "Frontend Architecture",
      className: "border-[#2ED3FF]/20 hover:border-[#2ED3FF]/50 hover:shadow-[#2ED3FF]/10",
      description: "Building responsive, interactive, and performant user interfaces.",
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
        { name: "Framer Motion", icon: <svg height="1em" viewBox="3.7 3.7 43.6 43.6" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d"/><path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4"/><path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96"/></svg> }
      ]
    },
    {
      title: "Backend & Systems",
      className: "border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 hover:shadow-[#8B5CF6]/10",
      description: "Robust server-side logic, API design, and scalable architecture.",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "PHP", icon: <SiPhp className="text-[#3776AB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      ]
    },
    {
      title: "Database & Cloud",
      className: "border-[#FF4FA3]/20 hover:border-[#FF4FA3]/50 hover:shadow-[#FF4FA3]/10",
      description: "Data management, deployment, and serverless infrastructure.",
      skills: [
        { name: "MySql", icon: <SiMysql className="text-[#4479A1]"/> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "Hostinger", icon: <SiHostinger className="text-[#FF6F61]" /> }
      ]
    },
    {
      title: "Other Tools and Services",
      className: "border-[#FF8A3D]/20 hover:border-[#FF8A3D]/50 hover:shadow-[#FF8A3D]/10",
      description: "Workflow optimization, version control, and UI/UX design.",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "OpenRouter", icon: <svg fill="currentColor" fillRule="evenodd" height="1em" style={{ flex: "none", lineHeight: "1" }} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><title>OpenRouter</title><path d="M16.804 1.957l7.22 4.105v.087L16.73 10.21l.017-2.117-.821-.03c-1.059-.028-1.611.002-2.268.11-1.064.175-2.038.577-3.147 1.352L8.345 11.03c-.284.195-.495.336-.68.455l-.515.322-.397.234.385.23.53.338c.476.314 1.17.796 2.701 1.866 1.11.775 2.083 1.177 3.147 1.352l.3.045c.694.091 1.375.094 2.825.033l.022-2.159 7.22 4.105v.087L16.589 22l.014-1.862-.635.022c-1.386.042-2.137.002-3.138-.162-1.694-.28-3.26-.926-4.881-2.059l-2.158-1.5a21.997 21.997 0 00-.755-.498l-.467-.28a55.927 55.927 0 00-.76-.43C2.908 14.73.563 14.116 0 14.116V9.888l.14.004c.564-.007 2.91-.622 3.809-1.124l1.016-.58.438-.274c.428-.28 1.072-.726 2.686-1.853 1.621-1.133 3.186-1.78 4.881-2.059 1.152-.19 1.974-.213 3.814-.138l.02-1.907z"></path></svg> },
        { name: "Huggingface", icon: <SiHuggingface className='text-amber-500'/> },
        { name: "Prisma", icon: <SiPrisma className="text-[#0C344B]"/>}
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    }
  };

  return (
    <section id="tech-stack" className='min-h-screen w-full relative z-30 flex flex-col items-center justify-center py-24 px-4 md:px-12 lg:px-20'>
       {/* Section Title */}
       <motion.div 
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: true }}
         className="flex flex-col gap-3 items-center text-center mb-16 md:mb-24"
       >
         <h2 className='font-shippori text-5xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-200 to-zinc-500'>
           Technological <br/> Arsenal
         </h2>
         <div className="h-1 w-24 bg-linear-to-r from-[#2ED3FF] via-[#8B5CF6] to-[#FF4FA3] rounded-full"></div>
         <p className="max-w-xl text-zinc-400 mt-4 text-lg">
           A curated selection of tools and technologies I use to bring digital products to life.
         </p>
       </motion.div>

       {/* Cards Grid */}
       <motion.div 
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.1 }}
         className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
       >
         {categories.map((cat, index) => (
           <motion.div 
             key={index}
             variants={cardVariants}
             whileHover={{ y: -5, scale: 1.01 }}
             className={`p-8 rounded-3xl bg-[#0B0D10]/40 backdrop-blur-md border border-white/5 transition-all duration-300 shadow-xl group ${cat.className}`}
           >
             <div className="flex flex-col h-full gap-6">
               <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {cat.description}
                  </p>
               </div>
               
               <div className="mt-auto grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2">
                 {cat.skills.map((skill, idx) => (
                   <div key={idx} className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
                     <span className="text-xl transition-transform duration-300 group-hover:scale-110">{skill.icon}</span>
                     <span className="text-sm font-medium">{skill.name}</span>
                   </div>
                 ))}
               </div>
             </div>
           </motion.div>
         ))}
       </motion.div>
    </section>
  )
}

export default TechStack

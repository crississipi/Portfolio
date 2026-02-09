"use client"

import { motion } from 'framer-motion'
import { PiDownloadSimple, PiEnvelopeSimple, PiGithubLogo, PiLinkedinLogo, PiPhone } from 'react-icons/pi'

const About = () => {
  // Mock Resume URL - replace with actual path
  const resumeUrl = "/Full-Stack_Web_Developer_Malipico_Cris_Julius.pdf"

  const socialLinks = [
    { 
      label: "GitHub", 
      icon: <PiGithubLogo className="text-2xl" />, 
      href: "https://github.com/crississipi",
      color: "hover:text-[#2ED3FF] hover:border-[#2ED3FF]/50 hover:bg-[#2ED3FF]/10"
    },
    { 
      label: "LinkedIn", 
      icon: <PiLinkedinLogo className="text-2xl" />, 
      href: "https://www.linkedin.com/in/crismalipico",
      color: "hover:text-[#8B5CF6] hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10"
    },
    { 
      label: "Email", 
      icon: <PiEnvelopeSimple className="text-2xl" />, 
      href: "mailto:crismalipico12@gmail.com",
      color: "hover:text-[#FF4FA3] hover:border-[#FF4FA3]/50 hover:bg-[#FF4FA3]/10"
    },
    { 
      label: "Phone", 
      icon: <PiPhone className="text-2xl" />, 
      href: "tel:+639243591199",
      color: "hover:text-[#FF8A3D] hover:border-[#FF8A3D]/50 hover:bg-[#FF8A3D]/10"
    }
  ]

  return (
    <section id="about" className='min-h-screen w-full relative z-30 flex items-center justify-center py-24 px-4 md:px-12 lg:px-20'>
      <div className='w-full max-w-7xl flex flex-col lg:flex-row gap-16 items-center'>
        
        {/* Left Side: Bio & Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className='flex-1 flex flex-col gap-8'
        >
          <div className='space-y-4'>
            <h2 className='font-shippori text-5xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500'>
              About Me
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#2ED3FF] via-[#8B5CF6] to-[#FF4FA3] rounded-full"></div>
          </div>
          
          <div className='space-y-6 text-lg text-zinc-400 font-light leading-relaxed'>
            <p>
              I began my journey as a full-stack web developer in my first year of college, driven by curiosity and a growing fascination with how lines of code transform into real, interactive websites and applications that people can use across devices and the internet. What started as simple experimentation quickly became a passion as I realized the power of building visual interfaces and functional systems from scratch.
            </p>
            <p>
              By my second year, I built my first full e-commerce web application using HTML, CSS, JavaScript, PHP, and MySQL, which strengthened my foundation in both front-end and back-end development. I then expanded into creating landing pages and exploring immersive 3D web experiences with Three.js. In my third year, I shifted toward modern frameworks, starting with React and later discovering Next.js, where my skills grew significantly as I built more structured and scalable applications. Today, I primarily develop web apps using Next.js while continuing to expand my skill set by learning Laravel and React Native.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Actions & Links */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className='flex-1 w-full max-w-md'
        >
          <div className='p-8 rounded-3xl bg-[#0B0D10]/60 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-8'>
            <div className='text-center'>
              <h3 className='text-2xl font-bold text-white mb-2'>Let's Connect</h3>
              <p className='text-zinc-500'>Open for opportunities and collaborations.</p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
              }}
              className='grid grid-cols-2 gap-4'
            >
              {socialLinks.map((link, idx) => (
                <motion.a 
                  key={idx}
                  href={link.href}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/5 text-white/30 transition-colors duration-300 ${link.color}`}
                >
                  <div className='transition-transform duration-300 group-hover:scale-110'>{link.icon}</div>
                  <span className='text-sm font-medium text-zinc-300 group-hover:text-white'>{link.label}</span>
                </motion.a>
              ))}
            </motion.div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2ED3FF] via-[#8B5CF6] to-[#FF4FA3] rounded-xl opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <a 
                href={resumeUrl} 
                download
                className="relative w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#0B0D10] rounded-xl leading-none text-white font-bold tracking-wide hover:bg-zinc-900 transition-colors"
                role="button"
              >
                <PiDownloadSimple className="text-xl animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About

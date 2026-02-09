"use client"

import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { PiPaperPlaneTiltThin, PiGithubLogo, PiLinkedinLogo, PiCaretDownThin, PiEnvelopeSimple, PiPhone } from 'react-icons/pi'
import { SiFacebook, SiGmail, SiViber, SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiPython, SiPrisma, SiMysql, SiHostinger, SiVercel, SiPhp, SiGit, SiHuggingface } from 'react-icons/si'

const Hero = () => {
  const contactModes = [
    { icon: <SiGmail className='text-red-500' />, label: "Email", key: "email" },
    { icon: <SiViber className='text-purple-600' />, label: "Viber", key: "viber" },
    { icon: <SiFacebook className='text-blue-700' />, label: "Facebook", key: "facebook" }
  ];

  const techStack = [
    { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
    { icon: <SiTailwindcss className="text-[#38B2AC]" />, name: "Tailwind" },
    { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" },
    { icon: <SiPrisma className="text-[#0C344B]" />, name: "Prisma" },
    { icon: <SiMysql className="text-[#4479A1]" />, name: "MySQL" },
    { icon: <SiHostinger className="text-[#FF6F61]" />, name: "Hostinger" },
    { icon: <SiVercel className="text-white" />, name: "Vercel" },
    { icon: <SiPhp className="text-[#777BB4]" />, name: "PHP" },
    { icon: <SiGit className="text-[#F05032]" />, name: "Git" },
    { icon: <SiHuggingface className="text-[#FFD21E]" />, name: "Huggingface" },
    { icon: <svg height="1em" viewBox="3.7 3.7 43.6 43.6" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d"/><path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4"/><path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96"/></svg>, name: "Framer Motion" },
    { icon: <svg fill="currentColor" fillRule="evenodd" height="1em" style={{ flex: "none", lineHeight: "1" }} viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><title>OpenRouter</title><path d="M16.804 1.957l7.22 4.105v.087L16.73 10.21l.017-2.117-.821-.03c-1.059-.028-1.611.002-2.268.11-1.064.175-2.038.577-3.147 1.352L8.345 11.03c-.284.195-.495.336-.68.455l-.515.322-.397.234.385.23.53.338c.476.314 1.17.796 2.701 1.866 1.11.775 2.083 1.177 3.147 1.352l.3.045c.694.091 1.375.094 2.825.033l.022-2.159 7.22 4.105v.087L16.589 22l.014-1.862-.635.022c-1.386.042-2.137.002-3.138-.162-1.694-.28-3.26-.926-4.881-2.059l-2.158-1.5a21.997 21.997 0 00-.755-.498l-.467-.28a55.927 55.927 0 00-.76-.43C2.908 14.73.563 14.116 0 14.116V9.888l.14.004c.564-.007 2.91-.622 3.809-1.124l1.016-.58.438-.274c.428-.28 1.072-.726 2.686-1.853 1.621-1.133 3.186-1.78 4.881-2.059 1.152-.19 1.974-.213 3.814-.138l.02-1.907z"></path></svg>, name: "OpenRouter" }
  ];

  const services = [
    "Website Development",
    "Web App Development",
    "Mobile App Development",
    "Collaboration",
    "AI Integration"
  ];

  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState("Collaboration");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!selectedMode) newErrors.mode = "Please select a contact method";
    if (!formData.contact.trim()) newErrors.contact = "Contact detail is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', { ...formData, selectedMode, selectedService });
    }
  };

  const getContactPlaceholder = () => {
    if (!selectedMode) return "Select contact method";
    const mode = contactModes.find(m => m.key === selectedMode);
    switch (selectedMode) {
      case "email": return "your@email.com";
      case "facebook": return "facebook.com/yourprofile";
      case "viber": return "+1 234 567 8900";
      default: return "";
    }
  };

  const getSelectedModeLabel = () => {
     const mode = contactModes.find(m => m.key === selectedMode);
     return mode ? (
       <div className="flex items-center gap-2">
         {mode.icon}
         <span>{mode.label}</span>
       </div>
     ) : "Select Method";
  };

  return (
    <motion.div 
      id="hero"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='hero min-h-screen w-full font-commissioner flex flex-col items-center justify-center text-zinc-100 z-30 relative overflow-hidden px-4 md:px-12 lg:px-20 py-24
    before:w-full before:h-72 before:absolute before:bg-linear-to-t before:from-[#0B0D10] before:via-[#0B0D10]/80 before:to-black/0 before:left-0 before:z-0 before:bottom-0'>
      
      <div className='w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-40'>
        
        {/* Left Side: Content & Intro */}
        <div className='flex flex-col items-start gap-6'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-2"
          >
            <h2 className='text-xl md:text-2xl font-light tracking-wide text-[#2ED3FF]'>
              Hello, I am
            </h2>
            <h1 className='font-shippori uppercase tracking-tighter text-6xl md:text-8xl font-black leading-none text-white lg:text-left'>
              Cris Julius <br/>
              <span className='text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-400 to-zinc-600'>Malipico</span>
            </h1>
            <h2 className='text-2xl md:text-4xl font-bold text-white mt-1'>
              Full-Stack Developer
            </h2>
            <p className='text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mt-4'>
              Making your <span className='font-semibold bg-linear-to-r from-[#2ED3FF] via-[#8B5CF6] to-[#FF4FA3] bg-clip-text text-transparent'>Business Ideas Digitally Possible</span>. 
              Specializing in building exceptional digital experiences that are fast, accessible, and visually stunning.
            </p>
          </motion.div>

          {/* Tech Stack Bubbles */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Tech Stack</h3>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {techStack.slice(0, 9).map((tech, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                  {tech.icon}
                  <span className="text-sm font-medium text-zinc-300">{tech.name}</span>
                </div>
              ))}
              {techStack.length > 9 && (
                 <div className="flex items-center justify-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm cursor-default">
                    <span className="text-sm font-bold text-white">+{techStack.length - 9}</span>
                 </div>
              )}
            </motion.div>
          </div>

          {/* Social Links / CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-2"
          >
            <a href="https://github.com/crississipi" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 hover:bg-[#2ED3FF]/10 hover:text-[#2ED3FF] hover:border-[#2ED3FF]/50 transition-all duration-300">
              <PiGithubLogo className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/crismalipico" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 hover:bg-[#0077b5]/10 hover:text-[#0077b5] hover:border-[#0077b5]/50 transition-all duration-300">
              <PiLinkedinLogo className="text-2xl" />
            </a>
            <a href="mailto:crismalipico12@gmail.com" className="p-3 rounded-full border border-white/10 hover:bg-[#EA4335]/10 hover:text-[#EA4335] hover:border-[#EA4335]/50 transition-all duration-300">
              <PiEnvelopeSimple className="text-2xl" />
            </a>
            <a href="tel:+639243591199" className="p-3 rounded-full border border-white/10 hover:bg-[#34A853]/10 hover:text-[#34A853] hover:border-[#34A853]/50 transition-all duration-300">
              <PiPhone className="text-2xl" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Modern Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className='w-full bg-[#0B0D10]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden'
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2ED3FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className='flex items-center gap-3 mb-8 relative z-10'>
            <div className='p-3 rounded-xl bg-linear-to-br from-[#2ED3FF]/20 to-[#8B5CF6]/20 border border-white/10'>
              <PiPaperPlaneTiltThin className='text-2xl text-[#2ED3FF]' />
            </div>
            <div>
              <h3 className='text-xl font-bold text-white'>Start a Project</h3>
              <p className='text-xs text-zinc-400'>Let's build something amazing together</p>
            </div>
          </div>

          <form className='flex flex-col gap-5 relative z-10' onSubmit={handleSubmit}>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Name Input */}
              <div className='space-y-1.5'>
                <label className='text-xs font-semibold text-zinc-500 uppercase tracking-wider'>Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({...errors, name: ''});
                  }}
                  className={`w-full px-4 py-2.5 bg-black/40 border rounded-lg text-white placeholder:text-white/20 focus:outline-none transition-all ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#2ED3FF]/50 focus:bg-white/3'}`}
                />
                {errors.name && <p className='text-xs text-red-500'>{errors.name}</p>}
              </div>

              {/* Custom Dropdown */}
              <div className='space-y-1.5 relative'>
                 <label className='text-xs font-semibold text-zinc-500 uppercase tracking-wider'>Contact Via</label>
                 <div className="relative">
                   <button 
                     type="button"
                     onClick={() => setDropdownOpen(!dropdownOpen)}
                     className={`w-full px-4 py-2.5 bg-black/40 border rounded-lg text-white/80 flex items-center justify-between focus:outline-none transition-all ${errors.mode ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'} ${dropdownOpen ? 'border-[#2ED3FF]/50' : ''}`}
                   >
                     <span className="flex items-center gap-2">{getSelectedModeLabel()}</span>
                     <PiCaretDownThin className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                   </button>
                   
                   <AnimatePresence>
                     {dropdownOpen && (
                       <motion.div 
                         initial={{ opacity: 0, y: -10 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -10 }}
                         className='absolute top-full left-0 w-full mt-2 bg-[#0B0D10] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50'
                       >
                         {contactModes.map((mode) => (
                           <button
                             key={mode.key}
                             type="button"
                             onClick={() => {
                               setSelectedMode(mode.key);
                               setDropdownOpen(false);
                               if (errors.mode) setErrors({...errors, mode: ''});
                             }}
                             className='w-full px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors text-left text-sm text-zinc-300 hover:text-white'
                           >
                             <span className="text-lg">{mode.icon}</span>
                             <span>{mode.label}</span>
                           </button>
                         ))}
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
                 {errors.mode && <p className='text-xs text-red-500'>{errors.mode}</p>}
              </div>
            </div>

            {/* Contact Detail Input (Conditional) */}
            <div className='relative'>
               <div className={`transition-all duration-300 ${selectedMode ? 'opacity-100 max-h-20' : 'opacity-50 max-h-0 overflow-hidden'}`}>
                  <input 
                    type={selectedMode === 'email' ? 'email' : 'text'} 
                    placeholder={getContactPlaceholder()}
                    value={formData.contact}
                    onChange={(e) => {
                      setFormData({ ...formData, contact: e.target.value });
                      if (errors.contact) setErrors({...errors, contact: ''});
                    }}
                    disabled={!selectedMode}
                    className={`w-full px-4 py-2.5 bg-black/40 border rounded-lg text-white placeholder:text-white/20 focus:outline-none transition-all ${errors.contact ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#2ED3FF]/50 focus:bg-white/3'}`}
                  />
                  {errors.contact && <p className='text-xs text-red-500 mt-1'>{errors.contact}</p>}
               </div>
            </div>

            {/* Service Tags */}
            <div className='space-y-2'>
              <label className='text-xs font-semibold text-zinc-500 uppercase tracking-wider'>I'm interested in</label>
              <div className='flex flex-wrap gap-2'>
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`px-3 py-1.5 rounded-md border text-xs font-medium transition-all duration-200 ${
                      selectedService === service
                        ? 'bg-linear-to-r from-[#2ED3FF] to-[#8B5CF6] border-transparent text-white shadow-lg shadow-purple-500/20'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className='space-y-1.5'>
              <label className='text-xs font-semibold text-zinc-500 uppercase tracking-wider'>Project Details</label>
              <textarea 
                placeholder='Tell me about your project needs...' 
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({...errors, message: ''});
                }}
                className={`w-full px-4 py-3 bg-black/40 border rounded-lg text-white placeholder:text-white/20 focus:outline-none transition-all resize-none h-24 text-sm ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#2ED3FF]/50 focus:bg-white/3'}`}
              />
              {errors.message && <p className='text-xs text-red-500'>{errors.message}</p>}
            </div>

            <div className="relative group mt-2">
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#2ED3FF] via-[#8B5CF6] to-[#FF4FA3] rounded-xl opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <button
                type="submit"
                className="relative w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#0B0D10] rounded-xl leading-none text-white font-bold tracking-wide hover:bg-zinc-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <PiPaperPlaneTiltThin className="text-xl group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero

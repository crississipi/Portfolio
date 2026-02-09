"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { PiGithubLogo, PiLinkedinLogo, PiTwitterLogo, PiArrowUp, PiEnvelopeSimple, PiPhone } from 'react-icons/pi'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <PiGithubLogo />, href: "https://github.com/crississipi", label: "GitHub" },
    { icon: <PiLinkedinLogo />, href: "https://www.linkedin.com/in/crismalipico", label: "LinkedIn" },
    { icon: <PiPhone />, href: "tel:+639243591199", label: "Phone" },
    { icon: <PiEnvelopeSimple />, href: "mailto:crismalipico12@gmail.com", label: "Email" },
  ];

  return (
    <footer className="w-full relative z-30 bg-[#060709] pt-20 pb-10 overflow-hidden">
        {/* Decorative Top Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent opacity-50"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-[#2ED3FF] to-transparent shadow-[0_0_10px_#2ED3FF] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                
                {/* Brand / Left Side */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center md:items-start text-center md:text-left gap-2"
                >
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-zinc-400 font-shippori">
                        Cris Julius Malipico
                    </h3>
                    <p className="text-zinc-500 text-sm max-w-xs">
                        Crafting seamless digital experiences with pixel-perfect precision.
                    </p>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex gap-4"
                >
                    {socialLinks.map((link, idx) => (
                        <a 
                            key={idx}
                            href={link.href}
                            aria-label={link.label}
                            className="p-3 rounded-full bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-300 hover:scale-110"
                        >
                            <span className="text-xl">{link.icon}</span>
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
            >
                <p className="text-zinc-600 text-sm">
                    © {currentYear} All rights reserved.
                </p>

                <button 
                    onClick={scrollToTop}
                    className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-[#2ED3FF] transition-colors"
                >
                    Back to top
                    <span className="p-1 rounded-full bg-white/5 group-hover:bg-[#2ED3FF]/10 transition-colors">
                        <PiArrowUp className="group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                </button>
            </motion.div>
        </div>
        
        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#2ED3FF]/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  )
}

export default Footer

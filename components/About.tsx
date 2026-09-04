"use client";

import { motion } from "framer-motion";
import {
  PiDownloadSimple,
  PiEnvelopeSimple,
  PiGithubLogo,
  PiLinkedinLogo,
  PiPhone,
} from "react-icons/pi";

const About = () => {
  const resumeUrl = "/Full_Stack_Developer_Malipico_Resume.pdf";

  const socialLinks = [
    { label: "GitHub", icon: <PiGithubLogo className="text-2xl" />, href: "https://github.com/crississipi" },
    { label: "LinkedIn", icon: <PiLinkedinLogo className="text-2xl" />, href: "https://www.linkedin.com/in/crismalipico" },
    { label: "Email", icon: <PiEnvelopeSimple className="text-2xl" />, href: "mailto:crismalipico12@gmail.com" },
    { label: "Phone", icon: <PiPhone className="text-2xl" />, href: "tel:+639243591199" },
  ];

  return (
    <section id="about" className="relative z-30 flex w-full items-center justify-center px-4 py-24 md:px-8 lg:px-16">
      <div className="grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="space-y-7"
        >
          <div className="space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-zinc-400">
              About me
            </p>
            <h2 className="text-4xl text-white md:text-6xl">Thoughtful digital craft.</h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-zinc-300 md:text-lg">
            <p>
              I am a self-taught Full-Stack Web Developer with 6 months of professional experience as a Software Developer, focused on building scalable and productive web solutions with Next.js, React, TypeScript, Node.js, MySQL, Prisma ORM, and REST APIs.
            </p>
            <p>
              My experience includes developing highly interactive, multi-user web applications with complex database systems supporting 1,000+ users and integrating NFC technology into real-world digital products. I am detail-oriented, adaptable, and analytical, with strong problem-solving skills and the ability to work independently or collaboratively to deliver secure, maintainable, and business-ready solutions.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          className="rounded-[28px] border border-white/10 bg-[#111111]/80 p-6 shadow-[0_26px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8"
        >
          <div className="mb-6 text-center">
            <h3 className="text-2xl text-white">Let&apos;s connect</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Available for product work, collaborations, and long-term builds.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-zinc-200 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {link.icon}
                </span>
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            ))}
          </div>

          <a
            href={resumeUrl}
            download
            className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-3.5 text-sm font-medium text-black hover:bg-zinc-200 [&_*]:text-black"
          >
            <PiDownloadSimple className="text-lg text-black" />
            <span className="text-black">Download résumé</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

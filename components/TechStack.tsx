"use client";

import { motion } from "framer-motion";
import {
  SiGit,
  SiGithub,
  SiHostinger,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      description: "User-facing interfaces designed for clarity, responsiveness, and product flow.",
      skills: [
        { name: "React", icon: <SiReact className="text-zinc-200" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-zinc-200" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-zinc-200" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-zinc-200" /> },
      ],
    },
    {
      title: "Backend & Data",
      description: "Secure APIs, relational data layers, and scalable application logic.",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-zinc-200" /> },
        { name: "PHP", icon: <SiPhp className="text-zinc-200" /> },
        { name: "Prisma", icon: <SiPrisma className="text-zinc-200" /> },
        { name: "MySQL", icon: <SiMysql className="text-zinc-200" /> },
        { name: "Redis", icon: <span className="text-[10px] font-bold">Redis</span> },
        { name: "BullMQ", icon: <span className="text-[10px] font-bold">Bull</span> },
      ],
    },
    {
      title: "Security & Delivery",
      description: "Production-ready deployments, authentication flows, and system operations.",
      skills: [
        { name: "Vercel", icon: <SiVercel className="text-zinc-200" /> },
        { name: "Hostinger", icon: <SiHostinger className="text-zinc-200" /> },
        { name: "Git", icon: <SiGit className="text-zinc-200" /> },
        { name: "GitHub", icon: <SiGithub className="text-zinc-200" /> },
        { name: "JWT", icon: <span className="text-[10px] font-bold">JWT</span> },
        { name: "Google Auth", icon: <span className="text-[10px] font-bold">G</span> },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="relative z-30 w-full px-4 py-24 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-zinc-400">
            Tooling
          </p>
          <h2 className="mt-3 text-4xl text-white md:text-6xl">Stack and systems.</h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
              className="rounded-[28px] border border-white/10 bg-[#111111]/80 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-2xl text-white">{category.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{category.description}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-zinc-200"
                  >
                    <span className="text-base">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

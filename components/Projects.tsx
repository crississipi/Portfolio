"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  PiArrowRight,
  PiCaretLeftBold,
  PiCaretRightBold,
  PiCircleNotch,
  PiGithubLogo,
  PiGlobe,
} from "react-icons/pi";
import {
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const projectsData = [
  {
    id: 1,
    title: "OnTap Portal — NFC Digital Business Card Management Platform",
    category: "NFC technology platform",
    description: "Full-stack NFC platform for managing BizCards, profiles, contacts, and portfolios with secure roles and analytics.",
    tech: [
      { icon: <SiNextdotjs className="text-zinc-200" />, name: "Next.js" },
      { icon: <SiTypescript className="text-zinc-200" />, name: "TypeScript" },
      { icon: <SiTailwindcss className="text-zinc-200" />, name: "Tailwind" },
      { icon: <SiNodedotjs className="text-zinc-200" />, name: "Node.js" },
      { icon: <SiPrisma className="text-zinc-200" />, name: "Prisma" },
      { icon: <SiMysql className="text-zinc-200" />, name: "MySQL" },
      { icon: <span className="text-[10px] font-bold">REST</span>, name: "REST APIs" },
    ],
    links: { live: "https://ontap.ph", repo: "" },
    snapshots: ["/projects/ontap/ontap-1.jfif", "/projects/ontap/ontap-2.jfif", "/projects/ontap/ontap-3.jfif", "/projects/ontap/ontap-4.jfif", "/projects/ontap/ontap-5.jfif"],
  },
  {
    id: 3,
    title: "RÖK Provenance — NFC Product Authentication & Provenance Platform",
    category: "Enterprise security platform",
    description: "Luxury NFC verification platform securing product authenticity with cryptographic checks, RBAC, and blockchain-backed audit logs.",
    tech: [
      { icon: <SiNextdotjs className="text-zinc-200" />, name: "Next.js" },
      { icon: <SiTypescript className="text-zinc-200" />, name: "TypeScript" },
      { icon: <SiPrisma className="text-zinc-200" />, name: "Prisma" },
      { icon: <SiMysql className="text-zinc-200" />, name: "MySQL" },
      { icon: <span className="text-[10px] font-bold">Redis</span>, name: "Redis" },
      { icon: <span className="text-[10px] font-bold">Bull</span>, name: "BullMQ" },
      { icon: <span className="text-[10px] font-bold">Polygon</span>, name: "Polygon L2" },
      { icon: <span className="text-[10px] font-bold">JWT</span>, name: "JWT" },
    ],
    links: { live: "", repo: "" },
    snapshots: ["/projects/rok/rok-1.jfif", "/projects/rok/rok-2.jfif", "/projects/rok/rok-3.jfif", "/projects/rok/rok-4.jfif", "/projects/rok/rok-5.jfif"],
  },
  {
    id: 4,
    title: "OnTap Dev Documentation — AI-Powered Documentation Management Platform",
    category: "AI documentation platform",
    description: "AI documentation system for creating, organizing, and exporting technical docs with secure project workflows and rich editing.",
    tech: [
      { icon: <SiNextdotjs className="text-zinc-200" />, name: "Next.js" },
      { icon: <SiReact className="text-zinc-200" />, name: "React" },
      { icon: <SiTypescript className="text-zinc-200" />, name: "TypeScript" },
      { icon: <SiPrisma className="text-zinc-200" />, name: "Prisma" },
      { icon: <SiMysql className="text-zinc-200" />, name: "MySQL" },
      { icon: <SiTailwindcss className="text-zinc-200" />, name: "Tailwind" },
      { icon: <span className="text-[10px] font-bold">TipTap</span>, name: "TipTap" },
      { icon: <span className="text-[10px] font-bold">JWT</span>, name: "JWT" },
    ],
    links: { live: "https://project-documentation-system.vercel.app", repo: "" },
    snapshots: ["/projects/documentation/docu-1.jfif", "/projects/documentation/docu-2.jfif", "/projects/documentation/docu-3.jfif", "/projects/documentation/docu-4.jfif", "/projects/documentation/docu-5.jfif"],
  },
  {
    id: 5,
    title: "SmartSpecs — AI-Powered PC Component Recommendation Chatbot",
    category: "AI recommendation assistant",
    description: "AI PC assistant recommending tailored builds, upgrades, and alternatives based on budget and use case.",
    tech: [
      { icon: <SiNextdotjs className="text-zinc-200" />, name: "Next.js" },
      { icon: <SiTypescript className="text-zinc-200" />, name: "TypeScript" },
      { icon: <SiReact className="text-zinc-200" />, name: "React" },
      { icon: <SiPrisma className="text-zinc-200" />, name: "Prisma" },
      { icon: <SiMysql className="text-zinc-200" />, name: "MySQL" },
      { icon: <span className="text-[10px] font-bold">Open</span>, name: "OpenRouter" },
    ],
    links: { live: "https://smartspec-s.vercel.app/", repo: "" },
    snapshots: ["/projects/smartspecs/smartspecs-1.jfif", "/projects/smartspecs/smartspecs-2.jfif", "/projects/smartspecs/smartspecs-3.jfif", "/projects/smartspecs/smartspecs-4.jfif", "/projects/smartspecs/smartspecs-5.jfif"],
  },
  {
    id: 6,
    title: "Co-Living Landlord Platform",
    category: "Collaborative web platform",
    description: "Landlord dashboard for managing tenants, maintenance, billing, and property operations in one place.",
    tech: [
      { icon: <SiNextdotjs className="text-zinc-200" />, name: "Next.js" },
      { icon: <SiTypescript className="text-zinc-200" />, name: "TypeScript" },
      { icon: <SiTailwindcss className="text-zinc-200" />, name: "Tailwind" },
      { icon: <SiNodedotjs className="text-zinc-200" />, name: "Node.js" },
      { icon: <SiPrisma className="text-zinc-200" />, name: "Prisma" },
      { icon: <SiMysql className="text-zinc-200" />, name: "MySQL" },
      { icon: <SiVercel className="text-zinc-200" />, name: "Vercel" },
    ],
    links: { live: "", repo: "https://github.com/crississipi/Landlord-App" },
    snapshots: ["/projects/landlord/landlord-1.png", "/projects/landlord/landlord-2.png", "/projects/landlord/landlord-3.png", "/projects/landlord/landlord-4.png", "/projects/landlord/landlord-5.png"],
  },
  {
    id: 7,
    title: "Co-Living Tenant Platform",
    category: "Collaborative web platform",
    description: "Tenant portal for requests, bills, communications, and documents in a streamlined shared-living workflow.",
    tech: [
      { icon: <SiNextdotjs className="text-zinc-200" />, name: "Next.js" },
      { icon: <SiTypescript className="text-zinc-200" />, name: "TypeScript" },
      { icon: <SiTailwindcss className="text-zinc-200" />, name: "Tailwind" },
      { icon: <SiNodedotjs className="text-zinc-200" />, name: "Node.js" },
      { icon: <SiPrisma className="text-zinc-200" />, name: "Prisma" },
      { icon: <SiMysql className="text-zinc-200" />, name: "MySQL" },
      { icon: <SiVercel className="text-zinc-200" />, name: "Vercel" },
    ],
    links: { live: "", repo: "https://github.com/crississipi/Tenant-App" },
    snapshots: ["/projects/tenant/tenant-1.png", "/projects/tenant/tenant-2.png", "/projects/tenant/tenant-3.png", "/projects/tenant/tenant-4.png", "/projects/tenant/tenant-5.png"],
  },
  {
    id: 8,
    title: "The Great War: Apocalypto",
    category: "MMORPG landing page",
    description: "Fantasy MMO landing page showcasing worldbuilding, gameplay, and onboarding for a compelling game launch.",
    tech: [
      { icon: <SiNextdotjs className="text-zinc-200" />, name: "Next.js" },
      { icon: <SiTypescript className="text-zinc-200" />, name: "TypeScript" },
      { icon: <SiTailwindcss className="text-zinc-200" />, name: "Tailwind" },
      { icon: <SiNodedotjs className="text-zinc-200" />, name: "Node.js" },
      { icon: <SiVercel className="text-zinc-200" />, name: "Vercel" },
    ],
    links: { live: "https://mmorpg-landing-page.vercel.app/", repo: "https://github.com/crississipi/MMORPG-Landing-Page" },
    snapshots: ["/projects/mmorpg/mmorpg-1.png", "/projects/mmorpg/mmorpg-2.png", "/projects/mmorpg/mmorpg-3.png", "/projects/mmorpg/mmorpg-4.png", "/projects/mmorpg/mmorpg-5.png"],
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(projectsData[0].id);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const selectedProject = projectsData.find((project) => project.id === selectedId) ?? projectsData[0];

  const handleNextSlide = () => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentSlide((previous) => (previous + 1) % selectedProject.snapshots.length);
  };

  const handlePrevSlide = () => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentSlide(
      (previous) => (previous - 1 + selectedProject.snapshots.length) % selectedProject.snapshots.length,
    );
  };

  const changeProject = (id: number) => {
    setIsLoading(true);
    setSelectedId(id);
    setCurrentSlide(0);
  };

  return (
    <section id="projects" className="relative z-30 w-full px-4 py-24 md:px-8 lg:px-16">
      <div className="mx-auto max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-zinc-400">
            Selected work
          </p>
          <h2 className="mt-3 text-4xl text-white md:text-6xl">Portfolio cases.</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="space-y-4">
            {projectsData.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => changeProject(project.id)}
                className={`group w-full rounded-[24px] border p-5 text-left transition-all duration-300 ${
                  selectedId === project.id
                    ? "border-white/20 bg-white/[0.04]"
                    : "border-white/10 bg-[#111111]/60 hover:border-white/20 hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl text-white">{project.title}</h3>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-zinc-500">{project.category}</p>
                  </div>
                  <PiArrowRight
                    className={`text-lg transition-transform duration-300 ${
                      selectedId === project.id ? "translate-x-1 text-white" : "text-zinc-500 group-hover:translate-x-1 group-hover:text-white"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-[28px] border border-white/10 bg-[#101010]/80 p-4 shadow-[0_26px_80px_rgba(0,0,0,0.32)] md:p-5"
              >
                <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#141414]">
                  <div className="relative aspect-[16/10] w-full">
                    {isLoading && (
                      <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#111111]">
                        <PiCircleNotch className="animate-spin text-3xl text-zinc-200" />
                      </div>
                    )}

                    <Image
                      src={selectedProject.snapshots[currentSlide]}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      onLoad={() => setIsLoading(false)}
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
                    <div className="flex items-center gap-2">
                      {selectedProject.snapshots.map((_, index) => (
                        <span
                          key={index}
                          className={`block h-1.5 rounded-full transition-all duration-300 ${
                            index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/35"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handlePrevSlide}
                        className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-zinc-200 hover:border-white/20 hover:bg-white/[0.08]"
                        aria-label="Previous slide"
                      >
                        <PiCaretLeftBold className="text-sm" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextSlide}
                        className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-zinc-200 hover:border-white/20 hover:bg-white/[0.08]"
                        aria-label="Next slide"
                      >
                        <PiCaretRightBold className="text-sm" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <h3 className="text-3xl text-white">{selectedProject.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-zinc-400">
                        {selectedProject.links.repo && (
                          <a href={selectedProject.links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                            <PiGithubLogo className="text-base" />
                            Source code
                          </a>
                        )}
                        {selectedProject.links.live && (
                          <a href={selectedProject.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                            <PiGlobe className="text-base" />
                            Live demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-base leading-7 text-zinc-300">{selectedProject.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {selectedProject.tech.map((item) => (
                      <span
                        key={item.name}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-zinc-200"
                      >
                        {item.icon}
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

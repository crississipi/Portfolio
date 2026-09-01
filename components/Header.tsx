"use client";

import { useEffect, useState } from "react";
import {
  PiFolderOpenThin,
  PiHandWavingThin,
  PiHouseThin,
  PiUserThin,
} from "react-icons/pi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero")?.clientHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight * 0.15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass =
    "flex items-center justify-center rounded-full border border-white/10 bg-[#111111]/80 p-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300 md:px-8 md:pt-6 ${
        isScrolled ? "translate-y-0" : "translate-y-0"
      }`}
    >
      <nav className={navClass} aria-label="Main navigation">
        <div className="flex items-center gap-1.5 md:gap-2">
          <a
            href="#hero"
            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-200 transition hover:bg-white/8 hover:text-white md:h-11 md:w-11"
            aria-label="Home"
          >
            <PiHouseThin className="text-lg md:text-xl" />
          </a>
          <a
            href="#projects"
            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-200 transition hover:bg-white/8 hover:text-white md:h-11 md:w-11"
            aria-label="Projects"
          >
            <PiFolderOpenThin className="text-lg md:text-xl" />
          </a>
          <a
            href="#about"
            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-200 transition hover:bg-white/8 hover:text-white md:h-11 md:w-11"
            aria-label="About"
          >
            <PiUserThin className="text-lg md:text-xl" />
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-sm font-medium text-zinc-100 transition hover:border-white/20 hover:bg-white/6 md:px-4"
          >
            <PiHandWavingThin className="text-base md:text-lg" />
            <span className="hidden md:inline">Get in touch</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

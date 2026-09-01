"use client";

import { motion } from "framer-motion";
import { PiArrowUp, PiEnvelopeSimple, PiGithubLogo, PiLinkedinLogo, PiPhone } from "react-icons/pi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <PiGithubLogo className="text-xl" />, href: "https://github.com/crississipi", label: "GitHub" },
    { icon: <PiLinkedinLogo className="text-xl" />, href: "https://www.linkedin.com/in/crismalipico", label: "LinkedIn" },
    { icon: <PiPhone className="text-xl" />, href: "tel:+639243591199", label: "Phone" },
    { icon: <PiEnvelopeSimple className="text-xl" />, href: "mailto:crismalipico12@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative z-30 w-full overflow-hidden border-t border-white/10 bg-[#0b0b0b] py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl text-white">Cris Julius Malipico</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Building refined digital products with clarity, precision, and momentum.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="rounded-full border border-white/10 bg-white/[0.02] p-3 text-zinc-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.14 }}
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-zinc-400 md:flex-row"
        >
          <p>© {currentYear} Cris Julius Malipico. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-zinc-200 hover:border-white/20 hover:text-white"
          >
            Back to top
            <PiArrowUp className="text-sm" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

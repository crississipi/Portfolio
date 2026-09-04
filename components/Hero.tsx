"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  PiArrowRight,
  PiEnvelopeSimple,
  PiGithubLogo,
  PiLinkedinLogo,
  PiPaperPlaneTiltThin,
  PiPhone,
} from "react-icons/pi";
import { SiFacebook, SiGmail, SiViber } from "react-icons/si";
import Image from "next/image";

const Hero = () => {
  const contactModes = [
    {
      icon: <SiGmail className="text-zinc-200" />,
      label: "Email",
      key: "email",
    },
    {
      icon: <SiViber className="text-zinc-200" />,
      label: "Viber",
      key: "viber",
    },
    {
      icon: <SiFacebook className="text-zinc-200" />,
      label: "Facebook",
      key: "facebook",
    },
  ];

  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!selectedMode) nextErrors.mode = "Please select a contact method.";
    if (!formData.contact.trim())
      nextErrors.contact = "Contact detail is required.";
    if (!formData.message.trim())
      nextErrors.message = "Message cannot be empty.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm() || !selectedMode) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, mode: selectedMode }),
      });

      if (!response.ok) throw new Error("Inquiry request failed");
      setFormData({ name: "", contact: "", message: "", website: "" });
      setSelectedMode(null);
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getContactPlaceholder = () => {
    switch (selectedMode) {
      case "email":
        return "your@email.com";
      case "facebook":
        return "facebook.com/yourprofile";
      case "viber":
        return "+63 912 345 6789";
      default:
        return "Select a contact method";
    }
  };

  return (
    <section
      id="hero"
      className="hero relative z-30 flex min-h-screen w-full items-center justify-center overflow-hidden pb-8 pt-28 px-4 md:px-8 lg:px-16"
    >
      <Image
        height={4098}
        width={4098}
        alt=""
        src="/portfolio-cyborg.png"
        className="absolute h-full w-max object-contain object-top lg-0 lg:left-20 top-0 border z-1"
      />
      <div className="absolute z-10 h-screen w-full bg-linear-to-b from-[#0d0d0d] via-24% via-transparent to-60% lg:to-95% to-[#0d0d0d] top-0 left-0"/>
      <div className="grid w-full h-full max-w-7xl items-center gap-5 lg:grid-cols-[1.15fr_0.85fr] z-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex flex-col mt-100 lg:mt-auto"
        >
          <div className="mb-3 w-max inline-flex items-center gap-2 rounded-full bg-white/[0.03] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.32em] text-zinc-300">
            Self-taught Full-Stack Developer
          </div>

          <h1 className="flex w-full flex-col gap-1 text-5xl text-white md:flex-row md:gap-4 md:text-6xl lg:text-7xl">
            <span>Cris Julius</span>
            <span className="block text-zinc-400">Malipico</span>
          </h1>

          <div className="mt-6">
            <p className="max-w-3xl text-base text-zinc-300 md:text-lg">
              Self-taught Full-Stack Developer building secure, scalable web apps with Next.js, React, TypeScript, Node.js, MySQL, Prisma, and REST APIs for real-world, data-driven products.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-6 lg:flex lg:flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="col-span-3 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-medium text-white hover:border-white/20 hover:bg-white/10"
            >
              View work
              <PiArrowRight className="text-base" />
            </a>
            <a
              href="mailto:crismalipico12@gmail.com"
              className="col-span-3 inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-medium text-zinc-200 hover:border-white/20 hover:text-white"
            >
              <PiEnvelopeSimple className="text-base" />
              Email me
            </a>
            <a
              href="https://github.com/crississipi"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="col-span-1 aspect-square rounded-full border border-white/10 bg-white/[0.02] p-3 text-zinc-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              <PiGithubLogo className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/crismalipico"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="col-span-1 aspect-square rounded-full border border-white/10 bg-white/[0.02] p-3 text-zinc-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              <PiLinkedinLogo className="text-xl" />
            </a>
            <a
              href="tel:+639243591199"
              aria-label="Phone"
              className="col-span-1 aspect-square rounded-full border border-white/10 bg-white/[0.02] p-3 text-zinc-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              <PiPhone className="text-xl" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111111]/85 p-5 shadow-[0_26px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl md:p-7"
        >
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/6 blur-3xl" />
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-zinc-100">
                <PiPaperPlaneTiltThin className="text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl text-white">Start a project</h2>
                <p className="text-sm text-zinc-400">
                  Let&apos;s build something lasting.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(event) => setFormData((previous) => ({ ...previous, website: event.target.value }))}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(event) => {
                      setFormData((previous) => ({
                        ...previous,
                        name: event.target.value,
                      }));
                      if (errors.name)
                        setErrors((previous) => ({ ...previous, name: "" }));
                    }}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-[#0c0c0c] px-4 py-3 text-white placeholder:text-zinc-500 focus:border-white/20 focus:outline-none"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-300">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                    Contact via
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen((state) => !state)}
                      className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#0c0c0c] px-4 py-3 text-left text-sm text-zinc-200 focus:border-white/20 focus:outline-none"
                    >
                      <span className="flex items-center gap-2">
                        {selectedMode ? (
                          <>
                            {
                              contactModes.find(
                                (mode) => mode.key === selectedMode,
                              )?.icon
                            }
                            {
                              contactModes.find(
                                (mode) => mode.key === selectedMode,
                              )?.label
                            }
                          </>
                        ) : (
                          "Select method"
                        )}
                      </span>
                      <span className="text-zinc-400">▾</span>
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.16 }}
                          className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 overflow-hidden rounded-xl border border-white/10 bg-[#111111] shadow-[0_26px_80px_rgba(0,0,0,0.4)]"
                        >
                          {contactModes.map((mode) => (
                            <button
                              key={mode.key}
                              type="button"
                              onClick={() => {
                                setSelectedMode(mode.key);
                                setIsDropdownOpen(false);
                                if (errors.mode) {
                                  setErrors((previous) => ({
                                    ...previous,
                                    mode: "",
                                  }));
                                }
                              }}
                              className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-zinc-200 hover:bg-white/[0.04]"
                            >
                              {mode.icon}
                              {mode.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.mode && (
                    <p className="text-xs text-red-300">{errors.mode}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                  Contact info
                </label>
                <input
                  type={selectedMode === "email" ? "email" : "text"}
                  value={formData.contact}
                  onChange={(event) => {
                    setFormData((previous) => ({
                      ...previous,
                      contact: event.target.value,
                    }));
                    if (errors.contact)
                      setErrors((previous) => ({ ...previous, contact: "" }));
                  }}
                  placeholder={getContactPlaceholder()}
                  disabled={!selectedMode}
                  className="w-full rounded-xl border border-white/10 bg-[#0c0c0c] px-4 py-3 text-white placeholder:text-zinc-500 focus:border-white/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
                {errors.contact && (
                  <p className="text-xs text-red-300">{errors.contact}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(event) => {
                    setFormData((previous) => ({
                      ...previous,
                      message: event.target.value,
                    }));
                    if (errors.message)
                      setErrors((previous) => ({ ...previous, message: "" }));
                  }}
                  placeholder="Share the details of your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0c0c0c] px-4 py-3 text-white placeholder:text-zinc-500 focus:border-white/20 focus:outline-none"
                />
                {errors.message && (
                  <p className="text-xs text-red-300">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-white px-5 py-3.5 text-sm font-medium text-black hover:bg-zinc-200"
              >
                {isSubmitting ? "Sending..." : "Send inquiry"}
                <PiPaperPlaneTiltThin className="text-base" />
              </button>
              {submitStatus === "success" && (
                <p className="text-sm text-emerald-300" role="status">Thanks, your inquiry has been sent.</p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-300" role="alert">Unable to send your inquiry. Please try again.</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

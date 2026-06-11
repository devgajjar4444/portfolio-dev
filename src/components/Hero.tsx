"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { personal } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-16 noise-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,165,116,0.08),transparent)]" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted mb-8">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-accent" />
              {personal.location}
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span>{personal.yearsOfExperience} years building production software</span>
          </div>

          <p className="text-accent/90 text-sm font-medium tracking-[0.15em] uppercase mb-5">
            {personal.title}
          </p>

          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl">
            Crafting{" "}
            <span className="gradient-text">scalable</span>{" "}
            products for web &amp; mobile
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10">
            {personal.bio}
          </p>

          <div className="inline-flex flex-wrap items-center gap-2 p-1 rounded-full border border-border bg-surface/60 transition-colors duration-300 hover:border-accent/25 hover:bg-surface/80">
            <a
              href="#work"
              className="hover-arrow-btn inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full bg-accent text-background hover-btn-accent"
            >
              Projects
              <ArrowRight size={15} className="hover-arrow" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-muted hover-btn-ghost"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

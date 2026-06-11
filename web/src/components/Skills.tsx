"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

const allSkills = [...new Set(skills.flatMap((c) => c.skills))];

const marqueeRow1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
const marqueeRow2 = allSkills.slice(Math.ceil(allSkills.length / 2));

function MarqueeRow({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden marquee-track">
      <div className={`flex gap-3 w-max ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-card text-sm text-muted whitespace-nowrap hover-tag cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const activeCategory = skills[active];

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Expertise"
          title="Skills & Technologies"
          description="Production-grade stack honed across 3.5+ years of shipping real products for international clients."
        />

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {[
            { value: "3.5+", label: "Years Experience" },
            { value: `${allSkills.length}+`, label: "Technologies" },
            { value: "11", label: "Projects Shipped" },
            { value: "4", label: "Companies" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-4 md:p-5 text-center hover-card cursor-default"
            >
              <p className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="space-y-3 mb-12 mask-fade select-none">
          <MarqueeRow items={marqueeRow1} direction="left" />
          <MarqueeRow items={marqueeRow2} direction="right" />
        </div>

        {/* Category tabs + detail panel */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden transition-colors duration-300 hover:border-accent/20">
          <div className="flex overflow-x-auto scrollbar-hide border-b border-border">
            {skills.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 px-5 py-4 text-sm font-medium relative rounded-t-lg ${
                  active === i ? "text-foreground" : "text-muted hover-nav-pill"
                }`}
              >
                {cat.category}
                {active === i && (
                  <motion.div
                    layoutId="skill-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.category}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="p-6 md:p-8"
            >
              <h3 className="text-lg font-semibold mb-5">{activeCategory.category}</h3>
              <div className="flex flex-wrap gap-2.5">
                {activeCategory.skills.map((skill) => (
                  <span
                    key={skill}
                    className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-border text-sm font-medium hover-tag cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Career"
          title="Experience"
          description="From REST APIs to full-stack ownership — across local startups and international clients."
        />

        <div className="space-y-4">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group rounded-2xl border p-5 sm:p-6 md:p-7 hover-card ${
                exp.current
                  ? "border-accent/35 bg-card"
                  : "border-border bg-card/50"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg sm:text-xl font-semibold transition-colors duration-300 group-hover:text-accent">
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider bg-accent/15 text-accent px-2 py-0.5 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-accent font-medium">{exp.role}</p>
                  <p className="text-xs text-muted mt-0.5">{exp.location}</p>
                </div>
                <time className="text-xs font-medium text-muted bg-surface border border-border px-3 py-1.5 rounded-full whitespace-nowrap self-start transition-colors duration-300 group-hover:border-accent/30 group-hover:text-foreground">
                  {exp.period}
                </time>
              </div>

              <p className="text-sm text-muted mb-4 leading-relaxed">{exp.description}</p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {exp.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted flex items-start gap-2.5 leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-accent/70 shrink-0 transition-all duration-300 group-hover:w-1.5 group-hover:bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Bot, Users, PhoneCall, Sparkles } from "lucide-react";
import { personal } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

const highlights = [
  {
    icon: Bot,
    title: "AI Lead Engineer",
    description:
      "Architect and ship AI-powered features — custom LLMs, inference APIs, and intelligent assistants woven into production apps.",
  },
  {
    icon: Sparkles,
    title: "AI Assistants & Integrations",
    description:
      "Integrate third-party AI services, chatbots, and automation into scalable backends with clean, maintainable architecture.",
  },
  {
    icon: PhoneCall,
    title: "Client Communication",
    description:
      "Comfortable leading client calls, translating requirements into technical plans, and keeping delivery transparent.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Managed teams of up to four developers — task distribution, code reviews, cross-stack coordination, and on-time delivery.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="About"
          title="Engineer, AI Lead & Team Player"
          description="Shipping scalable products while bridging clients, teams, and cutting-edge AI."
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-base sm:text-lg text-muted max-w-3xl leading-relaxed mb-12"
        >
          {personal.about}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-5 sm:p-6 hover-card"
            >
              <div className="hover-icon-wrap w-10 h-10 rounded-xl bg-accent/10 border border-transparent flex items-center justify-center mb-4">
                <item.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-accent">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

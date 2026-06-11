"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Link2 } from "lucide-react";
import { personal } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `https://mail.google.com/mail/?view=cm&to=${personal.email}`,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    external: false,
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "dev-gajjar",
    href: personal.linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Connect"
          title="Let's Work Together"
          description="Open to full-time roles, contract work, and interesting product collaborations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover-card"
            >
              <div className="hover-icon-wrap p-3 rounded-xl bg-surface border border-border">
                <c.icon size={22} className="text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted uppercase tracking-wider mb-0.5">{c.label}</p>
                <p className="font-semibold text-sm sm:text-base truncate transition-colors duration-300 group-hover:text-accent">
                  {c.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

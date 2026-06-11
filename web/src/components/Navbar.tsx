"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personal, navLinks } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled || mobileOpen
          ? "px-3 sm:px-4 pt-2"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-500 ease-out ${
          scrolled || mobileOpen ? "header-glass rounded-2xl" : "bg-transparent"
        }`}
      >
        <nav className="px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={() => setMobileOpen(false)}
          className="text-base font-semibold tracking-tight transition-colors duration-300 hover:text-accent"
        >
          Dev <span className="text-accent">Gajjar</span>
        </a>

        <div
          className={`hidden md:flex items-center gap-1 p-1 rounded-full border transition-colors duration-500 ${
            scrolled || mobileOpen
              ? "border-white/[0.08] bg-white/[0.04]"
              : "border-white/[0.06] bg-white/[0.03]"
          }`}
        >
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium ${
                  isActive
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted hover-nav-pill"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-full bg-accent text-background hover-btn-accent"
        >
          Hire Me
        </a>

        <button
          className="md:hidden p-2 -mr-2 text-muted hover-btn-ghost rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden border-t border-white/[0.06] px-6 pb-6">
            <div className="space-y-1 pt-2">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-3.5 px-2 -mx-2 rounded-lg border-b border-white/[0.06] text-base font-medium transition-colors ${
                      isActive ? "text-accent" : "text-muted hover:bg-white/[0.05] hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {isActive && <span className="w-2 h-2 rounded-full bg-accent" />}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center justify-center w-full py-3 rounded-xl bg-accent text-background font-semibold hover-btn-accent"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

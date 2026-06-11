"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const dragStartX = useRef(0);
  const dragDelta = useRef(0);
  const isDragging = useRef(false);
  const suppressClick = useRef(false);
  const isPaused = useRef(false);
  const [dragOffset, setDragOffset] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      const nextIndex = Math.max(0, Math.min(index, projects.length - 1));
      if (nextIndex === active) return;
      setDirection(nextIndex > active ? 1 : -1);
      setActive(nextIndex);
    },
    [active],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (isPaused.current) return;
      setDirection(1);
      setActive((current) => (current + 1) % projects.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    isDragging.current = true;
    suppressClick.current = false;
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
    setDragOffset(0);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    dragDelta.current = e.clientX - dragStartX.current;
    if (Math.abs(dragDelta.current) > 8) suppressClick.current = true;
    setDragOffset(dragDelta.current * 0.35);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setDragOffset(0);
    if (dragDelta.current < -50) next();
    else if (dragDelta.current > 50) prev();
    dragDelta.current = 0;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const onPointerCancel = () => {
    isDragging.current = false;
    dragDelta.current = 0;
    setDragOffset(0);
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (suppressClick.current) {
      e.preventDefault();
      e.stopPropagation();
      suppressClick.current = false;
    }
  };

  const project = projects[active];

  return (
    <section id="work" className="py-20 md:py-28 border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-12">
          <div className="mb-0">
            <SectionHeader
              label="Portfolio"
              title="Featured Projects"
              description={`${projects.length} production apps across social, travel, fintech, health, and AI.`}
            />
          </div>
          <div className="flex items-center gap-3 shrink-0 lg:mb-14">
            <button
              onClick={prev}
              disabled={active === 0}
              aria-label="Previous project"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-border bg-card hover-round-btn disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm text-muted tabular-nums min-w-[4rem] text-center">
              {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <button
              onClick={next}
              disabled={active === projects.length - 1}
              aria-label="Next project"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-border bg-card hover-round-btn disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel viewport */}
        <div
          className="relative cursor-grab active:cursor-grabbing select-none touch-pan-y"
          onMouseEnter={() => {
            isPaused.current = true;
          }}
          onMouseLeave={() => {
            isPaused.current = false;
            onPointerCancel();
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          onClickCapture={onClickCapture}
        >
          <p className="text-xs text-muted text-center mb-3 hidden sm:block">
            Drag left or right to browse projects
          </p>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={project.id}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 48 : -48, scale: 0.98 }}
              animate={{ opacity: 1, x: dragOffset, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -48 : 48, scale: 0.98 }}
              transition={{
                duration: dragOffset !== 0 ? 0 : 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`group/card rounded-2xl border bg-card overflow-hidden transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] ${
                project.current ? "border-accent/40" : "border-border hover:border-accent/25"
              }`}
            >
              {/* Card header */}
              <div className="p-5 sm:p-7 md:p-8 border-b border-border bg-surface/50">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                        {project.name}
                      </h3>
                      {project.current && (
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-accent/15 text-accent px-2.5 py-1 rounded-full">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-accent/90 font-medium leading-snug">
                      {project.tagline}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-arrow-btn inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-background text-sm font-semibold rounded-xl hover-btn-accent"
                      >
                        <ExternalLink size={15} className="hover-arrow" />
                        Visit Site
                      </a>
                    )}
                    {project.platformUrls?.map((p) => (
                      <a
                        key={p.label}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-tag inline-flex items-center gap-1.5 px-3 py-2.5 border border-border text-sm rounded-xl"
                      >
                        <ExternalLink size={14} className="text-accent" />
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 sm:p-7 md:p-8 space-y-6">
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2.5">
                      {project.responsibilities.map((r) => (
                        <li key={r} className="text-sm text-muted flex items-start gap-3 leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-surface border border-border text-foreground/90 hover-tag cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Dots + thumbnails */}
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex justify-center gap-1.5 flex-wrap">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goTo(i)}
                aria-label={`Go to ${p.name}`}
                className={`h-1.5 rounded-full ${
                  i === active ? "bg-accent w-8" : "bg-border w-1.5 hover-dot"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goTo(i)}
                className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium border ${
                  i === active
                    ? "border-accent/50 bg-accent/10 text-accent"
                    : "border-border text-muted hover-tag"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

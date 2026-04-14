"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TECHNOLOGIES } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;
const IMAGE_TRANSITION = { duration: 1, ease: EASE };

interface CinematicScrollTechnologyProps {
  showHeading?: boolean;
}

export default function CinematicScrollTechnology({
  showHeading = true,
}: CinematicScrollTechnologyProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) setActiveIndex(index);
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby={showHeading ? "technology-cinematic-heading" : undefined}
      className="relative"
    >
      <div className="relative min-h-svh lg:min-h-0">
        <div className="lg:flex lg:min-h-[400vh]">
          <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-0 lg:h-svh lg:shrink-0">
            <div className="relative h-full w-full bg-secondary">
              <div className="absolute inset-x-[8%] top-[12%] bottom-[12%] rounded-[2rem] border border-white/10 bg-black/10 shadow-[0_30px_120px_rgba(0,0,0,0.22)]" />
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={IMAGE_TRANSITION}
                  className="absolute inset-0"
                >
                  <Image
                    src={TECHNOLOGIES[activeIndex]?.image ?? TECHNOLOGIES[0].image}
                    alt={TECHNOLOGIES[activeIndex]?.name ?? TECHNOLOGIES[0].name}
                    fill
                    sizes="50vw"
                    className="object-cover lg:p-10"
                    priority={activeIndex === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:flex-col">
            {showHeading && (
              <div className="px-8 pt-20 pb-16 lg:px-16 lg:pt-32 lg:pb-24">
                <h2
                  id="technology-cinematic-heading"
                  className="text-h2 font-light tracking-tight text-secondary"
                >
                  The Technologies
                </h2>
                <p className="mt-8 text-body-lg text-text-muted max-w-xl leading-relaxed">
                  Four modalities. Devices are the foundation—topicals amplify the result. Explore each technology below.
                </p>
                <Link
                  href="/technology"
                  className="mt-8 inline-flex items-center text-caption font-medium tracking-[0.08em] uppercase text-primary hover:text-secondary transition-colors duration-700"
                >
                  Explore Technology &rarr;
                </Link>
              </div>
            )}

            {TECHNOLOGIES.map((tech, index) => (
              <div
                key={tech.slug}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className="min-h-svh flex flex-col justify-center px-8 py-24 lg:px-16 lg:py-32"
              >
                <span
                  className="text-caption font-medium tracking-[0.15em] uppercase text-primary"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[2.5rem] font-light tracking-tight text-secondary md:text-[3.5rem] lg:text-[4rem] leading-[1.05]">
                  {tech.name}
                </h3>
                <p className="mt-6 text-body-lg text-text-muted max-w-lg leading-relaxed">
                  {tech.tagline}
                </p>
                <Link
                  href={`/technology/${tech.slug}`}
                  className="mt-10 inline-flex items-center text-caption font-medium tracking-[0.08em] uppercase text-primary hover:text-secondary transition-colors duration-700"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          {showHeading && (
            <div className="px-8 pt-16 pb-12">
              <h2
                id="technology-cinematic-heading"
                className="text-h2 font-light tracking-tight text-secondary"
              >
                The Technologies
              </h2>
              <p className="mt-6 text-body-lg text-text-muted max-w-xl leading-relaxed">
                Four modalities. Devices are the foundation—topicals amplify the result.
              </p>
              <Link
                href="/technology"
                className="mt-6 inline-flex items-center text-caption font-medium tracking-[0.08em] uppercase text-primary"
              >
                Explore Technology &rarr;
              </Link>
            </div>
          )}
          {TECHNOLOGIES.map((tech, index) => (
            <div
              key={tech.slug}
              className="min-h-[85vh] flex flex-col justify-center px-8 py-20"
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[1.75rem] overflow-hidden border border-border/60 bg-surface-muted shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <span className="mt-8 text-caption font-medium tracking-[0.15em] uppercase text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-h1 font-light tracking-tight text-secondary">
                {tech.name}
              </h3>
              <p className="mt-4 text-body-lg text-text-muted leading-relaxed">
                {tech.tagline}
              </p>
              <Link
                href={`/technology/${tech.slug}`}
                className="mt-6 inline-flex items-center text-caption font-medium tracking-[0.08em] uppercase text-primary"
              >
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

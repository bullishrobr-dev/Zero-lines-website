"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TECHNOLOGIES } from "@/lib/constants";

const CHARCOAL = "#1A1A1A";
const TIFFANY = "#0ABAB5";
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface TechnologySequencingStripProps {
  /** Slug of the technology to highlight (e.g. "red-infrared"). */
  highlightSlug?: string;
  /** Optional text above the strip. */
  stripText?: string;
}

const DEFAULT_STRIP_TEXT =
  "Four modalities. One integrated system. Each technology penetrates where topicals cannot—and amplifies the protocol when used in sequence.";

export default function TechnologySequencingStrip({
  highlightSlug,
  stripText = DEFAULT_STRIP_TEXT,
}: TechnologySequencingStripProps) {
  const activeIndex = highlightSlug
    ? TECHNOLOGIES.findIndex((t) => t.slug === highlightSlug)
    : -1;
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const hasHighlight = highlightSlug != null && activeIndex >= 0;

  return (
    <section
      className="py-28 lg:py-40 px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: CHARCOAL }}
      aria-labelledby="technology-strip-heading"
    >
      <h2 id="technology-strip-heading" className="sr-only">
        Technology modalities
      </h2>

      <div className="max-w-[1440px] mx-auto">
        <p className="text-body-lg text-white/90 text-center max-w-2xl mx-auto mb-16">
          {stripText}
        </p>

        <div className="overflow-x-auto overflow-y-visible pb-6 -mx-8 px-8 lg:-mx-16 lg:px-16 scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/20">
          <div className="flex items-end gap-10 lg:gap-16 min-w-max justify-center">
            {TECHNOLOGIES.map((tech, index) => {
              const isActive = hasHighlight && index === safeActiveIndex;

              return (
                <motion.div
                  key={tech.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: EASE,
                  }}
                  className="flex flex-col items-center shrink-0"
                >
                  <Link
                    href={`/technology/${tech.slug}`}
                    className="flex flex-col items-center text-center no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] rounded-lg transition-opacity hover:opacity-90"
                    aria-label={`Explore ${tech.name}: ${tech.tagline}`}
                  >
                    <motion.div
                      className="relative w-20 h-20 lg:w-28 lg:h-28 rounded-[1.25rem] overflow-hidden border transition-colors duration-500 bg-white/5"
                      style={{
                        borderColor: isActive
                          ? `${TIFFANY}80`
                          : "rgba(255,255,255,0.08)",
                        boxShadow: isActive
                          ? `0 0 32px ${TIFFANY}40, 0 0 64px ${TIFFANY}20`
                          : "none",
                      }}
                      animate={{ scale: isActive ? 1.12 : 1 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    >
                      <Image
                        src={tech.image}
                        alt=""
                        fill
                        sizes="112px"
                        className={`object-cover transition-all duration-500 ${
                          isActive ? "opacity-100 scale-100" : "opacity-65 scale-[1.01]"
                        }`}
                      />
                      {isActive && (
                        <div
                          className="absolute inset-0 pointer-events-none rounded-lg"
                          style={{
                            boxShadow: `inset 0 0 0 1px ${TIFFANY}60`,
                          }}
                        />
                      )}
                    </motion.div>
                    <span
                      className="mt-4 text-caption font-medium tracking-[0.06em] uppercase"
                      style={{
                        color: isActive ? TIFFANY : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="mt-1 text-caption max-w-[120px] text-center leading-tight"
                      style={{
                        color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {tech.name}
                    </span>
                    <span
                      className="mt-1 text-[0.7rem] uppercase tracking-wider max-w-[120px] text-center leading-tight"
                      style={{
                        color: isActive ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {tech.shortName}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

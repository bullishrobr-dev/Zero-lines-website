"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";

const CHARCOAL = "#1A1A1A";
const TIFFANY = "#0ABAB5";
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

// Protocol order: 1 Reset (Peeling Gel), 2 Activation (Syringe), 3 Signal (Serum), 4 Day, 5 Night, 6 Refill
const PROTOCOL_STEPS = [
  { step: 1, name: "The Reset", productLabel: "Peeling", slug: "peeling-gel" },
  { step: 2, name: "The Activation", productLabel: "Syringe", slug: "syringe" },
  { step: 3, name: "The Signal", productLabel: "Serum", slug: "serum" },
  { step: 4, name: "Day Matrix", productLabel: "Day Cream", slug: "day-cream" },
  { step: 5, name: "Night Repair", productLabel: "Night Cream", slug: "night-cream" },
  { step: 6, name: "Refill", productLabel: "Refill", slug: "syringe-refill" },
];

interface ProtocolSequencingStripProps {
  /** Which step to highlight (1–6). Default 2 (Syringe). */
  highlightStep?: number;
  /** Custom text above the strip. */
  stripText?: string;
}

const DEFAULT_STRIP_TEXT =
  "Step 02: The Activation. Applied post-reset, priming the structural environment for the molecular serum.";

export default function ProtocolSequencingStrip({
  highlightStep = 2,
  stripText = DEFAULT_STRIP_TEXT,
}: ProtocolSequencingStripProps) {
  const activeIndex = Math.max(0, Math.min(6, highlightStep - 1));

  return (
    <section
      className="py-28 lg:py-40 px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: CHARCOAL }}
      aria-labelledby="protocol-strip-heading"
    >
      <h2 id="protocol-strip-heading" className="sr-only">
        Protocol sequencing
      </h2>

      <div className="max-w-[1440px] mx-auto">
        <p className="text-body-lg text-white/90 text-center max-w-2xl mx-auto mb-16">
          {stripText}
        </p>

        {/* Horizontal scrollable strip */}
        <div className="overflow-x-auto overflow-y-visible pb-6 -mx-8 px-8 lg:-mx-16 lg:px-16 scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/20">
          <div className="flex items-end gap-10 lg:gap-16 min-w-max justify-center">
            {PROTOCOL_STEPS.map((item, index) => {
              const product = PRODUCTS.find((p) => p.slug === item.slug);
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={item.slug}
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
                    href={`/products/${item.slug}`}
                    className="flex flex-col items-center text-center no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] rounded-lg transition-opacity hover:opacity-90"
                    aria-label={`Go to Step ${String(item.step).padStart(2, "0")}: ${item.name} — ${item.productLabel}`}
                  >
                    <motion.div
                      className="relative w-20 h-20 lg:w-28 lg:h-28 rounded-[1.25rem] overflow-hidden border transition-colors duration-500 bg-[linear-gradient(180deg,#f7fbfb_0%,#edf7f6_52%,#f8f8f8_100%)]"
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
                        src={product?.image ?? ""}
                        alt=""
                        fill
                        sizes="112px"
                        className={`object-cover transition-all duration-500 ${
                          isActive ? "object-contain p-3 opacity-100" : "object-contain p-3 opacity-60"
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
                      Step {String(item.step).padStart(2, "0")}
                    </span>
                    <span
                      className="mt-1 text-caption max-w-[100px] text-center leading-tight"
                      style={{
                        color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="mt-1 text-[0.7rem] uppercase tracking-wider max-w-[100px] text-center leading-tight"
                      style={{
                        color: isActive ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {item.productLabel}
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

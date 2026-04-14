"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";

const CHARCOAL = "#1A1A1A";
const TIFFANY = "#0ABAB5";
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const CALLOUTS = [
  {
    id: "tip",
    label:
      "Micro-Dose Applicator: Engineered for zero-waste precision targeting.",
    pathD: "M 0 8 L 120 8 L 120 16",
  },
  {
    id: "chamber",
    label:
      "The Activation Chamber: Houses the PDRN and biomimetic peptide matrix in a vacuum-sealed environment.",
    pathD: "M 0 12 L 140 12 L 140 20",
  },
  {
    id: "base",
    label:
      "Ecosystem Ejector: Single-click refill mechanism for 12-month protocol continuity.",
    pathD: "M 0 8 L 100 8 L 100 16",
  },
] as const;

function DrawingLine({
  pathD,
  inView,
  delay,
}: {
  pathD: string;
  inView: boolean;
  delay: number;
}) {
  return (
    <svg
      className="w-full h-8 shrink-0 opacity-90"
      viewBox="0 0 160 24"
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        d={pathD}
        fill="none"
        stroke={TIFFANY}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
        style={{
          filter: "drop-shadow(0 0 6px rgba(10, 186, 181, 0.5))",
        }}
      />
    </svg>
  );
}

export default function AnatomyOfInstrument() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const product = PRODUCTS.find((p) => p.slug === "syringe");
  const imageSrc = product?.image ?? PRODUCTS[1].image;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex flex-col items-center justify-center py-28 lg:py-40 px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: CHARCOAL }}
      aria-labelledby="anatomy-heading"
    >
      <h2 id="anatomy-heading" className="sr-only">
        Anatomy of the Instrument
      </h2>

      <div className="w-full max-w-[1000px] mx-auto flex flex-col items-center gap-16 lg:gap-20">
        {/* Central syringe image — massive, center */}
        <motion.div
          className="relative w-56 h-80 lg:w-72 lg:h-96 shrink-0"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }
          }
          transition={{ duration: 1, ease: EASE }}
        >
          <Image
            src={imageSrc}
            alt="Precision Collagen Activation Syringe — instrument anatomy"
            fill
            sizes="(max-width: 1024px) 224px, 288px"
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Three callout lines + labels */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {CALLOUTS.map((callout, i) => (
            <motion.div
              key={callout.id}
              className="flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.2,
                ease: EASE,
              }}
            >
              <DrawingLine
                pathD={callout.pathD}
                inView={inView}
                delay={0.4 + i * 0.15}
              />
              <p className="mt-4 text-body text-white/90 leading-relaxed max-w-[320px]">
                {callout.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

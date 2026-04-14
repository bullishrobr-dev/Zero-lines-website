"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Activity, Shield } from "lucide-react";
import { SUPPORT_IMAGES } from "@/lib/constants";

const TIFFANY = "#0ABAB5";
const CHARCOAL = "#1A1A1A";
const MUTED_GRAY = "#888888";

const CIRCLE_SIZE = 120;
const STROKE = 8;
const RADIUS = (CIRCLE_SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function MineralActivationDataViz() {
  const sectionRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ringRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="data-viz-heading"
      className="py-32 lg:py-40"
      style={{ backgroundColor: CHARCOAL }}
    >
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
        <header className="text-center mb-20 lg:mb-28">
          <h2
            id="data-viz-heading"
            className="text-4xl md:text-5xl font-light tracking-tight text-white"
          >
            The Illusion vs. The Activation
          </h2>
          <p className="mt-6 mx-auto text-body-lg text-gray-400 max-w-2xl leading-relaxed">
            Your skin hasn&rsquo;t forgotten how to repair itself. It is simply starved of the right signals.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div className="flex flex-col">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-black/40">
              <Image
                src={SUPPORT_IMAGES.homepageScienceContrast}
                alt=""
                fill
                className="object-cover grayscale opacity-60"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <h3 className="mt-8 text-xl font-light tracking-tight text-white">
              Traditional Skincare
            </h3>
            <p className="mt-2 text-caption font-medium tracking-[0.08em] uppercase text-gray-500">
              The Illusion
            </p>
            <p className="mt-6 text-body text-gray-400 leading-relaxed">
              <strong className="text-gray-300">Mechanism:</strong> Exogenous (from the outside). Heavy artificial collagens that cannot penetrate the dermal barrier.
            </p>
            <p className="mt-4 text-body text-gray-400 leading-relaxed">
              <strong className="text-gray-300">Result:</strong> Dependency. The skin becomes &ldquo;lazy,&rdquo; relying on surface moisture while structural degradation continues underneath.
            </p>
            <div className="mt-10">
              <div
                className="h-3 w-full rounded-full overflow-hidden bg-white/10"
                role="img"
                aria-label="0% Cellular Communication"
              >
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: "0%",
                    backgroundColor: MUTED_GRAY,
                  }}
                />
              </div>
              <p className="mt-3 text-caption font-medium tracking-[0.06em] uppercase text-gray-500">
                0% Cellular Communication
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-black/20">
              <Image
                src={SUPPORT_IMAGES.homepageScienceActivation}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{
                  filter: "saturate(0.85) sepia(0.1) hue-rotate(160deg)",
                }}
              />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `linear-gradient(135deg, ${TIFFANY}22 0%, transparent 60%)`,
                }}
              />
            </div>
            <h3 className="mt-8 text-xl font-light tracking-tight text-white">
              Zero Lines PRNS Protocol
            </h3>
            <p className="mt-2 text-caption font-medium tracking-[0.08em] uppercase text-primary">
              The Biological Signal
            </p>
            <p className="mt-6 text-body text-gray-300 leading-relaxed">
              <strong className="text-white">Mechanism:</strong> Endogenous (from the inside). High-altitude Pyrenean thermal minerals (Mg, Ca, Si, S) that speak the skin&rsquo;s native language.
            </p>
            <p className="mt-4 text-body text-gray-300 leading-relaxed">
              <strong className="text-white">Result:</strong> Intelligence. PRNS minerals penetrate the barrier, signaling fibroblasts to synthesize their own native Type I Collagen and Elastin.
            </p>
            <div ref={ringRef} className="mt-10 flex items-center gap-6">
              <div
                className="relative shrink-0"
                style={{
                  width: CIRCLE_SIZE,
                  height: CIRCLE_SIZE,
                  filter: "drop-shadow(0 0 12px rgba(10, 186, 181, 0.5))",
                }}
              >
                <svg
                  className="w-full h-full -rotate-90"
                  viewBox={`0 0 ${CIRCLE_SIZE} ${CIRCLE_SIZE}`}
                  aria-hidden
                >
                  <circle
                    cx={CIRCLE_SIZE / 2}
                    cy={CIRCLE_SIZE / 2}
                    r={RADIUS}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth={STROKE}
                  />
                  <motion.circle
                    cx={CIRCLE_SIZE / 2}
                    cy={CIRCLE_SIZE / 2}
                    r={RADIUS}
                    fill="none"
                    stroke={TIFFANY}
                    strokeWidth={STROKE}
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    initial={{ strokeDashoffset: CIRCUMFERENCE }}
                    animate={{
                      strokeDashoffset: isInView ? 0 : CIRCUMFERENCE,
                    }}
                    transition={{
                      duration: 1.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                </svg>
                <div
                  className="absolute inset-0 flex items-center justify-center text-white font-light text-2xl"
                  style={{ color: TIFFANY }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    100%
                  </motion.span>
                </div>
              </div>
              <p
                className="text-caption font-medium tracking-[0.06em] uppercase"
                style={{ color: TIFFANY }}
              >
                100% Biomimetic Recognition
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {[
            {
              icon: Droplets,
              title: "Pyrenean Bioavailability",
              text: "Deep dermal penetration",
            },
            {
              icon: Activity,
              title: "Fibroblast Signal",
              text: "Restores native collagen production",
            },
            {
              icon: Shield,
              title: "Structural Resilience",
              text: "Sustained barrier competence over 24+ hours",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${TIFFANY}20` }}
              >
                <item.icon
                  className="w-7 h-7"
                  style={{ color: TIFFANY }}
                  aria-hidden
                />
              </div>
              <h3 className="text-h4 font-light tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-body text-gray-400 leading-relaxed max-w-xs">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

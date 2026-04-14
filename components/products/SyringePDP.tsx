"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Activity, Crosshair } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import ClinicalSlider from "./ClinicalSlider";
import AnatomyOfInstrument from "./AnatomyOfInstrument";
import ClinicalGallery from "./ClinicalGallery";
import ProtocolSequencingStrip from "./ProtocolSequencingStrip";

const CHARCOAL = "#1A1A1A";
const TIFFANY = "#0ABAB5";
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const RING_SIZE = 100;
const RING_STROKE = 6;
const RING_R = (RING_SIZE - RING_STROKE) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_R;

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export default function SyringePDP() {
  const engineRef = useRef<HTMLElement>(null);
  const engineInView = useInView(engineRef, { once: true, amount: 0.2 });
  const [splitHover, setSplitHover] = useState<"left" | "right" | null>(null);

  const product = PRODUCTS.find((p) => p.slug === "syringe");
  const imageSrc = product?.image ?? PRODUCTS[1].image;

  return (
    <div className="min-h-screen" style={{ backgroundColor: CHARCOAL }}>
      {/* SECTION 1: THE HERO */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="relative min-h-[90vh] flex flex-col justify-end pb-20 lg:pb-32 pt-32 lg:pt-40"
      >
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt="Precision Collagen Activation Syringe"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${CHARCOAL} 0%, ${CHARCOAL} 25%, transparent 55%)`,
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white max-w-4xl">
            Precision Collagen Activation Syringe
          </h1>
          <p className="mt-8 text-body-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed">
            A different category of correction. Not a moisturizer. Not a temporary filler. A structured, 50-application protocol engineered to activate your skin&rsquo;s native structural resilience.
          </p>
        </div>
      </motion.section>

      {/* SECTION 2: THE TARGETS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
        className="py-28 lg:py-40 px-8 lg:px-16"
        style={{ backgroundColor: CHARCOAL }}
      >
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
            Precision Targeting
          </h2>
          <p className="mt-8 text-body-lg text-white/80 max-w-2xl leading-relaxed">
            The Syringe is calibrated exclusively for zones of structural decline. It does not treat the surface; it restores the architecture.
          </p>
          <ul className="mt-16 space-y-10 max-w-3xl">
            {[
              {
                title: "The Periorbital Zone",
                body: "Eliminates fluid pooling (puffiness) and releases mechanical tension in crow's feet.",
              },
              {
                title: "The Frontal Matrix",
                body: "Smooths deep expression lines and the \"11s\" (glabellar lines) between the brows.",
              },
              {
                title: "The Perioral Area",
                body: "Restores geometric definition to upper and lower lip contours.",
              },
            ].map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="flex gap-6 items-start"
              >
                <span
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: `${TIFFANY}20` }}
                >
                  <Crosshair className="w-5 h-5" style={{ color: TIFFANY }} />
                </span>
                <div>
                  <h3 className="text-xl font-light text-white">{item.title}</h3>
                  <p className="mt-2 text-body text-white/75 leading-relaxed">{item.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          <p className="mt-12 text-body text-white/60 italic max-w-2xl">
            *Note: External use only. Not intended for deep nasolabial fat-pad folds.
          </p>
        </div>
      </motion.section>

      {/* THE CLINICAL SLIDER (Digital Mirror) */}
      <ClinicalSlider />

      {/* SECTION 3: THE CLINICAL ENGINE */}
      <motion.section
        ref={engineRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="py-28 lg:py-40 px-8 lg:px-16"
        style={{ backgroundColor: CHARCOAL }}
      >
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
            The Activation Matrix
          </h2>
          <p className="mt-8 text-body-lg text-white/80 max-w-2xl leading-relaxed">
            We do not use heavy, exogenous collagen that sits on the skin. We use clinical-grade bio-signals to instruct your fibroblasts to synthesize their own.
          </p>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
            {/* Data 1: PDRN +30% ring */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={engineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="relative w-[120px] h-[120px] flex items-center justify-center"
                style={{ filter: "drop-shadow(0 0 20px rgba(10, 186, 181, 0.4))" }}
              >
                <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}>
                  <circle
                    cx={RING_SIZE / 2}
                    cy={RING_SIZE / 2}
                    r={RING_R}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth={RING_STROKE}
                  />
                  <motion.circle
                    cx={RING_SIZE / 2}
                    cy={RING_SIZE / 2}
                    r={RING_R}
                    fill="none"
                    stroke={TIFFANY}
                    strokeWidth={RING_STROKE}
                    strokeLinecap="round"
                    strokeDasharray={RING_CIRCUMFERENCE}
                    initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
                    animate={{
                      strokeDashoffset: engineInView ? RING_CIRCUMFERENCE * 0.7 : RING_CIRCUMFERENCE,
                    }}
                    transition={{ duration: 1.2, ease: EASE }}
                  />
                </svg>
                <span
                  className="absolute text-2xl font-light"
                  style={{ color: TIFFANY }}
                >
                  +30%
                </span>
              </div>
              <h3 className="mt-8 text-xl font-light text-white">
                PDRN (DNA-Derived Biopolymer)
              </h3>
              <p className="mt-4 text-body text-white/75 leading-relaxed">
                Peer-reviewed clinical studies demonstrate up to a 30% increase in native fibroblast proliferation and +25–35% Type I Collagen synthesis over 8–12 weeks.
              </p>
            </motion.div>

            {/* Data 2: PRNS pulse */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={engineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: `${TIFFANY}18`,
                  boxShadow: engineInView ? `0 0 40px ${TIFFANY}40` : "none",
                  transition: "box-shadow 0.6s ease",
                }}
              >
                <Activity className="w-14 h-14" style={{ color: TIFFANY }} />
              </div>
              <h3 className="mt-8 text-xl font-light text-white">
                PRNS Pyrenean Mineral Complex
              </h3>
              <p className="mt-4 text-body text-white/75 leading-relaxed">
                High-altitude Magnesium, Silica, and Calcium dictate osmological fluid regulation to instantly depuff and calm cellular inflammation.
              </p>
            </motion.div>

            {/* Data 3: Neuro-peptide tension-release lines */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={engineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: `${TIFFANY}18`,
                  boxShadow: engineInView ? `0 0 40px ${TIFFANY}40` : "none",
                  transition: "box-shadow 0.6s ease",
                }}
              >
                {/* Tension-release line graphic: horizontal lines softening left to right */}
                <svg
                  width="56"
                  height="32"
                  viewBox="0 0 56 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                  style={{ filter: "drop-shadow(0 0 8px rgba(10, 186, 181, 0.4))" }}
                >
                  <motion.path
                    d="M 4 8 L 52 10"
                    stroke={TIFFANY}
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0.8 }}
                    animate={
                      engineInView
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0.8 }
                    }
                    transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
                  />
                  <motion.path
                    d="M 4 16 L 52 16"
                    stroke={TIFFANY}
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0.9 }}
                    animate={
                      engineInView
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0.9 }
                    }
                    transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
                  />
                  <motion.path
                    d="M 4 24 L 52 22"
                    stroke={TIFFANY}
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0.8 }}
                    animate={
                      engineInView
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0.8 }
                    }
                    transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-light text-white">
                Neuro-Peptide Complex
              </h3>
              <p className="mt-4 text-body text-white/75 leading-relaxed">
                Biomimetic peptides intercept the micro-muscular signals that cause surface expression lines, delivering immediate mechanical smoothing.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ANATOMY OF THE INSTRUMENT (Exploded View) */}
      <AnatomyOfInstrument />

      {/* SECTION 4: 50/50 DUAL-ACTION SPLIT */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="py-28 lg:py-40 px-8 lg:px-16"
        style={{ backgroundColor: CHARCOAL }}
      >
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white text-center mb-20 lg:mb-28">
            Two Ways to Activate
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[480px]">
            <motion.div
              onMouseEnter={() => setSplitHover("left")}
              onMouseLeave={() => setSplitHover(null)}
              className="relative flex flex-col justify-center p-12 lg:p-16 border border-white/10 lg:border-r-0"
              animate={{
                opacity: splitHover === "right" ? 0.5 : 1,
                transition: { duration: 0.4, ease: EASE },
              }}
            >
              <h3 className="text-2xl font-light text-white">
                The Flash Application <span className="text-white/60">(For the Surface)</span>
              </h3>
              <p className="mt-8 text-body-lg text-white/85 leading-relaxed">
                Engineered for immediate, high-definition geometric refinement. Apply a micro-dose to targeted expression lines before an event or under makeup. Neuro-peptides release mechanical surface tension within minutes.
              </p>
              <ul className="mt-8 space-y-3 text-body text-white/75">
                <li>Zero wait time. Invisible structural primer. Use as often as desired.</li>
              </ul>
            </motion.div>
            <motion.div
              onMouseEnter={() => setSplitHover("right")}
              onMouseLeave={() => setSplitHover(null)}
              className="relative flex flex-col justify-center p-12 lg:p-16 border border-white/10"
              animate={{
                opacity: splitHover === "left" ? 0.5 : 1,
                transition: { duration: 0.4, ease: EASE },
              }}
            >
              <h3 className="text-2xl font-light text-white">
                The Longevity Protocol <span className="text-white/60">(For the Architecture)</span>
              </h3>
              <p className="mt-8 text-body-lg text-white/85 leading-relaxed">
                Engineered for permanent structural change. Apply to targeted zones and leave undisturbed for a strict 5-hour Cellular Integration Phase. This required window allows the PDRN to penetrate the barrier and signal native collagen synthesis.
              </p>
              <ul className="mt-8 space-y-3 text-body text-white/75">
                <li>Minimum 5-hour activation window. Deep cellular signaling. Use once weekly.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* DOCUMENTED OUTCOMES GALLERY */}
      <ClinicalGallery />

      {/* PROTOCOL SEQUENCING STRIP */}
      <ProtocolSequencingStrip />

      {/* SECTION 5: THE ECOSYSTEM */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-28 lg:py-40 px-8 lg:px-16"
        style={{ backgroundColor: CHARCOAL }}
      >
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
            The Key to the Ecosystem
          </h2>
          <p className="mt-10 text-body-lg text-white/85 leading-relaxed">
            The clinical-grade Syringe casing is a one-time, lifetime investment yielding 50 precise applications. Once depleted, retain the instrument and insert a Syringe Refill Cartridge. Because protocol continuity should be effortless, Refills are priced accessibly alongside our daily serums.
          </p>
          <div className="mt-16">
            <Link
              href="/pre-launch"
              className="btn-premium inline-flex items-center justify-center h-14 px-14 text-[0.875rem] font-medium tracking-[0.08em] uppercase transition-all duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              style={{
                backgroundColor: TIFFANY,
                color: CHARCOAL,
              }}
            >
              Secure Protocol Allocation
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

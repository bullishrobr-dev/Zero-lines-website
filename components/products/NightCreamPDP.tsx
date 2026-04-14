"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Moon, Wrench, Clock, Check } from "lucide-react";
import { PRODUCT_EDITORIAL_IMAGES, PRODUCTS } from "@/lib/constants";
import ProtocolSequencingStrip from "./ProtocolSequencingStrip";

const CHARCOAL = "#1A1A1A";
const TIFFANY = "#0ABAB5";
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const IMG_STORY = PRODUCT_EDITORIAL_IMAGES.nightCream.story;
const IMG_TEXTURE = PRODUCT_EDITORIAL_IMAGES.nightCream.texture;

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function NightCreamPDP() {
  const engineRef = useRef<HTMLElement>(null);
  const engineInView = useInView(engineRef, { once: true, amount: 0.2 });

  const product = PRODUCTS.find((p) => p.slug === "night-cream");
  const imageSrc = product?.image ?? IMG_STORY;

  return (
    <div className="min-h-screen" style={{ backgroundColor: CHARCOAL }}>
      {/* HERO */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="relative min-h-[90vh] flex flex-col justify-end pb-20 lg:pb-32 pt-32 lg:pt-40"
      >
        <div className="absolute inset-0">
          <Image src={imageSrc} alt="Night Cream" fill priority sizes="100vw" className="object-cover opacity-40 object-center" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${CHARCOAL} 0%, ${CHARCOAL} 25%, transparent 55%)` }} />
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16">
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white max-w-4xl" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: EASE }}>
            Night Cream
          </motion.h1>
          <motion.p className="mt-8 text-body-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.15, ease: EASE }}>
            Step 05: Nocturnal Repair. While you sleep, skin enters its repair cycle. The Night Cream is engineered to support that process—richer, more restorative, and calibrated for the circadian window when regeneration peaks.
          </motion.p>
        </div>
      </motion.section>

      {/* THE STORY */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={sectionVariants} className="py-28 lg:py-40 px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${TIFFANY}08 0%, transparent 70%)` }} />
        <div className="relative z-10 mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Circadian Restoration</h2>
              <div className="mt-10 space-y-8 text-body-lg text-white/85 leading-relaxed">
                <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}>
                  Night is when skin repairs. Cell turnover, collagen synthesis, and barrier recovery are at their peak. The Night Cream is formulated for that window—a richer, more emollient matrix that works in concert with the Serum to support overnight renewal without suffocating the skin.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: EASE }}>
                  Apply after cleansing and the Serum (and Syringe on activation days). It seals in the protocol and lets the skin do its work until morning—when the Day Cream takes over and the cycle begins again.
                </motion.p>
              </div>
            </div>
            <motion.div className="relative aspect-[4/5] rounded-sm overflow-hidden" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, ease: EASE }}>
              <Image src={IMG_STORY} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }} />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CLINICAL ENGINE */}
      <motion.section ref={engineRef} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants} className="py-28 lg:py-40 px-8 lg:px-16" style={{ backgroundColor: CHARCOAL }}>
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Nocturnal Repair Activation</h2>
          <p className="mt-8 text-body-lg text-white/80 max-w-2xl leading-relaxed">
            The Night Cream supports the skin’s natural repair cycle. Richer texture, deeper nourishment—calibrated for the hours when regeneration is at its peak.
          </p>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
            {[
              { icon: Moon, title: "Circadian Alignment", text: "Formulated for the night window when cell turnover and collagen synthesis are naturally elevated. The cream supports—not overrides—your skin’s rhythm." },
              { icon: Wrench, title: "Barrier & Recovery", text: "Restorative actives and emollients help repair daily stress and support barrier integrity. Wake to a calmer, more resilient canvas." },
              { icon: Clock, title: "Seal the Protocol", text: "The final step of the evening. Locks in the Serum and Syringe work so the protocol continues while you sleep." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} animate={engineInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 + i * 0.2, ease: EASE }} className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full flex items-center justify-center" style={{ backgroundColor: `${TIFFANY}18`, boxShadow: engineInView ? `0 0 40px ${TIFFANY}40` : "none", transition: "box-shadow 0.6s ease" }}>
                  <item.icon className="w-14 h-14" style={{ color: TIFFANY }} />
                </div>
                <h3 className="mt-8 text-xl font-light text-white">{item.title}</h3>
                <p className="mt-4 text-body text-white/75 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div className="relative mt-24 aspect-[21/9] max-h-[420px] w-full rounded-sm overflow-hidden" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: EASE }}>
            <Image src={IMG_TEXTURE} alt="" fill sizes="100vw" className="object-cover object-center" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to top, ${CHARCOAL} 0%, transparent 40%)` }} />
          </motion.div>
        </div>
      </motion.section>

      {/* SUITABILITY */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={sectionVariants} className="py-28 lg:py-40 px-8 lg:px-16 relative overflow-hidden" style={{ backgroundColor: CHARCOAL }}>
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `radial-gradient(ellipse 60% 50% at 80% 50%, ${TIFFANY}06 0%, transparent 60%)` }} />
        <div className="relative z-10 mx-auto max-w-[800px]">
          <motion.h3 className="text-2xl md:text-3xl font-light tracking-tight text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE }}>
            Evening Ritual, All Skin Types
          </motion.h3>
          <p className="mt-8 text-body-lg text-white/85 leading-relaxed">
            The Night Cream completes the evening protocol. Apply after the Serum (and Syringe on activation days). A richer texture that absorbs without leaving a heavy film—suitable for all profiles, including dry and mature skin.
          </p>
          <ul className="mt-12 space-y-6">
            {["Supports overnight barrier repair and hydration.", "Non-comedogenic; safe for reactive and breakout-prone skin.", "Use nightly as the final step of your evening routine."].map((item, i) => (
              <motion.li key={item} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }} className="flex gap-4 items-start">
                <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: `${TIFFANY}30` }}>
                  <Check className="w-3.5 h-3.5" style={{ color: TIFFANY }} strokeWidth={2.5} />
                </span>
                <span className="text-body text-white/80 leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      <ProtocolSequencingStrip highlightStep={5} stripText="Step 05: Nocturnal Repair. The final evening step. Supports circadian restoration and seals the protocol until morning." />

      {/* ECOSYSTEM */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants} className="py-28 lg:py-40 px-8 lg:px-16 relative" style={{ backgroundColor: CHARCOAL }}>
        <div className="mx-auto max-w-[900px]">
          <motion.div className="relative aspect-[2/1] w-full max-w-[560px] mx-auto rounded-sm overflow-hidden mb-16" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: EASE }}>
            <Image src={imageSrc} alt="" fill sizes="560px" className="object-cover object-center" />
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }} />
          </motion.div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Begin the Protocol</h2>
            <p className="mt-10 text-body-lg text-white/85 leading-relaxed">
              The Night Cream closes the loop—the final step that lets the Reset, the Syringe, and the Serum work through the night. Secure your allocation.
            </p>
            <div className="mt-16">
              <Link href="/pre-launch" className="btn-premium inline-flex items-center justify-center h-14 px-14 text-[0.875rem] font-medium tracking-[0.08em] uppercase transition-all duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" style={{ backgroundColor: TIFFANY, color: CHARCOAL }}>
                Secure Step 05 Allocation
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

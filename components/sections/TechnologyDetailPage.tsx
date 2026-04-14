"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles, X, Heart, Bone, Activity } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import type { TechnologyContent, BodyBenefitItem } from "@/lib/technologyContent";
import TechnologyDiagrams from "./TechnologyDiagrams";
import TechnologySequencingStrip from "./TechnologySequencingStrip";

const CHARCOAL = "#1A1A1A";
const TIFFANY = "#0ABAB5";
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const EASE_OUT = [0.33, 1, 0.68, 1] as [number, number, number, number];

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const viewportOnce = { once: true, amount: 0.08 };
const viewportTight = { once: true, amount: 0.12 };

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};
const fadeUpLong = {
  hidden: { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } },
};
const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};
const slideFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};
const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const staggerItemScale = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE_OUT } },
};
const popIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE_OUT } },
};

interface TechnologyDetailPageProps {
  content: TechnologyContent;
}

function DataBlock({ c }: { c: TechnologyContent }) {
  if (c.dataPoints.length === 0) return null;
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportTight}
      variants={sectionVariants}
      className="py-28 lg:py-40 px-8 lg:px-16 relative overflow-hidden"
      style={{ backgroundColor: CHARCOAL }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 50%, ${TIFFANY}06 0%, transparent 70%)`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1440px] text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-light tracking-tight text-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportTight}
          transition={{ duration: 0.7, ease: EASE }}
        >
          By the Numbers
        </motion.h2>
        <motion.p
          className="mt-6 text-body-lg text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportTight}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          Clinical data and parameters. Device outcomes are measurable.
        </motion.p>
        <motion.div
          className={`mt-20 grid gap-10 lg:gap-12 mx-auto justify-items-center ${
            c.dataPoints.length === 3
              ? "grid-cols-1 sm:grid-cols-3 max-w-4xl"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          }`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportTight}
        >
          {c.dataPoints.map((dp) => (
            <motion.div
              key={dp.label}
              variants={staggerItemScale}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-light tracking-tight" style={{ color: TIFFANY }}>
                {dp.value}
              </div>
              <p className="mt-3 text-body text-white/80 leading-relaxed">{dp.label}</p>
              {dp.source && (
                <p className="mt-1 text-caption text-white/50 uppercase tracking-wider">{dp.source}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

const BODY_ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Heart,
  Bone,
  Activity,
};

function BodyBenefitsBlock({ items }: { items: BodyBenefitItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
      {items.map((item, i) => {
        const Icon = BODY_ICON_MAP[item.iconKey];
        if (!Icon) return null;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 + i * 0.14, ease: EASE_OUT }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="w-28 h-28 rounded-full flex items-center justify-center shrink-0"
              style={{
                backgroundColor: `${TIFFANY}18`,
                boxShadow: inView ? `0 0 40px ${TIFFANY}40` : "none",
                transition: "box-shadow 0.6s ease",
              }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.14, ease: EASE_OUT }}
            >
              <Icon className="w-14 h-14" style={{ color: TIFFANY }} />
            </motion.div>
            <h3 className="mt-8 text-xl font-light text-white text-center">{item.title}</h3>
            <p className="mt-4 text-body text-white/75 leading-relaxed text-left w-full">{item.text}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

function ProtocolIntegrationBlock({ c }: { c: TechnologyContent }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportTight}
      variants={sectionVariants}
      className="py-28 lg:py-40 px-8 lg:px-16 relative overflow-hidden"
      style={{ backgroundColor: CHARCOAL }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${TIFFANY}08 0%, transparent 60%)`,
        }}
      />
      <motion.div
        className="relative z-10 mx-auto max-w-[800px] text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportTight}
      >
        <motion.h2
          variants={staggerItem}
          className="text-2xl md:text-3xl font-light tracking-tight text-white"
        >
          {c.protocolIntegration.heading}
        </motion.h2>
        <motion.p variants={staggerItem} className="mt-8 text-body-lg text-white/85 leading-relaxed">
          {c.protocolIntegration.body}
        </motion.p>
        <motion.div
          variants={staggerItemScale}
          className="mt-10 rounded-sm border p-6 lg:p-8 text-left"
          style={{
            borderColor: `${TIFFANY}50`,
            backgroundColor: `${TIFFANY}08`,
            boxShadow: `0 0 32px ${TIFFANY}12`,
          }}
        >
          <p className="text-body text-white/90 leading-relaxed">
            {c.protocolIntegration.protocolVsDevice}
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default function TechnologyDetailPage({ content }: TechnologyDetailPageProps) {
  const c = content;
  const isRF = c.slug === "rf";
  const isEMS = c.slug === "ems";
  const isRedInfrared = c.slug === "red-infrared";

  return (
    <div className="min-h-screen" style={{ backgroundColor: CHARCOAL }}>
      {/* HERO */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionVariants}
        className="relative min-h-[85vh] flex flex-col justify-end pb-20 lg:pb-32 pt-32 lg:pt-40 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <Image
            src={c.imageStory}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40 object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${CHARCOAL} 0%, ${CHARCOAL} 25%, transparent 55%)`,
            }}
          />
        </motion.div>
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease: EASE }}
          >
            {c.title}
          </motion.h1>
          <motion.p
            className="mt-8 text-body-lg lg:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
          >
            {c.heroIntro}
          </motion.p>
        </div>
      </motion.section>

      {/* RF: Data first */}
      {isRF && <DataBlock c={c} />}

      {/* WHAT IT IS — full-width for red-infrared, 2-col for others */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportTight}
        variants={fadeUpLong}
        className="py-28 lg:py-40 px-8 lg:px-16 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${TIFFANY}08 0%, transparent 70%)`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1440px]">
          {isRedInfrared ? (
            <>
              <motion.div
                className="max-w-3xl mx-auto text-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportTight}
              >
                <motion.h2
                  variants={staggerItem}
                  className="text-3xl md:text-4xl font-light tracking-tight text-white"
                >
                  {c.whatItIs.heading}
                </motion.h2>
                {c.whatItIs.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    variants={staggerItem}
                    className="text-body-lg text-white/85 leading-relaxed first:mt-10 mt-8"
                  >
                    {p}
                  </motion.p>
                ))}
              </motion.div>
              <motion.div
                className="relative aspect-[21/9] max-h-[340px] w-full rounded-sm overflow-hidden mt-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportTight}
                transition={{ duration: 0.9, ease: EASE }}
              >
                <Image src={c.imageTexture} alt="" fill sizes="100vw" className="object-cover object-center" />
                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }} />
              </motion.div>
            </>
          ) : (
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-5xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportTight}
            >
              <motion.div variants={slideFromLeft}>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
                  {c.whatItIs.heading}
                </h2>
                <div className="mt-10 space-y-8 text-body-lg text-white/85 leading-relaxed">
                  {c.whatItIs.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="relative aspect-[4/5] rounded-sm overflow-hidden"
                variants={scaleIn}
              >
                <Image src={c.imageTexture} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }} />
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* COMPARISON: 3 cards, Tiffany for Devices + Protocol */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportTight}
        variants={sectionVariants}
        className="py-28 lg:py-40 px-8 lg:px-16"
        style={{ backgroundColor: CHARCOAL }}
      >
        <div className="mx-auto max-w-[1440px] text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-light tracking-tight text-white"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportTight}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {c.comparison.heading}
          </motion.h2>
          <motion.p
            className="mt-6 text-body-lg text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportTight}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          >
            Devices are the foundation. The protocol targets zones and amplifies the result.
          </motion.p>
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportTight}
          >
            {c.comparisonCards.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItemScale}
                className={`relative rounded-sm border p-8 lg:p-10 ${
                  item.active ? "border-[#0ABAB5]/50" : "border-white/10"
                }`}
                style={{
                  backgroundColor: item.active ? `${TIFFANY}08` : "rgba(255,255,255,0.03)",
                  boxShadow: item.active ? `0 0 40px ${TIFFANY}15` : "none",
                }}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${item.active ? "" : "opacity-60"}`}
                  style={{
                    backgroundColor: item.active ? `${TIFFANY}25` : "rgba(255,255,255,0.08)",
                  }}
                >
                  {item.active ? (
                    <Sparkles className="w-6 h-6" style={{ color: TIFFANY }} />
                  ) : (
                    <X className="w-6 h-6" style={{ color: "rgba(255,255,255,0.7)" }} />
                  )}
                </div>
                <h3 className={`text-xl font-light ${item.active ? "text-white" : "text-white/80"}`}>
                  {item.title}
                </h3>
                <p className="mt-2 text-caption text-white/55 uppercase tracking-wider">
                  {item.subtitle}
                </p>
                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="text-body text-white/70 leading-relaxed flex gap-2 items-start">
                      {item.active ? (
                        <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: TIFFANY }} />
                      ) : (
                        <span className="text-white/40">—</span>
                      )}
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* BY THE NUMBERS (default position; RF already has it after hero) */}
      {!isRF && <DataBlock c={c} />}

      {/* KEY BENEFITS (protocol-style: icon + title + description per technology) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportTight}
        variants={fadeUp}
        className="py-28 lg:py-40 px-8 lg:px-16"
        style={{ backgroundColor: CHARCOAL }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            className="text-3xl md:text-4xl font-light tracking-tight text-white text-center mb-4"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportTight}
            transition={{ duration: 0.7, ease: EASE }}
          >
            Key Benefits
          </motion.h2>
          <motion.p
            className="text-body-lg text-white/70 text-center max-w-2xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportTight}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          >
            What this technology delivers—specific to how the device works and how it fits the protocol.
          </motion.p>
          <TechnologyDiagrams slug={c.slug} />
        </div>
      </motion.section>

      {/* SCIENCE */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={sectionVariants}
        className="py-28 lg:py-40 px-8 lg:px-16 relative overflow-hidden"
        style={{ backgroundColor: CHARCOAL }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${TIFFANY}06 0%, transparent 60%)`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1440px] w-full">
          <motion.h2
            className="text-3xl md:text-4xl font-light tracking-tight text-white text-center"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease: EASE }}
          >
            {c.science.heading}
          </motion.h2>
          <motion.p
            className="mt-8 text-body-lg text-white/80 max-w-2xl leading-relaxed mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          >
            {c.science.intro}
          </motion.p>
          {isEMS ? (
            <motion.div
              className="mt-20 max-w-2xl mx-auto space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportTight}
            >
              {c.science.points.map((point, i) => (
                <motion.div
                  key={point.title}
                  variants={slideFromLeft}
                  className="rounded-sm border border-white/10 p-6 lg:p-8 flex gap-6 items-start"
                  style={{
                    backgroundColor: i === c.science.points.length - 1 ? `${TIFFANY}08` : "rgba(255,255,255,0.03)",
                    borderColor: i === c.science.points.length - 1 ? `${TIFFANY}40` : undefined,
                  }}
                >
                  <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: `${TIFFANY}20` }}>
                    <span className="text-caption font-medium text-white">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white">{point.title}</h3>
                    <p className="mt-3 text-body text-white/75 leading-relaxed">{point.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : c.slug === "blue-uv" ? (
            <motion.div
              className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportTight}
            >
              {c.science.points.map((point, i) => (
                <motion.div
                  key={point.title}
                  variants={staggerItemScale}
                  className={`rounded-sm border p-8 lg:p-10 ${
                    i === c.science.points.length - 1 ? "border-[#0ABAB5]/40 md:col-span-2" : "border-white/10"
                  }`}
                  style={{
                    backgroundColor: i === c.science.points.length - 1 ? `${TIFFANY}06` : "rgba(255,255,255,0.03)",
                  }}
                >
                  <h3 className="text-xl font-light text-white">{point.title}</h3>
                  <p className="mt-4 text-body text-white/75 leading-relaxed">{point.text}</p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportTight}
            >
              {c.science.points.map((point, i) => (
                <motion.div
                  key={point.title}
                  variants={staggerItemScale}
                  className={`rounded-sm border p-8 lg:p-10 ${
                    i === c.science.points.length - 1 ? "border-[#0ABAB5]/40" : "border-white/10"
                  }`}
                  style={{
                    backgroundColor: i === c.science.points.length - 1 ? `${TIFFANY}06` : "rgba(255,255,255,0.03)",
                  }}
                >
                  <h3 className="text-xl font-light text-white">{point.title}</h3>
                  <p className="mt-4 text-body text-white/75 leading-relaxed">{point.text}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* BEYOND THE FACE: BODY PAIN, RECOVERY, ARTHRITIS (red-infrared only) */}
      {c.bodySection && (
        <>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUpLong}
            className="py-28 lg:py-40 px-8 lg:px-16 relative overflow-hidden"
            style={{ backgroundColor: CHARCOAL }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${TIFFANY}06 0%, transparent 60%)`,
              }}
            />
            <div className="relative z-10 mx-auto max-w-4xl">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.85, ease: EASE }}
              >
                {c.bodySection.heading}
              </motion.h2>
              <motion.div
                className="mt-12 space-y-8 text-body-lg text-white/85 leading-relaxed max-w-3xl mx-auto text-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                {c.bodySection.intro.map((p, i) => (
                  <motion.p key={i} variants={staggerItem}>
                    {p}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {c.bodySection.subsections.map((sub, idx) => (
            <motion.section
              key={sub.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewportTight}
              variants={idx % 2 === 0 ? slideFromLeft : slideFromRight}
              className="py-20 lg:py-28 px-8 lg:px-16"
              style={{ backgroundColor: CHARCOAL }}
            >
              <div className="mx-auto max-w-4xl">
                <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white text-center mb-10">
                  {sub.title}
                </h3>
                <div className="space-y-6 text-body-lg text-white/80 leading-relaxed">
                  {sub.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={viewportTight}
            variants={fadeUp}
            className="py-28 lg:py-40 px-8 lg:px-16"
            style={{ backgroundColor: CHARCOAL }}
          >
            <div className="mx-auto max-w-6xl">
              <motion.h2
                className="text-3xl md:text-4xl font-light tracking-tight text-white text-center mb-4"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportTight}
                transition={{ duration: 0.7, ease: EASE }}
              >
                Key Benefits for the Body
              </motion.h2>
              <motion.p
                className="text-body-lg text-white/70 text-center max-w-2xl mx-auto mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportTight}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              >
                What red and infrared light can support beyond the face—pain, joints, and recovery.
              </motion.p>
              <BodyBenefitsBlock items={c.bodySection.bodyBenefits} />
            </div>
          </motion.section>
        </>
      )}

      {/* PROTOCOL INTEGRATION — same position on all pages (bottom, before strip) */}
      <ProtocolIntegrationBlock c={c} />

      <TechnologySequencingStrip
        highlightSlug={c.slug}
        stripText="Part of the Hardware Protocol. Explore the other technologies below."
      />

      {/* OPTIONS CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportTight}
        variants={sectionVariants}
        className="py-28 lg:py-40 px-8 lg:px-16"
        style={{ backgroundColor: CHARCOAL }}
      >
        <motion.div
          className="mx-auto max-w-[720px] text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportTight}
        >
          <motion.h2
            variants={staggerItem}
            className="text-2xl md:text-3xl font-light tracking-tight text-white"
          >
            {c.optionsCta}
          </motion.h2>
          <motion.p variants={staggerItem} className="mt-6 text-body text-white/80 leading-relaxed">
            {c.optionsSubtext}
          </motion.p>
          <motion.div className="mt-12" variants={popIn}>
            <Link
              href="/pre-launch"
              className="btn-premium inline-flex items-center justify-center h-14 px-14 text-[0.875rem] font-medium tracking-[0.08em] uppercase transition-all duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              style={{ backgroundColor: TIFFANY, color: CHARCOAL }}
            >
              Notify When Available
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

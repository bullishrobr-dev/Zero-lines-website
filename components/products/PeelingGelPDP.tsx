"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Waves, Atom, Infinity, Check, X, Sparkles } from "lucide-react";
import { PRODUCT_EDITORIAL_IMAGES, PRODUCTS } from "@/lib/constants";
import ProtocolSequencingStrip from "./ProtocolSequencingStrip";

const CHARCOAL = "#1A1A1A";
const TIFFANY = "#0ABAB5";
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const IMG_STORY = PRODUCT_EDITORIAL_IMAGES.peelingGel.story;
const IMG_TEXTURE = PRODUCT_EDITORIAL_IMAGES.peelingGel.texture;

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export default function PeelingGelPDP() {
  const engineRef = useRef<HTMLElement>(null);
  const engineInView = useInView(engineRef, { once: true, amount: 0.2 });

  const product = PRODUCTS.find((p) => p.slug === "peeling-gel");
  const imageSrc = product?.image ?? IMG_STORY;

  return (
    <div className="min-h-screen" style={{ backgroundColor: CHARCOAL }}>
      {/* SECTION 1: THE HERO (The Revelation) */}
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
            alt="Biomimetic Renewal Gel"
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
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white max-w-4xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            Biomimetic Renewal Gel
          </motion.h1>
          <motion.p
            className="mt-8 text-body-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          >
            Step 01: The Reset. The missing foundation in modern skincare. A smart-enzyme matrix
            engineered to detach the invisible barrier of keratinized cells, allowing your skin to
            finally breathe—and your skincare to finally work.
          </motion.p>
        </div>
      </motion.section>

      {/* SECTION 2: THE STORY (The Canvas Determines the Masterpiece) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
        className="py-28 lg:py-40 px-8 lg:px-16 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${TIFFANY}08 0%, transparent 70%)`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
                The Canvas Determines the Masterpiece
              </h2>
              <div className="mt-10 space-y-8 text-body-lg text-white/85 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  For years, the industry has focused on selling richer creams and heavier serums, while
                  ignoring the most critical step: the canvas. As we age, our natural cellular turnover
                  slows down, creating an invisible, microscopic wall of dehydrated cells on the
                  surface.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                >
                  It is not your fault if your current routine feels ineffective. If you apply
                  high-performance skincare over this keratinized barrier, you are simply hydrating dead
                  cells. The Biomimetic Renewal Gel changes the environment. It intelligently detaches
                  the barrier, signaling your skin&rsquo;s natural repair mechanisms to wake up.
                </motion.p>
              </div>
            </div>
            <motion.div
              className="relative aspect-[4/5] rounded-sm overflow-hidden"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: EASE }}
            >
              <Image
                src={IMG_STORY}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.06)`,
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: THE CLINICAL ENGINE (Intelligent Exfoliation) */}
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
            Intelligent Exfoliation
          </h2>
          <p className="mt-8 text-body-lg text-white/80 max-w-2xl leading-relaxed">
            We do not believe in aggression. Physical scrubs cause micro-tears, and harsh chemical
            acids induce trauma. Our approach is biomimetic—we work with your skin, not against it.
          </p>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
            {/* Data 1: Smart-Enzyme — wave icon */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={engineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
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
                <Waves className="w-14 h-14" style={{ color: TIFFANY }} />
              </div>
              <h3 className="mt-8 text-xl font-light text-white">
                Smart-Enzyme Complex
              </h3>
              <p className="mt-4 text-body text-white/75 leading-relaxed">
                Zero physical abrasion. Our enzymes recognize the difference between dead keratin
                and living tissue, gently dissolving the biological glue without disturbing the
                healthy epidermis beneath.
              </p>
            </motion.div>

            {/* Data 2: Dual-Climate Mineral — molecular icon */}
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
                <Atom className="w-14 h-14" style={{ color: TIFFANY }} />
              </div>
              <h3 className="mt-8 text-xl font-light text-white">
                Dual-Climate Mineral Core
              </h3>
              <p className="mt-4 text-body text-white/75 leading-relaxed">
                Sourced from high-altitude Pyrenean extremes. A massive concentration of active
                minerals to instantly calm redness, regulate hydration, and stabilize cellular pH.
              </p>
            </motion.div>

            {/* Data 3: Progressive Renewal — no vessel-duration claim */}
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
                <Infinity className="w-14 h-14" style={{ color: TIFFANY }} />
              </div>
              <h3 className="mt-8 text-xl font-light text-white">
                Progressive Renewal
              </h3>
              <p className="mt-4 text-body text-white/75 leading-relaxed">
                Designed for the weekly reset ritual. Gentle enough to repeat, effective enough to
                compound—each application supports the next, without over-exfoliation.
              </p>
            </motion.div>
          </div>
          {/* Full-bleed image strip below data points */}
          <motion.div
            className="relative mt-24 aspect-[21/9] max-h-[420px] w-full rounded-sm overflow-hidden"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: EASE }}
          >
            <Image
              src={IMG_TEXTURE}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(to top, ${CHARCOAL} 0%, transparent 40%)`,
              }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 3B: NOT ALL PEELS ARE EQUAL (Comparison) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={sectionVariants}
        className="py-28 lg:py-40 px-8 lg:px-16"
        style={{ backgroundColor: CHARCOAL }}
      >
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white text-center">
            Not All Peels Are Equal
          </h2>
          <p className="mt-6 text-body-lg text-white/70 text-center max-w-2xl mx-auto">
            Most exfoliation forces the skin to defend itself. Ours invites it to renew.
          </p>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: "Physical scrubs",
                subtitle: "Friction-based",
                icon: X,
                points: ["Micro-tears and inflammation", "Surface-only disruption", "Temporary smoothness"],
                active: false,
              },
              {
                title: "Aggressive acids",
                subtitle: "Chemical trauma",
                icon: X,
                points: ["Barrier compromise", "Sensitivity and redness", "Downtime and recovery"],
                active: false,
              },
              {
                title: "Biomimetic Renewal Gel",
                subtitle: "Smart-enzyme reset",
                icon: Sparkles,
                points: ["Zero abrasion, zero trauma", "Selective dead-cell detachment", "Calm, breathing canvas"],
                active: true,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
                className={`relative rounded-sm border p-8 lg:p-10 ${
                  item.active
                    ? "border-[#0ABAB5]/50"
                    : "border-white/10"
                }`}
                style={{
                  backgroundColor: item.active ? `${TIFFANY}08` : "rgba(255,255,255,0.03)",
                  boxShadow: item.active ? `0 0 40px ${TIFFANY}15` : "none",
                }}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                    item.active ? "" : "opacity-60"
                  }`}
                  style={{
                    backgroundColor: item.active ? `${TIFFANY}25` : "rgba(255,255,255,0.08)",
                  }}
                >
                  <item.icon
                    className="w-6 h-6"
                    style={{ color: item.active ? TIFFANY : "rgba(255,255,255,0.7)" }}
                  />
                </div>
                <h3
                  className={`text-xl font-light ${
                    item.active ? "text-white" : "text-white/80"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-caption text-white/55 uppercase tracking-wider">
                  {item.subtitle}
                </p>
                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="text-body text-white/70 leading-relaxed flex gap-2 items-start"
                    >
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
          </div>
        </div>
      </motion.section>

      {/* SECTION 4: THE FEELING & SUITABILITY (Calibrated for Compromised Skin) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
        className="py-28 lg:py-40 px-8 lg:px-16 relative overflow-hidden"
        style={{ backgroundColor: CHARCOAL }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 80% 50%, ${TIFFANY}06 0%, transparent 60%)`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-[800px]">
          <motion.h3
            className="text-2xl md:text-3xl font-light tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            Calibrated for Compromised Skin
          </motion.h3>
          <p className="mt-8 text-body-lg text-white/85 leading-relaxed">
            The sensation is immediate. Within seconds, you will physically feel the barrier lifting
            away, revealing the soft, breathing skin underneath. Because it utilizes smart-enzyme
            detachment rather than friction, the Renewal Gel provides deep relief for sensitive and
            highly reactive profiles.
          </p>
          <ul className="mt-12 space-y-6">
            {[
              "Actively calms the appearance of eczema-prone and psoriasis-prone skin.",
              "Recommended for chronic structural dryness and flaking.",
              "Safe for highly sensitive and rosacea-prone profiles.",
            ].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="flex gap-4 items-start"
              >
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: `${TIFFANY}30` }}
                >
                  <Check className="w-3.5 h-3.5" style={{ color: TIFFANY }} strokeWidth={2.5} />
                </span>
                <span className="text-body text-white/80 leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* SECTION 5: PROTOCOL SEQUENCING STRIP — Step 01 highlighted */}
      <ProtocolSequencingStrip
        highlightStep={1}
        stripText="Step 01: The Reset. The mandatory foundation. Clears the intercellular pathways so the rest of your protocol can perform at its absolute peak."
      />

      {/* SECTION 6: THE ECOSYSTEM (Begin the Protocol) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-28 lg:py-40 px-8 lg:px-16 relative"
        style={{ backgroundColor: CHARCOAL }}
      >
        <div className="mx-auto max-w-[900px]">
          <motion.div
            className="relative aspect-[2/1] w-full max-w-[560px] mx-auto rounded-sm overflow-hidden mb-16"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
          >
            <Image
              src={imageSrc}
              alt=""
              fill
              sizes="560px"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.08)`,
              }}
            />
          </motion.div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
              Begin the Protocol
            </h2>
            <p className="mt-10 text-body-lg text-white/85 leading-relaxed">
              Without the Reset, the protocol cannot function. Secure the Renewal Gel and prepare
              your skin to receive the ultimate activation.
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
                Secure Step 01 Allocation
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

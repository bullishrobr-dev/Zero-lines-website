"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Ban } from "lucide-react";
import {
  viewportTight,
  sectionVariants,
  fadeUp,
  staggerContainer,
  staggerItem,
  staggerItemScale,
  popIn,
} from "@/lib/motionVariants";
import { SUPPORT_IMAGES } from "@/lib/constants";

const TIFFANY = "#0ABAB5";
const CHARCOAL = "#1A1A1A";
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const REFUSALS = [
  "We do not use the phrase \"anti-aging.\" Aging is not a disease. It is biology. What changes with time is not the skin's capacity for repair — it is the quality and volume of the biological signals directing that repair.",
  "We do not promise miracles. We document mechanisms.",
  "We do not add heavy exogenous collagen to sit on the skin's surface. We activate the signaling pathways that instruct the skin to build its own.",
  "We do not believe in fighting your biology. We believe in restoring it.",
] as const;

function RefusalItem({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.li
      ref={ref}
      variants={staggerItem}
      className="flex gap-5 items-start"
    >
      <motion.div
        initial={false}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.92, opacity: 0.85 }}
        transition={{ duration: 0.4, delay: index * 0.06, ease: EASE }}
        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mt-0.5"
        style={{ backgroundColor: `${TIFFANY}18`, boxShadow: inView ? `0 0 20px ${TIFFANY}28` : "none" }}
      >
        <Ban className="w-5 h-5" style={{ color: TIFFANY }} />
      </motion.div>
      <p className="text-body text-white/85 leading-relaxed pt-1">{text}</p>
    </motion.li>
  );
}

export default function StoryPageContent() {
  return (
    <>
      {/* Where it begins — intro accent + alternating image/text */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportTight}
        variants={sectionVariants}
        className="py-28 lg:py-40 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-50" style={{ background: `radial-gradient(ellipse 60% 40% at 20% 50%, ${TIFFANY}06 0%, transparent 55%)` }} />
        <div className="relative mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportTight}
            >
              <motion.h2
                variants={staggerItem}
                className="text-h2 font-light tracking-tight text-secondary pl-6 border-l-4"
                style={{ borderColor: TIFFANY }}
              >
                Where It Begins
              </motion.h2>
              <motion.p variants={staggerItem} className="text-body-lg text-text-muted leading-relaxed">
                Zero Lines was not born from a marketing brief. It was born from a question: if the human body has the biological machinery to produce collagen, elastin, and structural proteins in abundance — and it demonstrably does, in youth — then why does skincare focus on supplying these materials rather than restoring the signals to produce them?
              </motion.p>
              <motion.p variants={staggerItem} className="text-body text-text-muted leading-relaxed">
                The answer was that surface-level supply is easier to demonstrate, easier to market, and easier to manufacture. It was not, however, what skin actually needed.
              </motion.p>
              <motion.p variants={staggerItem} className="text-body text-text-muted leading-relaxed">
                Four years were spent on that question. Not on branding. On formulation science. Testing ingredient concentration against measurable biomarkers — not focus groups, not visual panels, not before-and-after photography. Actual fibroblast activity. Actual collagen density measurement. Actual barrier competence metrics.
              </motion.p>
              <motion.p variants={staggerItem} className="text-caption font-medium tracking-wider uppercase" style={{ color: TIFFANY }}>
                Conviction, not marketing.
              </motion.p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportTight}
              className="relative aspect-[4/5] max-h-[420px] lg:max-h-none rounded-sm overflow-hidden"
            >
              <Image
                src={SUPPORT_IMAGES.storyOrigin}
                alt="Stone and water still life expressing the origin of the brand"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: `inset 0 0 0 1px ${TIFFANY}20` }} />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What we refuse to do — dark manifesto block, Tiffany icons */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportTight}
        variants={sectionVariants}
        className="py-28 lg:py-40"
        style={{ backgroundColor: CHARCOAL }}
      >
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportTight}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-h2 font-light tracking-tight text-white"
            >
              What We Refuse to Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportTight}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-body text-white/70"
            >
              Our line in the sand.
            </motion.p>
            <motion.ul
              className="mt-12 space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportTight}
            >
              {REFUSALS.map((text, i) => (
                <RefusalItem key={i} text={text} index={i} />
              ))}
            </motion.ul>
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportTight}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-20 pl-8 border-l-4 text-body-lg text-white/90 italic max-w-2xl py-4"
              style={{ borderColor: TIFFANY }}
            >
              &ldquo;Zero Lines does not pursue younger-looking skin. It pursues structurally younger skin. The distinction is everything.&rdquo;
            </motion.blockquote>
          </div>
        </div>
      </motion.section>

      {/* The source of the signal — image + text split, Tiffany accents */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportTight}
        variants={sectionVariants}
        className="py-28 lg:py-40 bg-surface-muted"
      >
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportTight}
              className="relative aspect-[4/5] max-h-[440px] lg:max-h-none rounded-sm overflow-hidden order-2 lg:order-1"
            >
              <Image
                src={SUPPORT_IMAGES.storySource}
                alt="Minimal water and glass still life representing mineral source and restraint"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: `inset 0 0 0 1px ${TIFFANY}25` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-1 opacity-80" style={{ background: `linear-gradient(90deg, transparent, ${TIFFANY}, transparent)` }} />
            </motion.div>
            <motion.div
              className="space-y-6 order-1 lg:order-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportTight}
            >
              <motion.h2
                variants={staggerItem}
                className="text-h2 font-light tracking-tight text-secondary pl-6 border-l-4"
                style={{ borderColor: TIFFANY }}
              >
                The Source of the Signal
              </motion.h2>
              <motion.p variants={staggerItem} className="text-body-lg text-text-muted leading-relaxed">
                The Pyrenees are among the most mineral-rich geological environments in Europe. High-altitude thermal springs, pressurised through ancient volcanic and sedimentary rock formations over millennia, emerge carrying exceptional concentrations of biologically active minerals — magnesium, calcium, silica, sulfur, potassium — in concentrations that pharmaceutical-grade filtration cannot replicate.
              </motion.p>
              <motion.p variants={staggerItem} className="text-body text-text-muted leading-relaxed">
                These are the raw cellular signals that skin tissue has evolved to recognize. They are not recreated in a laboratory. They are sourced from where they exist, in their highest-purity, most bioavailable form.
              </motion.p>
              <motion.p variants={staggerItem} className="text-body text-secondary font-medium leading-relaxed">
                From that source, they are formulated into biomimetic delivery systems that the skin receives not as foreign compounds, but as the biological language it already speaks.
              </motion.p>
              <motion.p
                variants={staggerItemScale}
                className="pt-4 text-caption font-medium tracking-[0.1em] uppercase"
                style={{ color: TIFFANY }}
              >
                This is Zero Lines. Not anti-aging. Skin Intelligence.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA — Tiffany accent, clearer hierarchy */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportTight}
        variants={sectionVariants}
        className="py-28 lg:py-40 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: `radial-gradient(ellipse 80% 50% at 50% 100%, ${TIFFANY}08 0%, transparent 65%)` }} />
        <div className="relative mx-auto max-w-[720px] px-8 lg:px-16 text-center">
          <motion.p
            className="text-body-lg text-text-muted leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportTight}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Discover the protocol built on this conviction.
          </motion.p>
          <motion.div
            className="mt-10"
            variants={popIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportTight}
          >
            <Link
              href="/protocol"
              className="inline-flex h-14 items-center justify-center px-14 text-[0.875rem] font-medium uppercase tracking-[0.08em] text-secondary transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              style={{ backgroundColor: TIFFANY }}
            >
              Discover the Protocol
            </Link>
          </motion.div>
          <motion.div
            className="mx-auto mt-12 h-px max-w-[120px] opacity-60"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportTight}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            style={{ backgroundColor: TIFFANY }}
          />
        </div>
      </motion.section>
    </>
  );
}

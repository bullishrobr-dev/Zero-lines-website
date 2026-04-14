"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Droplets, Sparkles, Activity, Layers, TrendingUp } from "lucide-react";
import {
  viewportTight,
  sectionVariants,
  fadeUp,
  staggerContainer,
  staggerItem,
  popIn,
} from "@/lib/motionVariants";
import { SUPPORT_IMAGES } from "@/lib/constants";

const TIFFANY = "#0ABAB5";
const CHARCOAL = "#1A1A1A";
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const FLASH_BENEFITS = [
  { icon: Zap, title: "Immediate tension release", text: "Neuro-peptides release mechanical surface tension within hours." },
  { icon: Droplets, title: "Fluid refinement", text: "Mineral osmology manages localized fluid for a rested, defined look." },
  { icon: Sparkles, title: "High-definition finish", text: "Visible smoothing from the first application — no wait." },
] as const;

const LONGEVITY_BENEFITS = [
  { icon: Activity, title: "Native collagen upregulation", text: "PDRN and signal peptides activate your skin's own production cycle." },
  { icon: Layers, title: "Dermal density", text: "Structural resilience and barrier competence build over 12 months." },
  { icon: TrendingUp, title: "Compounding results", text: "Measurable improvement, month after month — not a one-time peak." },
] as const;

function FlashLongevityColumn({
  title,
  intro,
  benefits,
  imageSrc,
}: {
  title: string;
  intro: string;
  benefits: readonly {
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    title: string;
    text: string;
  }[];
  imageSrc: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={viewportTight}
      variants={staggerContainer}
      className="space-y-8"
    >
      <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
        <Image src={imageSrc} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: `inset 0 0 0 1px ${TIFFANY}30` }} />
      </div>
      <div>
        <h3 className="text-h4 font-light tracking-tight" style={{ color: TIFFANY }}>
          {title}
        </h3>
        <p className="mt-4 text-body text-white/80 leading-relaxed">
          {intro}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-4">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            variants={staggerItem}
            className="flex gap-4 items-start"
          >
            <motion.div
              initial={false}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0.8 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
              className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${TIFFANY}18`, boxShadow: inView ? `0 0 24px ${TIFFANY}30` : "none" }}
            >
              <b.icon className="w-6 h-6" style={{ color: TIFFANY }} />
            </motion.div>
            <div>
              <p className="font-medium text-white text-body">{b.title}</p>
              <p className="mt-1 text-caption text-white/70">{b.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const PILLARS = [
  {
    id: "pyrenean",
    title: "The Pyrenean Signal Source",
    paragraph1:
      "At the core of every Zero Lines formulation is the PRNS Mineral Complex — a proprietary matrix derived from high-altitude thermal spring water from the Pyrenees. These are not cosmetic additives. They are biologically active mineral signals that your skin recognizes and responds to.",
    paragraph2:
      "High-altitude thermal waters carry exceptional concentrations of magnesium, calcium, potassium, silica, and sulfur — each with a validated dermatological function. Magnesium reduces cellular inflammation and improves membrane elasticity. Calcium regulates cell turnover and reinforces barrier integrity. Silica supports collagen production and dermal smoothing. Sulfur stimulates cellular respiration and is clinically validated for barrier compromise. Potassium provides anti-bacterial, hydrating action at the cellular level. The PRNS Complex delivers these signals in a bioavailable form that penetrates the dermal layer — not just the surface.",
  },
  {
    id: "pdrn",
    title: "Reactivating the Body's Own Blueprint",
    paragraph1:
      "PDRN (Polydeoxyribonucleotide) is one of the most rigorously researched regenerative compounds in clinical dermatology. It is a DNA-derived biopolymer that binds to Adenosine A2A receptors in skin tissue — triggering the wound healing cascade. This is the same repair mechanism your body activates after damage — except PDRN initiates it without any wound. It is a deliberate biological signal.",
    paragraph2:
      "The science shows: PDRN stimulates fibroblast proliferation by up to 30%; increases Type I collagen synthesis by 25–35% over 8–12 weeks; significantly improves skin barrier function, including ceramide production and tight junction integrity; demonstrates potent anti-inflammatory properties; reduces melanin biosynthesis, improving tone evenness. Zero Lines incorporates PDRN as the foundational repair mechanism of our Longevity Effect. Your skin is not being treated. It is being signalled.",
  },
  {
    id: "peptides",
    title: "Speaking Your Skin's Own Language",
    paragraph1:
      "Biomimetic peptides are short amino acid sequences engineered to mimic the structural signals that naturally occur in young, healthy skin. As we age, the concentration and efficiency of these internal signals declines — not because the skin forgets how to respond, but because it stops receiving the message. Zero Lines uses a clinical-grade complex of signal peptides and neuro-peptides that communicate directly with the skin's fibroblast network.",
    paragraph2:
      "Signal Peptides instruct fibroblasts to synthesize new collagen and repair the dermal matrix — with increased Ki-67, Type I procollagen, AP-1, and SIRT6 synthesis in fibroblast cultures. Neuro-Peptides target the micro-muscular tension that creates visible surface lines, delivering the Flash Effect — an immediate structural relaxation. No injection. No paralysis. Carrier Peptides deliver trace elements of copper and manganese into the cellular environment, amplifying the skin's enzymatic repair activity.",
  },
] as const;

export default function SciencePageContent() {
  return (
    <>
      {/* Intro — with subtle Tiffany accent */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportTight}
        variants={fadeUp}
        className="py-28 lg:py-40 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-60" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 30%, ${TIFFANY}08 0%, transparent 60%)` }} />
        <div className="relative mx-auto max-w-[1440px] px-8 lg:px-16">
          <p className="mx-auto max-w-2xl text-center text-body-lg text-text-muted leading-relaxed">
            Three validated biological frameworks — mineral signal delivery, DNA-inspired cellular repair, and biomimetic peptide activation — underpin the protocol.
          </p>
          <p className="mx-auto mt-6 text-center text-caption font-medium tracking-wider uppercase" style={{ color: TIFFANY }}>
            Measurable mechanisms. Peer-reviewed science.
          </p>
        </div>
      </motion.section>

      {/* Three pillars — alternating image + text, Tiffany accent */}
      {PILLARS.map((pillar, index) => {
        const imgSrc =
          index === 0
            ? SUPPORT_IMAGES.scienceMinerals
            : index === 1
              ? SUPPORT_IMAGES.homepageScienceActivation
              : SUPPORT_IMAGES.scienceRefraction;
        const imageFirst = index % 2 === 0;
        return (
          <motion.section
            key={pillar.id}
            initial="hidden"
            whileInView="visible"
            viewport={viewportTight}
            variants={sectionVariants}
            className={`py-28 lg:py-40 ${index % 2 === 1 ? "bg-surface-muted" : ""}`}
          >
            <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto ${!imageFirst ? "lg:flex-row-reverse" : ""}`}>
                {imageFirst ? (
                  <>
                    <div className="relative aspect-[4/5] max-h-[420px] lg:max-h-none rounded-sm overflow-hidden">
                      <Image src={imgSrc} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                      <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: `inset 0 0 0 1px ${TIFFANY}20` }} />
                    </div>
                    <div>
                      <h2 className="text-h2 font-light tracking-tight text-secondary pl-6 border-l-4" style={{ borderColor: TIFFANY }}>
                        {pillar.title}
                      </h2>
                      <p className="mt-10 text-body-lg text-text-muted leading-relaxed">
                        {pillar.paragraph1}
                      </p>
                      <p className="mt-6 text-body text-text-muted leading-relaxed">
                        {pillar.paragraph2}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 className="text-h2 font-light tracking-tight text-secondary pl-6 border-l-4" style={{ borderColor: TIFFANY }}>
                        {pillar.title}
                      </h2>
                      <p className="mt-10 text-body-lg text-text-muted leading-relaxed">
                        {pillar.paragraph1}
                      </p>
                      <p className="mt-6 text-body text-text-muted leading-relaxed">
                        {pillar.paragraph2}
                      </p>
                    </div>
                    <div className="relative aspect-[4/5] max-h-[420px] lg:max-h-none rounded-sm overflow-hidden order-first lg:order-none">
                      <Image src={imgSrc} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                      <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: `inset 0 0 0 1px ${TIFFANY}20` }} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.section>
        );
      })}

      {/* Flash Effect + Longevity Effect — dark section, 50/50 split, images + benefit blocks */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportTight}
        variants={sectionVariants}
        className="py-28 lg:py-40"
        style={{ backgroundColor: CHARCOAL }}
      >
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-h2 font-light tracking-tight text-white">
              Flash Effect + Longevity Effect
            </h2>
            <p className="mt-8 text-body-lg text-white/80 leading-relaxed">
              Most clinical skincare delivers one result: slow improvement over time. Most luxury skincare delivers one result: immediate surface appearance. Zero Lines delivers both, simultaneously.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 max-w-6xl mx-auto">
            <FlashLongevityColumn
              title="The Flash Effect"
              intro="Delivered within hours. Neuro-peptide tension release, mineral fluid management, and instant surface smoothing create a high-definition aesthetic result visible from the first application."
              benefits={FLASH_BENEFITS}
              imageSrc={SUPPORT_IMAGES.homepageScienceContrast}
            />
            <FlashLongevityColumn
              title="The Longevity Effect"
              intro="Builds over 12 months. PDRN and signal peptides continuously upregulate your skin's collagen production cycle, increasing dermal density, barrier competence, and structural resilience — measurably, month after month."
              benefits={LONGEVITY_BENEFITS}
              imageSrc={SUPPORT_IMAGES.scienceArchitecture}
            />
          </div>
          <blockquote className="mt-20 max-w-2xl mx-auto pl-8 border-l-4 text-body-lg text-white/80 italic leading-relaxed py-2" style={{ borderColor: TIFFANY }}>
            &ldquo;The goal is not younger-looking skin. The goal is structurally younger skin. There is a difference — and we can measure it.&rdquo;
          </blockquote>
        </div>
      </motion.section>

      {/* From source to science — image with Tiffany accent */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportTight}
        variants={sectionVariants}
        className="py-28 lg:py-40"
      >
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="relative mx-auto max-h-[420px] w-full overflow-hidden rounded-sm" style={{ boxShadow: `inset 0 0 0 1px ${TIFFANY}25` }}>
            <Image
              src={SUPPORT_IMAGES.storySource}
              alt="Minimal still life of water and glass representing the source of mineral signals"
              width={1200}
              height={600}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 opacity-80" style={{ background: `linear-gradient(90deg, transparent, ${TIFFANY}, transparent)` }} />
          </div>
          <div className="mx-auto mt-20 max-w-2xl text-center">
            <h2 className="text-h2 font-light tracking-tight text-secondary">
              From Source to Science
            </h2>
            <p className="mt-10 text-body-lg text-text-muted leading-relaxed">
              The raw biological signals come from nature — pristine high-altitude mineral springs, refined over millennia by geological pressure and purity. The science that unlocks them is human — formulated in advanced cosmetic laboratories to pharmaceutical production standards.
            </p>
            <p className="mt-6 text-body text-text-muted leading-relaxed">
              Zero Lines exists at the intersection of these two forces. The minerals provide the raw cellular vocabulary. Our biomimetic technology translates it into a language the skin responds to, precisely and measurably.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportTight}
        variants={sectionVariants}
        className="py-28 lg:py-40 bg-surface-muted"
      >
        <div className="mx-auto max-w-[720px] px-8 lg:px-16 text-center">
          <motion.p
            className="text-body-lg text-text-muted leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportTight}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Explore the protocol built on this science.
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
              className="inline-flex h-14 items-center justify-center bg-secondary px-14 text-[0.875rem] font-medium uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore the Protocol
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

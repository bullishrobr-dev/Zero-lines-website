"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RefreshCw, Check } from "lucide-react";
import { BRAND_IMAGES, PRODUCTS } from "@/lib/constants";
import ProtocolSequencingStrip from "./ProtocolSequencingStrip";

const CHARCOAL = "#1A1A1A";
const TIFFANY = "#0ABAB5";
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function SyringeRefillPDP() {
  const product = PRODUCTS.find((p) => p.slug === "syringe-refill");
  const imageSrc = product?.image ?? BRAND_IMAGES.logo;

  return (
    <div className="min-h-screen" style={{ backgroundColor: CHARCOAL }}>
      {/* HERO — lighter, refill-focused */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="relative min-h-[75vh] flex flex-col justify-end pb-20 lg:pb-28 pt-32 lg:pt-40"
      >
        <div className="absolute inset-0">
          <Image src={imageSrc} alt="Syringe Refill" fill priority sizes="100vw" className="object-cover opacity-35 object-center" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${CHARCOAL} 0%, ${CHARCOAL} 30%, transparent 50%)` }} />
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16">
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-3xl" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: EASE }}>
            Syringe Refill
          </motion.h1>
          <motion.p className="mt-6 text-body-lg text-white/85 max-w-xl leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.15, ease: EASE }}>
            Step 06: Continuity without compromise. A refill at a fair price—because the protocol deserves to last.
          </motion.p>
        </div>
      </motion.section>

      {/* SINGLE MESSAGE — fair refill, no extortion, luxurious tone */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-20 lg:py-28 px-8 lg:px-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 50%, ${TIFFANY}06 0%, transparent 70%)` }} />
        <div className="relative z-10 mx-auto max-w-[720px] text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-10" style={{ backgroundColor: `${TIFFANY}18` }}>
            <RefreshCw className="w-8 h-8" style={{ color: TIFFANY }} />
          </div>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">
            Fair Refill. Lasting Protocol.
          </h2>
          <p className="mt-8 text-body-lg text-white/85 leading-relaxed">
            Many brands treat refills as a chance to charge again at a premium—locking you into a device and then inflating the cost of what keeps it alive. We believe otherwise. The Syringe is the heart of the protocol; the refill is simply continuity. We price it fairly so that the work you began—the Reset, the Activation, the Serum, the Day and Night—can continue without friction. No extortion. Just the same standard of excellence, at a price that respects your commitment.
          </p>
          <ul className="mt-12 space-y-4 flex flex-col items-center">
            {["Same formulation as the initial Syringe.", "One refill extends your protocol; reorder when ready.", "Luxury that doesn’t punish loyalty."].map((item, i) => (
              <motion.li key={item} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }} className="flex gap-3 items-center text-body text-white/80">
                <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: `${TIFFANY}25` }}>
                  <Check className="w-3 h-3" style={{ color: TIFFANY }} strokeWidth={2.5} />
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      <ProtocolSequencingStrip highlightStep={6} stripText="Step 06: Refill. Continuity for the Syringe. Fair price, same excellence—so your protocol never stops." />

      {/* CTA — compact */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants} className="py-20 lg:py-28 px-8 lg:px-16" style={{ backgroundColor: CHARCOAL }}>
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">Continue the Protocol</h2>
          <p className="mt-6 text-body text-white/80 leading-relaxed">
            When you’re ready for your next refill, we’re here—at a price that honours the ritual you’ve built.
          </p>
          <div className="mt-12">
            <Link href="/pre-launch" className="btn-premium inline-flex items-center justify-center h-12 px-10 text-[0.8125rem] font-medium tracking-[0.08em] uppercase transition-all duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" style={{ backgroundColor: TIFFANY, color: CHARCOAL }}>
              Secure Refill
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

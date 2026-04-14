"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { TechnologySlug } from "@/lib/technologyContent";
import { BRAND_IMAGES } from "@/lib/constants";

const TIFFANY = "#0ABAB5";
const EASE_OUT = [0.33, 1, 0.68, 1] as [number, number, number, number];

interface BenefitItem {
  title: string;
  text: string;
}

const BENEFITS: Record<TechnologySlug, BenefitItem[]> = {
  "blue-uv": [
    {
      title: "Antibacterial at Source",
      text: "Blue light (415 nm) targets porphyrins in bacteria and the sebaceous environment. Regulation happens at the gland and follicle—not just on the surface—for a clearer, more balanced complexion.",
    },
    {
      title: "Clear, Luminous Canvas",
      text: "Surface-level clarity without stripping or irritation. Designed to be used first in the protocol so skin is primed for red/IR or other modalities. Calibrated for safe at-home use.",
    },
    {
      title: "First Step in the Sequence",
      text: "Blue and UV act as the cleaning and antibacterial layer before deeper work. The device sets the foundation; the Syringe and Serum then target zones and support barrier health.",
    },
  ],
  "red-infrared": [
    {
      title: "Cellular Energy at Depth",
      text: "Red and NIR wavelengths reach the mitochondria and support ATP production. Photobiomodulation works where no serum can—beyond the epidermis—for measurable cellular and repair benefits.",
    },
    {
      title: "Collagen & Repair",
      text: "Fibroblasts and connective tissue respond to consistent light exposure. The effect is cumulative: repeated, safe use supports collagen synthesis and skin texture over time.",
    },
    {
      title: "Full-Face Foundation",
      text: "Red and infrared provide the structural layer across the full face. Combined with the Syringe for targeted zones and the protocol for daily support, results compound.",
    },
  ],
  rf: [
    {
      title: "Dermal Remodelling",
      text: "Controlled thermal energy in the dermis triggers collagen and elastin remodelling. No topical can heat at depth—RF does the structural work that creams cannot.",
    },
    {
      title: "Tightening & Texture",
      text: "Non-ablative and calibrated for at-home use. Gradual tightening and smoother texture with no downtime. Results build over weeks and months and are long-lasting.",
    },
    {
      title: "Cumulative, Lasting Results",
      text: "A one-time investment in the technology. RF complements the protocol: the device handles full-face collagen and elastin; the Syringe refines expression lines in targeted zones.",
    },
  ],
  ems: [
    {
      title: "Muscle Tone & Lift",
      text: "Microcurrent communicates with facial muscles and fascia. The result is both immediate—improved tone and lift—and long-term as muscles adapt with consistent use.",
    },
    {
      title: "Muscle Re-education",
      text: "Gentle electrical stimulation helps re-educate muscle memory and support contour. Unlike topicals, the device works on the structures that define the face beneath the skin.",
    },
    {
      title: "Structural Foundation",
      text: "EMS builds the underlying architecture; the protocol supports the skin barrier and collagen so that the result is visible and lasting. Use in sequence with the Syringe and Serum for best outcomes.",
    },
  ],
};

const DIAGRAMS: Record<
  TechnologySlug,
  {
    primary: string;
    primaryAlt: string;
    secondary?: string;
    secondaryAlt?: string;
  }
> = {
  "blue-uv": {
    primary: BRAND_IMAGES.diagrams.blueUv,
    primaryAlt: "Blue and UV light skin regulation diagram",
    secondary: BRAND_IMAGES.diagrams.ledWavelengths,
    secondaryAlt: "LED light wavelength and penetration depth diagram",
  },
  "red-infrared": {
    primary: BRAND_IMAGES.diagrams.redInfraredFaceBody,
    primaryAlt: "Red and infrared light benefits for face and body",
    secondary: BRAND_IMAGES.diagrams.ledWavelengths,
    secondaryAlt: "LED light wavelength and penetration depth diagram",
  },
  rf: {
    primary: BRAND_IMAGES.diagrams.rf,
    primaryAlt: "RF dermal remodelling diagram",
    secondary: BRAND_IMAGES.diagrams.rfBenefits,
    secondaryAlt: "RF technology benefits diagram",
  },
  ems: {
    primary: BRAND_IMAGES.diagrams.ems,
    primaryAlt: "EMS facial muscle and fascia diagram",
  },
};

interface TechnologyDiagramsProps {
  slug: TechnologySlug;
  className?: string;
}

export default function TechnologyDiagrams({ slug, className = "" }: TechnologyDiagramsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const items = BENEFITS[slug];
  const diagrams = DIAGRAMS[slug];
  if (!items?.length) return null;

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE_OUT }}
        className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,0.2)]"
      >
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={diagrams.primary}
            alt={diagrams.primaryAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </motion.div>

      {diagrams.secondary && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease: EASE_OUT }}
          className="mt-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 lg:p-6">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.25rem]">
              <Image
                src={diagrams.secondary}
                alt={diagrams.secondaryAlt ?? ""}
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-caption font-medium tracking-[0.14em] uppercase" style={{ color: TIFFANY }}>
              Diagram Notes
            </p>
            <p className="mt-4 text-body text-white/75 leading-relaxed">
              These visuals are used to clarify depth, target layer, and treatment logic. They are supportive evidence blocks, not decorative graphics.
            </p>
          </div>
        </motion.div>
      )}

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 + i * 0.14, ease: EASE_OUT }}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10"
          >
            <p className="text-caption font-medium tracking-[0.14em] uppercase" style={{ color: TIFFANY }}>
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-5 text-xl font-light text-white">{item.title}</h3>
            <p className="mt-4 text-body text-white/75 leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

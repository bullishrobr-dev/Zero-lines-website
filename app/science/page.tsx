import type { Metadata } from "next";
import CinematicHero from "@/components/sections/CinematicHero";
import SciencePageContent from "@/components/sections/SciencePageContent";
import { PLACEHOLDER_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Science of Skin Longevity",
  description:
    "Biomimetic peptides skincare, PDRN collagen activation, Pyrenean mineral skincare. Measurable mechanisms and peer-reviewed skin longevity science.",
};

export default function SciencePage() {
  return (
    <>
      <CinematicHero
        title="The Science of Skin Longevity"
        subtitle="Measurable mechanisms. Peer-reviewed science. Clinical-grade formulation. Zero Lines is not built on claims. It is built on three validated biological frameworks: mineral signal delivery, DNA-inspired cellular repair, and biomimetic peptide activation. This is the science behind the protocol."
        mediaSrc={PLACEHOLDER_IMAGES.science}
        mediaAlt="Clinical laboratory glassware and pipette in soft scientific light"
        layout="split"
      />
      <SciencePageContent />
    </>
  );
}

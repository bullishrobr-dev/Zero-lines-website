import type { Metadata } from "next";
import CinematicHero from "@/components/sections/CinematicHero";
import { PLACEHOLDER_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Science",
  description:
    "Molecular biology meets dermatological precision. Discover the clinical research behind Zero Lines skin longevity protocols.",
};

export default function SciencePage() {
  return (
    <>
      <CinematicHero
        title="The Science"
        subtitle="From Barcelona's molecular biology laboratories to Andorra's alpine research facilities — the clinical foundation of skin longevity."
        mediaSrc={PLACEHOLDER_IMAGES.science}
        mediaAlt="Macro photograph of scientific laboratory glassware with clinical lighting"
        layout="split"
      />

      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-h2 font-light tracking-tight text-secondary">
              Molecular Activation Framework
            </h2>
            <p className="mt-10 text-body-lg text-text-muted leading-relaxed">
              Traditional skincare treats symptoms. Zero Lines activates cellular
              mechanisms. Our protocols are built on peer-reviewed research in
              mitochondrial biogenesis, extracellular matrix remodeling, and
              epigenetic skin signaling.
            </p>
          </div>

          <div className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
            {[
              {
                title: "Cellular Energy",
                text: "NAD+ pathway activation and mitochondrial ATP production enhancement for sustained cellular repair capacity.",
              },
              {
                title: "Matrix Architecture",
                text: "Collagen I/III ratio optimization through targeted peptide signaling and glycosaminoglycan scaffold support.",
              },
              {
                title: "Barrier Intelligence",
                text: "Ceramide synthesis upregulation and tight junction protein expression for restored skin barrier competence.",
              },
            ].map((pillar) => (
              <div key={pillar.title}>
                <div className="w-14 h-px bg-primary mb-8" />
                <h3 className="text-h4 font-light tracking-tight text-secondary">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-body text-text-muted leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-surface-muted">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
          <h2 className="text-h2 font-light tracking-tight text-secondary">
            Barcelona to Andorra
          </h2>
          <p className="mt-10 mx-auto text-body-lg text-text-muted max-w-2xl leading-relaxed">
            Formulated in Barcelona&rsquo;s biomedical corridor.
            Clinically validated in Andorra&rsquo;s high-altitude research
            environment. The bridge between Mediterranean innovation
            and Alpine purity.
          </p>
        </div>
      </section>
    </>
  );
}

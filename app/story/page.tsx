import type { Metadata } from "next";
import CinematicHero from "@/components/sections/CinematicHero";
import { PLACEHOLDER_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "From Barcelona's biomedical labs to Andorra's alpine research facilities. The origin story of Zero Lines skin longevity.",
};

export default function StoryPage() {
  return (
    <>
      <CinematicHero
        title="The Origin"
        subtitle="A conviction that skincare should be measured, not marketed. That clinical precision and luxury are not opposing forces."
        mediaSrc={PLACEHOLDER_IMAGES.story}
        mediaAlt="Alpine mountain landscape with pristine snow and clear sky"
        layout="split"
      />

      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 font-light tracking-tight text-secondary">
              Barcelona
            </h2>
            <p className="mt-10 text-body-lg text-text-muted leading-relaxed">
              Zero Lines was born in Barcelona&rsquo;s biomedical research
              corridor — a city where molecular biology, dermatology,
              and cosmetic chemistry converge at the highest level in Europe.
            </p>
            <p className="mt-8 text-body text-text-muted leading-relaxed">
              The founding team spent four years developing formulations that
              could be validated through clinical trial methodology —
              not focus groups. Every ingredient concentration, every
              delivery system, every protocol timing was determined by
              measurable outcomes on real skin biomarkers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-surface-muted">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 font-light tracking-tight text-secondary">
              Andorra
            </h2>
            <p className="mt-10 text-body-lg text-text-muted leading-relaxed">
              The move to Andorra was deliberate. High altitude.
              Low pollution. Water purity that meets pharmaceutical
              production standards without additional filtration.
            </p>
            <p className="mt-8 text-body text-text-muted leading-relaxed">
              This is where the protocols were refined — where Barcelona&rsquo;s
              molecular formulations met Alpine environmental testing.
              Extreme UV exposure, low humidity, temperature cycling.
              If a formulation performs at 2,000 meters in the Pyrenees,
              it performs everywhere.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
          <h2 className="text-h2 font-light tracking-tight text-secondary">
            The Conviction
          </h2>
          <p className="mt-10 mx-auto text-body-lg text-text-muted max-w-2xl leading-relaxed">
            We do not use the phrase &ldquo;anti-aging.&rdquo;
            Aging is biology. What we engineer is longevity —
            the measurable extension of skin health, structure,
            and function. That is Zero Lines.
          </p>
        </div>
      </section>
    </>
  );
}

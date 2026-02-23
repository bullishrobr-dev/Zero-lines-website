import type { Metadata } from "next";
import CinematicHero from "@/components/sections/CinematicHero";
import TechSpecsAccordion from "@/components/sections/TechSpecsAccordion";
import { PLACEHOLDER_IMAGES, TECH_DEVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Clinical-grade light therapy and EMS devices engineered for at-home skin longevity protocols. Red/Infrared LED, Laser, Blue/UV, and Microcurrent technology.",
};

export default function TechnologyPage() {
  const accordionItems = TECH_DEVICES.map((device) => ({
    id: device.id,
    title: device.name,
    description: device.description,
    specs: device.specs,
  }));

  return (
    <>
      <CinematicHero
        title="The Technology"
        subtitle="Clinical-grade devices engineered for at-home protocol integration. Light therapy, laser precision, and microcurrent activation."
        mediaSrc={PLACEHOLDER_IMAGES.technology}
        mediaAlt="Abstract macro photograph of light beams and laser optics"
        layout="fullbleed"
      />

      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="max-w-3xl mb-24 lg:mb-32">
            <h2 className="text-h2 font-light tracking-tight text-secondary">
              Device Specifications
            </h2>
            <p className="mt-10 text-body-lg text-text-muted leading-relaxed">
              Four modalities. One integrated activation platform.
              Each device is calibrated to clinical-grade parameters
              for safe, effective at-home protocols.
            </p>
          </div>

          <TechSpecsAccordion items={accordionItems} allowMultiple />
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-surface-muted">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-28">
            <div>
              <h2 className="text-h2 font-light tracking-tight text-secondary">
                Clinical Validation
              </h2>
              <p className="mt-10 text-body text-text-muted leading-relaxed">
                Every device parameter — wavelength, irradiance, duration —
                is derived from peer-reviewed photobiomodulation research.
                Not consumer estimates. Clinical measurements.
              </p>
            </div>
            <div>
              <h2 className="text-h2 font-light tracking-tight text-secondary">
                Protocol Integration
              </h2>
              <p className="mt-10 text-body text-text-muted leading-relaxed">
                Hardware and topical formulations are engineered as a unified
                system. Device protocols are sequenced to prime skin for
                maximum ingredient bioavailability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

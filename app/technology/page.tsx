import type { Metadata } from "next";
import Image from "next/image";
import CinematicScrollTechnology from "@/components/sections/CinematicScrollTechnology";
import TechnologySequencingStrip from "@/components/sections/TechnologySequencingStrip";
import { BRAND_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Hardware Protocol",
  description:
    "LED light therapy, RF, EMS microcurrent, Blue and UV light. Clinical-grade devices for at-home skin longevity. Devices are the foundation—topicals amplify the result.",
};

export default function TechnologyPage() {
  return (
    <>
      <section className="pt-48 pb-16 lg:pt-56 lg:pb-24">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.72fr)] gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-caption font-medium tracking-[0.14em] uppercase text-primary">
                Clinical Hardware
              </p>
              <h1 className="mt-5 text-h1 font-light tracking-tight text-secondary max-w-3xl">
                The Hardware Protocol
              </h1>
              <p className="mt-10 text-body-lg text-text-muted max-w-2xl leading-relaxed">
                Four modalities. One integrated system. Devices penetrate where topicals cannot.
              </p>
              <p className="mt-6 text-body text-text-muted max-w-2xl leading-relaxed">
                Zero Lines is built on a simple truth: serums, creams, and masks work on the surface. They are the support—the accelerants. But the foundation is the technology. Red and infrared light, RF, EMS microcurrent, and blue and UV light reach depths no cream can. When you invest in a device, you invest once; the technology is yours. When you layer our protocol on top, you amplify the result. Below, explore each modality. Click through to the dedicated page for each technology.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 bg-surface-muted shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
              <Image
                src={BRAND_IMAGES.technology.rfHero}
                alt="Clinical device treatment close-up"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CinematicScrollTechnology showHeading={false} />

      <section className="py-28 lg:py-40 bg-surface-muted">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,0.72fr)_minmax(0,0.95fr)] gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.1)]">
              <Image
                src={BRAND_IMAGES.technology.emsHero}
                alt="Microcurrent treatment in progress"
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-h2 font-light tracking-tight text-secondary">
                Devices Are the Gym. Topicals Are the Support.
              </h2>
              <p className="mt-10 max-w-3xl text-body-lg text-text-muted leading-relaxed">
                We say it often: a device is like going to the gym. It is the structural work—the investment you make in your skin’s architecture. Serums, creams, and masks are like the supplements that help you recover and perform better; they accelerate results, but they cannot replace the work. Without the gym—without the technology—you are only ever supporting from the outside. With the device, you build the foundation. With the protocol on top, you compound the outcome.
              </p>
              <p className="mt-6 max-w-3xl text-body text-text-muted leading-relaxed">
                All our recommended devices are provided by trusted third-party partners. We do not manufacture hardware; we curate and calibrate. Each technology page explains the science, the benefits, and how it fits the Zero Lines protocol. When you are ready to add a device, you can do so through us—options are listed at the end of each technology page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TechnologySequencingStrip />
    </>
  );
}

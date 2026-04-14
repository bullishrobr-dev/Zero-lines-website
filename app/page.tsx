import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CinematicHero from "@/components/sections/CinematicHero";
import CinematicScrollProtocol from "@/components/sections/CinematicScrollProtocol";
import MineralActivationDataViz from "@/components/sections/MineralActivationDataViz";
import ThemeSection from "@/components/ui/ThemeSection";
import { BRAND_IMAGES, SUPPORT_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Zero Lines — Clinical Skincare & Skin Longevity Protocol",
  },
  description:
    "Clinical-luxury skin longevity protocol. Advanced skincare solutions powered by biomimetic science, PDRN, and Pyrenean minerals. Luxury European skincare that activates your skin's repair.",
};

export default function HomePage() {
  return (
    <>
      <CinematicHero
        title="Your Skin Already Knows How to Repair Itself."
        subtitle="We Restore the Signal. Zero Lines is a clinical-luxury Skin Longevity House. We don't fight your biology. We activate it — using biomimetic science, DNA-derived repair technology, and mineral complexes sourced from high-altitude Pyrenean springs."
        ctaLabel="Discover the Protocol"
        ctaHref="/protocol"
        secondaryCtaLabel="Register for Early Access"
        secondaryCtaHref="/pre-launch"
        layout="fullbleed"
        overlay={false}
      />

      <ThemeSection theme="dark">
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
          <p className="text-[1.5rem] lg:text-[2rem] xl:text-[2.25rem] font-light tracking-tight text-white max-w-4xl mx-auto leading-snug">
            &ldquo;We do not believe in erasing time. We believe in extending skin health, structure, and function — measurably.&rdquo;
          </p>
        </div>
      </section>
      </ThemeSection>

      <ThemeSection theme="light">
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.8fr)] gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-caption font-medium tracking-[0.14em] uppercase text-primary">
                Clinical Premise
              </p>
              <h2 className="mt-5 text-h2 font-light tracking-tight text-secondary max-w-3xl">
                A Different Kind of Skincare Science
              </h2>
              <div className="mt-10 max-w-3xl space-y-8">
                <p className="text-body-lg text-text-muted leading-relaxed">
                  The skincare industry has spent decades treating symptoms. Filling lines. Blocking enzymes. Applying surface gloss.
                </p>
                <p className="text-body-lg text-text-muted leading-relaxed">
                  Zero Lines operates on a different premise entirely. Healthy skin is not a surface condition. It is a biological state — driven by cellular signals, structural integrity, and the skin&rsquo;s own capacity for self-renewal.
                </p>
                <p className="text-body-lg text-text-muted leading-relaxed">
                  Over time, those signals weaken. The skin does not forget how to produce collagen. It simply stops receiving the instructions.
                </p>
                <p className="text-body-lg text-secondary font-medium leading-relaxed">
                  We are the instructions.
                </p>
                <p className="text-body text-text-muted leading-relaxed">
                  PDRN — a DNA-derived biopolymer in our core formulations — has been shown in peer-reviewed research to increase fibroblast proliferation by up to 30% and collagen Type I synthesis by 25–35% over 8–12 weeks.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface-muted">
                <Image
                  src={SUPPORT_IMAGES.scienceHero}
                  alt="Laboratory formulation and testing environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent" />
              </div>
              <div className="relative -mt-16 ml-auto w-full max-w-xs bg-white/95 backdrop-blur px-6 py-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
                <p className="text-caption font-medium tracking-[0.14em] uppercase text-primary">
                  Peer-Reviewed Signal
                </p>
                <p className="mt-3 text-[2rem] font-light tracking-tight text-secondary">
                  +30%
                </p>
                <p className="mt-2 text-body text-text-muted leading-relaxed">
                  Documented fibroblast proliferation support in published PDRN research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ThemeSection>

      <ThemeSection theme="dark">
      <MineralActivationDataViz />
      </ThemeSection>

      <ThemeSection theme="light">
      <section className="py-28 lg:py-40 bg-surface-muted">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <p className="text-caption font-medium tracking-[0.14em] uppercase text-primary">
            Dual-Action System
          </p>
          <h2 className="mt-5 text-h2 font-light tracking-tight text-secondary">
            Two Effects. One Protocol.
          </h2>
          <p className="mt-6 text-body-lg text-text-muted max-w-2xl">
            Every Zero Lines formulation is engineered to deliver two simultaneous outcomes:
          </p>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div className="overflow-hidden bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[5/4]">
                <Image
                  src={SUPPORT_IMAGES.homepageScienceContrast}
                  alt="A more surface-led skincare visual language"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale"
                />
              </div>
              <div className="p-10 lg:p-12">
              <h3 className="text-h4 font-light tracking-tight text-secondary">
                The Flash Effect
              </h3>
              <p className="mt-6 text-body text-text-muted leading-relaxed">
                Immediate, high-definition aesthetic results. Within hours of application, neuro-peptides release mechanical surface tension. Pyrenean mineral osmology manages localized fluid build-up. Your skin looks structurally rested — not treated.
              </p>
              <p className="mt-8 text-caption font-medium tracking-[0.12em] uppercase text-primary">
                Immediate definition. Immediate finish.
              </p>
              </div>
            </div>
            <div className="overflow-hidden bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[5/4]">
                <Image
                  src={SUPPORT_IMAGES.scienceArchitecture}
                  alt="Laboratory-led structural repair environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-10 lg:p-12">
              <h3 className="text-h4 font-light tracking-tight text-secondary">
                The Longevity Effect
              </h3>
              <p className="mt-6 text-body text-text-muted leading-relaxed">
                Deep structural repair over 12 months. PDRN and signal peptides activate your skin&rsquo;s native collagen and elastin production cycle. The results don&rsquo;t fade — they compound. Month after month, your skin&rsquo;s structural density increases.
              </p>
              <p className="mt-8 text-caption font-medium tracking-[0.12em] uppercase text-primary">
                Structural repair. Compounding resilience.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ThemeSection>

      <ThemeSection theme="light">
      <CinematicScrollProtocol />
      </ThemeSection>

      <ThemeSection theme="light">
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
          <h2 className="text-h2 font-light tracking-tight text-secondary">
            The Science That Powers It
          </h2>
          <p className="mt-10 mx-auto text-body-lg text-text-muted max-w-2xl leading-relaxed">
            Born from pharmaceutical-grade Pyrenean mineral research. Validated against molecular biology standards. Every ingredient concentration, every delivery mechanism, every protocol sequence was determined by one question: does the data support it?
          </p>
          <div className="mt-14">
            <Link
              href="/science"
              className="inline-flex items-center text-caption font-medium tracking-[0.08em] uppercase text-primary hover:text-secondary transition-colors duration-700"
            >
              Explore Our Science &rarr;
            </Link>
          </div>
        </div>
      </section>
      </ThemeSection>

      <ThemeSection theme="dark">
      <section className="py-28 lg:py-40 bg-surface-muted">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-caption font-medium tracking-[0.14em] uppercase text-primary">
                Hardware Layer
              </p>
              <h2 className="mt-5 text-h2 font-light tracking-tight text-secondary max-w-3xl">
                Skincare Doesn&rsquo;t Stop at Creams
              </h2>
              <p className="mt-10 text-body-lg text-text-muted max-w-2xl leading-relaxed">
                Topical formulations are the software. Our clinical-grade devices are the hardware. When combined, they create a synergistic activation system that reaches beyond where creams alone can penetrate.
              </p>
              <div className="mt-14">
                <Link
                  href="/technology"
                  className="inline-flex items-center text-caption font-medium tracking-[0.08em] uppercase text-primary hover:text-secondary transition-colors duration-700"
                >
                  Explore Our Technology &rarr;
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
              <Image
                src={BRAND_IMAGES.technology.redInfraredHero}
                alt="Clinical light therapy treatment"
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/15 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
      </ThemeSection>

      <ThemeSection theme="light">
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
          <h2 className="text-h2 font-light tracking-tight text-secondary">
            The First Production Run Is Limited.
          </h2>
          <p className="mt-10 mx-auto text-body-lg text-text-muted max-w-2xl leading-relaxed">
            Zero Lines is not yet available to the public. Register now for priority early access, pre-launch protocol guidance, and first notification when your formulations are ready.
          </p>
          <form className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <label htmlFor="home-email" className="sr-only">
              Email address
            </label>
            <input
              id="home-email"
              type="email"
              placeholder="your@email.com"
              className="w-full sm:flex-1 h-14 px-6 bg-surface-muted border border-border rounded-sm text-secondary text-body placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors duration-300"
            />
            <Link
              href="/pre-launch"
              className="btn-premium w-full sm:w-auto inline-flex items-center justify-center h-14 px-14 bg-secondary text-white text-[0.875rem] font-medium tracking-[0.06em] uppercase whitespace-nowrap"
            >
              Reserve My Access
            </Link>
          </form>
          <p className="mt-6 text-caption text-text-muted">
            No commitment. No spam. One notification when your access is confirmed.
          </p>
        </div>
      </section>
      </ThemeSection>
    </>
  );
}

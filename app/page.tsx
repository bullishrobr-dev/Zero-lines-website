import CinematicHero from "@/components/sections/CinematicHero";
import ProtocolGrid from "@/components/sections/ProtocolGrid";
import { PLACEHOLDER_IMAGES } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <CinematicHero
        title="The Science of Skin Longevity"
        subtitle="Swiss clinical precision. Molecular activation technology. A protocol engineered to redefine what skin can become."
        ctaLabel="Discover the Protocol"
        ctaHref="/protocol"
        mediaSrc={PLACEHOLDER_IMAGES.hero}
        mediaAlt="Abstract macro texture of water droplets on a silver metallic surface"
        layout="fullbleed"
      />

      <ProtocolGrid />

      <section className="py-28 lg:py-40 bg-surface-muted">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
          <h2 className="text-h2 font-light tracking-tight text-secondary">
            From Barcelona to the Pyrenees
          </h2>
          <p className="mt-10 mx-auto text-body-lg text-text-muted max-w-2xl leading-relaxed">
            Born in the molecular biology labs of Barcelona.
            Perfected in the alpine purity of Andorra.
            Zero Lines bridges clinical dermatology with luxury skincare
            to deliver measurable activation results.
          </p>
        </div>
      </section>

      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
          <h2 className="text-h2 font-light tracking-tight text-secondary">
            Begin Your Protocol
          </h2>
          <p className="mt-10 mx-auto text-body-lg text-text-muted max-w-xl leading-relaxed">
            Early access is now open. Be among the first to receive
            your personalized skin longevity protocol.
          </p>
          <div className="mt-14">
            <a
              href="/pre-launch"
              className="inline-flex items-center h-14 px-14 bg-secondary text-white text-[0.875rem] font-medium tracking-[0.06em] uppercase hover:bg-primary transition-colors duration-300"
            >
              Request Early Access
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

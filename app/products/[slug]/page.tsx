import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, PRODUCT_SLUGS, SITE_URL } from "@/lib/constants";
import TechSpecsAccordion from "@/components/sections/TechSpecsAccordion";
import SyringePDP from "@/components/products/SyringePDP";
import PeelingGelPDP from "@/components/products/PeelingGelPDP";
import SerumPDP from "@/components/products/SerumPDP";
import DayCreamPDP from "@/components/products/DayCreamPDP";
import NightCreamPDP from "@/components/products/NightCreamPDP";
import SyringeRefillPDP from "@/components/products/SyringeRefillPDP";
import ProtocolSequencingStrip from "@/components/products/ProtocolSequencingStrip";
import type { AccordionItem } from "@/components/sections/TechSpecsAccordion";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};

  const isSyringe = slug === "syringe";
  const isPeelingGel = slug === "peeling-gel";
  const isSerum = slug === "serum";
  const isDayCream = slug === "day-cream";
  const isNightCream = slug === "night-cream";
  const isRefill = slug === "syringe-refill";
  const title = product.name;
  const description = isSyringe
    ? "Precision Collagen Activation Syringe. 50-application protocol. PDRN, PRNS minerals, neuro-peptides. Flash application or longevity protocol."
    : isPeelingGel
      ? "Biomimetic Renewal Gel. Step 01: The Reset. Smart-enzyme canvas reset for 52 weeks. Zero abrasion, dual-climate minerals."
      : isSerum
        ? "Step 03: The Serum. High-velocity bio-signal delivery. Molecular messenger for the protocol—peptides and actives that reach the dermal-epidermal junction."
        : isDayCream
          ? "Step 04: Day Cream. Environmental shield and active barrier. Light, luminous finish—locks in the morning protocol from first light until evening."
          : isNightCream
            ? "Step 05: Night Cream. Nocturnal repair activation. Circadian restoration—richer, restorative matrix for overnight renewal."
            : isRefill
              ? "Step 06: Syringe Refill. Fair price, same excellence. Continuity for the protocol—no extortion, just lasting luxury."
              : product.tagline;

  return {
    title: product.name,
    description,
    openGraph: {
      title: `${title} | Zero Lines`,
      description,
      images: [{ url: product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}` }],
    },
  };
}

const ingredientSpecs: AccordionItem[] = [
  {
    id: "peptide-complex",
    title: "Peptide Activation Complex",
    description:
      "Proprietary blend of signal peptides targeting collagen I/III synthesis and elastin fiber integrity.",
    specs: [
      { label: "Concentration", value: "12% active peptide matrix" },
      { label: "Delivery System", value: "Liposomal encapsulation" },
      { label: "Activation Time", value: "48-72 hours post-application" },
      { label: "Clinical Validation", value: "Phase III double-blind trial" },
    ],
  },
  {
    id: "nad-precursor",
    title: "NAD+ Precursor Technology",
    description:
      "Nicotinamide mononucleotide derivative optimized for transdermal bioavailability.",
    specs: [
      { label: "Precursor Type", value: "Stabilized NMN analog" },
      { label: "Penetration Depth", value: "Dermal-epidermal junction" },
      { label: "Half-life", value: "8 hours sustained release" },
      { label: "Purity", value: "99.7% pharmaceutical grade" },
    ],
  },
  {
    id: "barrier-matrix",
    title: "Barrier Reconstruction Matrix",
    description:
      "Multi-lamellar ceramide system restoring physiological lipid ratios.",
    specs: [
      { label: "Ceramide Ratio", value: "3:1:1 (NP:AP:EOS)" },
      { label: "Cholesterol Source", value: "Plant-derived phytosterol" },
      { label: "pH Optimization", value: "4.8-5.2 acid mantle support" },
      { label: "Occlusion Factor", value: "Breathable film technology" },
    ],
  },
];

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  if (slug === "syringe") return <SyringePDP />;
  if (slug === "peeling-gel") return <PeelingGelPDP />;
  if (slug === "serum") return <SerumPDP />;
  if (slug === "day-cream") return <DayCreamPDP />;
  if (slug === "night-cream") return <NightCreamPDP />;
  if (slug === "syringe-refill") return <SyringeRefillPDP />;

  return (
    <>
      <section className="pt-48 lg:pt-56 pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
            <div className="relative aspect-[4/5] bg-surface-muted overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="lg:sticky lg:top-36">
              <p className="text-caption font-medium tracking-[0.1em] uppercase text-primary">
                {product.category === "device" ? "Technology" : "Protocol"}
              </p>
              <h1 className="mt-6 text-h1 font-light tracking-tight text-secondary">
                {product.name}
              </h1>
              <p className="mt-10 text-body-lg text-text-muted max-w-lg leading-relaxed">
                {product.tagline}
              </p>

              <div className="mt-14 flex flex-col gap-6">
                <Link
                  href="/pre-launch"
                  className="btn-premium inline-flex items-center justify-center h-14 px-12 bg-secondary text-white text-[0.875rem] font-medium tracking-[0.06em] uppercase"
                >
                  Reserve — Early Access
                </Link>
                <Link
                  href="/diagnostic"
                  className="btn-premium inline-flex items-center justify-center h-14 px-12 border border-border text-secondary text-[0.875rem] font-medium tracking-[0.06em] uppercase hover:border-primary hover:text-primary"
                >
                  Find Your Protocol
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-40 bg-surface-muted">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <h2 className="text-h2 font-light tracking-tight text-secondary mb-16">
            Active Ingredients
          </h2>
          <TechSpecsAccordion items={ingredientSpecs} />
        </div>
      </section>

      <ProtocolSequencingStrip
        highlightStep={Math.max(1, PRODUCTS.findIndex((p) => p.slug === slug) + 1)}
        stripText="Part of the Zero Lines Protocol. Explore each step below."
      />

      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 text-center">
          <h2 className="text-h2 font-light tracking-tight text-secondary">
            Part of the Protocol
          </h2>
          <p className="mt-10 mx-auto text-body-lg text-text-muted max-w-2xl leading-relaxed">
            Every Zero Lines product is designed to work within the complete
            longevity protocol. Explore how {product.name.toLowerCase()} integrates
            with the full activation system.
          </p>
          <div className="mt-14">
            <Link
              href="/protocol"
              className="btn-premium inline-flex items-center h-14 px-14 bg-secondary text-white text-[0.875rem] font-medium tracking-[0.06em] uppercase"
            >
              View Full Protocol
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

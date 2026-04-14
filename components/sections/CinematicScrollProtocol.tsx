"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;
const IMAGE_TRANSITION = { duration: 1, ease: EASE };

interface CinematicScrollProtocolProps {
  showHeading?: boolean;
}

export default function CinematicScrollProtocol({
  showHeading = true,
}: CinematicScrollProtocolProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = PRODUCTS;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) setActiveIndex(index);
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <section
      aria-labelledby={showHeading ? "protocol-cinematic-heading" : undefined}
      className="relative"
    >
      <div
        ref={containerRef}
        className="relative min-h-svh lg:min-h-0"
      >
        <div className="lg:flex lg:min-h-[600vh]">
          <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-0 lg:h-svh lg:shrink-0">
            <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(180deg,#f7fbfb_0%,#edf7f6_52%,#f8f8f8_100%)]">
              <div className="absolute inset-0 opacity-70" style={{ background: "radial-gradient(circle at 50% 30%, rgba(10,186,181,0.16), transparent 45%)" }} />
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={IMAGE_TRANSITION}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-x-[8%] top-[12%] bottom-[12%] rounded-[2rem] border border-white/70 bg-white/75 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center px-10 py-16">
                    <Image
                      src={steps[activeIndex]?.image ?? steps[0].image}
                      alt={steps[activeIndex]?.name ?? steps[0].name}
                      fill
                      sizes="50vw"
                      className="object-contain p-12"
                      priority={activeIndex === 0}
                    />
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_75%,rgba(10,186,181,0.12),transparent_35%)]" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:flex-col">
            {showHeading && (
              <div className="px-8 pt-20 pb-16 lg:px-16 lg:pt-32 lg:pb-24">
                <h2
                  id="protocol-cinematic-heading"
                  className="text-h2 font-light tracking-tight text-secondary"
                >
                  The Longevity Protocol
                </h2>
                <p className="mt-8 text-body-lg text-text-muted max-w-xl leading-relaxed">
                  Six precision formulations. Engineered as a single, unified activation system.
                </p>
                <Link
                  href="/protocol"
                  className="mt-8 inline-flex items-center text-caption font-medium tracking-[0.08em] uppercase text-primary hover:text-secondary transition-colors duration-700"
                >
                  Explore the Protocol &rarr;
                </Link>
              </div>
            )}

            {steps.map((product, index) => (
              <div
                key={product.slug}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className="min-h-svh flex flex-col justify-center px-8 py-24 lg:px-16 lg:py-32"
              >
                <span
                  className="text-caption font-medium tracking-[0.15em] uppercase text-primary"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[2.5rem] font-light tracking-tight text-secondary md:text-[3.5rem] lg:text-[4rem] leading-[1.05]">
                  {product.name}
                </h3>
                <p className="mt-6 text-body-lg text-text-muted max-w-lg leading-relaxed">
                  {product.tagline}
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-10 inline-flex items-center text-caption font-medium tracking-[0.08em] uppercase text-primary hover:text-secondary transition-colors duration-700"
                >
                  Discover &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          {showHeading && (
            <div className="px-8 pt-16 pb-12">
              <h2
                id="protocol-cinematic-heading"
                className="text-h2 font-light tracking-tight text-secondary"
              >
                The Longevity Protocol
              </h2>
              <p className="mt-6 text-body-lg text-text-muted max-w-xl leading-relaxed">
                Six precision formulations. Engineered as a single, unified activation system.
              </p>
              <Link
                href="/protocol"
                className="mt-6 inline-flex items-center text-caption font-medium tracking-[0.08em] uppercase text-primary"
              >
                Explore the Protocol &rarr;
              </Link>
            </div>
          )}
          {steps.map((product, index) => (
            <div
              key={product.slug}
              className="min-h-[85vh] flex flex-col justify-center px-8 py-20"
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[1.75rem] border border-border/60 bg-[linear-gradient(180deg,#f7fbfb_0%,#edf7f6_50%,#f8f8f8_100%)] shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
                <div className="absolute inset-0 opacity-70" style={{ background: "radial-gradient(circle at 50% 24%, rgba(10,186,181,0.16), transparent 38%)" }} />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-10"
                />
              </div>
              <span className="mt-8 text-caption font-medium tracking-[0.15em] uppercase text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-h1 font-light tracking-tight text-secondary">
                {product.name}
              </h3>
              <p className="mt-4 text-body-lg text-text-muted leading-relaxed">
                {product.tagline}
              </p>
              <Link
                href={`/products/${product.slug}`}
                className="mt-6 inline-flex items-center text-caption font-medium tracking-[0.08em] uppercase text-primary"
              >
                Discover &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

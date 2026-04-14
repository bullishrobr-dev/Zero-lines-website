"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CinematicHeroProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  mediaType?: "image" | "video";
  mediaSrc?: string;
  mediaAlt?: string;
  layout?: "split" | "fullbleed";
  overlay?: boolean;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.25,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
} as const;

export default function CinematicHero({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  mediaType = "image",
  mediaSrc,
  mediaAlt = "",
  layout = "fullbleed",
  overlay = true,
}: CinematicHeroProps) {
  if (layout === "split") {
    return (
      <section className="relative min-h-svh flex flex-col lg:flex-row">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center px-5 sm:px-8 lg:px-20 xl:px-28 pt-28 sm:pt-32 lg:pt-40 pb-20 sm:pb-24 lg:py-0 lg:w-1/2 order-2 lg:order-1"
        >
          <motion.h1
            variants={itemVariants}
            className="text-[2rem] sm:text-[2.5rem] md:text-h1 font-light tracking-tight text-secondary leading-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={itemVariants}
              className="mt-6 sm:mt-10 text-base sm:text-body-lg text-text-muted max-w-lg leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {(ctaLabel && ctaHref) || (secondaryCtaLabel && secondaryCtaHref) ? (
            <motion.div variants={itemVariants} className="mt-10 sm:mt-14 flex flex-wrap gap-3 sm:gap-4">
              {ctaLabel && ctaHref && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center h-12 sm:h-14 px-8 sm:px-12 bg-secondary text-white text-[0.8125rem] sm:text-[0.875rem] font-medium tracking-[0.06em] uppercase hover:bg-primary transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {ctaLabel}
                </Link>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center h-12 sm:h-14 px-8 sm:px-12 border border-white/60 text-white text-[0.8125rem] sm:text-[0.875rem] font-medium tracking-[0.06em] uppercase hover:bg-white hover:text-secondary transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {secondaryCtaLabel}
                </Link>
              )}
            </motion.div>
          ) : null}
        </motion.div>

        <div className="relative lg:w-1/2 min-h-[55vh] lg:min-h-svh order-1 lg:order-2">
          {mediaSrc ? mediaType === "video" ? (
            <video
              src={mediaSrc}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <Image
              src={mediaSrc}
              alt={mediaAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative min-h-svh flex items-center justify-center overflow-hidden",
        mediaSrc ? undefined : "bg-white"
      )}
    >
      {mediaSrc && (
        <div className="absolute inset-0">
          {mediaType === "video" ? (
          <video
            src={mediaSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={mediaSrc}
            alt={mediaAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          )}
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/45 to-secondary/70" />
          )}
        </div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-20 text-center pt-24 sm:pt-28 lg:pt-0"
      >
        <motion.h1
          variants={itemVariants}
          className={cn(
            "text-[2.25rem] sm:text-[3rem] md:text-[4rem] lg:text-display font-light tracking-tight px-2 sm:px-4",
            overlay ? "text-white" : "text-secondary"
          )}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            variants={itemVariants}
            className={cn(
              "mt-8 sm:mt-12 mx-auto text-base sm:text-body-lg max-w-2xl leading-relaxed px-2 sm:px-4",
              overlay ? "text-white/90" : "text-text-muted"
            )}
          >
            {subtitle}
          </motion.p>
        )}

        {((ctaLabel && ctaHref) || (secondaryCtaLabel && secondaryCtaHref)) && (
          <motion.div variants={itemVariants} className="mt-10 sm:mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className={cn(
                  "inline-flex items-center h-12 sm:h-14 px-10 sm:px-14",
                  "text-[0.8125rem] sm:text-[0.875rem] font-medium tracking-[0.08em] uppercase",
                  "transition-all duration-300",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  overlay
                    ? "bg-white text-secondary hover:bg-primary hover:text-white"
                    : "bg-secondary text-white hover:bg-primary"
                )}
              >
                {ctaLabel}
              </Link>
            )}
            {secondaryCtaLabel && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className={cn(
                  "inline-flex items-center h-12 sm:h-14 px-10 sm:px-14 border",
                  "text-[0.8125rem] sm:text-[0.875rem] font-medium tracking-[0.08em] uppercase",
                  "transition-all duration-300",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  overlay
                    ? "border-white/70 text-white hover:bg-white hover:text-secondary"
                    : "border-secondary text-secondary hover:bg-secondary hover:text-white"
                )}
              >
                {secondaryCtaLabel}
              </Link>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCTS, type Product } from "@/lib/constants";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
} as const;

function ProductCard({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  return (
    <motion.article variants={cardVariants} className="group relative">
      <Link href={`/products/${product.slug}`} className="block">
        <div
          className={cn(
            "relative overflow-hidden bg-surface-muted",
            featured ? "aspect-[4/5]" : "aspect-[3/4]"
          )}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="mt-8">
          <h3
            className={cn(
              "font-light tracking-tight text-secondary",
              featured ? "text-h3" : "text-h4"
            )}
          >
            {product.name}
          </h3>
          <p className="mt-4 text-body text-text-muted leading-relaxed">
            {product.tagline}
          </p>
          <span className="inline-block mt-6 text-caption font-medium tracking-[0.06em] uppercase text-primary group-hover:translate-x-1 transition-transform duration-300">
            Discover &rarr;
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

interface ProtocolGridProps {
  showHeading?: boolean;
}

export default function ProtocolGrid({ showHeading = true }: ProtocolGridProps) {
  const featured = PRODUCTS.find((p) => p.featured);
  const rest = PRODUCTS.filter((p) => !p.featured);

  return (
    <section
      aria-labelledby={showHeading ? "protocol-heading" : undefined}
      className="py-24 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
        {showHeading && (
          <div className="mb-20 lg:mb-28">
            <h2
              id="protocol-heading"
              className="text-h2 font-light tracking-tight text-secondary"
            >
              The Longevity Protocol
            </h2>
            <p className="mt-8 text-body-lg text-text-muted max-w-2xl leading-relaxed">
              Six precision formulations. One integrated activation system.
              Each product engineered for measurable skin longevity outcomes.
            </p>
          </div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.12 }}
          className={cn(
            "grid gap-12 lg:gap-16",
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {featured && (
            <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
              <ProductCard product={featured} featured />
            </div>
          )}
          {rest.map((product) => (
            <div key={product.slug}>
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

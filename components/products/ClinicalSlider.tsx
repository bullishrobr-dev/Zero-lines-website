"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";

const CHARCOAL = "#1A1A1A";
const TIFFANY = "#0ABAB5";
const GOLD = "#C9A227";
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const RESULT5_IMAGE = "/assets/result5-0c3d934e-a402-41cb-9685-f79ebf470da2.png";
const ZERO_LINES_OVERLAY = "/assets/Printable_Resolution_File-7bab716c-0536-448a-b901-51ad55ccfe75.png";

export default function ClinicalSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [handleHover, setHandleHover] = useState(false);

  const updatePosition = useCallback(
    (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(pct);
    },
    []
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <section
      className="py-28 lg:py-40 px-8 lg:px-16"
      style={{ backgroundColor: CHARCOAL }}
      aria-label="Documented outcome — drag to reveal"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">
              Documented outcome
            </h2>
            <p className="mt-6 text-body-lg text-white/85 leading-relaxed max-w-lg">
              One of our documented results. Drag the divider to reveal the full image. The timeline
              below reflects the activation window: from baseline (0 seconds) to tension release
              (120 seconds).
            </p>
            <p className="mt-4 text-body text-white/65 leading-relaxed max-w-lg">
              Drag to reveal.
            </p>
          </div>

          {/* Right: slider (smaller) */}
          <div className="order-1 lg:order-2 w-full max-w-[520px] lg:max-w-none lg:w-full mx-auto">
            <div
              ref={containerRef}
              className="relative aspect-[4/3] w-full overflow-hidden select-none touch-none rounded-sm"
              style={{ backgroundColor: CHARCOAL }}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              <div className="absolute inset-0">
                <Image
                  src={RESULT5_IMAGE}
                  alt="Documented outcome"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-center"
                />
              </div>
              <div
                className="absolute top-0 bottom-0 right-0 z-10 overflow-hidden"
                style={{ left: `${position}%` }}
              >
                <Image
                  src={ZERO_LINES_OVERLAY}
                  alt=""
                  role="presentation"
                  fill
                  sizes="560px"
                  className="object-cover object-right"
                />
              </div>
              <div
                className="absolute top-0 bottom-0 z-20 w-10 -translate-x-1/2 flex items-center justify-center cursor-ew-resize"
                style={{ left: `${position}%` }}
                onPointerDown={handlePointerDown}
                onMouseEnter={() => setHandleHover(true)}
                onMouseLeave={() => setHandleHover(false)}
              >
                <motion.div
                  className="flex flex-col items-center gap-1"
                  animate={{ scale: isDragging ? 1.05 : 1 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  <div
                    className="w-0.5 flex-1 min-h-[60px] rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor: handleHover || isDragging ? TIFFANY : "rgba(192, 192, 200, 0.95)",
                      boxShadow: handleHover || isDragging ? `0 0 12px ${TIFFANY}80` : "0 0 12px rgba(255,255,255,0.15)",
                    }}
                  />
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{
                      backgroundColor: handleHover || isDragging ? `${TIFFANY}20` : "rgba(255,255,255,0.12)",
                      border: `1px solid ${handleHover || isDragging ? `${TIFFANY}80` : "rgba(192,192,200,0.6)"}`,
                    }}
                  >
                    <ChevronsLeftRight
                      className="w-3.5 h-3.5 transition-colors duration-300"
                      style={{ color: handleHover || isDragging ? TIFFANY : "#c0c0c8" }}
                      strokeWidth={1.8}
                    />
                  </div>
                  <div
                    className="w-0.5 flex-1 min-h-[60px] rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor: handleHover || isDragging ? TIFFANY : "rgba(192, 192, 200, 0.95)",
                      boxShadow: handleHover || isDragging ? `0 0 12px ${TIFFANY}80` : "0 0 12px rgba(255,255,255,0.15)",
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Time bar: 0 seconds (left) — 120 seconds (right), fill animates with position */}
            <div className="mt-6">
              <div
                className="h-1.5 w-full rounded-full overflow-hidden"
                style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${position}%`,
                    background: `linear-gradient(to right, ${GOLD}, ${TIFFANY})`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-caption tracking-[0.08em] text-white/60">
                <span>0 seconds</span>
                <span>120 seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

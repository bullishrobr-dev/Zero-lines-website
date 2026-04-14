"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHARCOAL = "#1A1A1A";
const TRANSITION = { duration: 0.4, ease: "easeInOut" as const };

// result 1–6 = default; click toggles to real result 1–6
const GALLERY_ITEMS: { result: string; realResult: string }[] = [
  {
    result: "/assets/result1-f4f205c7-b227-4279-800c-2b84c9a2230e.png",
    realResult: "/assets/realresult1-a6e12708-ec96-4010-a505-87991fec27f0.png",
  },
  {
    result: "/assets/result2-a16a82d7-9dd2-4c40-b06d-e77015eab0ad.png",
    realResult: "/assets/realresult2-2629a173-924e-44ad-8b8a-966591ef7d89.png",
  },
  {
    result: "/assets/result3-de6654d3-0867-44a8-b755-0f79f258171b.png",
    realResult: "/assets/realresult3-65953b97-8443-441c-8445-dcc8b3d039c8.png",
  },
  {
    result: "/assets/result4-0013dffa-58d3-487b-b010-3e85fcac811d.png",
    realResult: "/assets/realresult4-78f361d1-854b-4af2-b55b-4a5527996482.png",
  },
  {
    result: "/assets/result5-0c3d934e-a402-41cb-9685-f79ebf470da2.png",
    realResult: "/assets/realresult5-5072b3e7-170b-40f7-88fc-4889c53b6dff.png",
  },
  {
    result: "/assets/result6-08a27de4-a69c-4f6e-83d6-2438fbab76c4.png",
    realResult: "/assets/realresult6-76b75e48-c65e-4aa7-bdd8-6ed5485150dd.png",
  },
];

function GalleryCard({
  pair,
  index,
}: {
  pair: { result: string; realResult: string };
  index: number;
}) {
  const [showReal, setShowReal] = useState(false);
  const num = index + 1;

  return (
    <button
      type="button"
      onClick={() => setShowReal((prev) => !prev)}
      className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-white/5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
      aria-label={showReal ? `Showing unedited result ${num}. Click to show result ${num}.` : `Result ${num}. Click to view unedited.`}
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" initial={false}>
          {showReal ? (
            <motion.div
              key="real"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={TRANSITION}
              className="absolute inset-0"
            >
              <Image
                src={pair.realResult}
                alt={`Unedited result ${num}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={TRANSITION}
              className="absolute inset-0"
            >
              <Image
                src={pair.result}
                alt={`Result ${num}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {!showReal && (
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-3 text-center"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
          }}
        >
          <span className="text-caption text-white/90 tracking-[0.06em]">
            Click to see real result (unedited)
          </span>
        </div>
      )}
      {showReal && (
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-2 text-center"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
          }}
        >
          <span className="text-caption text-white/80 tracking-[0.06em]">
            Real result {num}
          </span>
        </div>
      )}
    </button>
  );
}

export default function ClinicalGallery() {
  return (
    <section
      className="py-28 lg:py-40 px-8 lg:px-16"
      style={{ backgroundColor: CHARCOAL }}
      aria-labelledby="documented-outcomes-heading"
    >
      <div className="mx-auto max-w-[1440px]">
        <h2
          id="documented-outcomes-heading"
          className="text-3xl md:text-4xl font-light tracking-tight text-white"
        >
          Documented Outcomes
        </h2>
        <p className="mt-6 text-body-lg text-white/80 max-w-3xl leading-relaxed">
          These photos were slightly edited so they look more professional on the webpage — the
          result itself was not edited. Click any image to see the real outcome from our actual
          shops: the unedited result, with no retouching. What you see by default is the same
          result, lightly polished for presentation.
        </p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {GALLERY_ITEMS.map((pair, index) => (
            <GalleryCard key={index} pair={pair} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Shared motion variants and viewport settings for Science, Story, and other editorial pages.
 * Use with Framer Motion's initial/whileInView and variants for scroll-driven animations.
 */

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const EASE_OUT = [0.33, 1, 0.68, 1] as [number, number, number, number];

export const viewportOnce = { once: true, amount: 0.08 };
export const viewportTight = { once: true, amount: 0.12 };
export const viewportLoose = { once: true, amount: 0.2 };

export const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export const fadeUpLong = {
  hidden: { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const staggerItemScale = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE_OUT } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } },
};

export const popIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE_OUT } },
};

export const SITE_NAME = "Zero Lines";
export const SITE_DESCRIPTION =
  "Clinical-luxury skincare engineered for skin longevity. Swiss precision meets molecular science.";
export const SITE_URL = "https://zerolines.com";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Science", href: "/science" },
  { label: "Protocol", href: "/protocol" },
  { label: "Technology", href: "/technology" },
  { label: "Diagnostic", href: "/diagnostic" },
  { label: "Story", href: "/story" },
  { label: "Contact", href: "/contact" },
];

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: "topical" | "device";
  image: string;
  featured: boolean;
}

export const PRODUCTS: Product[] = [
  {
    slug: "syringe",
    name: "The Syringe",
    tagline: "Precision activation. Targeted delivery protocol.",
    category: "topical",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    featured: true,
  },
  {
    slug: "serum",
    name: "The Serum",
    tagline: "Molecular longevity complex. Daily activation base.",
    category: "topical",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
    featured: false,
  },
  {
    slug: "day-cream",
    name: "Day Cream",
    tagline: "UV-shield matrix. Daytime barrier protocol.",
    category: "topical",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
    featured: false,
  },
  {
    slug: "night-cream",
    name: "Night Cream",
    tagline: "Nocturnal repair activation. Cellular restoration cycle.",
    category: "topical",
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800&q=80",
    featured: false,
  },
  {
    slug: "peeling-gel",
    name: "Peeling Gel",
    tagline: "Enzymatic renewal protocol. Surface recalibration.",
    category: "topical",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
    featured: false,
  },
  {
    slug: "syringe-refill",
    name: "Syringe Refill",
    tagline: "Sustained protocol continuity. Zero interruption.",
    category: "topical",
    image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800&q=80",
    featured: false,
  },
];

export const PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug);

export interface TechDevice {
  id: string;
  name: string;
  description: string;
  specs: { label: string; value: string }[];
}

export const TECH_DEVICES: TechDevice[] = [
  {
    id: "red-infrared-led",
    name: "Red / Infrared LED",
    description:
      "Deep-tissue photobiomodulation activating mitochondrial ATP production for accelerated cellular repair.",
    specs: [
      { label: "Wavelength", value: "630nm Red / 850nm Near-Infrared" },
      { label: "Irradiance", value: "45 mW/cm²" },
      { label: "Protocol Duration", value: "12 minutes per session" },
      { label: "Activation Depth", value: "4-6mm subcutaneous penetration" },
    ],
  },
  {
    id: "laser",
    name: "Precision Laser",
    description:
      "Cold laser technology for targeted collagen remodeling and dermal matrix densification.",
    specs: [
      { label: "Wavelength", value: "660nm Coherent Light" },
      { label: "Power Output", value: "5mW Class 3R" },
      { label: "Spot Size", value: "2mm focused beam" },
      { label: "Protocol Duration", value: "8 minutes per zone" },
    ],
  },
  {
    id: "blue-uv",
    name: "Blue / UV Light",
    description:
      "Antimicrobial photodynamic therapy targeting P. acnes while activating vitamin D synthesis pathways.",
    specs: [
      { label: "Wavelength", value: "415nm Blue / 395nm Near-UV" },
      { label: "Irradiance", value: "38 mW/cm²" },
      { label: "Protocol Duration", value: "10 minutes per session" },
      { label: "Safety", value: "UV-filtered below 380nm threshold" },
    ],
  },
  {
    id: "ems",
    name: "EMS Microcurrent",
    description:
      "Electrical muscle stimulation delivering sub-sensory microcurrent for facial muscle re-education.",
    specs: [
      { label: "Current Range", value: "100-600 μA" },
      { label: "Frequency", value: "0.5-10 Hz programmable" },
      { label: "Waveform", value: "Modified square wave" },
      { label: "Protocol Duration", value: "15 minutes full-face" },
    ],
  },
];

export const PLACEHOLDER_IMAGES = {
  hero: "https://images.unsplash.com/photo-1553532434-5ab5b6b84993?w=1920&q=80",
  science: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80",
  technology: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80",
  story: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  diagnostic: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80",
} as const;

export const FRAMER_FADE_UP = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
} as const;

export const FRAMER_STAGGER_CONTAINER = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
} as const;

export const SITE_NAME = "Zero Lines";
export const SITE_DESCRIPTION =
  "Clinical-luxury skincare engineered for skin longevity. Advanced skincare solutions powered by biomimetic science, PDRN, and Pyrenean mineral research.";
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
  { label: "Our Story", href: "/story" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Science", href: "/science" },
  { label: "Protocol", href: "/protocol" },
  { label: "Technology", href: "/technology" },
  { label: "Diagnostic", href: "/diagnostic" },
  { label: "Our Story", href: "/story" },
  { label: "Contact", href: "/contact" },
];

const BRAND_ASSET_BASE = "/brand-assets";
const brandAsset = (filename: string) => `${BRAND_ASSET_BASE}/${filename}`;

export const BRAND_IMAGES = {
  logo: brandAsset("logo-89043c72-0bc6-441e-871c-f7b318ecb5f0.png"),
  logoWordmark: brandAsset("Printable_Resolution_File-7bab716c-0536-448a-b901-51ad55ccfe75.png"),
  productLineup: brandAsset("All_products_-6171f089-fe01-4eb7-87d9-7de635bbd03f.png"),
  products: {
    peelingGel: brandAsset("peeling_gel-473af74a-e3c1-4a32-98ef-46a4b80500ad.png"),
    syringe: brandAsset("Syringe-77d71170-a4a1-4996-843d-75674aca82f1.png"),
    serum: brandAsset("Face_serum-283f757c-1685-4775-b86d-331169c27a5b.png"),
    dayCream: brandAsset("zero_lines_day_cream-1371c261-0ac7-4619-a901-9a5528fbb6a5.png"),
    nightCream: brandAsset("night_cream-26c51b89-d153-4cc7-bcd5-5509a370082e.png"),
    refillFallback: brandAsset("logo-89043c72-0bc6-441e-871c-f7b318ecb5f0.png"),
  },
  support: {
    homepageScienceContrast: brandAsset("pexels-mart-production-8076141-791d4978-6529-4bcf-9031-f92753dd150f.png"),
    homepageScienceActivation: brandAsset("Formulation-Development-Feature-d5b9315d-47c5-4e36-9575-cb388a621134.png"),
    scienceHero: brandAsset("cosmetic-formulation-testing_large-6ee5bb93-131f-4d45-99b1-65b4ee795073.png"),
    scienceMinerals: brandAsset("beautiful_lake-50be5496-9713-4171-a974-274fd3ec2c76.png"),
    scienceRefraction: brandAsset("Private_Label_Skincare_Product_Formulation_and_Testing_at_the_Pravada_Labs-d6c37b60-4c2a-4ea6-be46-82bc36edcf3e.png"),
    scienceArchitecture: brandAsset("Formulation-Development-Feature-d5b9315d-47c5-4e36-9575-cb388a621134.png"),
    scienceHydration: brandAsset("pexels-orhunruzgaroz-10822254-729f5216-13ef-43bb-a9e1-3ab0d05840c3.png"),
    storyHero: brandAsset("andorra_lake-ee2f4d3c-0192-4741-95fe-ea59d553c70c.png"),
    storyOrigin: brandAsset("andorra_nature-664ca3a7-8bcc-4b45-8ade-be922604ab54.png"),
    storySource: brandAsset("beautiful_lake-50be5496-9713-4171-a974-274fd3ec2c76.png"),
    technologyHero: brandAsset("RF_device_model-b897b260-edd1-4344-85a8-100fe76caf02.png"),
    technologyTexture: brandAsset("Bio_Pen_T6_Skin_Tightening_and_Lifting_Device-9151c1e4-7d27-45fd-aa20-bdac2cec0f3d.png"),
    technologyPrecision: brandAsset("Blu-U-Treatment-for-Skin-Cancer-8c1432b2-7fe6-4c84-8b8d-0ebe5e1ad9ea.png"),
  },
  technology: {
    blueUvHero: brandAsset("23_1019_PRO_TREATMENT_PAGES_ARTICLE_DETAIL_HERO_BANNER_BLUE_LIGHT_THERAPY_M-28dffe33-7092-4564-80b8-24868d39aa6c.png"),
    blueUvSupport: brandAsset("Blu-U-Treatment-for-Skin-Cancer-8c1432b2-7fe6-4c84-8b8d-0ebe5e1ad9ea.png"),
    redInfraredHero: brandAsset("Infrared-Therapy-H2-Health-21b9b942-5ad2-4ce5-b5bd-c72d66e10781.png"),
    redInfraredSupport: brandAsset("Header-Top-Benefits-of-Photobiomodulation-Therapy-for-Chronic-Pain-Relief-scaled.jpg-03e78044-3a29-4264-825f-7a28a664e793.png"),
    rfHero: brandAsset("RF_device_model-b897b260-edd1-4344-85a8-100fe76caf02.png"),
    rfSupport: brandAsset("Lucid_Origin_Aesthetic_specialist_performing_an_RF_skin_tighte_1-1024x1024-578de8c8-9971-4183-bcbc-393ab3b1c132.png"),
    emsHero: brandAsset("EMS_2-04f5ffde-96cd-4a74-879a-56e26c9fc516.png"),
    emsSupport: brandAsset("EMS_-584e5f5a-108e-4ce9-b54f-40aaa300a832.png"),
  },
  diagrams: {
    skincareTechBenefits: brandAsset("skincare_tech_benfeits-96d4ca96-7446-41ce-9c54-f7087143cbac.png"),
    redInfraredFaceBody: brandAsset("Red_and_Infrared_Light_benefits_for_both_face_and_body.-5b3ae87a-8cd2-4d7e-9c99-3d5f4ebe756b.png"),
    ems: brandAsset("EMS_diagram-26285135-e197-476e-9b11-e3e53cdb29b9.png"),
    rf: brandAsset("RF_diagram-8cf4af33-d6a1-45f9-b382-846ed826c4e8.png"),
    rfBenefits: brandAsset("benfefits_of_RF-d21763e3-72bb-4eff-a33b-31b29c583ded.png"),
    blueUv: brandAsset("blueUV_diagram-32edefa3-dfe4-45b4-8c6e-f5c1cd2be0aa.png"),
    redInfrared: brandAsset("red_infra_red_diagram-8d08b2f2-2873-422b-9684-da05089fa7a0.png"),
    ledWavelengths: brandAsset("LED_diagrams_-13ccb506-c2bf-4f24-89d5-1e3af1f9b1a7.png"),
  },
  editorial: {
    serumDropper: brandAsset("pexels-abel-kayode-155872537-10850705-7fad2782-830b-4e36-b08a-1f2d4af87a7b.png"),
    dayPortrait: brandAsset("pexels-anastasia-shuraeva-6236112-49484a99-180b-4863-a82e-acd40585fba8.png"),
    nightPortrait: brandAsset("pexels-cottonbro-4612151-7eac8f89-b479-455c-a588-fc0d578cf216.png"),
    cleanRitual: brandAsset("pexels-olly-3754678-d0d3176b-816b-4765-83bb-c3f0eb5f8fb0.png"),
    blueLightPortrait: brandAsset("pexels-shiny-diamond-3762876-2b776102-9108-48e6-a982-fed115d334e3.png"),
    clinicalHands: brandAsset("pexels-cottonbro-3997993-2dcbdabc-a2aa-4167-9659-28811655ac0d.png"),
  },
} as const;

export const PRODUCT_EDITORIAL_IMAGES = {
  peelingGel: {
    story: BRAND_IMAGES.editorial.cleanRitual,
    texture: BRAND_IMAGES.support.scienceHydration,
  },
  syringe: {
    story: BRAND_IMAGES.productLineup,
    texture: BRAND_IMAGES.support.scienceHydration,
  },
  serum: {
    story: BRAND_IMAGES.editorial.serumDropper,
    texture: BRAND_IMAGES.support.scienceHydration,
  },
  dayCream: {
    story: BRAND_IMAGES.editorial.dayPortrait,
    texture: BRAND_IMAGES.support.storySource,
  },
  nightCream: {
    story: BRAND_IMAGES.editorial.nightPortrait,
    texture: BRAND_IMAGES.support.storyHero,
  },
  refill: {
    story: BRAND_IMAGES.logoWordmark,
  },
} as const;

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: "topical" | "device";
  image: string;
  featured: boolean;
}

// Protocol order: 1 Peeling (canvas reset), 2 Syringe, 3 Serum, 4 Day cream, 5 Night cream, 6 Refill
export const PRODUCTS: Product[] = [
  {
    slug: "peeling-gel",
    name: "Peeling Gel",
    tagline: "Enzymatic canvas reset. The first step of the protocol.",
    category: "topical",
    image: BRAND_IMAGES.products.peelingGel,
    featured: false,
  },
  {
    slug: "syringe",
    name: "The Syringe",
    tagline: "Precision activation. Targeted delivery protocol.",
    category: "topical",
    image: BRAND_IMAGES.products.syringe,
    featured: true,
  },
  {
    slug: "serum",
    name: "The Serum",
    tagline: "Molecular messenger. High-velocity bio-signal delivery.",
    category: "topical",
    image: BRAND_IMAGES.products.serum,
    featured: false,
  },
  {
    slug: "day-cream",
    name: "Day Cream",
    tagline: "Environmental shield. Active barrier protocol.",
    category: "topical",
    image: BRAND_IMAGES.products.dayCream,
    featured: false,
  },
  {
    slug: "night-cream",
    name: "Night Cream",
    tagline: "Nocturnal repair activation. Circadian restoration cycle.",
    category: "topical",
    image: BRAND_IMAGES.products.nightCream,
    featured: false,
  },
  {
    slug: "syringe-refill",
    name: "Syringe Refill",
    tagline: "Twelve months of precision activation. Zero waste.",
    category: "topical",
    image: BRAND_IMAGES.products.refillFallback,
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
    name: "Red / Infrared LED — Cellular Light Activation",
    description:
      "Red (630–660nm) and Near-Infrared (810–850nm) wavelengths penetrate beyond the dermal layer to reach the mitochondria — the cellular energy centers. Photobiomodulation increases ATP production, accelerating the cellular repair processes that our PDRN and peptide formulations initiate. When used before or after the Syringe application, Red/Infrared LED therapy amplifies peptide absorption rates and accelerates the collagen synthesis cycle. Medical-grade wavelength calibration. Protocol: use before Syringe application for maximum ingredient bioavailability.",
    specs: [
      { label: "Wavelength", value: "630–660nm Red / 810–850nm Near-Infrared" },
      { label: "Irradiance", value: "Medical-grade calibration" },
      { label: "Protocol Duration", value: "Before or after Syringe application" },
      { label: "Activation Depth", value: "Mitochondrial layer" },
    ],
  },
  {
    id: "laser",
    name: "Precision Laser — Targeted Structural Remodeling",
    description:
      "Low-level laser technology delivers concentrated photonic energy to precise anatomical points — stimulating local fibroblast activity, improving micro-circulation, and accelerating extracellular matrix reorganization at the targeted site. Used in combination with the Syringe's activation zones (periorbital, nasolabial, forehead), the precision laser creates a focal-point amplification effect that accelerates structural remodeling in the areas of greatest concern.",
    specs: [
      { label: "Wavelength", value: "660nm Coherent Light" },
      { label: "Power Output", value: "5mW Class 3R" },
      { label: "Spot Size", value: "2mm focused beam" },
      { label: "Protocol Duration", value: "8 minutes per zone" },
    ],
  },
  {
    id: "blue-uv",
    name: "Blue / UV Light — Surface Regulation Protocol",
    description:
      "Blue light (415nm) targets sebaceous gland activity and surface bacterial populations without the barrier disruption of topical anti-bacterial agents. UV micro-dose protocols address pigmentation irregularities at the melanocyte level, providing a clinical alternative to aggressive chemical brightening. Used weekly as a complement to the Peeling Gel reset step.",
    specs: [
      { label: "Wavelength", value: "415nm Blue / Near-UV" },
      { label: "Irradiance", value: "38 mW/cm²" },
      { label: "Protocol Duration", value: "10 minutes per session" },
      { label: "Integration", value: "Weekly, complement to Peeling Gel" },
    ],
  },
  {
    id: "ems",
    name: "EMS Microcurrent — Structural Muscle Re-Education",
    description:
      "Microcurrent technology operates at the sub-sensory electrical threshold — communicating directly with the fascia and facial muscle network without pain or visible tissue stress. Results are not surface-level: microcurrent re-educates muscle memory, lifting and recontouring the deeper facial architecture that no topical compound can reach. When used with the Syringe's neuro-peptide tension release complex, EMS creates a compounding effect — peptides signal muscles to release tension while microcurrent re-trains resting muscle position. Use after Syringe application; the post-activation window maximizes conductive penetration.",
    specs: [
      { label: "Current Range", value: "100-600 μA" },
      { label: "Frequency", value: "0.5-10 Hz programmable" },
      { label: "Waveform", value: "Modified square wave" },
      { label: "Protocol Integration", value: "After Syringe application" },
    ],
  },
];

// Technology modalities for /technology — order matches strip and detail pages
export interface Technology {
  slug: string;
  name: string;
  shortName: string; // for strip label
  tagline: string;
  image: string;
}

// Order: Blue/UV first (antibacterial, cleaning), then Red/IR, RF, EMS
export const TECHNOLOGIES: Technology[] = [
  {
    slug: "blue-uv",
    name: "Blue & UV Light",
    shortName: "Blue / UV",
    tagline: "Antibacterial, surface regulation. Sebum and clarity at the source.",
    image: BRAND_IMAGES.technology.blueUvHero,
  },
  {
    slug: "red-infrared",
    name: "Red & Infrared Light",
    shortName: "Red / IR",
    tagline: "Cellular light activation. Photobiomodulation at mitochondrial depth.",
    image: BRAND_IMAGES.technology.redInfraredHero,
  },
  {
    slug: "rf",
    name: "RF Technology",
    shortName: "RF",
    tagline: "Radio frequency. Collagen remodelling and thermal tightening at depth.",
    image: BRAND_IMAGES.technology.rfHero,
  },
  {
    slug: "ems",
    name: "EMS Microcurrent",
    shortName: "EMS",
    tagline: "Structural muscle re-education. The current that trains the face.",
    image: BRAND_IMAGES.technology.emsHero,
  },
];

export const TECHNOLOGY_SLUGS = TECHNOLOGIES.map((t) => t.slug);

export const SUPPORT_IMAGES = BRAND_IMAGES.support;

export const PLACEHOLDER_IMAGES = {
  hero: BRAND_IMAGES.productLineup,
  science: SUPPORT_IMAGES.scienceHero,
  technology: SUPPORT_IMAGES.technologyHero,
  story: SUPPORT_IMAGES.storyHero,
  diagnostic: BRAND_IMAGES.editorial.clinicalHands,
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

import { BRAND_IMAGES, TECHNOLOGIES, TECHNOLOGY_SLUGS } from "./constants";

export type TechnologySlug = (typeof TECHNOLOGIES)[number]["slug"];

export interface DataPoint {
  value: string;
  label: string;
  source?: string;
}

export interface ComparisonCard {
  title: string;
  subtitle: string;
  points: string[];
  active: boolean;
}

export interface BodyBenefitItem {
  iconKey: string;
  title: string;
  text: string;
}

export interface BodySectionContent {
  heading: string;
  intro: string[];
  subsections: { title: string; paragraphs: string[] }[];
  bodyBenefits: BodyBenefitItem[];
}

export interface TechnologyContent {
  slug: TechnologySlug;
  title: string;
  metaDescription: string;
  heroIntro: string;
  whatItIs: { heading: string; paragraphs: string[] };
  comparison: { heading: string; body: string };
  comparisonCards: ComparisonCard[];
  science: { heading: string; intro: string; points: { title: string; text: string }[] };
  protocolIntegration: { heading: string; body: string; protocolVsDevice: string };
  dataPoints: DataPoint[];
  optionsCta: string;
  optionsSubtext: string;
  imageStory: string;
  imageTexture: string;
  /** Red & infrared only: body pain, chronic pain, arthritis, recovery. */
  bodySection?: BodySectionContent;
}

const CONTENT: Record<TechnologySlug, TechnologyContent> = {
  "red-infrared": {
    slug: "red-infrared",
    title: "Red & Infrared Light",
    metaDescription:
      "Red and near-infrared photobiomodulation. Cellular light activation at mitochondrial depth. How LED therapy works and why it outperforms surface-only topicals.",
    heroIntro:
      "Red (630–660 nm) and near-infrared (810–850 nm) light penetrate beyond the epidermis into the dermis and the cellular energy centres—the mitochondria. This is photobiomodulation: light as a signal that upregulates ATP production, reduces oxidative stress, and supports collagen synthesis and repair at a depth no serum or cream can reach.",
    whatItIs: {
      heading: "What Red and Infrared Light Actually Do",
      paragraphs: [
        "Most skincare acts on the surface. Cleansers remove debris; acids exfoliate; moisturisers seal. Red and near-infrared LED therapy is different. The wavelengths are chosen so that they pass through the skin with minimal scatter and absorption by melanin or blood, and are absorbed by chromophores in the mitochondria. The result is a measurable increase in cellular energy (ATP), which supports everything from fibroblast activity to barrier repair.",
        "Clinical research has documented benefits for wound healing, reduction of inflammation, and improvement in the appearance of fine lines and skin texture when used consistently. The effect is cumulative: the technology does not rely on a one-off application of a compound, but on repeated, safe exposure to light that trains the skin to perform better. That is why we treat it as foundational—like the gym—rather than as an optional add-on.",
      ],
    },
    comparison: {
      heading: "Why a Device Beats Serums and Masks Alone",
      body:
        "A red-light device is a one-time investment. You own the technology; you use it for years. Serums and masks, by contrast, are consumed. They sit on the surface and deliver a finite dose of actives. They are extraordinarily useful when layered on top of a routine that already includes technology—they are the support that speeds recovery and amplifies results. But they cannot penetrate to the mitochondria. They cannot trigger photobiomodulation. Without the device, you are only ever working from the outside in. With red and infrared light, you build the foundation. With our protocol on top, you compound the outcome.",
    },
    comparisonCards: [
      { title: "Topicals only", subtitle: "Serums, creams, masks", points: ["Surface-only delivery", "Consumed with each use", "No photobiomodulation at depth"], active: false },
      { title: "Devices only", subtitle: "Foundation, no protocol", points: ["Full-face collagen support", "One-time investment", "Missing targeted zone work"], active: false },
      { title: "Devices + Zero Lines Protocol", subtitle: "Full system", points: ["Red/IR for full-face collagen and mitochondria", "Syringe for expression lines and wrinkles in targeted zones", "Serum and creams for daily support and amplification"], active: true },
    ],
    science: {
      heading: "The Science of Photobiomodulation",
      intro:
        "Red and NIR light are absorbed primarily by cytochrome c oxidase in the mitochondrial respiratory chain. This leads to increased ATP production, modulation of reactive oxygen species, and downstream effects on gene expression and tissue repair.",
      points: [
        {
          title: "Wavelength and depth",
          text: "Red (630–660 nm) and NIR (810–850 nm) offer an optimal balance of penetration and absorption. Shorter wavelengths are scattered or absorbed superficially; these reach the dermis and beyond, where fibroblasts and mitochondria reside.",
        },
        {
          title: "Dose and consistency",
          text: "Effect depends on irradiance (power density), exposure time, and frequency. At-home devices are calibrated to safe, effective doses. Consistency over weeks and months is what drives visible, lasting change.",
        },
        {
          title: "Protocol synergy",
          text: "When used before or after the Syringe application, red and infrared light can support absorption and efficacy of actives. The device works on general collagen and cellular energy across the full face; the Syringe targets expression lines and wrinkles in specific zones.",
        },
      ],
    },
    protocolIntegration: {
      heading: "How It Fits the Zero Lines Protocol",
      body:
        "We recommend red and infrared LED as a core technology in the hardware protocol. Use it on the same days as the Syringe, or on alternate days, depending on your schedule. The device is not a replacement for the protocol—it is the structural layer. Our formulations then amplify and extend the result. All devices we recommend are sourced from trusted third-party partners; we do not manufacture hardware, we curate and calibrate.",
      protocolVsDevice:
        "The Syringe addresses expression lines and wrinkles in targeted zones—periorbital, nasolabial, glabellar, forehead. Red and infrared devices work on muscles and general collagen production across the full face.",
    },
    dataPoints: [
      { value: "1–2 mm", label: "630 nm penetration (epidermis / upper dermis)", source: "Depth by wavelength" },
      { value: "2–5 mm", label: "660 nm penetration (dermis)", source: "Depth by wavelength" },
      { value: "Deeper", label: "810 nm (muscle / connective tissue)", source: "NIR penetration" },
    ],
    optionsCta: "Explore Red & Infrared Devices",
    optionsSubtext: "Curated devices from trusted partners. Available through Zero Lines when you are ready to add hardware to your protocol.",
    imageStory: BRAND_IMAGES.technology.redInfraredHero,
    imageTexture: BRAND_IMAGES.technology.redInfraredSupport,
    bodySection: {
      heading: "Beyond the Face: Red and Infrared for the Body",
      intro: [
        "The same photobiomodulation that supports skin and collagen at depth is a well-studied technology for the rest of the body. Red and near-infrared light penetrate muscle, connective tissue, and joints—reducing inflammation, supporting recovery, and helping to manage chronic pain and everyday aches. We do not position our protocol as a medical treatment; we do, however, want you to know that the devices we recommend are built on a technology with a robust evidence base beyond facial skincare.",
        "Clinical research has documented benefits for tendinopathy, osteoarthritis, neuropathic pain, fibromyalgia, delayed-onset muscle soreness, and wound or tissue repair. The mechanisms—mitochondrial activation, cytokine modulation, and reduced oxidative stress—are the same whether the light is applied to the face or to a shoulder, knee, or back. If you use red and infrared for the face, the option to use it on the body is supported by science.",
      ],
      subsections: [
        {
          title: "Chronic Pain and Comfort",
          paragraphs: [
            "Systematic reviews of randomized trials report that photobiomodulation can significantly reduce pain in conditions such as fibromyalgia and neuropathy, with a low incidence of adverse events. The therapy works by enhancing mitochondrial function, modulating inflammation, and supporting neural repair—including upregulation of neurotrophic factors. In neuropathic pain models (e.g. chronic constriction injury, diabetic neuropathy), both local and remote application of red and NIR light have shown analgesic and neuroprotective effects.",
            "Whole-body photobiomodulation in fibromyalgia has been studied in feasibility trials, with promising effects on pain, fatigue, anxiety, depression, and sleep. For tendinopathy, combining red and NIR light with exercise has been shown to yield greater pain reduction and improved function compared to exercise alone. Evidence remains heterogeneous in terms of exact parameters (wavelength, dose, frequency), but the direction of benefit is consistent: red and infrared light can be a useful part of a pain-management and comfort strategy when used in a calibrated, consistent way.",
          ],
        },
        {
          title: "Arthritis, Joints, and Inflammation",
          paragraphs: [
            "Red and near-infrared light are absorbed by chromophores in mitochondria and other structures, leading to increased ATP production and a shift in the inflammatory environment. In arthritis, photobiomodulation has been shown to modulate inflammatory biomarkers: studies in knee osteoarthritis report reductions in cytokines such as IL-1β, IL-6, and IL-8, and in markers of cartilage degradation, alongside improvements in functional capacity when light therapy is combined with exercise. Near-infrared wavelengths (e.g. 808 nm) penetrate deeper than red (660 nm), making them particularly relevant for joint and deeper tissue applications.",
            "At the cellular level, photobiomodulation influences inflammasome-related pathways. It can decrease proinflammatory cytokines such as IL-1β and IL-18—key drivers of inflammasome activation—while upregulating anti-inflammatory signals such as IL-10. This redox-mediated, coordinated signalling (involving NFκB and TGF-β) promotes tissue repair and adaptation to stress rather than prolonged inflammation. For joint stiffness, swelling, and the daily discomfort associated with osteoarthritis and inflammatory joint conditions, red and NIR devices offer a non-invasive, at-home option that fits alongside movement and other care you may already use.",
          ],
        },
        {
          title: "Recovery, Muscle Soreness, and Everyday Aches",
          paragraphs: [
            "Athletes and active users have adopted red and infrared light for recovery. The same mechanisms that support skin—increased ATP, improved circulation, reduced oxidative stress, and modulation of inflammation—apply to muscle and connective tissue. Red and NIR light promote nitric oxide release and vasodilation, improving blood flow and oxygen delivery to muscles and joints, which can ease stiffness and soreness. Studies on delayed-onset muscle soreness (DOMS) show that red light therapy can significantly reduce muscle soreness and fatigue after intense exercise.",
            "Whether the discomfort comes from overuse, prolonged sitting, or occasional strain, applying red and NIR to the affected area is a proven, low-risk approach. Many at-home devices are designed for both face and body; the same technology that supports collagen and cellular energy in the skin can be used on the neck, shoulders, back, knees, or other areas where you feel tension or ache. Consistency and correct dose matter—as with the face—so following device guidelines and, when in doubt, consulting a healthcare provider is recommended.",
          ],
        },
        {
          title: "How It Works at the Cellular Level",
          paragraphs: [
            "Photobiomodulation generates subtle reactive oxygen species (ROS) signalling in mitochondria, which activates latent TGF-β1 and downstream pathways (including Smad3, p38, ERK) with NFκB as an integrator. The result is a shift away from sustained inflammation and toward repair and stress adaptation. Inflammasome-driven cytokines are downregulated; anti-inflammatory and repair pathways are favoured. This is why the same technology can support facial collagen and skin texture and, when applied to the body, help with pain, joint comfort, and recovery.",
            "Depth of penetration depends on wavelength: red (630–660 nm) reaches the dermis and upper structures; near-infrared (810–850 nm and beyond) reaches muscle, tendon, and deeper connective tissue. Body applications typically benefit from NIR or a combination of red and NIR for full coverage from surface to depth. The devices we recommend for the Zero Lines protocol are suitable for face and, where indicated by the manufacturer, for body use—giving you one technology with a broad evidence base for both skin and general comfort and recovery.",
          ],
        },
      ],
      bodyBenefits: [
        {
          iconKey: "Heart",
          title: "Chronic Pain & Comfort",
          text: "Clinical research supports use of red and NIR for fibromyalgia, neuropathy, and tendinopathy. Photobiomodulation modulates inflammation and supports neural repair—helping to reduce pain and improve comfort when used consistently and as directed.",
        },
        {
          iconKey: "Bone",
          title: "Joints & Inflammation",
          text: "Red and NIR can reduce inflammatory cytokines and markers of cartilage stress in osteoarthritis. By influencing inflammasome-related pathways and promoting anti-inflammatory signalling, light therapy may ease joint stiffness and discomfort alongside movement and other care.",
        },
        {
          iconKey: "Activity",
          title: "Recovery & Function",
          text: "Muscle soreness, DOMS, and everyday aches respond to the same mechanisms: ATP support, circulation, and reduced oxidative stress. Red and NIR improve blood flow and tissue repair—supporting recovery and function for both face and body.",
        },
      ],
    },
  },
  rf: {
    slug: "rf",
    title: "RF Technology",
    metaDescription:
      "Radio frequency for skin. Collagen remodelling and thermal tightening at depth. How RF devices work and why they are a lasting investment compared to surface-only skincare.",
    heroIntro:
      "Radio frequency (RF) delivers controlled thermal energy into the dermis without damaging the epidermis. The result is collagen remodelling, tightening, and a gradual improvement in the appearance of laxity and texture. No cream can generate this effect at depth—RF is a technology you invest in once and use for years.",
    whatItIs: {
      heading: "What RF Actually Does",
      paragraphs: [
        "RF devices use electromagnetic energy in the radio-frequency range. When applied to the skin, the current meets resistance in the tissue and generates heat. The heat is focused in the dermis, where collagen and elastin live. The controlled thermal stimulus triggers a wound-healing response: fibroblasts are activated, new collagen is laid down, and over time the skin remodels—tighter, smoother, more resilient.",
        "Unlike aggressive lasers or invasive procedures, well-calibrated RF is non-ablative: the surface stays intact while the deeper layers respond. Treatment is typically comfortable and requires no downtime. Results are cumulative and long-lasting when used consistently. That is why we position RF as a foundational technology—the gym—rather than a one-off treatment.",
      ],
    },
    comparison: {
      heading: "Why a Device Beats Creams and Serums Alone",
      body:
        "No serum can heat the dermis. No mask can remodel collagen at depth. Topicals work on the surface and the upper layers; they support barrier function, hydration, and the delivery of actives. They are essential—but they cannot do what RF does. An RF device is a one-time investment: you own the technology and use it for years. It is the structural work. Serums and our protocol are the support that accelerates recovery and amplifies the result. Without the device, you are only ever working from the outside. With RF, you build the foundation; with the protocol on top, you compound the outcome.",
    },
    comparisonCards: [
      { title: "Topicals only", subtitle: "Serums, creams, masks", points: ["Surface and upper layers only", "No thermal remodelling at depth", "Cannot stimulate dermal collagen"], active: false },
      { title: "Devices only", subtitle: "Foundation, no protocol", points: ["Full-face collagen and elastin remodelling", "One-time investment", "Missing targeted zone refinement"], active: false },
      { title: "Devices + Zero Lines Protocol", subtitle: "Full system", points: ["RF for full-face tightening and collagen", "Syringe for expression lines and wrinkles in targeted zones", "Serum and creams for daily support and amplification"], active: true },
    ],
    science: {
      heading: "The Science of Radio Frequency",
      intro:
        "RF energy causes oscillation of charged particles in the tissue, generating heat. The depth and distribution of heating depend on frequency, electrode design, and application. Clinical-grade at-home devices are calibrated for safety and efficacy.",
      points: [
        {
          title: "Depth and selectivity",
          text: "Lower frequencies penetrate deeper; higher frequencies concentrate heat more superficially. Multi-frequency or bipolar designs allow targeting of different layers for a balanced remodelling effect.",
        },
        {
          title: "Collagen response",
          text: "Controlled heating denatures existing collagen and stimulates fibroblasts to produce new collagen and elastin. The process takes weeks to months; results are gradual and durable.",
        },
        {
          title: "Protocol synergy",
          text: "RF complements the topical protocol. The device works on general collagen and elastin across the full face; the Syringe targets expression lines and wrinkles in specific zones. Use the device on a schedule that fits your routine; follow with the Serum or Syringe as recommended.",
        },
      ],
    },
    protocolIntegration: {
      heading: "How It Fits the Zero Lines Protocol",
      body:
        "RF is one of the four core technologies we recommend for the hardware protocol. It addresses laxity and texture at depth—something no topical can do alone. Devices are provided by trusted third-party partners; we curate and calibrate, we do not manufacture. When you are ready to add RF to your routine, options are available through us.",
      protocolVsDevice:
        "The Syringe addresses expression lines and wrinkles in targeted zones—periorbital, nasolabial, glabellar, forehead. RF devices work on muscles and general collagen production across the full face.",
    },
    dataPoints: [
      { value: "+25%", label: "Collagen-occupied area at 1 month", source: "Histologic study" },
      { value: "+30%", label: "Collagen-occupied area at 3 months", source: "Histologic study" },
      { value: "+67%", label: "Elastin at 1 month", source: "Histologic study" },
      { value: "+103%", label: "Elastin at 3 months", source: "Histologic study" },
    ],
    optionsCta: "Explore RF Devices",
    optionsSubtext: "Curated RF devices from trusted partners. Available through Zero Lines when you are ready to add hardware to your protocol.",
    imageStory: BRAND_IMAGES.technology.rfHero,
    imageTexture: BRAND_IMAGES.technology.rfSupport,
  },
  ems: {
    slug: "ems",
    title: "EMS Microcurrent",
    metaDescription:
      "EMS and microcurrent for the face. Structural muscle re-education and lifting at depth. Why devices outperform surface-only skincare for contour and tone.",
    heroIntro:
      "Microcurrent and EMS (electrical muscle stimulation) operate at very low current levels—often sub-sensory—to communicate with the facial muscles and fascia. The result is not just a temporary lift: with consistent use, the technology can help re-educate muscle memory, improve tone, and support the underlying architecture that no cream can reach.",
    whatItIs: {
      heading: "What EMS and Microcurrent Actually Do",
      paragraphs: [
        "The face has a network of muscles and fascia that determine contour, lift, and expression. Over time, habits, gravity, and loss of elasticity can leave muscles underused or imbalanced. Microcurrent devices deliver a gentle electrical signal that mimics the body’s own current, encouraging muscle contraction and relaxation in a controlled way. The effect is both immediate (a visible lift from improved tone) and long-term (muscles and fascia adapt with repeated use).",
        "This is fundamentally different from applying a cream. No topical can contract or train muscle. Microcurrent reaches the structures that define the face. It is the gym for the face—the foundational work. Serums and our protocol then support the skin barrier, collagen, and cellular health so that the result of that work is visible and lasting.",
      ],
    },
    comparison: {
      heading: "Why a Device Beats Serums and Masks Alone",
      body:
        "Serums and masks work on the skin. They hydrate, nourish, and deliver actives to the epidermis and upper dermis. They cannot contract muscle or re-educate fascia. That is the domain of technology. An EMS or microcurrent device is a one-time investment: you own it and use it for years. It is the structural training. Topicals are the support—they help the skin look and function better so that the work of the device shows through. Without the device, you are only ever supporting from the outside. With microcurrent, you build the foundation; with the protocol on top, you compound the outcome.",
    },
    comparisonCards: [
      { title: "Topicals only", subtitle: "Serums, creams, masks", points: ["Skin surface and upper dermis", "Cannot contract or train muscle", "No effect on fascia or contour"], active: false },
      { title: "Devices only", subtitle: "Foundation, no protocol", points: ["Full-face muscle tone and lift", "One-time investment", "Missing targeted zone refinement"], active: false },
      { title: "Devices + Zero Lines Protocol", subtitle: "Full system", points: ["EMS for full-face muscles and contour", "Syringe for expression lines and wrinkles in targeted zones", "Serum and creams for daily support and amplification"], active: true },
    ],
    science: {
      heading: "The Science of Microcurrent",
      intro:
        "Microcurrent typically uses currents in the microampere range (e.g. 100–600 µA), often at low frequencies (0.5–10 Hz). These parameters are chosen to stimulate muscle and cellular activity without pain or damage.",
      points: [
        {
          title: "Muscle and fascia",
          text: "Low-level electrical stimulation can elicit muscle contraction and improve local circulation. Over time, consistent use may support muscle tone and the appearance of lift and contour.",
        },
        {
          title: "Cellular signalling",
          text: "Some research suggests microcurrent may support ATP production and cellular repair. The combination of mechanical (muscle) and metabolic effects may explain both immediate and cumulative benefits.",
        },
        {
          title: "Protocol synergy",
          text: "Use microcurrent after the Syringe or Serum when the skin is primed. The device works on muscles and general tone across the full face; the Syringe targets expression lines and wrinkles in specific zones. Technology and topicals work in sequence for best results.",
        },
      ],
    },
    protocolIntegration: {
      heading: "How It Fits the Zero Lines Protocol",
      body:
        "EMS and microcurrent are core to the hardware protocol for anyone focused on contour, lift, and tone. The device trains the structures beneath the skin; our formulations support the skin itself. All recommended devices come from trusted third-party partners. We do not manufacture hardware—we curate and calibrate. When you are ready to add a device, options are available through us.",
      protocolVsDevice:
        "The Syringe addresses expression lines and wrinkles in targeted zones—periorbital, nasolabial, glabellar, forehead. EMS works on muscles and general collagen production across the full face.",
    },
    dataPoints: [
      { value: "8 weeks", label: "Split-face study: elasticity, wrinkle reduction (p<0.05)", source: "Prospective trial" },
      { value: "p<0.01", label: "Jawline angle improvement", source: "8-week fNMES study" },
      { value: "12 weeks", label: "Zygomaticus thickness, nasolabial angle, viscoelasticity", source: "EMS study" },
    ],
    optionsCta: "Explore EMS & Microcurrent Devices",
    optionsSubtext: "Curated microcurrent devices from trusted partners. Available through Zero Lines when you are ready to add hardware to your protocol.",
    imageStory: BRAND_IMAGES.technology.emsHero,
    imageTexture: BRAND_IMAGES.technology.emsSupport,
  },
  "blue-uv": {
    slug: "blue-uv",
    title: "Blue & UV Light",
    metaDescription:
      "Blue and UV light in skincare. Antibacterial and surface regulation for sebum and pigmentation. How light-based devices complement topicals for clarity and balance.",
    heroIntro:
      "Blue light (around 415 nm) and controlled UV exposure target surface-level concerns: blue light helps regulate sebum and support a clearer complexion by affecting bacterial and gland activity—antibacterial at the source. UV in careful, minimal doses can be used in some devices for pigmentation. Neither effect can be replicated by a cream alone; we use blue light first in the protocol as the cleaning step before red/IR or other modalities.",
    whatItIs: {
      heading: "What Blue and UV Light Actually Do",
      paragraphs: [
        "Blue light is absorbed by porphyrins produced by certain bacteria in the skin and in the sebaceous environment. This can reduce the population of bacteria that contribute to breakouts and support a more balanced, clearer complexion. It works at the source—the gland and the follicle—rather than only on the surface. UV, in very controlled doses and with proper eye and skin protection, can target melanocytes and support the management of pigmentation. We are not talking about tanning or unprotected exposure; we are talking about calibrated, device-based protocols.",
        "As with all our technologies, the point is depth and specificity. A cleanser or acid can exfoliate the surface; a brightening serum can inhibit melanin production in the upper layers. Blue and UV light can act where the problem originates. That is why we treat the device as the foundation—the gym—and topicals as the support that accelerates and maintains the result.",
      ],
    },
    comparison: {
      heading: "Why a Device Beats Serums and Masks Alone",
      body:
        "Topicals can soothe, exfoliate, and deliver brightening or anti-bacterial actives to the surface. They cannot deliver targeted blue or controlled UV to the sebaceous gland or the melanocyte. A blue-light or combined device is a one-time investment: you own the technology. Serums and masks are the support—they maintain barrier health, hydration, and clarity so that the effect of the device is visible and lasting. Without the device, you are only ever working from the outside. With blue and UV technology, you target the source; with the protocol on top, you compound the outcome.",
    },
    comparisonCards: [
      { title: "Topicals only", subtitle: "Serums, creams, masks", points: ["Surface actives only", "Cannot target sebaceous gland or bacteria at source", "No calibrated blue/UV at depth"], active: false },
      { title: "Devices only", subtitle: "Foundation, no protocol", points: ["Full-face antibacterial and surface regulation", "One-time investment", "Missing targeted zone and daily support"], active: false },
      { title: "Devices + Zero Lines Protocol", subtitle: "Full system", points: ["Blue/UV for clarity and antibacterial first step", "Syringe for expression lines and wrinkles in targeted zones", "Peeling Gel, Serum and creams for daily support"], active: true },
    ],
    science: {
      heading: "The Science of Blue and UV Light",
      intro:
        "Blue light targets porphyrins and can modulate sebaceous and bacterial activity. UV at specific wavelengths can affect melanocyte function. Both require calibrated devices and safe exposure protocols.",
      points: [
        {
          title: "Blue light and clarity",
          text: "Wavelengths around 415 nm are commonly used for acne-related applications. Session length and frequency matter; at-home devices are designed for safe, effective use without professional supervision when used as directed.",
        },
        {
          title: "UV and pigmentation",
          text: "UV-based pigmentation protocols must be carefully controlled to avoid damage. Any at-home or in-clinic use should follow manufacturer and professional guidance and include protection and aftercare.",
        },
        {
          title: "Protocol synergy",
          text: "Blue and UV are used first in the hardware sequence—cleaning and antibacterial—before red/IR or other modalities. The Syringe targets expression lines and wrinkles in specific zones; blue/UV works on surface and gland-level concerns across the full face.",
        },
      ],
    },
    protocolIntegration: {
      heading: "How It Fits the Zero Lines Protocol",
      body:
        "Blue and UV light are the first step in the hardware protocol for those focused on clarity, balance, and pigmentation—antibacterial and cleaning before red/IR or lifting work. Use in sequence with the Peeling Gel and the rest of the protocol as recommended. Devices are from trusted third-party partners; we curate and calibrate. When you are ready to add a device, options are available through us.",
      protocolVsDevice:
        "The Syringe addresses expression lines and wrinkles in targeted zones—periorbital, nasolabial, glabellar, forehead. Blue and UV devices work on surface regulation, antibacterial action, and pigmentation across the full face.",
    },
    dataPoints: [
      { value: "86%", label: "Patients with ≥1-grade IGA reduction after 7 weeks", source: "415 nm/633 nm phototherapy study" },
      { value: "p<0.0001", label: "Reduction in inflammatory and noninflammatory lesions", source: "7-week open-label study" },
      { value: "415 nm", label: "Blue light wavelength (surface / sebaceous)", source: "Antibacterial target" },
    ],
    optionsCta: "Explore Blue & UV Devices",
    optionsSubtext: "Curated blue-light and UV devices from trusted partners. Available through Zero Lines when you are ready to add hardware to your protocol.",
    imageStory: BRAND_IMAGES.technology.blueUvHero,
    imageTexture: BRAND_IMAGES.technology.blueUvSupport,
  },
};

export function getTechnologyContent(slug: string): TechnologyContent | null {
  if (TECHNOLOGY_SLUGS.includes(slug as TechnologySlug)) {
    return CONTENT[slug as TechnologySlug];
  }
  return null;
}

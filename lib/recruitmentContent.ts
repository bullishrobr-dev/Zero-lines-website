export type RecruitmentLocale = "en" | "es";

export const RECRUITMENT_CONTACT = {
  whatsappNumber: "35054005198",
  whatsappDisplay: "+350 5400 5198",
  email: "info@zeroplines.life",
} as const;

export const recruitmentImageSlots = {
  heroPrimary: {
    src: "https://images.unsplash.com/photo-1758599543136-5977bf2dd922?auto=format&fit=crop&w=1600&q=80&ixlib=rb-4.1.0",
    alt: "Confident businessman in a suit smiling outdoors.",
    note: "Primary high-energy hero image for the recruitment opportunity.",
  },
  heroSecondary: {
    src: "/recruitment/shop-2.png",
    alt: "Zero Lines storefront and exterior branding in Gibraltar.",
    note: "Use as a trust inset to show the physical location and local brand presence.",
  },
  cultureGallery: [
    {
      src: "/recruitment/shop-1.png",
      alt: "Zero Lines interior and premium in-store branding.",
      note: "Use for premium environment proof.",
    },
    {
      src: "/recruitment/shop-2.png",
      alt: "Zero Lines storefront in Gibraltar.",
      note: "Use for local trust and visibility.",
    },
    {
      src: "/recruitment/shop-3.png",
      alt: "Zero Lines consultation area with premium interior styling.",
      note: "Use for premium atmosphere and in-store detail.",
    },
  ],
  realitySupport: {
    src: "https://images.unsplash.com/photo-1758518727401-53823b36c47b?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.1.0",
    alt: "Business colleagues smiling together in a modern office meeting.",
    note: "Use next to the language and day-to-day section to add people-led warmth without overpowering the content.",
  },
  finalStrip: {
    src: "https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?auto=format&fit=crop&w=1400&q=80&ixlib=rb-4.1.0",
    alt: "Smiling business team in a modern office.",
    note: "Use before final CTA to reinforce team ambition and the idea of joining a live, energetic environment.",
  },
  logo: {
    src: "/recruitment/logo-transparent-clean.png",
    alt: "Zero Lines logo.",
    note: "Final transparent logo asset for the recruitment header.",
  },
} as const;

type RecruitmentFaq = {
  question: string;
  answer: string;
};

type RecruitmentStat = {
  label: string;
  value: string;
  detail: string;
};

type RecruitmentSectionCopy = {
  metaTitle: string;
  metaDescription: string;
  nav: {
    opportunity: string;
    culture: string;
    faq: string;
    apply: string;
  };
  cta: {
    whatsapp: string;
    email: string;
    header: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    supportingLine: string;
    proofStrip: string[];
  };
  fit: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
    note: string;
  };
  noExperience: {
    title: string;
    body: string;
    cardEyebrow: string;
    cardBody: string;
  };
  earnings: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: RecruitmentStat[];
    disclaimer: string;
  };
  reasons: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  culture: {
    eyebrow: string;
    title: string;
    intro: string;
    captions: string[];
  };
  reality: {
    languageTitle: string;
    languageBody: string;
    dayTitle: string;
    dayIntro: string;
    dayItems: string[];
  };
  faq: {
    title: string;
    items: RecruitmentFaq[];
  };
  finalCta: {
    title: string;
    body: string;
    support: string;
  };
  footer: {
    tag: string;
  };
} & {
  localeLabel: string;
};

export const recruitmentContent: Record<RecruitmentLocale, RecruitmentSectionCopy> = {
  en: {
    localeLabel: "English",
    metaTitle: "Sales Recruitment Gibraltar",
    metaDescription:
      "Zero Lines is recruiting confident sales talent in Gibraltar. Premium environment, training provided, commission starts at 25%, WhatsApp-first application.",
    nav: {
      opportunity: "Opportunity",
      culture: "Culture",
      faq: "FAQ",
      apply: "Apply",
    },
    cta: {
      whatsapp: "Apply on WhatsApp",
      email: "Send your CV by Email",
      header: "Apply Now",
    },
    hero: {
      badge: "Gibraltar Sales Recruitment",
      title: "A premium sales opportunity for confident people in Gibraltar",
      subtitle:
        "This is not passive retail. It is a premium, performance-driven sales role for people who know how to connect fast, build trust, and want real earning upside.",
      supportingLine:
        "No cosmetics background required. We train the right person. Strong communication, energy, and hunger matter more.",
      proofStrip: [
        "Commission starts at 25% and goes up",
        "Average earnings last month were over £3,000",
        "Top performers came close to five figures",
        "English is essential. Extra languages are a big advantage",
      ],
    },
    fit: {
      eyebrow: "Who this is for",
      title: "Built for sellers, not spectators",
      intro:
        "The right person for this role is switched on, confident under pressure, and motivated by performance rather than just clocking hours.",
      items: [
        "You are comfortable starting conversations with new people quickly.",
        "You can build rapport and guide conversations toward a close.",
        "You want more than a quiet hourly retail role.",
        "You bring energy, professionalism, and consistency every day.",
        "You are coachable, resilient, and comfortable with targets.",
        "You like the idea of earning more when you perform well.",
      ],
      note: "Not for someone who wants to hide on the shop floor. Strong presence matters here.",
    },
    noExperience: {
      title: "You do not need cosmetics experience to succeed here",
      body:
        "This opportunity is sales-first. We train you on the products, the process, and how the environment works. If your communication is strong and your attitude is right, you can perform at a high level.",
      cardEyebrow: "Sales-first recruitment",
      cardBody:
        "Confidence, energy, discipline, and coachability matter more than product knowledge at the start.",
    },
    earnings: {
      eyebrow: "Performance upside",
      title: "A real earning opportunity for the right person",
      intro:
        "The upside is one of the biggest reasons strong sellers are attracted to this role, but the message stays honest: results are performance-linked.",
      stats: [
        {
          label: "Starting commission",
          value: "25%+",
          detail: "Commission starts at 25% and goes up.",
        },
        {
          label: "Average earnings last month",
          value: "£3,000+",
          detail: "Average earnings last month were over £3,000.",
        },
        {
          label: "Top performers",
          value: "Near 5 figures",
          detail: "Some top performers came close to five figures.",
        },
      ],
      disclaimer:
        "Earnings are performance-linked and not guaranteed. For the right person, this can become a serious income opportunity.",
    },
    reasons: {
      eyebrow: "Why people want it",
      title: "Why this role feels different from ordinary retail",
      items: [
        "Premium brand environment with polished presentation",
        "Fast pace, real momentum, and daily interaction with people",
        "Young, social, ambitious team energy",
        "Training and support without needing a cosmetics background",
        "Clear performance upside for strong communicators",
        "A role that rewards initiative instead of passive attendance",
      ],
    },
    culture: {
      eyebrow: "Real environment",
      title: "A real team, a real store, a real sales culture",
      intro:
        "This page should not feel like a stock-photo vacancy. The role sits inside a visible, premium environment with real customers, real team energy, and real day-to-day activity.",
      captions: [
        "Premium interior",
        "Real storefront",
        "Consultation atmosphere",
      ],
    },
    reality: {
      languageTitle: "Language matters here",
      languageBody:
        "English is essential for this role. If you speak Spanish or additional languages, that is a major commercial advantage in Gibraltar.",
      dayTitle: "What the day-to-day really looks like",
      dayIntro:
        "The role is active and people-facing. It suits someone who enjoys interaction, momentum, and the pressure of performance.",
      dayItems: [
        "Start conversations confidently with walk-in traffic",
        "Read people quickly and adapt your approach",
        "Present premium offers with clarity and conviction",
        "Follow up, handle objections, and close professionally",
        "Work toward team targets in a performance-driven environment",
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Do I need cosmetics experience?",
          answer:
            "No. Cosmetics experience is not required. We provide training on products and process. Communication and selling ability matter more.",
        },
        {
          question: "Is this a normal shop assistant role?",
          answer:
            "No. This is a proactive, performance-driven sales role. It suits people who are confident speaking to customers and creating momentum.",
        },
        {
          question: "How does the commission opportunity work?",
          answer:
            "Commission starts at 25% and goes up. Earnings are linked to performance and are not guaranteed.",
        },
        {
          question: "What languages do I need?",
          answer:
            "English is required. Additional languages are a strong advantage, especially in Gibraltar.",
        },
        {
          question: "Is training provided?",
          answer:
            "Yes. The right person can learn the product side. We are more interested in communication, presence, and coachability.",
        },
        {
          question: "How do I apply?",
          answer:
            "Apply on WhatsApp for the fastest response, or send your CV by email if you prefer.",
        },
      ],
    },
    finalCta: {
      title: "Ready to apply?",
      body:
        "If you are confident, energetic, professional, and motivated by performance, message us now. This is not for everyone, but for the right person it can be a serious opportunity.",
      support:
        "WhatsApp is the fastest route. Email works too if you want to send your CV directly.",
    },
    footer: {
      tag: "Zero Lines seller recruitment in Gibraltar",
    },
  },
  es: {
    localeLabel: "Espanol",
    metaTitle: "Reclutamiento Comercial Gibraltar",
    metaDescription:
      "Zero Lines busca talento comercial en Gibraltar. Entorno premium, formacion incluida, comision desde 25% y aplicacion rapida por WhatsApp.",
    nav: {
      opportunity: "Oportunidad",
      culture: "Cultura",
      faq: "FAQ",
      apply: "Aplicar",
    },
    cta: {
      whatsapp: "Aplicar por WhatsApp",
      email: "Enviar CV por Email",
      header: "Aplicar ahora",
    },
    hero: {
      badge: "Reclutamiento comercial en Gibraltar",
      title: "Una oportunidad premium de ventas para personas con confianza en Gibraltar",
      subtitle:
        "Esto no es retail pasivo. Es un rol comercial premium y orientado al rendimiento para personas que saben conectar rapido, generar confianza y quieren una oportunidad real de ingresos.",
      supportingLine:
        "No necesitas experiencia en cosmetica. Formamos a la persona adecuada. Lo mas importante es comunicacion, energia y hambre de resultados.",
      proofStrip: [
        "La comision empieza en 25% y sube",
        "El promedio del ultimo mes fue superior a £3,000",
        "Los mejores vendedores se acercaron a cinco cifras",
        "El ingles es esencial. Otros idiomas son una gran ventaja",
      ],
    },
    fit: {
      eyebrow: "Para quien es",
      title: "Pensado para vendedores, no para espectadores",
      intro:
        "La persona adecuada para este puesto transmite energia, confianza bajo presion y motivacion por rendimiento, no solo por cumplir horas.",
      items: [
        "Te sientes comodo iniciando conversaciones con personas nuevas.",
        "Sabes crear confianza y llevar una conversacion hacia el cierre.",
        "Buscas algo mas que un trabajo tranquilo por horas en tienda.",
        "Aportas energia, profesionalidad y constancia cada dia.",
        "Eres entrenable, resiliente y no te asustan los objetivos.",
        "Te gusta la idea de ganar mas cuando rindes bien.",
      ],
      note: "No es para alguien que quiere esconderse en la tienda. La presencia importa.",
    },
    noExperience: {
      title: "No necesitas experiencia en cosmetica para destacar aqui",
      body:
        "Esta oportunidad es primero ventas. Te formamos en el producto, el proceso y la dinamica del entorno. Si tu comunicacion es fuerte y tu actitud es correcta, puedes rendir a un nivel alto.",
      cardEyebrow: "Reclutamiento comercial",
      cardBody:
        "Confianza, energia, disciplina y capacidad de aprender importan mas que conocer el producto al principio.",
    },
    earnings: {
      eyebrow: "Upside por rendimiento",
      title: "Una oportunidad real de ingresos para la persona adecuada",
      intro:
        "El potencial economico es una de las razones por las que este puesto atrae a buenos vendedores, pero el mensaje sigue siendo responsable: depende del rendimiento.",
      stats: [
        {
          label: "Comision inicial",
          value: "25%+",
          detail: "La comision empieza en 25% y sube.",
        },
        {
          label: "Promedio del ultimo mes",
          value: "£3,000+",
          detail: "El promedio del ultimo mes fue superior a £3,000.",
        },
        {
          label: "Top vendedores",
          value: "Cerca de 5 cifras",
          detail: "Algunos top performers se acercaron a cinco cifras.",
        },
      ],
      disclaimer:
        "Los ingresos dependen del rendimiento y no estan garantizados. Para la persona adecuada, esto puede convertirse en una oportunidad economica seria.",
    },
    reasons: {
      eyebrow: "Por que atrae",
      title: "Por que este puesto se siente distinto al retail normal",
      items: [
        "Entorno premium con presentacion cuidada",
        "Ritmo alto, interaccion real y dias con movimiento",
        "Energia de equipo joven, social y ambiciosa",
        "Formacion incluida sin exigir experiencia en cosmetica",
        "Upside claro para quien comunica y vende bien",
        "Un puesto que recompensa iniciativa y no presencia pasiva",
      ],
    },
    culture: {
      eyebrow: "Entorno real",
      title: "Equipo real, tienda real, cultura comercial real",
      intro:
        "Esta pagina no debe sentirse como una vacante con fotos de stock. El puesto existe dentro de un entorno premium, visible y activo, con clientes reales y energia real de equipo.",
      captions: [
        "Interior premium",
        "Fachada real",
        "Atmosfera de consulta",
      ],
    },
    reality: {
      languageTitle: "Los idiomas importan",
      languageBody:
        "El ingles es imprescindible para este puesto. Si hablas espanol u otros idiomas, eso es una ventaja comercial muy fuerte en Gibraltar.",
      dayTitle: "Como es realmente el dia a dia",
      dayIntro:
        "El puesto es activo y muy orientado a personas. Encaja con alguien que disfruta la interaccion, el ritmo y la presion del rendimiento.",
      dayItems: [
        "Iniciar conversaciones con seguridad con personas que entran",
        "Leer al cliente rapido y adaptar tu enfoque",
        "Presentar ofertas premium con claridad y conviccion",
        "Hacer seguimiento, gestionar objeciones y cerrar con profesionalidad",
        "Trabajar hacia objetivos de equipo en un entorno exigente",
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          question: "Necesito experiencia en cosmetica?",
          answer:
            "No. No hace falta experiencia en cosmetica. Damos formacion sobre producto y proceso. Lo mas importante es saber comunicar y vender.",
        },
        {
          question: "Es un puesto normal de dependiente?",
          answer:
            "No. Es un rol comercial proactivo y orientado al rendimiento. Encaja mejor con personas que hablan con seguridad y crean movimiento.",
        },
        {
          question: "Como funciona la oportunidad de comision?",
          answer:
            "La comision empieza en 25% y sube. Los ingresos dependen del rendimiento y no estan garantizados.",
        },
        {
          question: "Que idiomas necesito?",
          answer:
            "El ingles es obligatorio. Idiomas adicionales son una ventaja fuerte, especialmente en Gibraltar.",
        },
        {
          question: "Se ofrece formacion?",
          answer:
            "Si. La persona adecuada puede aprender la parte del producto. Nos importa mas la comunicacion, la presencia y la actitud.",
        },
        {
          question: "Como aplico?",
          answer:
            "Aplica por WhatsApp para recibir una respuesta mas rapida, o envia tu CV por email si prefieres.",
        },
      ],
    },
    finalCta: {
      title: "Listo para aplicar?",
      body:
        "Si tienes confianza, energia, profesionalidad y motivacion por rendimiento, escribenos ahora. No es para todo el mundo, pero para la persona adecuada puede ser una oportunidad seria.",
      support:
        "WhatsApp es la via mas rapida. El email tambien sirve si quieres enviar tu CV directamente.",
    },
    footer: {
      tag: "Zero Lines reclutamiento comercial en Gibraltar",
    },
  },
};

export function getRecruitmentWhatsAppHref(locale: RecruitmentLocale) {
  const message =
    locale === "en"
      ? "Hi Zero Lines team, I want to apply for the sales opportunity in Gibraltar. My name is [NAME], I speak [LANGUAGES], and I have experience in [SALES/COMMUNICATION]."
      : "Hola equipo Zero Lines, quiero aplicar a la oportunidad comercial en Gibraltar. Mi nombre es [NOMBRE], hablo [IDIOMAS] y tengo experiencia en [VENTAS/COMUNICACION].";

  return `https://wa.me/${RECRUITMENT_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getRecruitmentMailHref(locale: RecruitmentLocale) {
  const subject =
    locale === "en"
      ? "Sales Application - Zero Lines Gibraltar"
      : "Aplicacion Comercial - Zero Lines Gibraltar";

  return `mailto:${RECRUITMENT_CONTACT.email}?subject=${encodeURIComponent(subject)}`;
}

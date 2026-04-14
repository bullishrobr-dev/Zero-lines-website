"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  RECRUITMENT_CONTACT,
  getRecruitmentMailHref,
  getRecruitmentWhatsAppHref,
  recruitmentContent,
  recruitmentImageSlots,
  type RecruitmentLocale,
} from "@/lib/recruitmentContent";
import {
  fadeUpLong,
  sectionVariants,
  staggerContainer,
  staggerItem,
  viewportLoose,
  viewportTight,
} from "@/lib/motionVariants";

const NAV_IDS = {
  opportunity: "opportunity",
  culture: "culture",
  faq: "faq",
  apply: "apply",
} as const;

function LocaleToggle({
  locale,
  onChange,
}: {
  locale: RecruitmentLocale;
  onChange: (locale: RecruitmentLocale) => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-border bg-white/90 p-1 text-xs font-semibold text-text-primary shadow-sm">
      <button
        type="button"
        onClick={() => onChange("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-3 py-1.5 transition ${locale === "en" ? "bg-secondary text-white" : "text-text-muted hover:text-text-primary"}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onChange("es")}
        aria-pressed={locale === "es"}
        className={`rounded-full px-3 py-1.5 transition ${locale === "es" ? "bg-primary text-white" : "text-text-muted hover:text-text-primary"}`}
      >
        ES
      </button>
    </div>
  );
}

function SectionEyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${
        dark ? "text-primary" : "text-primary/80"
      }`}
    >
      {children}
    </p>
  );
}

function MotionSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportLoose}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}

export default function RecruitmentPage() {
  const [locale, setLocale] = useState<RecruitmentLocale>("en");
  const t = recruitmentContent[locale];
  const heroRef = useRef<HTMLDivElement | null>(null);

  const whatsAppHref = useMemo(() => getRecruitmentWhatsAppHref(locale), [locale]);
  const emailHref = useMemo(() => getRecruitmentMailHref(locale), [locale]);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 42]);
  const heroGlowY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const heroCardY = useTransform(scrollYProgress, [0, 1], [0, 18]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className="bg-surface text-text-primary">
      <header className="sticky top-0 z-40 border-b border-black/8 bg-white/94 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <Image
              src={recruitmentImageSlots.logo.src}
              alt="Zero Lines"
              width={250}
              height={84}
              className="h-9 w-auto shrink-0 sm:h-10"
              priority
            />
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            <a href={`#${NAV_IDS.opportunity}`} className="text-sm font-medium text-text-muted transition hover:text-text-primary">
              {t.nav.opportunity}
            </a>
            <a href={`#${NAV_IDS.culture}`} className="text-sm font-medium text-text-muted transition hover:text-text-primary">
              {t.nav.culture}
            </a>
            <a href={`#${NAV_IDS.faq}`} className="text-sm font-medium text-text-muted transition hover:text-text-primary">
              {t.nav.faq}
            </a>
            <a href={`#${NAV_IDS.apply}`} className="text-sm font-medium text-text-muted transition hover:text-text-primary">
              {t.nav.apply}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <LocaleToggle locale={locale} onChange={setLocale} />
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5d] sm:inline-flex"
            >
              {t.cta.header}
            </a>
          </div>
        </div>
      </header>

      <section ref={heroRef} className="relative overflow-hidden bg-secondary text-white">
        <motion.div
          style={{ y: heroGlowY }}
          className="pointer-events-none absolute -left-16 top-20 h-56 w-56 rounded-full bg-primary/25 blur-3xl"
        />
        <motion.div
          style={{ y: heroGlowY }}
          className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/18 blur-3xl"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 to-transparent" />

        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-18">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.span
              variants={staggerItem}
              className="inline-flex rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary"
            >
              {t.hero.badge}
            </motion.span>
            <motion.h1
              variants={fadeUpLong}
              className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.96] sm:text-6xl lg:text-7xl"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p variants={staggerItem} className="prose-width mt-6 text-base leading-7 text-white/72 sm:text-lg">
              {t.hero.subtitle}
            </motion.p>
            <motion.p variants={staggerItem} className="prose-width mt-4 text-sm font-medium leading-6 text-white/88 sm:text-base">
              {t.hero.supportingLine}
            </motion.p>

            <motion.div variants={staggerItem} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
              >
                {t.cta.whatsapp}
              </a>
              <a
                href={emailHref}
                className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/4 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-secondary"
              >
                {t.cta.email}
              </a>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {t.hero.proofStrip.slice(0, 2).map((item) => (
                <motion.div
                  key={item}
                  variants={staggerItem}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium leading-6 text-white/88"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative min-h-[34rem]">
            <motion.div
              style={{ y: heroImageY }}
              initial={{ opacity: 0, y: 50, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ duration: 1.05, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-8 z-10 w-[88%] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_100px_rgba(0,0,0,0.42)]"
            >
              <Image
                src={recruitmentImageSlots.heroPrimary.src}
                alt={recruitmentImageSlots.heroPrimary.alt}
                width={1200}
                height={1500}
                className="h-[26rem] w-full object-cover object-top sm:h-[30rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </motion.div>

            <motion.div
              style={{ y: heroCardY }}
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-2 top-[56%] z-30 w-[48%] rounded-[1.5rem] border border-primary/30 bg-black/72 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.34)] backdrop-blur-md sm:w-[40%]"
            >
              <SectionEyebrow dark>{t.earnings.stats[0].label}</SectionEyebrow>
              <p className="mt-2 text-3xl font-semibold">{t.earnings.stats[0].value}</p>
              <p className="mt-2 text-sm leading-5 text-white/78">{t.earnings.stats[0].detail}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-4 right-0 z-30 w-[54%] rounded-[1.7rem] border border-primary/25 bg-black/76 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.34)] backdrop-blur-md"
            >
              <SectionEyebrow dark>{t.earnings.eyebrow}</SectionEyebrow>
              <p className="mt-3 text-4xl font-semibold">{t.earnings.stats[1].value}</p>
              <p className="mt-2 text-sm leading-6 text-white/78">{t.earnings.stats[1].detail}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 64 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-8 top-8 z-20 rounded-[1.4rem] border border-white/14 bg-primary/18 px-4 py-3 text-sm font-medium leading-6 text-white shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm"
            >
              {locale === "en" ? "No cosmetics experience needed" : "No necesitas experiencia en cosmetica"}
            </motion.div>
          </div>
        </div>
      </section>

      <MotionSection
        id={NAV_IDS.opportunity}
        className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      >
        <SectionEyebrow>{t.earnings.eyebrow}</SectionEyebrow>
        <div className="mt-3 grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-end">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-secondary sm:text-4xl">
              {t.earnings.title}
            </h2>
            <p className="prose-width mt-4 text-base leading-7 text-text-muted">{t.earnings.intro}</p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportTight}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[1.9rem] border border-primary/20 bg-primary/10 p-6"
          >
            <p className="text-sm font-medium leading-7 text-secondary/80">
              {t.earnings.disclaimer}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 grid gap-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportTight}
        >
          {t.earnings.stats.map((stat) => (
            <motion.article
              key={stat.label}
              variants={staggerItem}
              className="rounded-[2rem] border border-border bg-surface-muted p-6 shadow-[0_18px_60px_rgba(18,18,18,0.05)]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                {stat.label}
              </p>
              <p className="mt-4 text-4xl font-semibold text-primary">{stat.value}</p>
              <p className="mt-4 text-sm leading-6 text-secondary/75">{stat.detail}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportTight}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href={whatsAppHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
          >
            {t.cta.whatsapp}
          </a>
          <a
            href={emailHref}
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-secondary transition hover:border-secondary hover:bg-secondary hover:text-white"
          >
            {t.cta.email}
          </a>
        </motion.div>
      </MotionSection>

      <MotionSection className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionEyebrow>{t.fit.eyebrow}</SectionEyebrow>
        <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-secondary sm:text-4xl">{t.fit.title}</h2>
            <p className="prose-width mt-4 text-base leading-7 text-text-muted">{t.fit.intro}</p>
          </div>
          <p className="max-w-md rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-medium leading-6 text-secondary">
            {t.fit.note}
          </p>
        </div>

        <motion.div
          className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportTight}
        >
          {t.fit.items.map((item, index) => (
            <motion.article
              key={item}
              variants={staggerItem}
              className="rounded-[1.75rem] border border-border bg-white p-6 shadow-[0_18px_50px_rgba(18,18,18,0.04)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <p className="mt-5 text-base leading-7 text-secondary">{item}</p>
            </motion.article>
          ))}
        </motion.div>
      </MotionSection>

      <MotionSection className="bg-secondary text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-18">
          <div>
            <SectionEyebrow dark>{t.noExperience.cardEyebrow}</SectionEyebrow>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
              {t.noExperience.title}
            </h2>
            <p className="prose-width mt-4 text-base leading-7 text-white/78 sm:text-lg">
              {t.noExperience.body}
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/12 bg-white/6 p-7">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
              {t.noExperience.cardEyebrow}
            </p>
            <p className="mt-4 text-base leading-7 text-white/80">{t.noExperience.cardBody}</p>
            <div className="mt-6 h-px w-full bg-white/12" />
            <p className="mt-6 text-sm leading-6 text-white/65">
              {locale === "en"
                ? "If you can speak well, hold attention, stay composed, and learn fast, this role can make sense for you."
                : "Si sabes comunicar bien, mantener la atencion, conservar la calma y aprender rapido, este puesto puede encajar contigo."}
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="border-y border-border bg-surface-muted">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionEyebrow>{t.reasons.eyebrow}</SectionEyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-secondary sm:text-4xl">
            {t.reasons.title}
          </h2>
          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportTight}
          >
            {t.reasons.items.map((item) => (
              <motion.div key={item} variants={staggerItem} className="rounded-[1.75rem] border border-border bg-white px-5 py-5 text-sm font-medium leading-6 text-secondary shadow-[0_18px_45px_rgba(18,18,18,0.04)]">
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      <MotionSection id={NAV_IDS.culture} className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionEyebrow>{t.culture.eyebrow}</SectionEyebrow>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-secondary sm:text-4xl">
          {t.culture.title}
        </h2>
        <p className="prose-width mt-4 text-base leading-7 text-text-muted">{t.culture.intro}</p>

        <motion.div
          className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportTight}
        >
          {recruitmentImageSlots.cultureGallery.map((image, index) => (
            <motion.div
              key={image.src}
              variants={staggerItem}
              className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_18px_45px_rgba(18,18,18,0.04)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="border-t border-border px-4 py-3 text-sm font-medium text-secondary">
                {t.culture.captions[index]}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </MotionSection>

      <MotionSection className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-14 sm:px-6 lg:grid-cols-[0.72fr_1.08fr_0.8fr] lg:px-8 lg:py-20">
        <article className="rounded-[1.6rem] border border-border bg-white p-5 shadow-[0_20px_55px_rgba(18,18,18,0.04)]">
          <SectionEyebrow>{t.nav.opportunity}</SectionEyebrow>
          <h2 className="mt-3 text-2xl font-semibold text-secondary">{t.reality.languageTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-text-muted">{t.reality.languageBody}</p>
        </article>

        <article className="rounded-[2rem] border border-primary/20 bg-primary/10 p-7">
          <SectionEyebrow>{t.reasons.eyebrow}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold text-secondary">{t.reality.dayTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-secondary/75">{t.reality.dayIntro}</p>
          <ul className="mt-6 space-y-3">
            {t.reality.dayItems.map((item) => (
              <li key={item} className="rounded-2xl border border-secondary/8 bg-white/70 px-4 py-3 text-sm font-medium leading-6 text-secondary">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportTight}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-[1.8rem] border border-border bg-white shadow-[0_18px_45px_rgba(18,18,18,0.04)]"
        >
          <Image
            src={recruitmentImageSlots.realitySupport.src}
            alt={recruitmentImageSlots.realitySupport.alt}
            width={900}
            height={1100}
            className="h-full min-h-[18rem] w-full object-cover"
          />
        </motion.div>
      </MotionSection>

      <MotionSection id={NAV_IDS.faq} className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionEyebrow>{t.nav.faq}</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold text-secondary sm:text-4xl">{t.faq.title}</h2>
        </div>
        <motion.div
          className="mx-auto mt-8 max-w-4xl space-y-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportTight}
        >
          {t.faq.items.map((faq) => (
            <motion.details
              key={faq.question}
              variants={staggerItem}
              className="group rounded-[1.5rem] border border-border bg-white px-5 py-5 shadow-[0_16px_40px_rgba(18,18,18,0.03)]"
            >
              <summary className="cursor-pointer list-none pr-8 text-left text-base font-semibold text-secondary marker:content-none">
                {faq.question}
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-text-muted">{faq.answer}</p>
            </motion.details>
          ))}
        </motion.div>
      </MotionSection>

      <MotionSection
        id={NAV_IDS.apply}
        className="mx-auto w-full max-w-7xl px-4 pb-[calc(6.75rem+env(safe-area-inset-bottom))] pt-4 sm:px-6 lg:px-8 lg:pb-24"
      >
        <div className="overflow-hidden rounded-[2.2rem] border border-border bg-secondary text-white">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[20rem]">
              <Image
                src={recruitmentImageSlots.finalStrip.src}
                alt={recruitmentImageSlots.finalStrip.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
            <div className="p-8 sm:p-10 lg:p-12">
              <SectionEyebrow>{t.nav.apply}</SectionEyebrow>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">{t.finalCta.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/78">{t.finalCta.body}</p>
              <p className="mt-4 text-sm leading-6 text-white/62">{t.finalCta.support}</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsAppHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
                >
                  {t.cta.whatsapp}
                </a>
                <a
                  href={emailHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/18 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-secondary"
                >
                  {t.cta.email}
                </a>
              </div>

              <div className="mt-7 border-t border-white/10 pt-5 text-sm text-white/70">
                <p>{RECRUITMENT_CONTACT.email}</p>
                <p className="mt-1">{RECRUITMENT_CONTACT.whatsappDisplay}</p>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <footer className="border-t border-border px-4 py-8 text-center text-xs text-text-muted sm:px-6 lg:px-8">
        <p>{t.footer.tag}</p>
        <p className="mt-2">
          <a href={`mailto:${RECRUITMENT_CONTACT.email}`} className="transition hover:text-secondary">
            {RECRUITMENT_CONTACT.email}
          </a>{" "}
          |{" "}
          <a
            href={`https://wa.me/${RECRUITMENT_CONTACT.whatsappNumber}`}
            className="transition hover:text-secondary"
          >
            {RECRUITMENT_CONTACT.whatsappDisplay}
          </a>
        </p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
          <a
            href={whatsAppHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-3 py-3 text-xs font-semibold text-white"
          >
            {t.cta.whatsapp}
          </a>
          <a
            href={emailHref}
            className="inline-flex items-center justify-center rounded-full border border-border bg-white px-3 py-3 text-xs font-semibold text-secondary"
          >
            {t.cta.email}
          </a>
        </div>
      </div>
    </div>
  );
}

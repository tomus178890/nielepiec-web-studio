"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { brand, heroHighlights, heroVisual } from "@/lib/site-data";
import { Icon } from "./icon";
import { Reveal, Stagger, StaggerItem } from "./reveal";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const accentCopy = "pomagają firmom zdobywać klientów.";
  const heroLead = brand.heroTitle.includes(accentCopy) ? brand.heroTitle.replace(` i ${accentCopy}`, "") : brand.heroTitle;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const ambientY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -90]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -24]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 34]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -22]);

  return (
    <section ref={sectionRef} className="section-shell relative pb-20 pt-6 sm:pb-28 sm:pt-12" id="start">
      <div className="hero-shell">
        <motion.div className="hero-ambient" style={{ y: ambientY }} />
        <motion.div className="hero-grid" style={{ y: gridY }} />

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(390px,0.94fr)] lg:gap-14">
          <div className="relative">
            <Reveal>
              <div className="inline-flex max-w-full items-center gap-3 rounded-[1.45rem] border border-white/10 bg-white/[0.06] px-3 py-3 shadow-halo backdrop-blur-md sm:px-4">
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[1rem] border border-white/[0.12] bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-0.5">
                  <Image
                    alt="Logo Nielepiec Web Studio"
                    className="h-full w-full rounded-[0.8rem] object-cover object-center"
                    height={1024}
                    priority
                    sizes="48px"
                    src="/logo.png"
                    width={1024}
                  />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-heading text-sm font-semibold tracking-[-0.03em] text-text sm:text-base">
                    {brand.name}
                  </p>
                  <p className="mt-1 text-[0.66rem] uppercase tracking-[0.28em] text-muted/[0.85] sm:text-[0.68rem]">
                    Strony premium dla firm
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <span className="eyebrow mt-6">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Projektuję strony, które wyglądają profesjonalnie i sprzedają pewniej
              </span>
            </Reveal>

            <Stagger className="mt-6 flex flex-wrap gap-3" delayChildren={0.1} staggerChildren={0.08}>
              {["strony premium", "landing page", "responsywny front-end"].map((item) => (
                <StaggerItem key={item}>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.055] px-3.5 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-slate-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    {item}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.14}>
              <h1 className="mt-8 max-w-[11ch] text-balance font-heading text-[3.15rem] font-bold leading-[0.93] text-text sm:text-[4.5rem] lg:text-[5.7rem]">
                {heroLead}
                <span className="accent-line mt-4 block bg-[linear-gradient(135deg,#84f3ff_0%,#58d2ff_38%,#8b63ff_100%)] bg-clip-text text-transparent">
                  {accentCopy}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="section-copy mt-7 max-w-[39rem] text-pretty">{brand.heroDescription}</p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a className="primary-button w-full sm:w-auto" href="#kontakt">
                  Umów bezpłatną wycenę
                  <Icon className="h-4 w-4" name="arrow" />
                </a>
                <a className="secondary-button w-full sm:w-auto" href="#portfolio">
                  Zobacz możliwości
                </a>
              </div>
            </Reveal>

            <Stagger className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-[auto_auto_1fr]" delayChildren={0.18} staggerChildren={0.08}>
              <StaggerItem>
                <a className="soft-pill h-full justify-center sm:justify-start" href={`tel:${brand.phone.replace(/\s+/g, "")}`}>
                  <Icon className="h-4 w-4 text-accent" name="phone" />
                  {brand.phone}
                </a>
              </StaggerItem>
              <StaggerItem>
                <a className="soft-pill h-full justify-center sm:justify-start" href={`mailto:${brand.email}`}>
                  <Icon className="h-4 w-4 text-accent" name="mail" />
                  {brand.email}
                </a>
              </StaggerItem>
              <StaggerItem>
                <div className="soft-pill h-full justify-center sm:justify-start">
                  <span className="h-2 w-2 rounded-full bg-violetAccent" />
                  Odpowiadam zwykle w 24h
                </div>
              </StaggerItem>
            </Stagger>

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3" delayChildren={0.24} staggerChildren={0.1}>
              {heroHighlights.map((item, index) => (
                <StaggerItem key={item} className="h-full">
                  <div className="premium-card h-full px-4 py-5">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                        <Icon className="h-4 w-4" name="check" />
                      </div>
                      <span className="text-[0.72rem] uppercase tracking-[0.28em] text-muted/75">0{index + 1}</span>
                    </div>
                    <p className="text-sm leading-7 text-slate-200/[0.82]">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <motion.div className="relative lg:pl-3" style={{ y: mediaY }}>
            <Reveal delay={0.18}>
              <div className="section-panel-soft group overflow-hidden rounded-[2.2rem] p-3 sm:p-4">
                <div className="relative min-h-[460px] overflow-hidden rounded-[1.85rem] sm:min-h-[560px] lg:min-h-[660px]">
                  <Image
                    alt={heroVisual.alt}
                    className="object-cover object-center transition duration-700 group-hover:scale-[1.045]"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    src={heroVisual.src}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,18,0.18),rgba(2,8,18,0.52)_34%,rgba(2,8,18,0.96)_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(7,18,32,0.74),rgba(7,18,32,0.08)_46%,rgba(12,18,40,0.4)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,210,255,0.28),transparent_24%),radial-gradient(circle_at_18%_18%,rgba(132,93,255,0.22),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(255,191,116,0.14),transparent_18%)]" />

                  <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="rounded-full border border-white/10 bg-ink/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent backdrop-blur">
                        hero premium
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-text backdrop-blur">
                        blue + violet
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="max-w-xl rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.86),rgba(7,17,31,0.78))] p-5 shadow-[0_24px_60px_rgba(3,10,20,0.42)] backdrop-blur-md sm:p-6">
                        <p className="text-xs uppercase tracking-[0.28em] text-accent">Oprawa strony</p>
                        <p className="mt-3 font-heading text-[1.92rem] font-semibold leading-[1.02] text-text sm:text-[2.22rem]">
                          Mocny pierwszy ekran z czytelnym przekazem i bardziej premium klimatem.
                        </p>
                        <p className="mt-4 max-w-lg text-sm leading-7 text-slate-200/[0.82]">
                          Tło pracuje subtelnie, a warstwy overlayu i światła budują wrażenie jakości bez utraty
                          czytelności tekstu.
                        </p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-3">
                        {[
                          "Wyraźniejsze CTA",
                          "Lepszy kontrast i rytm",
                          "Kadrowanie dopracowane pod mobile"
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-[1.5rem] border border-white/10 bg-[rgba(7,17,31,0.72)] px-4 py-4 text-sm leading-6 text-text backdrop-blur"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <motion.div
              className="animate-float absolute -left-4 top-12 hidden rounded-[1.6rem] border border-violetAccent/20 bg-[rgba(7,17,31,0.74)] px-4 py-3 shadow-halo backdrop-blur xl:block"
              style={{ y: floatingY }}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-violetAccent">branding</p>
              <p className="mt-2 text-sm text-text">układ premium</p>
            </motion.div>

            <motion.div
              className="animate-float-delay absolute -bottom-4 right-8 hidden rounded-[1.6rem] border border-white/10 bg-white/[0.06] px-4 py-3 shadow-panel backdrop-blur xl:block"
              style={{ y: floatingY }}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-accent">główne zdjęcie</p>
              <p className="mt-2 text-sm text-text">ambient light + lepszy kontrast</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

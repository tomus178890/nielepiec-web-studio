import { brand } from "@/lib/site-data";
import { ContactForm } from "./contact-form";
import { Icon } from "./icon";
import { Reveal, Stagger, StaggerItem } from "./reveal";

const contactCards = [
  {
    icon: "phone" as const,
    label: "Telefon",
    value: brand.phone,
    href: `tel:${brand.phone.replace(/\s+/g, "")}`
  },
  {
    icon: "mail" as const,
    label: "E-mail",
    value: brand.email,
    href: `mailto:${brand.email}`
  }
];

const contactBenefits = [
  "Darmowa wstępna wycena i kierunek projektu",
  "Dopasowanie układu i stylu do marki",
  "Wsparcie po wdrożeniu i finalnych poprawkach"
];

const contactFlow = [
  "Opisujesz swój cel i branżę",
  "Ja wracam z propozycją kierunku",
  "Ustalamy zakres i przechodzimy do startu"
];

export function ContactSection() {
  return (
    <section className="section-shell py-14 sm:py-20" id="kontakt">
      <div className="section-panel section-panel-violet">
        <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <Reveal>
            <div className="surface-card relative flex h-full flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,210,255,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(132,93,255,0.12),transparent_22%)]" />
              <div className="relative">
                <span className="eyebrow">Kontakt / CTA końcowe</span>
                <h2 className="section-title mt-6 max-w-[14ch]">Masz pomysł na stronę? Zróbmy ją razem.</h2>
                <p className="section-copy mt-5">
                  Napisz do mnie i opowiedz, czego potrzebujesz. Przygotuję dla Ciebie propozycję strony dopasowaną do
                  branży, celu i stylu marki.
                </p>
              </div>

              <Stagger className="relative mt-8 grid gap-4">
                <StaggerItem>
                  <div className="rounded-[1.9rem] border border-accent/20 bg-[linear-gradient(180deg,rgba(88,210,255,0.12),rgba(88,210,255,0.05))] p-6 shadow-glow">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm uppercase tracking-[0.28em] text-accent">Szybki kontakt</p>
                      <span className="rounded-full border border-white/10 bg-[rgba(7,17,31,0.68)] px-3 py-1 text-[0.72rem] uppercase tracking-[0.24em] text-text">
                        odpowiedź zwykle w 24h
                      </span>
                    </div>
                    <div className="mt-5 space-y-3">
                      {contactCards.map((card, index) => (
                        <a
                          key={card.label}
                          className="flex items-start justify-between gap-4 rounded-[1.45rem] border border-white/10 bg-[rgba(7,17,31,0.7)] px-4 py-4 transition hover:border-accent/30 hover:bg-[rgba(7,17,31,0.84)] sm:items-center"
                          href={card.href}
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <span className="glow-soft flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                              <Icon className="h-5 w-5" name={card.icon} />
                            </span>
                            <div className="min-w-0">
                              <p className="text-xs uppercase tracking-[0.24em] text-muted">{card.label}</p>
                              <p
                                className={`mt-1 font-semibold text-text ${
                                  index === 0
                                    ? "font-heading text-[1.3rem] leading-tight [overflow-wrap:anywhere] sm:text-[1.55rem]"
                                    : "text-base leading-7 [overflow-wrap:anywhere] sm:text-[1.05rem]"
                                }`}
                              >
                                {card.value}
                              </p>
                            </div>
                          </div>
                          <Icon className="h-4 w-4 shrink-0 text-accent" name="arrow" />
                        </a>
                      ))}
                    </div>
                  </div>
                </StaggerItem>

                <div className="grid gap-4 sm:grid-cols-2">
                  <StaggerItem>
                    <div className="premium-card h-full">
                      <p className="text-sm uppercase tracking-[0.28em] text-accent">Co dostajesz</p>
                      <ul className="mt-5 space-y-3">
                        {contactBenefits.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-200/[0.74]">
                            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                              <Icon className="h-3.5 w-3.5" name="check" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="premium-card h-full">
                      <p className="text-sm uppercase tracking-[0.28em] text-violetAccent">Jak to przebiega</p>
                      <ul className="mt-5 space-y-3">
                        {contactFlow.map((item, index) => (
                          <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-200/[0.74]">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-text">
                              0{index + 1}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </StaggerItem>
                </div>

                <StaggerItem>
                  <div className="premium-card">
                    <p className="text-sm uppercase tracking-[0.28em] text-accent">Dlaczego teraz</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {[
                        "Wygląd marki od razu buduje zaufanie",
                        "Lepsza struktura ułatwia kontakt",
                        "Dopracowany front-end lepiej sprzedaje usługę"
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.3rem] border border-white/10 bg-[rgba(7,17,31,0.72)] px-4 py-4 text-sm leading-6 text-text"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="surface-card relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,210,255,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(132,93,255,0.12),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
              <div className="relative mb-8">
                <span className="eyebrow">Bezpłatna wycena</span>
                <h3 className="mt-6 max-w-[17ch] font-heading text-[2.35rem] font-semibold leading-[1.02] text-text sm:text-[2.95rem]">
                  Opisz swój projekt, a przygotuję kierunek i kolejny krok.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200/[0.76] sm:text-[1rem]">
                  To dobre miejsce, żeby zebrać pierwsze informacje o stronie. Po wysłaniu formularza przygotuję
                  odpowiedź dopasowaną do Twojej branży i zakresu projektu.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {["brief", "zakres", "termin"].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.3rem] border border-white/10 bg-[rgba(7,17,31,0.7)] px-4 py-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-200/[0.82]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-[1.95rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

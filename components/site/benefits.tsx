import Image from "next/image";
import { benefitCards, brand, portraitVisual } from "@/lib/site-data";
import { Icon } from "./icon";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { SectionHeading } from "./section-heading";

export function BenefitsSection() {
  return (
    <section className="section-shell py-14 sm:py-20" id="dlaczego-ja">
      <div className="section-panel section-panel-violet">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="flex flex-col justify-between">
            <SectionHeading
              description="Współpraca ma być czytelna, a finalny efekt ma pomagać marce wyglądać pewniej, nowocześniej i bardziej wiarygodnie."
              eyebrow="Dlaczego warto ze mną pracować"
              title="Łączę dopracowany design z prostym procesem i biznesowym podejściem."
            />

            <div className="mt-8 grid gap-5">
              <div className="section-panel-soft overflow-hidden p-3 sm:p-4">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(4,10,20,0.88),rgba(7,15,28,0.78))]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(88,210,255,0.2),transparent_26%),radial-gradient(circle_at_78%_76%,rgba(132,93,255,0.18),transparent_24%)]" />
                  <div className="pointer-events-none absolute -left-8 top-10 h-24 w-24 rounded-full bg-accent/20 blur-3xl sm:h-32 sm:w-32" />
                  <div className="pointer-events-none absolute -right-8 bottom-8 h-28 w-28 rounded-full bg-violetAccent/20 blur-3xl sm:h-36 sm:w-36" />

                  <div className="flex flex-col gap-4 p-4 sm:p-0">
                    <div className="flex flex-col gap-3 sm:hidden">
                      <div className="rounded-full border border-white/10 bg-[rgba(7,17,31,0.72)] px-4 py-2 text-center text-[0.68rem] uppercase tracking-[0.26em] text-accent backdrop-blur">
                        {brand.name}
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-center text-[0.68rem] uppercase tracking-[0.24em] text-text/88 backdrop-blur">
                        web designer
                      </div>
                    </div>

                    <div className="relative aspect-[5/6] min-h-[360px] overflow-hidden rounded-[1.45rem] sm:min-h-[460px] sm:rounded-none">
                      <Image
                        alt={portraitVisual.alt}
                        className="object-cover object-[center_18%]"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 32vw"
                        src={portraitVisual.src}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,18,0.02),rgba(3,8,18,0.22)_58%,rgba(3,8,18,0.74)_100%)]" />
                      <div className="absolute inset-0 border border-white/8" />

                      <div className="absolute left-5 right-5 top-5 hidden items-start justify-between gap-3 sm:flex">
                        <div className="rounded-full border border-white/10 bg-[rgba(7,17,31,0.72)] px-4 py-2 text-[0.68rem] uppercase tracking-[0.26em] text-accent backdrop-blur">
                          {brand.name}
                        </div>
                        <div className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-text/88 backdrop-blur">
                          web designer
                        </div>
                      </div>

                      <div className="absolute inset-x-5 bottom-5 hidden rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.86),rgba(7,17,31,0.72))] px-5 py-4 shadow-[0_18px_48px_rgba(3,10,20,0.4)] backdrop-blur-md sm:block">
                        <p className="text-xs uppercase tracking-[0.28em] text-violetAccent">{brand.owner}</p>
                        <p className="mt-2 text-sm leading-7 text-slate-100/88 sm:text-[0.96rem]">
                          Bezpośrednia współpraca od pierwszej rozmowy po gotowe wdrożenie i publikację strony.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.86),rgba(7,17,31,0.72))] px-4 py-4 shadow-[0_18px_48px_rgba(3,10,20,0.26)] backdrop-blur-md sm:hidden">
                      <p className="text-xs uppercase tracking-[0.28em] text-violetAccent">{brand.owner}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-100/88">
                        Bezpośrednia współpraca od pierwszej rozmowy po gotowe wdrożenie i publikację strony.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="premium-card">
                <p className="text-sm uppercase tracking-[0.28em] text-violetAccent">O mnie</p>
                <p className="mt-4 text-lg leading-8 text-text">{brand.about}</p>
                <p className="mt-4 text-sm leading-7 text-slate-200/[0.74]">
                  Pracujesz bezpośrednio ze mną, więc komunikacja jest szybka, decyzje są konkretne, a każdy detal
                  strony ma wspierać estetykę marki i realny efekt biznesowy.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <div className="soft-pill w-full justify-center sm:w-auto sm:justify-start">
                    <Icon className="h-4 w-4 text-accent" name="spark" />
                    Indywidualne podejście do projektu
                  </div>
                  <div className="soft-pill w-full justify-center sm:w-auto sm:justify-start">
                    <Icon className="h-4 w-4 text-violetAccent" name="target" />
                    Dopracowanie pod cel i wizerunek marki
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {benefitCards.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <article className="premium-card h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violetAccent/20 bg-violetAccent/10 text-violetAccent">
                    <Icon className="h-5 w-5" name={benefit.icon} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-text">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-200/[0.74]">{benefit.description}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

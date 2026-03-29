import { trustPoints } from "@/lib/site-data";
import { Icon } from "./icon";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { SectionHeading } from "./section-heading";

export function TrustSection() {
  return (
    <section className="section-shell py-14 sm:py-20">
      <div className="section-panel">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="surface-card h-full">
              <SectionHeading
                description="Jeśli jesteś na etapie pierwszej współpracy albo przygotowujesz nową markę, ta sekcja od razu pokazuje, czego można oczekiwać po realizacji."
                eyebrow="Zaufanie"
                title="Na co stawiam w każdym projekcie, zanim pojawią się pierwsze opinie."
              />

              <div className="mt-8 rounded-[1.75rem] border border-accent/[0.15] bg-accent/10 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-accent">Miejsce na przyszłe opinie</p>
                <p className="mt-4 text-xl font-semibold text-text">
                  Ta sekcja może zostać łatwo podmieniona na realne rekomendacje, kiedy pojawią się pierwsze wdrożenia.
                </p>
              </div>
            </div>
          </Reveal>

          <Stagger className="grid gap-4 md:grid-cols-3">
            {trustPoints.map((point) => (
              <StaggerItem key={point.title}>
                <article className="premium-card h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" name="check" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-text">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-200/[0.74]">{point.description}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

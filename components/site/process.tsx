import { processSteps } from "@/lib/site-data";
import { Icon } from "./icon";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ProcessSection() {
  return (
    <section className="section-shell py-14 sm:py-20" id="proces">
      <div className="section-panel">
        <Reveal>
          <SectionHeading
            description="Od pierwszej rozmowy wiesz, na jakim etapie jesteśmy. Proces jest prosty, przejrzysty i nastawiony na sprawne domknięcie projektu."
            eyebrow="Jak wygląda współpraca"
            title="Cztery kroki od pomysłu do strony gotowej do publikacji."
          />
        </Reveal>

        <Stagger className="mt-10 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <StaggerItem key={step.title}>
              <article className="premium-card relative h-full overflow-hidden">
                <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-accent/[0.65] via-violetAccent/20 to-white/0" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" name={step.icon} />
                  </div>
                  <span className="font-heading text-4xl font-bold text-white/10">0{index + 1}</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-text">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-200/[0.74]">{step.description}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

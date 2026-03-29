import { serviceCards } from "@/lib/site-data";
import { Icon } from "./icon";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ServicesSection() {
  return (
    <section className="section-shell py-14 sm:py-20" id="uslugi">
      <div className="section-panel">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal>
            <SectionHeading
              description="Projektuję strony od prostych wizytówek po wyraziste landing page. Każda usługa jest ustawiona pod czytelność, kontakt i profesjonalny odbiór marki."
              eyebrow="Co mogę dla Ciebie zrobić"
              title="Zakres dopasowany do tego, jak Twoja firma ma wyglądać i działać online."
            />
          </Reveal>

          <Stagger className="grid gap-5 sm:grid-cols-2" staggerChildren={0.11}>
            {serviceCards.map((service, index) => (
              <StaggerItem key={service.title} className="h-full">
                <article className="premium-card h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" name={service.icon} />
                    </div>
                    <span className="text-[0.72rem] uppercase tracking-[0.28em] text-muted/[0.78]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-[1.24rem] font-semibold text-text sm:text-[1.35rem]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-200/[0.76]">{service.description}</p>
                  <div className="mt-5 rounded-[1.35rem] border border-white/10 bg-white/[0.05] px-4 py-3 text-sm leading-6 text-muted">
                    {service.note}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

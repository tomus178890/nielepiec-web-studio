import { faqs } from "@/lib/site-data";
import { Icon } from "./icon";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { SectionHeading } from "./section-heading";

export function FaqSection() {
  return (
    <section className="section-shell py-14 sm:py-20" id="faq">
      <div className="section-panel">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              description="Najważniejsze kwestie warto wyjaśnić od razu. To ułatwia podjęcie decyzji i przyspiesza pierwszy kontakt."
              eyebrow="FAQ"
              title="Najczęściej zadawane pytania przed startem projektu."
            />
          </Reveal>

          <Stagger className="space-y-4">
            {faqs.map((item) => (
              <StaggerItem key={item.question}>
                <details className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-0 open:border-accent/20 open:bg-white/[0.06]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                    <span className="text-lg font-semibold text-text">{item.question}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent transition group-open:rotate-45">
                      <Icon className="h-4 w-4" name="arrow" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm leading-7 text-slate-200/[0.74]">{item.answer}</div>
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

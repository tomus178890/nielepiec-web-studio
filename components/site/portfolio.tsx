import Image from "next/image";
import { conceptProjects } from "@/lib/site-data";
import { Icon } from "./icon";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { SectionHeading } from "./section-heading";

export function PortfolioSection() {
  return (
    <section className="section-shell py-14 sm:py-20" id="portfolio">
      <div className="section-panel section-panel-violet">
        <Reveal>
          <SectionHeading
            description="Na start pokazuję przykładowe realizacje koncepcyjne, które prezentują styl, strukturę i kierunek, jaki mogę przygotować dla różnych branż."
            eyebrow="Portfolio"
            title="Przykładowe projekty, które pokazują możliwości strony sprzedażowej i firmowej."
          />
        </Reveal>

        <Stagger className="mt-10 grid gap-5 lg:auto-rows-[300px] lg:grid-cols-12" staggerChildren={0.1}>
          {conceptProjects.map((project, index) => (
            <StaggerItem
              key={project.name}
              className={index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}
            >
              <article className="group section-panel-soft h-full overflow-hidden rounded-[2.1rem] p-0 transition duration-300 hover:-translate-y-1.5 hover:border-accent/25 hover:shadow-glow">
                {index === 0 ? (
                  <div className="relative h-full min-h-[500px] overflow-hidden">
                    <Image
                      alt={project.imageAlt}
                      className={`${project.imageClassName} transition duration-700 group-hover:scale-[1.05]`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,18,0.04),rgba(4,10,18,0.16)_24%,rgba(4,10,18,0.96)_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(128deg,rgba(6,16,29,0.22),rgba(6,16,29,0.02)_36%,rgba(11,16,38,0.52)_100%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,210,255,0.24),transparent_24%),radial-gradient(circle_at_18%_20%,rgba(132,93,255,0.18),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(255,191,116,0.12),transparent_20%)] opacity-95 transition duration-500 group-hover:opacity-100" />

                    <div className="absolute inset-x-5 top-5 flex flex-wrap items-start justify-between gap-3 sm:inset-x-6 sm:top-6">
                      <span className="rounded-full border border-accent/[0.15] bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                        koncept 0{index + 1}
                      </span>
                      <span className="rounded-full border border-white/10 bg-[rgba(7,17,31,0.72)] px-3 py-1 text-[0.72rem] uppercase tracking-[0.24em] text-text backdrop-blur">
                        {project.type}
                      </span>
                    </div>

                    <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
                      <div className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.86),rgba(7,17,31,0.76))] p-5 shadow-[0_28px_70px_rgba(3,10,20,0.44)] backdrop-blur-md transition duration-500 group-hover:border-accent/25 sm:p-6">
                        <p className="text-xs uppercase tracking-[0.28em] text-accent">wyróżniony koncept</p>
                        <h3 className="mt-3 font-heading text-[2.1rem] font-semibold leading-[1.02] text-text sm:text-[2.55rem]">
                          {project.name}
                        </h3>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200/[0.84] sm:text-[1rem]">
                          {project.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[0.7rem] uppercase tracking-[0.2em] text-slate-200/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a className="secondary-button mt-6 w-full justify-between sm:w-auto" href="#kontakt">
                          Zobacz projekt
                          <Icon className="h-4 w-4" name="arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative overflow-hidden border-b border-white/10">
                      <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11]">
                        <Image
                          alt={project.imageAlt}
                          className={`${project.imageClassName} transition duration-700 group-hover:scale-[1.06]`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          src={project.image}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,11,19,0.03),rgba(6,11,19,0.12)_28%,rgba(6,11,19,0.94)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(6,11,19,0.02),rgba(6,11,19,0.08)_24%,rgba(6,11,19,0.9)_100%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,210,255,0.18),transparent_22%),radial-gradient(circle_at_12%_20%,rgba(132,93,255,0.14),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(255,191,116,0.14),transparent_22%)] opacity-90 transition duration-500 group-hover:opacity-100" />

                        <div className="absolute inset-x-5 top-5 flex flex-wrap items-start justify-between gap-3">
                          <span className="rounded-full border border-accent/[0.15] bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                            koncept 0{index + 1}
                          </span>
                          <span className="rounded-full border border-white/10 bg-[rgba(7,17,31,0.65)] px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em] text-text backdrop-blur">
                            {project.type}
                          </span>
                        </div>

                        <div className="absolute inset-x-5 bottom-5">
                          <div className="rounded-[1.4rem] border border-white/10 bg-[rgba(7,17,31,0.74)] p-4 backdrop-blur-md transition duration-500 group-hover:border-accent/25 group-hover:bg-[rgba(7,17,31,0.68)]">
                            <p className="text-xs uppercase tracking-[0.28em] text-accent">podgląd projektu</p>
                            <p className="mt-2 text-sm leading-6 text-text">
                              Realistyczny kadr wzmacnia odbiór projektu i nadaje sekcji bardziej premium charakter.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-6 sm:px-6">
                      <h3 className="text-[1.82rem] font-semibold leading-tight text-text">{project.name}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-200/[0.74]">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs uppercase tracking-[0.18em] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        className="secondary-button mt-6 w-full justify-between group-hover:border-accent/30 group-hover:bg-accent/5"
                        href="#kontakt"
                      >
                        Zobacz projekt
                        <Icon className="h-4 w-4" name="arrow" />
                      </a>
                    </div>
                  </>
                )}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

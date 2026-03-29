"use client";

import { FormEvent, useState } from "react";
import { brand } from "@/lib/site-data";
import { Icon } from "./icon";

const projectOptions = [
  "Strona wizytówka",
  "Landing page sprzedażowy",
  "Strona dla lokalnej firmy",
  "Odświeżenie obecnej strony",
  "Inny projekt"
];

export function ContactForm() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = (form.get("name")?.toString().trim() ?? "") || "Klient";
    const email = form.get("email")?.toString().trim() ?? "";
    const company = form.get("company")?.toString().trim() ?? "";
    const projectType = form.get("projectType")?.toString().trim() ?? "";
    const message = form.get("message")?.toString().trim() ?? "";
    const website = form.get("website")?.toString().trim() ?? "";

    const subject = encodeURIComponent(
      `${projectType ? `${projectType} - ` : ""}Zapytanie o stronę internetową od ${name}`
    );
    const body = encodeURIComponent(
      [
        `Imię: ${name}`,
        email ? `E-mail: ${email}` : "",
        company ? `Firma: ${company}` : "",
        website ? `Aktualna strona: ${website}` : "",
        projectType ? `Typ projektu: ${projectType}` : "",
        "",
        "Brief projektu:",
        message || "Tutaj wpisz kilka zdań o swojej stronie, celu i oczekiwaniach."
      ]
        .filter(Boolean)
        .join("\n")
    );

    setStatus("Otwieram Twój program pocztowy z uzupełnionym zapytaniem.");
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2.5 block text-sm font-medium text-slate-100">Imię i nazwisko</span>
          <input required className="input-shell" name="name" placeholder="Twoje imię" type="text" />
        </label>

        <label className="block">
          <span className="mb-2.5 block text-sm font-medium text-slate-100">Adres e-mail</span>
          <input
            required
            className="input-shell"
            name="email"
            placeholder="kontakt@twojafirma.pl"
            type="email"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2.5 block text-sm font-medium text-slate-100">Firma</span>
          <input className="input-shell" name="company" placeholder="Nazwa firmy" type="text" />
        </label>

        <label className="block">
          <span className="mb-2.5 block text-sm font-medium text-slate-100">Typ projektu</span>
          <select className="input-shell" defaultValue={projectOptions[0]} name="projectType">
            {projectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-2.5 block text-sm font-medium text-slate-100">Aktualna strona lub social media</span>
        <input className="input-shell" name="website" placeholder="https://" type="url" />
      </label>

      <label className="block">
        <span className="mb-2.5 block text-sm font-medium text-slate-100">O projekcie</span>
        <textarea
          required
          className="textarea-shell"
          name="message"
          placeholder="Napisz kilka zdań o tym, dla kogo ma być strona, jaki ma cel i czego potrzebujesz."
        />
      </label>

      <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button className="primary-button w-full sm:w-auto" type="submit">
            Napisz wiadomość
            <Icon className="h-4 w-4" name="arrow" />
          </button>
          <p className="max-w-sm text-sm leading-6 text-slate-200/[0.72]">
            Formularz otwiera e-mail gotowy do wysłania na adres {brand.email}.
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {["jasny brief", "szybka odpowiedź", "czytelny kolejny krok"].map((item) => (
          <div
            key={item}
            className="rounded-[1.2rem] border border-white/10 bg-[rgba(7,17,31,0.68)] px-4 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-slate-200/75"
          >
            {item}
          </div>
        ))}
      </div>

      {status ? (
        <div className="rounded-[1.4rem] border border-accent/20 bg-accent/10 px-4 py-3 text-sm text-text shadow-glow">
          {status}
        </div>
      ) : null}
    </form>
  );
}

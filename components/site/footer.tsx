import { brand, footerLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 pb-10 pt-8">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold text-text">{brand.name}</p>
          <p className="mt-2 text-sm text-muted">
            Nowoczesne strony internetowe dla firm, które chcą wyglądać profesjonalnie i sprzedawać pewniej.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted">
          {footerLinks.map((link) => (
            <a key={link.label} className="transition hover:text-text" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

# Nielepiec Web Studio

Nowoczesny landing page zbudowany w `Next.js`, `React` i `Tailwind CSS`.

## Uruchomienie lokalnie

1. Zainstaluj `Node.js` w wersji `20.x` lub nowszej.
2. W katalogu projektu uruchom `npm install`.
3. Start development servera: `npm run dev`.
4. Otworz [http://localhost:3000](http://localhost:3000).

## Przydatne komendy

- `npm run dev` - tryb developerski
- `npm run build` - build produkcyjny
- `npm run start` - podglad produkcyjny
- `npm run lint` - sprawdzenie ESLint

## Struktura projektu

- `app/` - layout, strona glowna i style globalne
- `components/site/` - sekcje landing page i komponenty UI
- `lib/site-data.ts` - dane marki, tresci sekcji, FAQ i portfolio

## Co podmienic w pierwszej kolejnosci

- `lib/site-data.ts`
  - nazwe marki, opis hero i teksty sekcji
  - realizacje w `conceptProjects`
  - FAQ i stopke
- `components/site/contact-form.tsx`
  - zachowanie formularza, jesli zechcesz podpiac backend lub formularz zewnetrzny
- `app/layout.tsx`
  - `metadata` pod SEO i udostepnianie strony

## Uwagi

- Aktualna wersja formularza otwiera klienta poczty z uzupelniona wiadomoscia.
- Portfolio jest przygotowane jako realizacje koncepcyjne, gotowe do podmiany na prawdziwe wdrozenia.

export const brand = {
  name: "Nielepiec Web Studio",
  owner: "Tomasz Nielepiec",
  phone: "+48 883 229 444",
  email: "nielepiect@gmail.com",
  shortIntro:
    "Projektuję nowoczesne strony internetowe dla firm, które chcą wyglądać profesjonalnie i łatwo zamieniać ruch w zapytania.",
  heroTitle:
    "Tworzę nowoczesne strony internetowe, które przyciągają uwagę i pomagają firmom zdobywać klientów.",
  heroDescription:
    "Estetyczne, szybkie i responsywne strony dla firm, marek osobistych i lokalnych biznesów. Od pierwszej rozmowy po publikację dbam o wygląd, funkcjonalność i efekt biznesowy.",
  about:
    "Nazywam się Tomasz Nielepiec i tworzę dopracowane strony internetowe dla marek, które chcą wyglądać nowocześnie, budzić zaufanie i od pierwszych sekund robić profesjonalne wrażenie."
};

export const navigation = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Dlaczego ja", href: "#dlaczego-ja" },
  { label: "Proces", href: "#proces" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" }
] as const;

export const heroHighlights = [
  "Nowoczesny design dopasowany do marki",
  "Responsywność na telefonie i desktopie",
  "Szybki proces od koncepcji do publikacji"
] as const;

export const heroVisual = {
  src: "/images/hero-workspace.jpg",
  alt: "Nowoczesne ciemne stanowisko pracy z monitorem, klawiaturą i biurkiem w klimacie premium."
} as const;

export const portraitVisual = {
  src: "/images/tomasz-nielepiec.jpg",
  alt: "Portret Tomasza Nielepca na ciemnym tle, pasujący do nowoczesnej strony premium."
} as const;

export const serviceCards = [
  {
    icon: "monitor",
    title: "Strony wizytówki",
    description:
      "Klarowne strony prezentujące firmę, ofertę i dane kontaktowe w profesjonalny sposób.",
    note: "Idealne dla usług, ekspertów i lokalnych biznesów."
  },
  {
    icon: "cursor",
    title: "Landing page sprzedażowe",
    description:
      "Strony nastawione na konkretne działanie: zapis, kontakt, lead albo sprzedaż usługi.",
    note: "Mocne CTA, logiczny układ i wyraźna narracja."
  },
  {
    icon: "storefront",
    title: "Strony dla lokalnych firm",
    description:
      "Wizerunek online, który pomaga być widocznym, wzbudza zaufanie i ułatwia kontakt.",
    note: "Dobre rozwiązanie dla salonów, gabinetów i punktów usługowych."
  },
  {
    icon: "refresh",
    title: "Odświeżenie istniejącej strony",
    description:
      "Nowy wygląd, lepsza struktura, bardziej współczesny odbiór i przyjaźniejsze UX.",
    note: "Bez potrzeby zaczynania wszystkiego od zera."
  },
  {
    icon: "smartphone",
    title: "Responsywny design",
    description:
      "Projekt przygotowany tak, aby strona dobrze wyglądała i działała na telefonach, tabletach i komputerach.",
    note: "Mobile first i czytelna hierarchia treści."
  },
  {
    icon: "gauge",
    title: "Podstawowa optymalizacja i SEO",
    description:
      "Dbam o porządną strukturę, szybkie ładowanie i fundamenty pod dobrą widoczność w wyszukiwarce.",
    note: "Lepsza wydajność i lepsze pierwsze wrażenie."
  }
] as const;

export const benefitCards = [
  {
    icon: "spark",
    title: "Nowoczesny wygląd",
    description: "Projekt, który od razu komunikuje jakość, aktualność i profesjonalizm marki."
  },
  {
    icon: "zap",
    title: "Szybkie działanie",
    description: "Lekka struktura i przemyślany front-end, żeby strona była przyjemna w użyciu."
  },
  {
    icon: "palette",
    title: "Dopasowanie do marki",
    description: "Kolory, typografia i ton komunikacji ustawione pod Twoją branżę oraz odbiorcę."
  },
  {
    icon: "workflow",
    title: "Prosty proces współpracy",
    description: "Jasne kroki, konkretne ustalenia i brak chaosu podczas realizacji."
  },
  {
    icon: "shield",
    title: "Wsparcie po wdrożeniu",
    description: "Pomagam domknąć projekt i odpowiadam na pytania po uruchomieniu strony."
  },
  {
    icon: "target",
    title: "Nacisk na efekt biznesowy",
    description: "Strona ma nie tylko wyglądać, ale też ułatwiać kontakt i budować zaufanie."
  }
] as const;

export const processSteps = [
  {
    icon: "message",
    title: "Rozmowa i poznanie potrzeb",
    description: "Ustalamy cel strony, grupę docelową, zakres i kierunek wizualny projektu."
  },
  {
    icon: "draft",
    title: "Projekt i ustalenie kierunku",
    description: "Przygotowuję koncepcję, układ sekcji i styl, który najlepiej pasuje do marki."
  },
  {
    icon: "code",
    title: "Wdrożenie strony",
    description: "Buduję dopracowany front-end, dopinam responsywność i porządek techniczny."
  },
  {
    icon: "rocket",
    title: "Poprawki i publikacja",
    description: "Wprowadzamy finalne poprawki, a potem przechodzimy do uruchomienia strony."
  }
] as const;

export const conceptProjects = [
  {
    name: "Atelier Forma",
    type: "Landing page premium",
    description:
      "Elegancki landing dla studia architektury wnętrz, nastawiony na prezentację realizacji i pozyskiwanie zapytań.",
    tags: ["branding premium", "pozyskiwanie leadów", "mobile first"],
    image: "/images/portfolio-1.jpg",
    imageAlt:
      "Nowoczesny ciemny monitor na drewnianym biurku w studyjnym oświetleniu, pasujący do strony premium.",
    imageClassName: "object-cover object-[center_35%]"
  },
  {
    name: "Clinic One",
    type: "Strona lokalnej firmy",
    description:
      "Nowoczesna strona dla gabinetu specjalistycznego z prostym przekazem, zaufaniem i szybkim kontaktem.",
    tags: ["lokalny biznes", "fundament SEO", "czytelny UX"],
    image: "/images/portfolio-2.jpg",
    imageAlt:
      "Ciemny workspace z monitorem i nowoczesnym oświetleniem, odpowiedni dla portfolio web designera.",
    imageClassName: "object-cover object-center"
  },
  {
    name: "Launch Pilot",
    type: "Landing page kampanijny",
    description:
      "Wyrazista strona sprzedażowa dla usługi B2B z mocnym hero, sekcją korzyści i formularzem kontaktowym.",
    tags: ["B2B", "wydajność", "ścieżka konwersji"],
    image: "/images/portfolio-3.jpg",
    imageAlt:
      "Monitor z widokiem nowoczesnych ekranów UI w ciemnym studio projektowym.",
    imageClassName: "object-cover object-[center_18%]"
  }
] as const;

export const trustPoints = [
  {
    title: "Jasna komunikacja",
    description: "Każdy etap projektu jest czytelny, a decyzje nie gubią się w chaosie."
  },
  {
    title: "Dopracowany detal",
    description: "Skupiam się na estetyce, rytmie sekcji, responsywności i odbiorze marki."
  },
  {
    title: "Projekt pod cel",
    description: "Każda sekcja ma wspierać kontakt, sprzedaż albo profesjonalny wizerunek."
  }
] as const;

export const faqs = [
  {
    question: "Ile kosztuje strona internetowa?",
    answer:
      "Wycena zależy od zakresu, liczby sekcji i poziomu rozbudowania. Najczęściej zaczyna się od rozmowy o celu strony, po której przygotowuję indywidualną propozycję."
  },
  {
    question: "Ile trwa realizacja?",
    answer:
      "Termin zależy od skali projektu i szybkości przekazywania materiałów. Prostsze landing page można zamknąć szybciej, bardziej rozbudowane strony potrzebują dodatkowego czasu na dopracowanie."
  },
  {
    question: "Czy mogę później samodzielnie edytować treść?",
    answer:
      "Tak. Stronę można przygotować tak, aby kluczowe treści dało się łatwo aktualizować wraz z rozwojem biznesu."
  },
  {
    question: "Czy strona będzie działać na telefonie?",
    answer:
      "Tak. Responsywność jest jednym z podstawowych założeń projektu, dlatego wersja mobilna jest dopracowywana od początku."
  },
  {
    question: "Czy pomagasz po uruchomieniu strony?",
    answer:
      "Tak. Po wdrożeniu zostaje przestrzeń na poprawki, wsparcie i dopięcie finalnych szczegółów."
  }
] as const;

export const footerLinks = [
  { label: "Telefon", href: "tel:+48883229444" },
  { label: "E-mail", href: "mailto:nielepiect@gmail.com" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontakt", href: "#kontakt" }
] as const;

export const stockPhotoSources = {
  hero: {
    src: "/images/hero-workspace.jpg",
    photographer: "Mint Workspace",
    sourceUrl: "https://www.pexels.com/photo/monitor-on-a-desk-20213722/"
  },
  portfolio: [
    {
      src: "/images/portfolio-1.jpg",
      photographer: "Josh Sorenson",
      sourceUrl: "https://www.pexels.com/photo/two-computer-monitors-on-a-desk-19554896/"
    },
    {
      src: "/images/portfolio-2.jpg",
      photographer: "Mint Workspace",
      sourceUrl: "https://www.pexels.com/photo/flat-screen-computer-monitor-on-a-desk-20648393/"
    },
    {
      src: "/images/portfolio-3.jpg",
      photographer: "Nguyen Designer",
      sourceUrl: "https://www.pexels.com/photo/monitor-displaying-ui-designs-20694723/"
    }
  ]
} as const;

import type { ReactNode } from "react";

type IconName =
  | "arrow"
  | "check"
  | "code"
  | "cursor"
  | "draft"
  | "gauge"
  | "menu"
  | "message"
  | "monitor"
  | "palette"
  | "phone"
  | "refresh"
  | "rocket"
  | "shield"
  | "smartphone"
  | "spark"
  | "storefront"
  | "target"
  | "workflow"
  | "x"
  | "zap"
  | "mail";

const icons: Record<IconName, ReactNode> = {
  arrow: (
    <path d="M7 17 17 7M7 7h10v10" />
  ),
  check: (
    <path d="m5 12 4 4L19 6" />
  ),
  code: (
    <>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 4-4 16" />
    </>
  ),
  cursor: (
    <>
      <path d="M5 4v15l4-4 3 6 3-1.5-3-6h7L5 4Z" />
    </>
  ),
  draft: (
    <>
      <path d="M4 20h4l10-10-4-4L4 16v4Z" />
      <path d="m12 6 4 4" />
      <path d="M16 4 20 8" />
    </>
  ),
  gauge: (
    <>
      <path d="M5 15a7 7 0 1 1 14 0" />
      <path d="m12 12 4-4" />
      <path d="M12 12v3" />
    </>
  ),
  mail: (
    <>
      <path d="M4 6h16v12H4z" />
      <path d="m4 8 8 6 8-6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  message: (
    <>
      <path d="M5 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9l-4 4v-4a3 3 0 0 1-3-3V7Z" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 19h8" />
      <path d="M12 17v2" />
    </>
  ),
  palette: (
    <>
      <path d="M12 4a8 8 0 1 0 0 16h1a2 2 0 0 0 0-4h-1a2 2 0 0 1 0-4h1a4 4 0 0 0 0-8Z" />
      <path d="M7.5 11h.01" />
      <path d="M8.5 8h.01" />
      <path d="M11.5 7h.01" />
    </>
  ),
  phone: (
    <>
      <path d="M7.5 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M11 17h2" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11a8 8 0 0 0-14-4l-2 2" />
      <path d="M4 7V3h4" />
      <path d="M4 13a8 8 0 0 0 14 4l2-2" />
      <path d="M20 17v4h-4" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 4c4 0 6 3 6 7-4 0-7 2-7 6-4 0-7-2-7-6 0-4 4-7 8-7Z" />
      <path d="M15 9h.01" />
      <path d="m7 17-2 3" />
      <path d="m17 17 2 3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 5 3.5 7.5 7 9 3.5-1.5 7-4 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  smartphone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 6h2" />
      <path d="M11 18h2" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3 9.8 9.8 3 12l6.8 2.2L12 21l2.2-6.8L21 12l-6.8-2.2L12 3Z" />
    </>
  ),
  storefront: (
    <>
      <path d="M4 9 6 4h12l2 5v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" />
      <path d="M6 14v6h12v-6" />
      <path d="M10 14v6" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4v3" />
      <path d="M20 12h-3" />
      <path d="M12 20v-3" />
      <path d="M4 12h3" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="5" width="7" height="5" rx="1.5" />
      <rect x="14" y="5" width="7" height="5" rx="1.5" />
      <rect x="8.5" y="14" width="7" height="5" rx="1.5" />
      <path d="M10 7.5h4" />
      <path d="M12 10v4" />
    </>
  ),
  x: (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </>
  ),
  zap: (
    <>
      <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" />
    </>
  )
};

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  );
}

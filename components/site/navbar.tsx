"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { brand, navigation } from "@/lib/site-data";
import { Icon } from "./icon";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 px-4 pb-2 pt-4 sm:px-6"
      initial={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-shell">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] px-4 py-3.5 shadow-panel sm:px-5 sm:py-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(88,210,255,0.08),transparent_24%),radial-gradient(circle_at_top_right,rgba(132,93,255,0.1),transparent_28%)]" />
          <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-white/0 via-accent/70 to-white/0" />

          <div className="relative flex items-center justify-between gap-4 sm:gap-5">
            <a
              aria-label="Nielepiec Web Studio - wróć na górę strony"
              className="group flex min-w-0 items-center gap-4 sm:gap-5"
              href="#start"
            >
              <span className="relative isolate flex h-11 w-11 shrink-0 items-center justify-center sm:h-14 sm:w-14">
                <span className="absolute inset-[-18%] rounded-[1.35rem] bg-[radial-gradient(circle,rgba(255,154,86,0.16),rgba(121,56,255,0.14)_48%,transparent_76%)] blur-md opacity-75 transition duration-300 group-hover:opacity-100" />
                <span className="absolute inset-0 rounded-[1rem] border border-white/[0.12] bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))] shadow-[0_0_0_1px_rgba(41,216,255,0.08),0_0_22px_rgba(41,216,255,0.1),0_16px_34px_rgba(3,10,20,0.24)] sm:rounded-[1.15rem]" />
                <Image
                  alt="Logo Nielepiec Web Studio"
                  className="relative z-10 h-full w-full rounded-[0.9rem] object-cover object-[center_33%] p-[3px] transition duration-300 group-hover:scale-[1.03] sm:rounded-[1.02rem] sm:p-1"
                  height={1024}
                  priority
                  sizes="(max-width: 640px) 44px, 56px"
                  src="/logo.png"
                  width={1024}
                />
              </span>
              <span className="min-w-0 self-center">
                <span className="block truncate font-heading text-[0.98rem] font-semibold leading-none tracking-[-0.035em] text-text sm:text-[1.16rem]">
                  {brand.name}
                </span>
                <span className="mt-1.5 hidden text-[0.68rem] uppercase tracking-[0.3em] text-muted/[0.85] sm:block">
                  premium web design
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-7 xl:gap-8 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  className="text-sm text-muted transition hover:text-text"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 xl:gap-4 lg:flex">
              <a className="secondary-button px-4 py-2.5 text-sm" href={`tel:${brand.phone.replace(/\s+/g, "")}`}>
                <Icon className="h-4 w-4" name="phone" />
                {brand.phone}
              </a>
              <a className="primary-button px-4 py-2.5 text-sm" href="#kontakt">
                Zamów wycenę
              </a>
            </div>

            <button
              aria-expanded={open}
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
              className="secondary-button p-3.5 lg:hidden"
              onClick={() => setOpen((value) => !value)}
              type="button"
            >
              <Icon className="h-5 w-5" name={open ? "x" : "menu"} />
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                animate={{ opacity: 1, height: "auto", y: 0 }}
                className="relative overflow-hidden lg:hidden"
                exit={{ opacity: 0, height: 0, y: -10 }}
                initial={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mt-4 rounded-[1.65rem] border border-white/10 bg-white/[0.055] p-4 shadow-halo">
                  <nav className="flex flex-col gap-2">
                    {navigation.map((item) => (
                      <a
                        key={item.href}
                        className="rounded-2xl px-4 py-3.5 text-sm text-muted transition hover:bg-white/5 hover:text-text"
                        href={item.href}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-4 flex flex-col gap-3">
                    <a
                      className="secondary-button w-full"
                      href={`tel:${brand.phone.replace(/\s+/g, "")}`}
                      onClick={() => setOpen(false)}
                    >
                      <Icon className="h-4 w-4" name="phone" />
                      {brand.phone}
                    </a>
                    <a className="primary-button w-full" href="#kontakt" onClick={() => setOpen(false)}>
                      Zamów wycenę
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}

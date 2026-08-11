"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { himServices } from "@/lib/him-services";

const himChildren = himServices.map((s) => ({
  href: `/health-information-management/${s.slug}`,
  label: s.name,
}));

const links = [
  { href: "/healthcare-ai", label: "Healthcare AI" },
  { href: "/iot-medical-devices", label: "IoT & Devices" },
  { href: "/health-information-management", label: "HIM Services", children: himChildren },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careup-ai", label: "careup.ai" },
  { href: "/about", label: "About" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 8"
      className={`h-2.5 w-2.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
    >
      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileHimOpen, setMobileHimOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileHimOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function openDropdown(href: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(href);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setDropdownOpen(null), 150);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-abyss/70 border-b border-[var(--line)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/ww-mark.png"
            alt="WhirlingWind logo"
            width={34}
            height={24}
            className="invert"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            WhirlingWind
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) =>
            l.children ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => openDropdown(l.href)}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href={l.href}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen === l.href}
                  className={`flex items-center gap-1.5 font-mono text-[13px] uppercase tracking-[0.14em] transition-colors ${
                    pathname.startsWith(l.href) ? "text-teal" : "text-ink-dim hover:text-ink"
                  }`}
                >
                  {l.label}
                  <Chevron open={dropdownOpen === l.href} />
                </Link>

                <AnimatePresence>
                  {dropdownOpen === l.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-4"
                    >
                      <div className="card overflow-hidden rounded-2xl p-2 shadow-2xl shadow-black/40">
                        <Link
                          href={l.href}
                          className="block rounded-xl px-4 py-3 font-display text-sm font-semibold text-ink transition-colors hover:bg-white/5"
                        >
                          All HIM Services →
                        </Link>
                        <div className="my-1 h-px bg-[var(--line)]" />
                        {l.children.map((c, i) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="flex items-start gap-3 rounded-xl px-4 py-3 text-sm leading-snug text-ink-dim transition-colors hover:bg-white/5 hover:text-ink"
                          >
                            <span className="mt-0.5 flex-none font-mono text-[10px] text-teal">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`font-mono text-[13px] uppercase tracking-[0.14em] transition-colors ${
                  pathname.startsWith(l.href) ? "text-teal" : "text-ink-dim hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="btn-primary rounded-full px-5 py-2.5 font-display text-sm font-semibold"
          >
            Talk to us
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-[var(--line)] bg-abyss/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {links.map((l) =>
                l.children ? (
                  <div key={l.href} className="border-b border-[var(--line)] last:border-0">
                    <div className="flex items-center justify-between">
                      <Link href={l.href} className="flex-1 py-3 font-display text-lg text-ink-dim hover:text-ink">
                        {l.label}
                      </Link>
                      <button
                        aria-label={`Toggle ${l.label} submenu`}
                        onClick={() => setMobileHimOpen((v) => !v)}
                        className="p-3 text-ink-dim"
                      >
                        <Chevron open={mobileHimOpen} />
                      </button>
                    </div>
                    <AnimatePresence>
                      {mobileHimOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pl-2"
                        >
                          <div className="flex flex-col gap-0.5 pb-3">
                            {l.children.map((c) => (
                              <Link
                                key={c.href}
                                href={c.href}
                                className="py-2 text-sm text-ink-faint transition-colors hover:text-ink"
                              >
                                {c.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="py-3 font-display text-lg text-ink-dim hover:text-ink"
                  >
                    {l.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="btn-primary mt-3 rounded-full px-5 py-3 text-center font-display font-semibold"
              >
                Talk to us
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

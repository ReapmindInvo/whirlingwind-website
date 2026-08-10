"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { href: "/healthcare-ai", label: "Healthcare AI" },
  { href: "/iot-medical-devices", label: "IoT & Devices" },
  { href: "/health-information-management", label: "HIM Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careup-ai", label: "careup.ai" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

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
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-mono text-[13px] uppercase tracking-[0.14em] transition-colors ${
                pathname.startsWith(l.href) ? "text-teal" : "text-ink-dim hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
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
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="py-3 font-display text-lg text-ink-dim hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
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

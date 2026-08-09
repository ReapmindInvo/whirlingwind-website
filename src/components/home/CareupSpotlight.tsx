"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import Reveal from "@/components/Reveal";
import { careup } from "@/lib/site";

export default function CareupSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-[var(--line)] py-24 lg:py-36"
      style={{
        background:
          "radial-gradient(900px 500px at 80% 20%, rgba(255,255,255,0.07), transparent 60%), linear-gradient(180deg, #061318, #07090d 60%, #061318)",
      }}
    >
      <motion.div style={{ y }} className="pointer-events-none absolute -right-24 top-10 opacity-[0.07]" aria-hidden>
        <span className="font-display text-[20rem] font-extrabold leading-none text-emerald">up</span>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-emerald">
                Product Portfolio
              </p>
              <div className="mt-5 inline-flex rounded-2xl bg-[#0f2a1f] p-4">
                <Image src="/brand/careup.png" alt="careup.ai logo" width={190} height={70} className="h-12 w-auto" />
              </div>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
                {careup.headline}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-dim">{careup.summary}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/careup-ai" className="btn-primary rounded-full px-7 py-3.5 font-display font-semibold">
                  Discover careup.ai
                </Link>
                <Link href="/contact" className="btn-ghost rounded-full px-7 py-3.5 font-display font-semibold text-ink">
                  Book a demo
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {careup.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.1}>
                <div className="card rounded-3xl p-7">
                  <p className="font-display text-4xl font-bold text-emerald">{m.value}</p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                    {m.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { brands } from "@/lib/site";

function BrandCard({ index, total }: { index: number; total: number }) {
  const brand = brands[index];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.15"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 1.2 : -1.2, 0]);

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: "96px", zIndex: index + 1 }}
    >
      <motion.article
        style={{ scale, rotate }}
        className="card overflow-hidden rounded-3xl"
      >
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${brand.accent}, transparent 70%)` }}
        />
        {brand.image && (
          <div className="relative h-48 w-full overflow-hidden md:h-60">
            <Image
              src={brand.image}
              alt={brand.imageAlt ?? brand.name}
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#081521]" />
          </div>
        )}
        <div className="grid gap-8 p-7 md:grid-cols-[1.3fr_1fr] md:p-12">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-[11px] uppercase tracking-[0.2em]"
                style={{ color: brand.accent }}
              >
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} — {brand.category}
              </span>
            </div>
            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              {brand.name}
            </h3>
            <p className="mt-3 text-lg font-medium text-ink" style={{ color: brand.accent }}>
              {brand.headline}
            </p>
            <p className="mt-4 leading-relaxed text-ink-dim">{brand.summary}</p>
            <Link
              href={`/portfolio#${brand.slug}`}
              className="group mt-6 inline-flex items-center gap-2 font-display font-semibold text-ink"
            >
              Explore {brand.name}
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 content-start gap-4">
            {brand.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-[var(--line)] bg-abyss/40 p-4">
                <p className="font-display text-2xl font-bold" style={{ color: brand.accent }}>
                  {m.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-ink-faint">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function PortfolioStack() {
  return (
    <section className="relative py-24 lg:py-36" id="portfolio">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-teal">
            Service Portfolio
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Four platforms.{" "}
            <span className="bg-gradient-to-r from-teal to-emerald bg-clip-text text-transparent">
              One healthtech engine.
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-dim">
            Flagship healthcare solutions engineered and powered by WhirlingWind —
            spanning clinical knowledge, borderless care, mental wellness and
            population-scale screening.
          </p>
        </div>

        <div className="flex flex-col gap-10 pb-10">
          {brands.map((b, i) => (
            <BrandCard key={b.slug} index={i} total={brands.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

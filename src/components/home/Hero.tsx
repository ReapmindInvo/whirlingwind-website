"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const yOrbs = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24"
    >
      {/* atmosphere */}
      <div className="halo absolute inset-0" />
      <div className="grid-lines absolute inset-0" />
      <motion.div style={{ y: yOrbs }} className="absolute inset-0">
        <div className="float-slow absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-teal-deep/20 blur-[100px]" />
        <div className="float-slow absolute right-[6%] top-[45%] h-96 w-96 rounded-full bg-emerald/15 blur-[120px] [animation-delay:-4s]" />
      </motion.div>

      {/* rotating W mark watermark */}
      <motion.div
        style={{ opacity }}
        className="pointer-events-none absolute right-[-8%] top-[12%] hidden select-none lg:block"
        aria-hidden
      >
        <div className="spin-slow h-[520px] w-[520px] rounded-full border border-[var(--line)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="stroke-text font-display text-[26rem] font-extrabold leading-none">
            W
          </span>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yTitle, opacity, scale }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="chip inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-teal"
        >
          <span className="relative flex h-2 w-2">
            <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-teal" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
          </span>
          The Singularity Group · Healthtech
        </motion.p>

        <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.6rem,7vw,5.8rem)] font-bold leading-[1.02] tracking-tight">
          {["Healthcare,", "engineered"].map((word, i) => (
            <motion.span
              key={word}
              className="mr-[0.28em] inline-block"
              initial={{ opacity: 0, y: 60, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.25 + i * 0.12, ease: EASE }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            className="text-glow inline-block bg-gradient-to-r from-teal via-emerald to-teal bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.49, ease: EASE }}
          >
            forward.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: EASE }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-dim md:text-xl"
        >
          WhirlingWind Technologies is a global healthtech innovation company —
          building AI-first hospital systems, custom healthcare LLMs, connected
          medical devices and care platforms trusted by{" "}
          <span className="text-ink">200,000+ doctors</span> and{" "}
          <span className="text-ink">300+ hospitals</span> across India and the GCC.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contact"
            className="btn-primary rounded-full px-8 py-4 font-display font-semibold"
          >
            Start a conversation
          </Link>
          <Link
            href="/portfolio"
            className="btn-ghost rounded-full px-8 py-4 font-display font-semibold text-ink"
          >
            Explore the portfolio
          </Link>
        </motion.div>
      </motion.div>

      {/* ECG line */}
      <motion.div style={{ opacity }} className="relative z-10 mt-16 w-full lg:mt-20">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full" preserveAspectRatio="none" aria-hidden>
          <path
            d="M0 60 H420 L450 60 L465 20 L480 95 L495 45 L510 60 H700 L730 60 L745 25 L760 90 L775 50 L790 60 H1010 L1040 60 L1055 15 L1070 100 L1085 45 L1100 60 H1440"
            stroke="url(#ecg-grad)"
            strokeWidth="2"
            className="ecg-path"
          />
          <defs>
            <linearGradient id="ecg-grad" x1="0" x2="1440" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity="0" />
              <stop offset="0.2" stopColor="#ffffff" />
              <stop offset="0.8" stopColor="#aebfc9" />
              <stop offset="1" stopColor="#aebfc9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-[var(--line)] p-1.5">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-teal"
          />
        </div>
      </motion.div>
    </section>
  );
}

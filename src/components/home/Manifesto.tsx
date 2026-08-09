"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const LINES = [
  "One partner.",
  "From hospital software,",
  "to intelligent devices,",
  "to healthcare AI itself.",
];

function Line({ progress, index, total, children }: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  children: string;
}) {
  const start = index / (total + 1.2);
  const end = (index + 1) / (total + 1.2);
  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  const x = useTransform(progress, [start, end], [40, 0]);

  return (
    <motion.p
      style={{ opacity, x }}
      className="font-display text-[clamp(1.9rem,5.2vw,4.2rem)] font-bold leading-[1.12] tracking-tight"
    >
      {children}
    </motion.p>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });

  return (
    <section ref={ref} className="relative overflow-hidden py-28 lg:py-44">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-teal/25 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-teal">
          Why WhirlingWind
        </p>
        <div className="mt-8 space-y-2">
          {LINES.map((line, i) => (
            <Line key={line} progress={scrollYProgress} index={i} total={LINES.length}>
              {line}
            </Line>
          ))}
        </div>
        <motion.p
          style={{ opacity: useTransform(scrollYProgress, [0.75, 1], [0, 1]) }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-dim"
        >
          Most healthcare leaders stitch together four vendors — for software, for
          hardware, for AI, for care delivery. We built WhirlingWind so you only
          need one. Every platform we ship is proven in production: across
          5&nbsp;million patient encounters, 300+ hospital go-lives and a doctor
          community the size of a city.
        </motion.p>
      </div>
    </section>
  );
}

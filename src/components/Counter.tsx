"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

function format(n: number, compact?: boolean) {
  if (compact) {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1) + "M";
    if (n >= 1_000) return Math.round(n / 1_000) + "K";
  }
  return Math.round(n).toLocaleString("en-US");
}

export default function Counter({
  value,
  suffix = "",
  compact = false,
  className,
}: {
  value: number;
  suffix?: string;
  compact?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2.2, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = format(v, compact) + suffix;
    });
    return unsub;
  }, [spring, suffix, compact]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

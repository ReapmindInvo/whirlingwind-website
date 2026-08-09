import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { stats } from "@/lib/site";

export default function StatsRibbon() {
  return (
    <section className="relative border-y border-[var(--line)] bg-deep/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[var(--line)] lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="px-6 py-10 lg:px-10 lg:py-14">
            <p className="font-display text-4xl font-bold text-ink lg:text-5xl">
              <Counter value={s.value} suffix={s.suffix} compact={s.compact} />
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import Reveal from "@/components/Reveal";
import { trusted } from "@/lib/site";

export default function TrustSection() {
  const row = [...trusted, ...trusted];
  return (
    <section className="overflow-hidden border-y border-[var(--line)] bg-deep/50 py-14">
      <Reveal>
        <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.26em] text-ink-faint">
          Ecosystem trusted by healthcare & enterprise leaders
        </p>
      </Reveal>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-abyss to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-abyss to-transparent" />
        <div className="marquee flex w-max items-center gap-14">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-xl font-semibold text-ink-faint transition-colors hover:text-teal"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

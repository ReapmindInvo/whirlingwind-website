import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-40">
      <div className="halo absolute inset-0" />
      <div className="grid-lines absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-teal">
            Ready when you are
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Let&apos;s build the future of{" "}
            <span className="text-glow bg-gradient-to-r from-teal to-emerald bg-clip-text text-transparent">
              healthcare
            </span>{" "}
            together.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-dim">
            Whether you run a 50-bed hospital or a multi-country health system —
            talk to the team behind careup.ai, VKonnect and MulkMed about your
            AI, platform and device roadmap.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary rounded-full px-9 py-4 font-display text-lg font-semibold">
              Talk to WhirlingWind
            </Link>
            <Link href="/about" className="btn-ghost rounded-full px-9 py-4 font-display text-lg font-semibold text-ink">
              Meet the team
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

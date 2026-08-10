import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/home/CtaSection";
import { brands } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Portfolio — VKonnect, MulkMed, Elif & HB Check",
  description:
    "WhirlingWind's healthtech portfolio: VKonnect Health (200K+ doctors), MulkMed telemedicine & medical tourism, Elif corporate mental wellness EAP, and HB Check IoT screening camps.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        kicker="Service Portfolio"
        title={
          <>
            Platforms that carry{" "}
            <span className="bg-gradient-to-r from-teal to-emerald bg-clip-text text-transparent">
              real healthcare
            </span>{" "}
            every day.
          </>
        }
        lead="Four flagship healthtech solutions engineered and powered by WhirlingWind — from India's largest doctor knowledge platform to borderless patient care, clinician-led mental wellness and population-scale screening."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl space-y-24 px-5 lg:px-8">
          {brands.map((b, i) => (
            <article key={b.slug} id={b.slug} className="scroll-mt-32">
              <Reveal>
                <div className={`grid items-start gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div>
                    <p className="font-mono text-[12px] uppercase tracking-[0.22em]" style={{ color: b.accent }}>
                      {b.category}
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      {b.logo && (
                        <span className="inline-flex rounded-xl bg-white/95 p-2.5">
                          <Image src={b.logo} alt={`${b.name} logo`} width={120} height={44} className="h-9 w-auto" />
                        </span>
                      )}
                      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{b.name}</h2>
                    </div>
                    <p className="mt-4 text-xl font-medium" style={{ color: b.accent }}>
                      {b.headline}
                    </p>
                    <p className="mt-4 max-w-xl leading-relaxed text-ink-dim">{b.summary}</p>
                    <ul className="mt-6 space-y-3">
                      {b.points.map((p) => (
                        <li key={p} className="flex gap-3 text-ink-dim">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: b.accent }} />
                          <span className="leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:sticky lg:top-32">
                    {b.image && (
                      <div className="relative mb-5 aspect-[3/2] overflow-hidden rounded-3xl border border-[var(--line)]">
                        <Image
                          src={b.image}
                          alt={b.imageAlt ?? b.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 560px"
                          className="object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#081521]/45 to-transparent" />
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-5">
                    {b.metrics.map((m) => (
                      <div key={m.label} className="card rounded-3xl p-7">
                        <p className="font-display text-3xl font-bold" style={{ color: b.accent }}>
                          {m.value}
                        </p>
                        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                          {m.label}
                        </p>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              </Reveal>
              {i < brands.length - 1 && <div className="hairline mt-24" />}
            </article>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}

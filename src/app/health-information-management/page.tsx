import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LeadCta from "@/components/LeadCta";
import { him, himProcess, site } from "@/lib/site";
import { himServices } from "@/lib/him-services";

export const metadata: Metadata = {
  title: "Health Information Management (HIM) Services",
  description:
    "AI-augmented HIM services — release of information, record retrieval, clinical coding & revenue cycle support for hospitals, payers & legal teams.",
  alternates: { canonical: "/health-information-management" },
};

const faqs = [
  {
    q: "What is Health Information Management (HIM) as a service?",
    a: "HIM as a service means WhirlingWind's trained specialists and AI systems handle the operational work of managing patient health information on your behalf — release of information, record retrieval, clinical coding and payer correspondence — so your internal team can focus on care delivery instead of administrative backlog.",
  },
  {
    q: "How is WhirlingWind's HIM offering different from a traditional BPO vendor?",
    a: "We're not a pure staffing vendor. The same engineering team that builds careup.ai — our AI-first hospital management system — designs and runs your HIM desk, meaning tighter EMR integration, faster escalation paths, and AI models already live in production across our healthcare platforms doing first-pass triage, redaction and coding review.",
  },
  {
    q: "Is this HIPAA and DPDP compliant?",
    a: "Yes. WhirlingWind is ISO 27001 and SOC 2 Type II certified, and every HIM engagement is built around HIPAA (US), DPDP (India) and ABDM-aligned data handling, with full audit trails and role-based access controls.",
  },
  {
    q: "Can this integrate with our existing EMR/HIS, not just careup.ai?",
    a: "Yes. Our HIM operations layer is built to integrate with any HL7/FHIR-compliant EMR or HIS — careup.ai is our own product, but the service works alongside your current systems from day one.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Health Information Management Services",
  provider: { "@type": "Organization", name: site.legalName, url: site.domain },
  areaServed: ["IN", "AE", "SA", "US", "EU"],
  serviceType: "Release of information, medical record retrieval, clinical coding, revenue cycle & payer support, HIM contact center operations",
};

export default function HimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <PageHero
        image="/images/him-shield.jpg"
        kicker="Health Information Management"
        title={
          <>
            The team behind your EMR,{" "}
            <span className="bg-gradient-to-r from-teal to-emerald bg-clip-text text-transparent">
              now running the operations inside it.
            </span>
          </>
        }
        lead="AI-augmented HIM services — release of information, record retrieval, clinical coding and payer support — co-managed with your team, built by the engineers behind careup.ai."
      />

      {/* certifications strip */}
      <section className="pb-4">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {him.certifications.map((c) => (
                <span key={c} className="chip rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-teal">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* metrics */}
      <section className="pb-20 pt-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 lg:grid-cols-4 lg:px-8">
          {him.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="card rounded-3xl p-8 text-center">
                <p className="font-display text-4xl font-bold text-ink">{m.value}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* services grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-teal">What we operate</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight md:text-4xl">
              Six operational pillars. One accountable desk.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {himServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/health-information-management/${s.slug}`}
                  className="card group flex h-full flex-col rounded-3xl p-8"
                >
                  <span className="font-mono text-xs text-teal">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{s.name}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-dim">{s.cardBody}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="chip rounded-full px-3 py-1 font-mono text-[11px] text-ink-dim">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-teal">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* why whirlingwind */}
      <section className="border-y border-[var(--line)] bg-deep/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight md:text-4xl">
              Why healthcare leaders choose{" "}
              <span className="text-teal">WhirlingWind HIM.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {him.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="card h-full rounded-3xl p-8">
                  <h3 className="font-display text-xl font-bold text-teal">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-dim">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-teal">How we work</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              From assessment to a live, accountable desk.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {himProcess.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="card relative h-full rounded-3xl p-6">
                  <span className="font-mono text-xs text-teal">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-lg font-bold">{p.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--line)] py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              HIM services, answered.
            </h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <details className="card group rounded-2xl p-6 open:border-teal/40">
                  <summary className="cursor-pointer list-none font-display text-lg font-semibold marker:content-none">
                    <span className="mr-3 font-mono text-sm text-teal">Q{i + 1}</span>
                    {f.q}
                  </summary>
                  <p className="mt-4 leading-relaxed text-ink-dim">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 text-ink-dim">
              Want to scope your HIM engagement?{" "}
              <Link href="/contact" className="text-teal hover:underline">
                Talk to our HIM team →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <LeadCta source="him-hub" interest="Health Information Management" title="Let's scope your HIM engagement." subtitle="ROI backlog, coding throughput, payer correspondence — tell us where it hurts and we'll come back with an operating model and SLAs." />
    </>
  );
}

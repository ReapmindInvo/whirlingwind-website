import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LeadCta from "@/components/LeadCta";
import { careup, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "careup.ai — AI-First Hospital Management System (HMS)",
  description:
    "careup.ai is an ABDM/ABHA-ready, NABH-compliant AI hospital management system with EMR — 300+ implementations, 5M+ encounters. Book a demo for your hospital.",
  alternates: { canonical: "/careup-ai" },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "careup.ai",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, iOS",
  description:
    "AI-first hospital management system with EMR — ABDM/ABHA-ready, NABH compliant, 300+ implementations and 5M+ patient encounters processed.",
  publisher: { "@type": "Organization", name: site.legalName, url: site.domain },
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Demo on request" },
};

const modules = [
  "OPD / IPD Management", "AI-Native EMR", "Pharmacy & Inventory", "Laboratory (LIS)",
  "Radiology (RIS)", "Billing & Insurance/TPA", "OT & Nursing Stations", "ABHA / ABDM Workflows",
  "Patient Portal & Apps", "Telemedicine", "Analytics & MIS", "NABH Quality Indicators",
];

const faqs = [
  {
    q: "Is careup.ai ABDM compliant?",
    a: "Yes — careup.ai ships the full ABDM stack out of the box: ABHA ID creation, PHR linking, and HIP/HIU workflows, making your hospital ready for India's national digital health ecosystem from day one.",
  },
  {
    q: "How long does implementation take?",
    a: "Most hospitals go live in days, not months. With 300+ implementations behind us, deployment, data migration and staff onboarding follow a proven playbook with a zero-learning-curve UX.",
  },
  {
    q: "Does careup.ai support NABH accreditation?",
    a: "careup.ai maps audit trails, nursing care plans and quality indicators directly to NABH standards, so accreditation evidence is generated as a by-product of daily operations.",
  },
  {
    q: "What size of hospital is careup.ai built for?",
    a: "From 50-bed specialty hospitals to multi-site enterprise groups — the platform has processed 5M+ encounters at 99.9% uptime and scales with modular licensing.",
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

export default function CareupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        image="/images/careup-ward.jpg"
        kicker="Product Portfolio"
        title={
          <>
            <span className="inline-flex translate-y-1 rounded-2xl bg-[#0f2a1f] px-4 py-2">
              <Image src="/brand/careup.png" alt="careup.ai logo" width={220} height={82} className="h-12 w-auto md:h-16" />
            </span>
            <br />
            The AI-first hospital management system.
          </>
        }
        lead="ABDM/ABHA-ready. NABH compliant. 5 million+ encounters processed across 300+ implementations at 99.9% uptime — with AI woven into every clinical and operational workflow. Go live in days, not months."
      />

      {/* metrics */}
      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 lg:grid-cols-4 lg:px-8">
          {careup.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="card rounded-3xl p-8 text-center">
                <p className="font-display text-4xl font-bold text-emerald">{m.value}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* pillars */}
      <section className="border-y border-[var(--line)] bg-deep/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight md:text-4xl">
              Built for Indian healthcare.{" "}
              <span className="text-emerald">Ready for the world.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {careup.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="card h-full rounded-3xl p-8">
                  <h3 className="font-display text-xl font-bold text-emerald">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-dim">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* modules */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-emerald">Coverage</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Every department. One intelligent core.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {modules.map((m, i) => (
              <Reveal key={m} delay={(i % 4) * 0.05}>
                <div className="card rounded-2xl px-5 py-4 text-sm font-medium text-ink-dim transition-colors hover:text-ink">
                  {m}
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
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">careup.ai, answered.</h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <details className="card group rounded-2xl p-6 open:border-emerald/40">
                  <summary className="cursor-pointer list-none font-display text-lg font-semibold marker:content-none">
                    <span className="mr-3 font-mono text-sm text-emerald">Q{i + 1}</span>
                    {f.q}
                  </summary>
                  <p className="mt-4 leading-relaxed text-ink-dim">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary rounded-full px-8 py-4 font-display font-semibold">
                Book a careup.ai demo
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <LeadCta source="careup-ai" interest="careup.ai HMS" title="See careup.ai on your hospital's workflows." subtitle="A 30-minute demo scoped to your departments and bed count — with implementation timelines from 300+ go-lives." />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LeadCta from "@/components/LeadCta";
import { aiServices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Healthcare AI & Custom Medical LLM Development",
  description:
    "Custom healthcare LLMs, EMR copilots, radiology AI & clinical NLP. HIPAA-compliant AI development proven across 5M+ patient encounters. Talk to our AI team.",
  alternates: { canonical: "/healthcare-ai" },
};

const process = [
  { step: "Discover", body: "Clinical workflow mapping, data audits and use-case prioritization with your medical and IT leadership." },
  { step: "Ground", body: "Curate and de-identify corpora; build retrieval layers over guidelines, formularies and your institutional knowledge." },
  { step: "Train & Align", body: "Fine-tune domain LLMs, align with clinician feedback, and evaluate against clinical benchmarks — not generic leaderboards." },
  { step: "Integrate", body: "Ship into real workflows via HL7/FHIR, EMR plugins and APIs — with guardrails, fallbacks and human-in-the-loop controls." },
  { step: "Assure", body: "Red-teaming, bias & safety audits, monitoring and full audit trails for HIPAA, GDPR and DPDP compliance." },
];

const faqs = [
  {
    q: "What is custom healthcare LLM development?",
    a: "It is the process of adapting large language models to medical domains — fine-tuning on curated clinical corpora, grounding responses in trusted guidelines via retrieval (RAG), aligning behaviour with clinician feedback, and deploying within HIPAA/GDPR/DPDP-compliant infrastructure, on-premise or in your private cloud.",
  },
  {
    q: "Can you add AI to our existing EMR or HIS without replacing it?",
    a: "Yes. Our plugin AI approach integrates copilots — ambient scribing, discharge summaries, coding suggestions, order sets — into your current EMR/HIS via HL7, FHIR and native plugin frameworks, so you keep your systems and gain the intelligence layer.",
  },
  {
    q: "How do you ensure clinical safety and accuracy?",
    a: "Every model ships with citation-first retrieval grounding, clinical benchmark evaluations, guardrails against unsafe outputs, red-team testing, and clinician-in-the-loop validation. We validate decisions against global medical guidelines with compliance scoring.",
  },
  {
    q: "Where does WhirlingWind's clinical AI experience come from?",
    a: "Our AI runs in production today — HuntGPT and Persona serve 200,000+ doctors on VKonnect Health, careup.ai has processed 5M+ patient encounters across 300+ hospital implementations, and MulkMed's clinical AI processes 2M+ data points daily across 35+ specialties.",
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
  name: "Healthcare AI & Custom Medical LLM Development",
  provider: { "@type": "Organization", name: site.legalName, url: site.domain },
  areaServed: ["IN", "AE", "SA", "US", "EU"],
  serviceType: "Healthcare AI development, custom medical LLMs, EMR copilots, clinical NLP",
};

export default function HealthcareAiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <PageHero
        image="/images/ai-brain.jpg"
        kicker="Healthcare AI Services"
        title={
          <>
            Custom healthcare LLMs.{" "}
            <span className="bg-gradient-to-r from-teal to-emerald bg-clip-text text-transparent">
              Plugin AI.
            </span>{" "}
            Clinical trust, engineered in.
          </>
        }
        lead="We design, train and deploy medical AI that clinicians actually use — from domain-tuned large language models to drop-in EMR copilots — hardened by 5M+ real patient encounters and a 200,000-doctor production user base."
      />

      {/* services grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {aiServices.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <article className="card group flex h-full flex-col rounded-3xl p-8">
                  <span className="font-mono text-xs text-teal">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">{s.title}</h2>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-dim">{s.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="chip rounded-full px-3 py-1 font-mono text-[11px] text-ink-dim">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* proof band */}
      <section className="border-y border-[var(--line)] bg-deep/60 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight md:text-4xl">
              Not a lab experiment.{" "}
              <span className="text-teal">Production AI, in clinics today.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "HuntGPT & Persona", body: "The AI search assistant and doctor's copilot inside VKonnect Health — 77,000+ medical hunts, 40,000+ AI-generated presentations, 200K+ doctors." },
              { title: "careup.ai intelligence", body: "Ambient AI woven through an ABDM-ready HMS — 5M+ encounters processed across 300+ implementations at 99.9% uptime." },
              { title: "MulkMed clinical AI", body: "2M+ clinical data points processed daily, cutting decision time 40% and improving diagnostic accuracy across 35+ specialties." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
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
              From clinical intent to compliant deployment.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {process.map((p, i) => (
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
              Healthcare AI, answered.
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
              Want a deeper technical conversation?{" "}
              <Link href="/contact" className="text-teal hover:underline">
                Talk to our healthcare AI team →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <LeadCta source="healthcare-ai" interest="Healthcare AI / LLMs" title="Let's scope your healthcare AI initiative." subtitle="From a first LLM pilot to production copilots across your EMR — tell us your starting point and our AI team will map the route." />
    </>
  );
}

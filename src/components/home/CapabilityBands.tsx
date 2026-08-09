import Link from "next/link";
import Reveal from "@/components/Reveal";

const bands = [
  {
    id: "ai",
    kicker: "Healthcare AI Services",
    title: "Custom healthcare LLMs & plugin AI, built for clinical trust.",
    body: "From domain-tuned medical LLMs and EMR copilots to radiology vision AI and citation-first RAG — HIPAA, GDPR and DPDP-compliant AI engineering, proven across 5M+ real encounters.",
    href: "/healthcare-ai",
    cta: "Explore Healthcare AI",
    items: ["Custom Healthcare LLMs", "EMR Copilots & Plugin AI", "Medical RAG & Knowledge AI", "Imaging & Vision AI", "Clinical NLP & Prediction", "Safety & Compliance Engineering"],
  },
  {
    id: "iot",
    kicker: "IoT & Medical Devices",
    title: "Connected care hardware — kiosks, dispensers and health booths.",
    body: "Health ATM kiosks measuring 40+ parameters, smart medicine dispensers with cold-chain telemetry, and private telehealth pods — device-to-cloud platforms deployed from hospital lobbies to rural India.",
    href: "/iot-medical-devices",
    cta: "Explore IoT Devices",
    items: ["Patient Kiosks & Health ATMs", "Smart Medicine Dispensers", "Health Booths & Telehealth Pods", "Device-to-Cloud Platforms", "ABHA-Linked Reports", "Field Screening Systems"],
  },
];

export default function CapabilityBands() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-20 px-5 lg:px-8">
        {bands.map((band, bi) => (
          <div
            key={band.id}
            className={`grid items-center gap-12 lg:grid-cols-2 ${bi % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <Reveal>
              <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-teal">{band.kicker}</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">{band.title}</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-dim">{band.body}</p>
              <Link href={band.href} className="btn-ghost mt-8 inline-block rounded-full px-7 py-3.5 font-display font-semibold text-ink">
                {band.cta} →
              </Link>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {band.items.map((item, i) => (
                <Reveal key={item} delay={i * 0.06}>
                  <div className="card group flex items-center gap-3 rounded-2xl px-5 py-4">
                    <span className="font-mono text-xs text-teal">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-medium text-ink-dim transition-colors group-hover:text-ink">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

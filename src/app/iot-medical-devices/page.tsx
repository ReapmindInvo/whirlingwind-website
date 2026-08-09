import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/home/CtaSection";
import { iotDevices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Health ATM Kiosks & Healthcare IoT Devices",
  description:
    "Health ATM kiosks, smart medicine dispensers & telehealth pods — IoT medical devices for hospitals, corporates & rural screening across India and the GCC.",
  alternates: { canonical: "/iot-medical-devices" },
};

const productsJsonLd = {
  "@context": "https://schema.org",
  "@graph": iotDevices.map((d) => ({
    "@type": "Product",
    name: d.title,
    description: d.body,
    brand: { "@type": "Brand", name: "WhirlingWind" },
    manufacturer: { "@type": "Organization", name: site.legalName },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "0",
      priceSpecification: { "@type": "PriceSpecification", price: "0", priceCurrency: "INR" },
      availability: "https://schema.org/InStock",
      description: "Price on request",
    },
  })),
};

const useCases = [
  { title: "Hospital lobbies & OPDs", body: "Cut vitals queues and front-desk load — patients self-screen, reports flow straight into the HMS and ABHA record." },
  { title: "Corporate campuses", body: "Preventive employee health on-site: scheduled screenings, wellness dashboards and instant teleconsult escalation." },
  { title: "Rural & semi-urban PHCs", body: "Clinic-grade diagnostics where no clinic exists — connected devices with offline-first sync and field-serviceable builds." },
  { title: "Pharmacies & wards", body: "24×7 medicine access with Rx-verified dispensing, cold-chain assurance and automatic stock replenishment alerts." },
];

export default function IotPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }} />

      <PageHero
        kicker="IoT & Medical Devices"
        title={
          <>
            Care that meets people{" "}
            <span className="bg-gradient-to-r from-teal to-emerald bg-clip-text text-transparent">
              where they stand.
            </span>
          </>
        }
        lead="Health ATM kiosks, smart medicine dispensers and telehealth booths — engineered device-to-cloud by WhirlingWind, deployed from hospital lobbies and corporate campuses to rural India, and proven at 5,000 screenings a day in the field."
      />

      {/* devices */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl space-y-8 px-5 lg:px-8">
          {iotDevices.map((d, i) => (
            <Reveal key={d.title} delay={0.05}>
              <article className="card grid gap-8 rounded-3xl p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
                <div>
                  <span className="font-mono text-xs text-teal">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">{d.title}</h2>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-dim">{d.body}</p>
                </div>
                <ul className="grid content-center gap-3">
                  {d.specs.map((s) => (
                    <li key={s} className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-abyss/40 px-5 py-3.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                      <span className="text-sm font-medium text-ink-dim">{s}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* device-to-cloud strip */}
      <section className="border-y border-[var(--line)] bg-deep/60 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight md:text-4xl">
              Full-stack, device to cloud —{" "}
              <span className="text-teal">hardware, firmware, platform, analytics.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-dim">
              Our HB Check field platform screens an average of 5,000 patients a day
              with Bluetooth hemoglobin analyzers syncing securely to AWS cloud —
              the same engineering discipline powers every kiosk, dispenser and pod
              we ship: telemetry, remote management, OTA updates and ABDM-ready
              health records.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 0.08}>
                <div className="card h-full rounded-3xl p-7">
                  <h3 className="font-display text-lg font-bold text-teal">{u.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-dim">{u.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

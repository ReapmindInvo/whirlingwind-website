import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/home/CtaSection";
import { leadership, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — A Singularity Group Healthtech Company",
  description:
    "WhirlingWind Technologies Private Limited is a healthtech innovation company under The Singularity Group — headquartered at THE SINGULARITY campus, Kolhapur, with presence in Dubai.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Clinical before clever", body: "Technology earns its place only when clinicians trust it. We design with doctors, validate against guidelines, and measure outcomes — not demos." },
  { title: "Production is the proof", body: "Everything we sell already runs at scale: 200K+ doctors, 5M+ encounters, 300+ hospitals. We ship reliability first, then iterate boldly." },
  { title: "Reach the unreached", body: "From metro hospitals to rural screening camps — the same engineering rigour serves the last mile as the boardroom." },
  { title: "One ecosystem", body: "As part of The Singularity Group alongside ReapMind Innovations, we draw on 350+ engineers, global delivery centres and a 200,000 sq ft innovation campus." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About WhirlingWind"
        title={
          <>
            An innovation company with{" "}
            <span className="bg-gradient-to-r from-teal to-emerald bg-clip-text text-transparent">
              healthcare at its core.
            </span>
          </>
        }
        lead="WhirlingWind Technologies Private Limited is The Singularity Group's dedicated global healthtech company — born from the same founding team that built ReapMind Innovations, and focused entirely on AI, platforms and devices that move healthcare forward."
      />

      {/* story */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <div className="card rounded-3xl p-8 md:p-12">
                <h2 className="font-display text-3xl font-bold tracking-tight">From Kolhapur to the world.</h2>
                <div className="mt-6 space-y-4 leading-relaxed text-ink-dim">
                  <p>
                    Our story begins in 2018 with four engineers and a conviction: world-class
                    technology should be accessible to ambitious organisations everywhere. That
                    team grew into ReapMind Innovations — 350+ engineers serving 100M+ users
                    across the USA, EU and GCC — and in 2026 established THE SINGULARITY, a
                    200,000 sq ft innovation campus in Kolhapur, Maharashtra.
                  </p>
                  <p>
                    WhirlingWind Technologies is the group&apos;s healthtech spearhead. Every
                    platform in our portfolio — VKonnect Health, MulkMed, Elif Healthcare, HB
                    Check and careup.ai — was engineered by this team, and together they now
                    touch 200,000+ doctors, half a million patients and 300+ hospitals.
                  </p>
                  <p>
                    We exist for one reason: healthcare leaders shouldn&apos;t need four vendors
                    to modernise. Software, AI, devices, care platforms — one partner,
                    engineered forward.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="space-y-5">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="card rounded-3xl p-7">
                    <h3 className="font-display text-lg font-bold text-teal">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-dim">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* leadership */}
      <section className="border-y border-[var(--line)] bg-deep/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-teal">Leadership</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              The team behind the engine.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="card h-full rounded-3xl p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal/20 to-emerald/10 font-display text-xl font-bold text-teal">
                    {p.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-dim">{p.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* presence */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card h-full rounded-3xl p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">Corporate HQ · India</p>
                <h3 className="mt-3 font-display text-2xl font-bold">THE SINGULARITY, Kolhapur</h3>
                <p className="mt-3 leading-relaxed text-ink-dim">
                  {site.address.line1}, {site.address.line2},<br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}, {site.address.country}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card h-full rounded-3xl p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">Branch Office · UAE</p>
                <h3 className="mt-3 font-display text-2xl font-bold">Business Bay, Dubai</h3>
                <p className="mt-3 leading-relaxed text-ink-dim">{site.branch}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

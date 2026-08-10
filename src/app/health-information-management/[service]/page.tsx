import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/home/CtaSection";
import { site } from "@/lib/site";
import { himServices, getHimService } from "@/lib/him-services";

export function generateStaticParams() {
  return himServices.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/health-information-management/[service]">): Promise<Metadata> {
  const { service } = await params;
  const s = getHimService(service);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/health-information-management/${s.slug}` },
  };
}

export default async function HimServicePage({
  params,
}: PageProps<"/health-information-management/[service]">) {
  const { service } = await params;
  const s = getHimService(service);
  if (!s) notFound();

  const related = himServices.filter((x) => x.slug !== s.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.metaDescription,
    provider: { "@type": "Organization", name: site.legalName, url: site.domain },
    areaServed: "US",
    serviceType: s.name,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Health Information Management", item: `${site.domain}/health-information-management` },
      { "@type": "ListItem", position: 2, name: s.name, item: `${site.domain}/health-information-management/${s.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <PageHero
        kicker={`Health Information Management · ${s.category} · USA`}
        title={s.heroTitle}
        lead={s.heroLead}
      />

      {/* breadcrumb */}
      <section className="pb-4">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <nav className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
              <Link href="/health-information-management" className="hover:text-teal">
                Health Information Management
              </Link>
              <span>/</span>
              <span className="text-ink-dim">{s.name}</span>
            </nav>
          </Reveal>
        </div>
      </section>

      {/* what's included */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-teal">What&apos;s included</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight md:text-4xl">
              Scope of the engagement.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {s.whatIncluded.map((item, i) => (
              <Reveal key={item} delay={(i % 6) * 0.05}>
                <div className="card flex items-start gap-3 rounded-2xl px-5 py-4">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-teal" />
                  <span className="text-sm leading-relaxed text-ink-dim">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* why whirlingwind for this service */}
      <section className="border-y border-[var(--line)] bg-deep/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight md:text-4xl">
              Why US healthcare teams choose WhirlingWind for this.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {s.whyPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="card h-full rounded-3xl p-8">
                  <h3 className="font-display text-lg font-bold text-teal">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-dim">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              {s.name}, answered.
            </h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {s.faqs.map((f, i) => (
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
        </div>
      </section>

      {/* related services */}
      <section className="border-t border-[var(--line)] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-teal">Related HIM services</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Explore the rest of the desk.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/health-information-management/${r.slug}`}
                  className="card group flex h-full flex-col rounded-2xl p-6"
                >
                  <h3 className="font-display text-base font-bold">{r.name}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-teal">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

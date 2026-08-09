import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Talk to Our Healthtech Team",
  description:
    "Talk to WhirlingWind Technologies about healthcare AI, careup.ai HMS, health kiosks and care platforms. Offices in Kolhapur, India and Dubai, UAE.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title={
          <>
            Tell us where healthcare{" "}
            <span className="bg-gradient-to-r from-teal to-emerald bg-clip-text text-transparent">
              hurts.
            </span>
          </>
        }
        lead="A 30-minute conversation with our team is the fastest way to scope your AI, platform or device initiative. We'll come prepared — with playbooks from 300+ implementations."
      />

      <section className="pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.1}>
              <div className="card rounded-3xl p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">Email</p>
                <a href={`mailto:${site.email}`} className="mt-2 block font-display text-xl font-semibold hover:text-teal">
                  {site.email}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="card rounded-3xl p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">HQ · India</p>
                <p className="mt-2 leading-relaxed text-ink-dim">
                  {site.address.line1},<br />
                  {site.address.line2},<br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="card rounded-3xl p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">Branch · UAE</p>
                <p className="mt-2 leading-relaxed text-ink-dim">{site.branch}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

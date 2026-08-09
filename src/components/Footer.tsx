import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--line)] bg-deep">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/brand/ww-mark.png" alt="WhirlingWind logo" width={38} height={27} className="invert" />
              <span className="font-display text-xl font-semibold">WhirlingWind</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-dim">
              {site.legalName}. A {site.group} company — innovating global
              healthtech across AI, platforms and connected medical devices.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
              You rise · We rise
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[12px] uppercase tracking-[0.2em] text-teal">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-dim">
              <li><Link className="hover:text-ink" href="/healthcare-ai">Healthcare AI & LLMs</Link></li>
              <li><Link className="hover:text-ink" href="/iot-medical-devices">IoT Medical Devices</Link></li>
              <li><Link className="hover:text-ink" href="/careup-ai">careup.ai HMS</Link></li>
              <li><Link className="hover:text-ink" href="/about">About & Leadership</Link></li>
              <li><Link className="hover:text-ink" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[12px] uppercase tracking-[0.2em] text-teal">Portfolio</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-dim">
              <li><Link className="hover:text-ink" href="/portfolio#vkonnect-health">VKonnect Health</Link></li>
              <li><Link className="hover:text-ink" href="/portfolio#mulkmed">MulkMed Healthcare</Link></li>
              <li><Link className="hover:text-ink" href="/portfolio#elif-healthcare">Elif Healthcare</Link></li>
              <li><Link className="hover:text-ink" href="/portfolio#hb-check-camps">HB Check Camps</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[12px] uppercase tracking-[0.2em] text-teal">Headquarters</h3>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-ink-dim">
              <p>{site.address.line1}</p>
              <p>{site.address.line2}</p>
              <p>
                {site.address.city}, {site.address.region} {site.address.postalCode}, {site.address.country}
              </p>
            </address>
            <p className="mt-4 text-sm text-ink-dim">{site.branch}</p>
            <a href={`mailto:${site.email}`} className="mt-4 inline-block text-sm text-teal hover:underline">
              {site.email}
            </a>
          </div>
        </div>

        <div className="hairline mt-14" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-ink-faint md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.18em]">A {site.group} Company</p>
        </div>
      </div>
    </footer>
  );
}

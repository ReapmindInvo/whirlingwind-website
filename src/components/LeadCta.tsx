"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export default function LeadCta({
  title = "Let's scope your initiative.",
  subtitle = "Tell us where you are — we'll come back within one business day with a concrete next step, drawing on playbooks from 300+ implementations.",
  interest = "Something else",
  source = "unknown",
}: {
  title?: string;
  subtitle?: string;
  interest?: string;
  source?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, interest, source }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="lead-form" className="relative scroll-mt-24 overflow-hidden border-t border-[var(--line)] py-24 lg:py-32">
      <div className="halo absolute inset-0" />
      <div className="grid-lines absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-teal">
              Talk to WhirlingWind
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-dim">{subtitle}</p>
            <ul className="mt-8 space-y-3">
              {[
                "Response within one business day",
                "Scoping call with senior engineers, not sales scripts",
                "ISO 27001 & SOC 2 Type II certified handling of your information",
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-ink-dim">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-teal" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            {status === "sent" ? (
              <div className="card flex min-h-[380px] flex-col items-center justify-center rounded-3xl p-10 text-center">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-teal" />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal to-emerald font-display text-2xl text-abyss">
                    ✓
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">Request received.</h3>
                <p className="mt-2 max-w-sm text-ink-dim">
                  Our team will reach out within one business day. You rise, we rise.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="card rounded-3xl p-7 md:p-9">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">Name</span>
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-2 w-full rounded-xl border border-[var(--line)] bg-abyss/60 px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">Work email</span>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-2 w-full rounded-xl border border-[var(--line)] bg-abyss/60 px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal"
                      placeholder="you@company.com"
                    />
                  </label>
                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">Phone (optional)</span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-2 w-full rounded-xl border border-[var(--line)] bg-abyss/60 px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal"
                      placeholder="+1 …"
                    />
                  </label>
                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">Organisation</span>
                    <input
                      name="organisation"
                      autoComplete="organization"
                      className="mt-2 w-full rounded-xl border border-[var(--line)] bg-abyss/60 px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal"
                      placeholder="Hospital / company"
                    />
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    What do you want to achieve?
                  </span>
                  <textarea
                    name="message"
                    rows={3}
                    required
                    className="mt-2 w-full resize-y rounded-xl border border-[var(--line)] bg-abyss/60 px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal"
                    placeholder="A sentence or two is enough…"
                  />
                </label>
                <div className="mt-6 flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary rounded-full px-8 py-3.5 font-display font-semibold disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Request a consultation"}
                  </button>
                  {status === "error" && (
                    <p className="text-sm text-[#ff8b7d]">Something went wrong — please email us directly.</p>
                  )}
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

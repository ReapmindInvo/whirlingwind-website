"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const interests = [
  "Healthcare AI / LLMs",
  "careup.ai HMS",
  "IoT & Medical Devices",
  "Health Information Management",
  "Telemedicine / Platforms",
  "Mental Wellness / EAP",
  "Something else",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [interest, setInterest] = useState(interests[0]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, interest }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl p-10 text-center">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-teal" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal to-emerald font-display text-2xl text-abyss">
            ✓
          </span>
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold">Message received.</h3>
        <p className="mt-2 max-w-sm text-ink-dim">
          Our team will get back to you within one business day. You rise, we rise.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card rounded-3xl p-8 md:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-abyss/60 px-4 py-3.5 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal"
            placeholder="Dr. / Mr. / Ms."
          />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">Work email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-abyss/60 px-4 py-3.5 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal"
            placeholder="you@hospital.com"
          />
        </label>
        <label className="block md:col-span-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">Organisation</span>
          <input
            name="organisation"
            autoComplete="organization"
            className="mt-2 w-full rounded-xl border border-[var(--line)] bg-abyss/60 px-4 py-3.5 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal"
            placeholder="Hospital / company name"
          />
        </label>
      </div>

      <div className="mt-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
          I&apos;m interested in
        </span>
        <div className="mt-3 flex flex-wrap gap-2">
          {interests.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setInterest(i)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                interest === i
                  ? "btn-primary"
                  : "chip text-ink-dim hover:text-ink"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      <label className="mt-6 block">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">Message</span>
        <textarea
          name="message"
          rows={4}
          required
          className="mt-2 w-full resize-y rounded-xl border border-[var(--line)] bg-abyss/60 px-4 py-3.5 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal"
          placeholder="Tell us about your initiative, timelines and scale…"
        />
      </label>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary rounded-full px-8 py-4 font-display font-semibold disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <p className="text-sm text-[#ff8b7d]">Something went wrong — please email us directly.</p>
        )}
      </div>
    </form>
  );
}

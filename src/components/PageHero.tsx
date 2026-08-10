import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function PageHero({
  kicker,
  title,
  lead,
  image,
}: {
  kicker: string;
  title: React.ReactNode;
  lead: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40 lg:pb-24 lg:pt-48">
      {image && (
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_center] opacity-60"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#030b12_0%,#030b12_30%,rgba(3,11,18,0.72)_52%,rgba(3,11,18,0.25)_72%,transparent_90%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-abyss to-transparent" />
        </div>
      )}
      <div className="halo absolute inset-0" />
      <div className="grid-lines absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-teal">{kicker}</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.06] tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-dim md:text-xl">{lead}</p>
        </Reveal>
      </div>
    </section>
  );
}

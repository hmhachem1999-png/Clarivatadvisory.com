import Image from "next/image";
import { brandStory, company } from "@/data/site";
import RevealText, { Reveal } from "./RevealText";

export default function BrandStory() {
  return (
    <section
      id="story"
      className="relative overflow-hidden scroll-mt-24 border-y border-white/10 bg-ink-soft px-6 py-24 md:px-10 md:py-40"
    >
      <div
        aria-hidden
        className="blob pointer-events-none absolute left-1/2 top-0 -z-10 h-[45vmax] w-[45vmax] -translate-x-1/2 -translate-y-1/3 opacity-10"
      />

      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <Image
            src="/clarivat-mark.png"
            alt={`${company.name} logo mark`}
            width={96}
            height={96}
            className="mx-auto h-20 w-20 md:h-24 md:w-24"
          />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">
            Our story
          </p>
        </Reveal>

        <RevealText
          as="h2"
          text={brandStory.lead}
          stagger={0.035}
          highlight={[5]}
          className="mx-auto mt-6 block max-w-4xl text-[clamp(1.7rem,4vw,3.25rem)] font-extrabold leading-[1.08] tracking-[-0.02em]"
        />

        <div className="mx-auto mt-10 max-w-2xl space-y-6 text-left md:text-center">
          {brandStory.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <p className="text-lg leading-relaxed text-paper/70">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-12 text-xl font-bold tracking-tight md:text-2xl">
            <span className="gradient-text">Clarity today.</span>{" "}
            Confidence tomorrow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import { brandStory, company } from "@/data/site";
import { Reveal } from "./RevealText";

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

      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <Image
            src="/clarivat-mark.png"
            alt={`${company.name} North Star logo mark`}
            width={96}
            height={96}
            className="mx-auto h-20 w-20 md:h-24 md:w-24"
          />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">
            Brand Story
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-3xl text-[clamp(1.5rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-[-0.02em]">
            {brandStory.story}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-10 text-xl font-bold tracking-tight md:text-2xl">
            <span className="gradient-text">Clarity today.</span>{" "}
            Confidence tomorrow.
          </p>
        </Reveal>
      </div>

      {/* The Mark */}
      <div className="mx-auto mt-20 max-w-4xl border-t border-white/10 pt-16">
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <Reveal className="flex justify-center">
            <Image
              src="/clarivat-mark.png"
              alt={`${company.name} logo mark detail`}
              width={160}
              height={160}
              className="h-28 w-28 md:h-40 md:w-40"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">
              The Mark
            </p>
            <p className="text-lg leading-relaxed text-paper/70">
              {brandStory.mark}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

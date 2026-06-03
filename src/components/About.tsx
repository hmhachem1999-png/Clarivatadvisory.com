import { company, stats } from "@/data/site";
import RevealText, { Reveal } from "./RevealText";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10 md:py-40"
    >
      <Reveal>
        <p className="mb-12 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">
          Who we are
        </p>
      </Reveal>

      <RevealText
        as="h2"
        text="We turn financial complexity into clear, confident decisions for businesses across the UAE."
        stagger={0.045}
        highlight={[3, 4]}
        className="block max-w-5xl text-[clamp(1.8rem,4.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.02em]"
      />

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-20">
        <Reveal delay={0.05}>
          <p className="text-lg leading-relaxed text-paper/70">
            {company.shortAbout}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-paper/70">
            From bookkeeping and corporate tax to business setup and PRO
            paperwork, we act as the financial backbone for founders who would
            rather build than chase compliance. One partner, every number
            accounted for.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.08}
            className="bg-ink-soft p-8 md:p-10"
          >
            <div className="gradient-text text-4xl font-extrabold tracking-tight md:text-5xl">
              {stat.value}
            </div>
            <div className="mt-3 text-sm text-paper/60">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

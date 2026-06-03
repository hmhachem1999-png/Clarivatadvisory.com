import RevealText, { Reveal } from "./RevealText";

export default function PageHeader({
  eyebrow,
  title,
  intro,
  highlight = [],
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  highlight?: number[];
}) {
  return (
    <header className="relative overflow-hidden px-6 pt-40 pb-12 md:px-10 md:pt-52 md:pb-20">
      <div
        aria-hidden
        className="blob pointer-events-none absolute -top-1/3 right-0 -z-10 h-[55vmax] w-[55vmax] opacity-20"
      />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">
            {eyebrow}
          </p>
        </Reveal>
        <RevealText
          as="h1"
          text={title}
          stagger={0.06}
          highlight={highlight}
          className="block max-w-5xl text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]"
        />
        {intro && (
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-lg text-paper/70">{intro}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}

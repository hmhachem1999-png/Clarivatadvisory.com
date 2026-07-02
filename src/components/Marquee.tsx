import { marqueeWords } from "@/data/site";

/**
 * Infinite horizontal strip. The track holds the word list twice and is
 * translated by -50%, so the loop is seamless.
 */
export default function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];

  return (
    <section
      aria-hidden
      className="border-y border-white/10 bg-ink-soft py-6 overflow-hidden"
    >
      <div className="marquee-track flex w-max items-center">
        {items.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 text-xl font-extrabold uppercase tracking-tight text-paper/80 md:text-3xl">
              {word}
            </span>
            <span className="gradient-text select-none text-lg md:text-2xl">
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}

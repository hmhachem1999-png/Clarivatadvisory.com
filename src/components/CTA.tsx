import { ArrowRight } from "lucide-react";
import RevealText, { Reveal } from "./RevealText";
import MagneticButton from "./MagneticButton";
import { company } from "@/data/site";

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:px-10 md:py-48">
      <div
        aria-hidden
        className="blob pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[55vmax] w-[55vmax] -translate-x-1/2 -translate-y-1/2 opacity-20"
      />

      <div className="mx-auto max-w-5xl text-center">
        <RevealText
          as="h2"
          text="Let's make your numbers clear."
          stagger={0.07}
          highlight={[3]}
          className="block text-[clamp(2.5rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.03em]"
        />

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-paper/70">
            Book a free consultation and we&apos;ll map exactly what your
            business needs to stay compliant and grow with confidence.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <MagneticButton href="/contact" strength={0.5}>
            <span className="group inline-flex items-center gap-3 rounded-full bg-paper px-9 py-5 text-base font-bold text-ink transition-colors">
              Get in touch
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 text-sm text-paper/50">
            Or call us directly —{" "}
            <a href={company.phoneHref} className="link-underline text-paper/80">
              {company.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

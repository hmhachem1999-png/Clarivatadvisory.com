"use client";

import { motion } from "framer-motion";
import { process } from "@/data/site";

export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 border-y border-white/10 bg-ink-soft px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          {/* Sticky heading column */}
          <div className="md:sticky md:top-32 md:h-fit">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">
              How we work
            </p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1] tracking-[-0.02em]">
              A calm, four-step path to clarity.
            </h2>
            <p className="mt-6 max-w-md text-paper/60">
              No jargon, no surprises. Just a clear process that keeps you
              compliant and informed at every stage.
            </p>
          </div>

          {/* Steps */}
          <ol className="mt-14 md:mt-0">
            {process.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-white/10 py-10 first:border-t-0 first:pt-0"
              >
                <div className="flex items-baseline gap-6">
                  <span className="gradient-text text-5xl font-extrabold tabular-nums md:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-paper/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

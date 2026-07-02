"use client";

import { motion } from "framer-motion";
import { process } from "@/data/site";

export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 px-6 py-24 md:px-10 md:py-40"
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

          {/* Timeline */}
          <ol className="mt-14 md:mt-0">
            {process.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12%" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-20 pb-14 last:pb-0 md:pl-24"
              >
                {/* connecting rail */}
                {i < process.length - 1 && (
                  <motion.span
                    aria-hidden
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-12%" }}
                    transition={{
                      duration: 0.9,
                      delay: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute bottom-0 left-[1.55rem] top-14 w-px origin-top bg-gradient-to-b from-teal/50 via-white/15 to-white/5 md:left-[1.8rem]"
                  />
                )}

                {/* node */}
                <motion.span
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-12%" }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-0 top-0 flex h-[3.1rem] w-[3.1rem] items-center justify-center rounded-full border border-teal/40 bg-ink-soft shadow-[0_0_24px_rgba(200,161,58,0.18)] md:h-[3.6rem] md:w-[3.6rem]"
                >
                  <span className="gradient-text text-lg font-extrabold tabular-nums md:text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.span>

                <h3 className="pt-2 text-2xl font-bold tracking-tight md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-md text-paper/60">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

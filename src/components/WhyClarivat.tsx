"use client";

import { motion } from "framer-motion";
import { whyClarivat } from "@/data/site";

export default function WhyClarivat() {
  return (
    <section
      id="why"
      className="border-y border-white/10 bg-ink-soft px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 md:mb-20">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">
            Why Clarivat
          </p>
          <h2 className="max-w-3xl text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1] tracking-[-0.02em]">
            A partner you can point north by.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyClarivat.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-3xl border border-white/10 bg-ink p-8 transition-colors duration-500 hover:border-cyan/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan">
                  <Icon className="h-[22px] w-[22px]" strokeWidth={1.25} />
                </span>
                <h3 className="mt-6 text-lg font-bold tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/55">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/*
          PLACEHOLDER — client / partner logos & testimonials.
          When real client permissions exist, replace this block with a logo
          strip or testimonial carousel. Intentionally left out of the UI so
          nothing is invented.
        */}
      </div>
    </section>
  );
}

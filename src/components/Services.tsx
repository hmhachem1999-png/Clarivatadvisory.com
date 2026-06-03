"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">
            What we do
          </p>
          <h2 className="max-w-2xl text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1] tracking-[-0.02em]">
            Eight ways we keep you clear.
          </h2>
        </div>
        <p className="max-w-sm text-paper/60">
          A full-service advisory bench — pick what you need today, scale into
          the rest as you grow.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden bg-ink-soft p-8 md:p-10"
            >
              {/* hover fill sweep */}
              <span className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-br from-teal to-cyan transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-semibold tabular-nums text-paper/40 transition-colors duration-300 group-hover:text-ink/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    className="h-7 w-7 text-cyan transition-colors duration-300 group-hover:text-ink"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-2xl font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-paper/60 transition-colors duration-300 group-hover:text-ink/80">
                  {service.description}
                </p>

                <ArrowUpRight
                  className="mt-8 h-6 w-6 text-paper/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink"
                  strokeWidth={1.5}
                />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

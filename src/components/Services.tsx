"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { serviceCategories, services, type Service } from "@/data/site";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative rounded-3xl border border-white/10 bg-ink-soft p-8 transition-all duration-500 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-[0_18px_50px_-18px_rgba(200,161,58,0.25)] md:p-9"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan transition-colors duration-500 group-hover:border-cyan/40">
          <Icon className="h-[22px] w-[22px]" strokeWidth={1.25} />
        </span>
        <span className="text-sm font-semibold tabular-nums text-paper/30">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h4 className="mt-6 text-xl font-bold leading-snug tracking-tight md:text-2xl">
        {service.title}
      </h4>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/60">
        {service.description}
      </p>

      {/* Learn more — expands on hover, toggles on tap/keyboard */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="border-t border-white/10 pt-4 mt-5 text-sm leading-relaxed text-paper/50">
          {service.details}
        </p>
      </motion.div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan/90 transition-colors hover:text-cyan"
      >
        {open ? "Show less" : "Learn more"}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
    </motion.article>
  );
}

export default function Services() {
  let counter = 0;

  return (
    <section
      id="services"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10 md:py-40"
    >
      <div className="hairline mb-16 md:mb-24" />

      <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
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

      <div className="space-y-16 md:space-y-20">
        {serviceCategories.map((cat) => {
          const items = services.filter((s) => s.category === cat.key);
          if (items.length === 0) return null;
          return (
            <div key={cat.key}>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8 flex flex-wrap items-baseline gap-x-5 gap-y-1"
              >
                <h3 className="text-lg font-bold tracking-tight text-paper md:text-xl">
                  <span className="gradient-text mr-3 select-none">✦</span>
                  {cat.label}
                </h3>
                <p className="text-sm text-paper/40">{cat.blurb}</p>
              </motion.div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service) => {
                  const i = counter++;
                  return (
                    <ServiceCard key={service.title} service={service} index={i} />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

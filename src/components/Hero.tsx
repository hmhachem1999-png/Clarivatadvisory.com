"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/site";
import MagneticButton from "./MagneticButton";

const line = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const wordMask = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const headline = ["Clarity", "for", "your", "business."];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-32 pb-20 md:px-10"
    >
      {/* animated gradient blob */}
      <div
        aria-hidden
        className="blob pointer-events-none absolute -top-1/4 left-1/2 -z-10 h-[70vmax] w-[70vmax] -translate-x-1/2 opacity-30"
      />
      {/* faint radial vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--color-ink)_100%)]"
      />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-paper/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          RAKEZ-licensed advisory · Ras Al Khaimah, UAE
        </motion.div>

        <motion.h1
          variants={line}
          initial="hidden"
          animate="visible"
          className="max-w-[14ch] text-[clamp(3rem,9vw,9rem)] font-extrabold leading-[0.92] tracking-[-0.03em]"
        >
          {headline.map((w, i) => (
            <span
              key={i}
              className="inline-flex overflow-hidden pb-[0.1em] -mb-[0.1em] pr-[0.18em]"
            >
              <motion.span
                variants={wordMask}
                className={`inline-block ${i === 0 ? "gradient-text" : ""}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 max-w-xl text-lg text-paper/70 md:text-xl"
        >
          {company.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/contact">
            <span className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-cyan px-7 py-3.5 text-sm font-semibold text-ink">
              Book a consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </MagneticButton>

          <Link
            href="/#services"
            className="link-underline px-2 py-3.5 text-sm font-semibold text-paper/80 hover:text-paper"
          >
            Explore our services
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-paper/40 md:flex"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-paper/40 to-transparent" />
      </motion.div>
    </section>
  );
}

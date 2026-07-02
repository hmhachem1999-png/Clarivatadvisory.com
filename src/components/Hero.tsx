"use client";

import Link from "next/link";
import Image from "next/image";
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

const headline = ["Clarity", "today.", "Confidence", "tomorrow."];

/** Fixed star positions (viewBox %) — static so SSR and client markup match. */
const STARS: Array<[number, number, number]> = [
  [8, 18, 0], [16, 66, 1.2], [27, 32, 2.4], [38, 76, 0.6], [52, 14, 1.8],
  [63, 58, 3], [74, 26, 0.9], [85, 70, 2.1], [92, 38, 1.5], [46, 46, 2.7],
  [70, 84, 0.3], [12, 88, 1.9], [58, 90, 2.2], [90, 12, 1.1],
];

/** Constellation line pairs (indices into STARS). */
const LINES: Array<[number, number]> = [
  [0, 2], [2, 4], [4, 8], [6, 8], [3, 5], [5, 7], [9, 5], [1, 11],
];

function Constellation() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {LINES.map(([a, b], i) => (
        <line
          key={i}
          x1={STARS[a][0]}
          y1={STARS[a][1]}
          x2={STARS[b][0]}
          y2={STARS[b][1]}
          stroke="rgba(200, 161, 58, 0.12)"
          strokeWidth="0.08"
        />
      ))}
      {STARS.map(([x, y, delay], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 0.34 : 0.22}
          fill="rgba(242, 205, 92, 0.9)"
          className="twinkle"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </svg>
  );
}

/** The 360° rotating North Star mark with a breathing glow. */
function RotatingMark({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div className="mark-glow absolute inset-[-12%] rounded-full" />
      <div className="spin-slow relative">
        <Image
          src="/clarivat-mark.png"
          alt=""
          width={520}
          height={520}
          priority
          loading="eager"
          className="h-full w-full select-none"
        />
      </div>
      {/* fine orbit ring for depth */}
      <div className="absolute inset-[-7%] rounded-full border border-white/5" />
      <div className="absolute inset-[-16%] rounded-full border border-white/[0.03]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-32 pb-20 md:px-10"
    >
      {/* animated gradient blob */}
      <div
        aria-hidden
        className="blob pointer-events-none absolute -top-1/4 left-1/2 -z-10 h-[70vmax] w-[70vmax] -translate-x-1/2 opacity-20"
      />
      <Constellation />
      {/* faint radial vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--color-ink)_100%)]"
      />

      {/* mobile: faint mark behind the headline */}
      <RotatingMark className="absolute right-[-18%] top-1/2 -z-10 w-[75vw] max-w-md -translate-y-1/2 opacity-[0.16] lg:hidden" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
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
            className="max-w-[12ch] text-[clamp(2.9rem,7.5vw,7rem)] font-extrabold leading-[0.96] tracking-[-0.03em]"
          >
            {headline.map((w, i) => (
              <span
                key={i}
                className="inline-flex overflow-hidden pb-[0.1em] -mb-[0.1em] pr-[0.18em]"
              >
                <motion.span
                  variants={wordMask}
                  className={`inline-block ${
                    i === 0 || i === 2 ? "gradient-text" : ""
                  }`}
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
              <span className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-cyan px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_28px_rgba(200,161,58,0.25)]">
                Book a free consultation
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

        {/* desktop: the rotating North Star, clear of the copy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden justify-center lg:flex"
        >
          <RotatingMark className="w-[26rem] max-w-full xl:w-[30rem]" />
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

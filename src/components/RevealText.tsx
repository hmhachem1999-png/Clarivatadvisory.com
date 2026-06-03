"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const container = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const word = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/**
 * Splits text into words that slide up from behind a mask. Use for big
 * statement headings. Animates on enter-viewport by default, or immediately
 * when `immediate` is set (e.g. the hero on load).
 */
export default function RevealText({
  text,
  className = "",
  as: Tag = "span",
  stagger = 0.08,
  immediate = false,
  highlight = [],
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  stagger?: number;
  immediate?: boolean;
  /** indices of words to render with the accent gradient */
  highlight?: number[];
}) {
  const words = text.split(" ");

  return (
    <motion.span
      variants={container}
      custom={stagger}
      initial="hidden"
      animate={immediate ? "visible" : undefined}
      whileInView={immediate ? undefined : "visible"}
      viewport={{ once: true, margin: "-10%" }}
      className={className}
    >
      {/* render the semantic tag as a wrapper for screen readers / SEO */}
      <Tag className="contents">
        {words.map((w, i) => (
          <span
            key={i}
            className="inline-flex overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
          >
            <motion.span
              variants={word}
              className={`inline-block ${
                highlight.includes(i) ? "gradient-text" : ""
              }`}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.span>
  );
}

/** Convenience wrapper: a child that fades + rises in on scroll. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

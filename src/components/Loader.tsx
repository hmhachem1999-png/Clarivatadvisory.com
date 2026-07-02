"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Brief branded loading veil: the North Star mark breathes in, then the veil
 * lifts. Capped at ~1.1s so it never gets in the way; skipped entirely for
 * prefers-reduced-motion. Content stays in the DOM throughout (SEO-safe).
 */
export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeOut" } }}
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="mark-glow absolute inset-[-30%] rounded-full" />
            <Image
              src="/clarivat-mark.png"
              alt=""
              width={110}
              height={110}
              priority
              loading="eager"
              className="relative h-24 w-24 md:h-28 md:w-28"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

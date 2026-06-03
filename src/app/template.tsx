"use client";

import { motion } from "framer-motion";

/**
 * A template re-mounts on every route change, so wrapping children here gives
 * us a tasteful fade/rise transition between pages.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

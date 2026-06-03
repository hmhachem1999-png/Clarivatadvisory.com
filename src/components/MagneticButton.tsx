"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
  type?: "button" | "submit";
  ariaLabel?: string;
};

/**
 * Button/link that is gently pulled toward the cursor on hover (the "magnetic"
 * effect). Falls back to a static element when reduced motion is preferred.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 0.35,
  type = "button",
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (typeof window !== "undefined") {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduced) return;
    }
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * strength, y: y * strength });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const inner = (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.4 }}
      className={`inline-flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className="inline-flex">
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-flex"
    >
      {inner}
    </button>
  );
}
